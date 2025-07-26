import re
import json
from datetime import datetime
from collections import defaultdict

# Load and read the WhatsApp chat file
with open('chat.txt', 'r', encoding='utf-8') as file:
    lines = file.readlines()

chat_data = defaultdict(list)

# Pattern to match message lines: Date, Time, Sender: Message
pattern = re.compile(r'^(\d{2}/\d{2}/\d{4}), (\d{1,2}:\d{2})\s?(am|pm) - (.+)$', re.IGNORECASE)

for line in lines:
    match = pattern.match(line.strip())
    if not match:
        continue  # skip lines that don’t match message format

    date_str, time_str, meridian, message_body = match.groups()
    date_iso = datetime.strptime(date_str, '%d/%m/%Y').strftime('%Y-%m-%d')
    timestamp = f"{time_str} {meridian.upper()}"

    # Process message content
    if "joined using this group's invite link" in message_body:
        content_item = {
            "type": "joined",
            "message": message_body
        }
    elif "Messages and calls are end-to-end encrypted" in message_body or "created group" in message_body:
        content_item = {
            "type": "settings",
            "message": message_body
        }
    elif "added" in message_body:
        content_item = {
            "type": "added",
            "message": message_body
        }
    elif ": " in message_body:
        sender, message = message_body.split(": ", 1)
        content_item = {
            "type": "message",
            "sender": sender,
            "message": message,
            "timestamp": timestamp,
            "isCurrentUser": (sender.lower() == 'you')
        }
    else:
        continue  # optional: handle deleted/media/system messages here

    chat_data[date_iso].append(content_item)

# Format as list of daily chat objects
final_output = [{"date": date, "content": content} for date, content in chat_data.items()]

# Save to a JSON file
with open('structured_chat.json', 'w', encoding='utf-8') as f:
    json.dump(final_output, f, indent=4, ensure_ascii=False)

print("✅ WhatsApp chat parsed and saved to structured_chat.json")
