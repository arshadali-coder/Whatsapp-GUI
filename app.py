from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import os
import zipfile
import re
from datetime import datetime
import tempfile
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend

# Configuration
app.config['MAX_CONTENT_LENGTH'] = 50 * 1024 * 1024  # 50MB max file size
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

class WhatsAppParser:
    def __init__(self):
        self.current_user_patterns = [
            r'You:',
            r'You changed',
            r'You added',
            r'You removed',
            r'You left',
            r'You were added',
            r'You made .+ a group admin',
        ]
    
    def parse_whatsapp_export(self, file_path):
        """Parse WhatsApp export file and return structured data"""
        try:
            if file_path.endswith('.zip'):
                return self.parse_zip_file(file_path)
            else:
                return self.parse_txt_file(file_path)
        except Exception as e:
            raise Exception(f"Error parsing WhatsApp export: {str(e)}")
    
    def parse_zip_file(self, zip_path):
        """Extract and parse WhatsApp export from zip file"""
        with tempfile.TemporaryDirectory() as temp_dir:
            with zipfile.ZipFile(zip_path, 'r') as zip_ref:
                zip_ref.extractall(temp_dir)
                
                # Find the chat txt file
                txt_files = [f for f in os.listdir(temp_dir) if f.endswith('.txt')]
                if not txt_files:
                    raise Exception("No chat file found in zip")
                
                chat_file = os.path.join(temp_dir, txt_files[0])
                return self.parse_txt_file(chat_file)
    
    def parse_txt_file(self, txt_path):
        """Parse WhatsApp chat txt file"""
        with open(txt_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        lines = content.split('\n')
        messages_by_date = {}
        participants = set()
        chat_name = "WhatsApp Chat"
        
        # Detect chat name from first few lines
        for line in lines[:10]:
            if "Messages and calls are end-to-end encrypted" in line:
                continue
            if " - " in line and not self.is_message_line(line):
                # Possible group name or chat info
                continue
        
        for line in lines:
            if not line.strip():
                continue
                
            parsed = self.parse_message_line(line)
            if parsed:
                date_str = parsed['date']
                if date_str not in messages_by_date:
                    messages_by_date[date_str] = []
                
                messages_by_date[date_str].append(parsed['data'])
                
                if parsed['data']['type'] == 'message':
                    participants.add(parsed['data']['sender'])
        
        # Detect chat type and name
        participants_list = list(participants)
        if len(participants_list) > 2:
            chat_name = "Group Chat"
        
        return {
            "chatName": chat_name,
            "chatType": "group" if len(participants_list) > 2 else "individual",
            "participants": participants_list,
            "messagesByDate": messages_by_date
        }
    
    def is_message_line(self, line):
        """Check if line contains a timestamped message"""
        # WhatsApp format: [DD/MM/YYYY, HH:MM:SS] or [M/D/YY, H:MM:SS AM/PM]
        timestamp_patterns = [
            r'^\[\d{1,2}/\d{1,2}/\d{2,4},\s\d{1,2}:\d{2}:\d{2}\]',
            r'^\d{1,2}/\d{1,2}/\d{2,4},\s\d{1,2}:\d{2}\s-',
            r'^\[\d{1,2}/\d{1,2}/\d{2,4},\s\d{1,2}:\d{2}:\d{2}\s[AP]M\]'
        ]
        
        for pattern in timestamp_patterns:
            if re.match(pattern, line):
                return True
        return False
    
    def parse_message_line(self, line):
        """Parse individual message line"""
        # Different WhatsApp export formats
        patterns = [
            r'^\[(\d{1,2}/\d{1,2}/\d{2,4}),\s(\d{1,2}:\d{2}:\d{2})\]\s(.+)',
            r'^(\d{1,2}/\d{1,2}/\d{2,4}),\s(\d{1,2}:\d{2})\s-\s(.+)',
            r'^\[(\d{1,2}/\d{1,2}/\d{2,4}),\s(\d{1,2}:\d{2}:\d{2}\s[AP]M)\]\s(.+)'
        ]
        
        for pattern in patterns:
            match = re.match(pattern, line)
            if match:
                date_str = match.group(1)
                time_str = match.group(2)
                content = match.group(3)
                
                # Convert date to standard format
                date_obj = self.parse_date(date_str)
                formatted_date = date_obj.strftime('%Y-%m-%d')
                formatted_time = self.format_time(time_str)
                
                # Parse message content
                message_data = self.parse_message_content(content, formatted_time)
                
                return {
                    'date': formatted_date,
                    'data': message_data
                }
        
        return None
    
    def parse_date(self, date_str):
        """Parse date string to datetime object"""
        formats = ['%d/%m/%Y', '%m/%d/%y', '%d/%m/%y', '%m/%d/%Y']
        
        for fmt in formats:
            try:
                return datetime.strptime(date_str, fmt)
            except ValueError:
                continue
        
        # Default fallback
        return datetime.now()
    
    def format_time(self, time_str):
        """Format time string to readable format"""
        try:
            if 'AM' in time_str or 'PM' in time_str:
                return time_str
            else:
                # Convert 24h to 12h format
                time_obj = datetime.strptime(time_str, '%H:%M:%S')
                return time_obj.strftime('%I:%M %p')
        except:
            return time_str
    
    def parse_message_content(self, content, timestamp):
        """Parse message content to determine type and sender"""
        # System notifications
        if "joined using this group's invite link" in content:
            return {
                'type': 'joined',
                'message': content
            }
        
        if " left" in content and not ":" in content:
            return {
                'type': 'left',
                'message': content
            }
        
        if " added " in content and not ":" in content:
            return {
                'type': 'added',
                'message': content
            }
        
        if "group admin" in content and not ":" in content:
            return {
                'type': 'admin',
                'message': content
            }
        
        if "end-to-end encrypted" in content:
            return {
                'type': 'settings',
                'message': content
            }
        
        if "changed the group description" in content or "changed the subject" in content:
            return {
                'type': 'settings',
                'message': content
            }
        
        # Regular message
        if ": " in content:
            sender, message = content.split(": ", 1)
            is_current_user = any(re.search(pattern, content) for pattern in self.current_user_patterns)
            
            return {
                'type': 'message',
                'sender': sender,
                'message': message,
                'timestamp': timestamp,
                'isCurrentUser': is_current_user or sender == 'You'
            }
        
        # Default to system notification
        return {
            'type': 'settings',
            'message': content
        }

@app.route('/upload-whatsapp', methods=['POST'])
def upload_whatsapp():
    try:
        # Check if file was uploaded
        if 'whatsapp_export' not in request.files:
            return jsonify({'error': 'No file uploaded'}), 400
        
        file = request.files['whatsapp_export']
        if file.filename == '':
            return jsonify({'error': 'No file selected'}), 400
        
        # Validate file type
        allowed_extensions = {'.txt', '.zip'}
        file_ext = os.path.splitext(file.filename)[1].lower()
        
        if file_ext not in allowed_extensions:
            return jsonify({'error': 'Invalid file type. Please upload .txt or .zip file'}), 400
        
        # Save uploaded file
        filename = secure_filename(file.filename)
        file_path = os.path.join(UPLOAD_FOLDER, filename)
        file.save(file_path)
        
        try:
            # Parse WhatsApp export
            parser = WhatsAppParser()
            chat_data = parser.parse_whatsapp_export(file_path)
            
            # Clean up uploaded file
            os.remove(file_path)
            
            # Return as array (this is why you're getting extra brackets)
            return jsonify([chat_data])  # Remove brackets if you want just the object
            
        except Exception as parse_error:
            # Clean up file on parse error
            if os.path.exists(file_path):
                os.remove(file_path)
            return jsonify({'error': f'Error parsing file: {str(parse_error)}'}), 400
            
    except Exception as e:
        return jsonify({'error': f'Server error: {str(e)}'}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'message': 'WhatsApp Chat Viewer API is running'})

@app.route('/', methods=['GET'])
def index():
    return render_template("index.html")

@app.route('/chat')
def chat():
    return render_template("chat.html")

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
