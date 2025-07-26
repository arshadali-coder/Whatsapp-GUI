class WhatsAppChatViewer {
    constructor() {
        this.chatMessages = document.getElementById('chatMessages');
        this.groupName = document.getElementById('groupName');
        this.groupStatus = document.getElementById('groupStatus');
        this.currentUser = 'You';
        this.init();
    }

    init() {
        // Load chat data from sessionStorage
        const chatData = this.loadChatData();
        if (!chatData) {
            this.showError('No chat data found. Please upload a WhatsApp export file.');
            return;
        }

        this.displayChat(chatData);
    }

    loadChatData() {
        const data = sessionStorage.getItem('whatsappChatData');
        if (!data) {
            return null;
        }
        
        try {
            let parsedData = JSON.parse(data);
            
            // Handle array wrapper from backend
            if (Array.isArray(parsedData)) {
                parsedData = parsedData[0]; // Get the first element
            }
            
            return parsedData;
        } catch (error) {
            console.error('Error parsing chat data:', error);
            return null;
        }
    }

    displayChat(chatData) {
        // Update header info
        this.groupName.textContent = chatData.chatName || 'WhatsApp Chat';
        this.groupStatus.textContent = this.formatParticipants(chatData.participants);

        // Clear loading message
        this.chatMessages.innerHTML = '';

        // Display messages grouped by date
        this.displayMessagesByDate(chatData.messagesByDate);
    }

    formatParticipants(participants) {
        if (!participants || participants.length === 0) {
            return 'No participants';
        }
        
        if (participants.length <= 3) {
            return participants.join(', ');
        }
        
        return `${participants.slice(0, 2).join(', ')}, +${participants.length - 2} more`;
    }

    displayMessagesByDate(messagesByDate) {
        Object.keys(messagesByDate).forEach(date => {
            // Add date header
            this.addDateHeader(this.formatDateHeader(new Date(date)));
            
            // Add messages for this date
            messagesByDate[date].forEach(item => {
                if (item.type === 'message') {
                    this.addMessage(item);
                } else {
                    this.addNotification(item);
                }
            });
        });
        
        this.scrollToBottom();
    }

    formatDateHeader(date) {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        
        const inputDateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        
        const diffTime = today - inputDateOnly;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) {
            return "TODAY";
        } else if (diffDays === 1) {
            return "YESTERDAY";
        } else if (diffDays <= 7) {
            return date.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
        } else if (diffDays <= 365) {
            return date.toLocaleDateString('en-US', { 
                day: 'numeric', 
                month: 'long' 
            }).toUpperCase();
        } else {
            return date.toLocaleDateString('en-US', { 
                day: 'numeric', 
                month: 'long',
                year: 'numeric'
            }).toUpperCase();
        }
    }

    addDateHeader(dateText) {
        const dateHeader = document.createElement('div');
        dateHeader.className = 'date-header';
        dateHeader.textContent = dateText;
        this.chatMessages.appendChild(dateHeader);
    }

    addMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.className = `chat-message ${message.isCurrentUser ? 'sent' : 'received'}`;
        
        messageElement.innerHTML = `
            ${!message.isCurrentUser ? `<div class="sender-name">${message.sender}</div>` : ''}
            <div class="message-bubble">
                <div class="message-text">${this.escapeHtml(message.message)}</div>
                <div class="message-time">${message.timestamp}</div>
            </div>
        `;

        this.chatMessages.appendChild(messageElement);
    }

    addNotification(notification) {
        const notificationElement = document.createElement('div');
        notificationElement.className = `system-notification notification-${notification.type}`;
        
        notificationElement.innerHTML = `<div>${this.escapeHtml(notification.message)}</div>`;

        this.chatMessages.appendChild(notificationElement);
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    showError(message) {
        this.chatMessages.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #667781;">
                <h3>Error</h3>
                <p>${message}</p>
                <button onclick="goBack()" style="margin-top: 20px; padding: 10px 20px; background: #25d366; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Go Back
                </button>
            </div>
        `;
    }

    scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
}

function goBack() {
    window.location.href = 'index.html';
}

// Initialize the chat viewer
document.addEventListener('DOMContentLoaded', function() {
    new WhatsAppChatViewer();
});