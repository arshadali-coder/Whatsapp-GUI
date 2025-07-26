class WhatsAppGroupUI {
    constructor() {
        this.chatMessages = document.getElementById('chatMessages');
        this.currentUser = 'You';
        this.init();
    }

    init() {
        // Load content organized by dates
        this.loadContentByDates();
        
        // Simulate real-time activity
        this.simulateRealTimeActivity();
    }

    // Function to format dates like WhatsApp
    formatDateHeader(date) {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        
        const inputDate = new Date(date);
        const inputDateOnly = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate());
        
        // Calculate difference in days
        const diffTime = today - inputDateOnly;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) {
            return "TODAY";
        } else if (diffDays === 1) {
            return "YESTERDAY";
        } else if (diffDays <= 7) {
            // Within a week - show day name
            return inputDate.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
        } else if (diffDays <= 365) {
            // Within a year - show date and month
            return inputDate.toLocaleDateString('en-US', { 
                day: 'numeric', 
                month: 'long' 
            }).toUpperCase();
        } else {
            // Older than a year - show full date
            return inputDate.toLocaleDateString('en-US', { 
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

    loadContentByDates() {
        // Create dates for demonstration
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        const threeDaysAgo = new Date(today);
        threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
        const oneWeekAgo = new Date(today);
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        const oneMonthAgo = new Date(today);
        oneMonthAgo.setDate(oneMonthAgo.getDate() - 30);

        // Organize content by actual dates
        const contentByDates = [
            {
                date: oneMonthAgo,
                content: [
                    {
                        type: 'settings',
                        message: 'Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them.'
                    },
                    {
                        type: 'message',
                        sender: 'Sarah',
                        message: 'Hey everyone! I created this family group 👨‍👩‍👧‍👦',
                        timestamp: '10:00 AM',
                        isCurrentUser: false
                    }
                ]
            },
            {
                date: oneWeekAgo,
                content: [
                    {
                        type: 'joined',
                        message: 'John joined using this group\'s invite link'
                    },
                    {
                        type: 'message',
                        sender: 'John',
                        message: 'Hey everyone! Great to be here! 👋',
                        timestamp: '9:15 AM',
                        isCurrentUser: false
                    },
                    {
                        type: 'message',
                        sender: 'Sarah',
                        message: 'Welcome John! 😊',
                        timestamp: '9:16 AM',
                        isCurrentUser: false
                    }
                ]
            },
            {
                date: threeDaysAgo,
                content: [
                    {
                        type: 'added',
                        message: 'Sarah added Mike'
                    },
                    {
                        type: 'message',
                        sender: 'Mike',
                        message: 'Thanks for adding me!',
                        timestamp: '10:30 AM',
                        isCurrentUser: false
                    },
                    {
                        type: 'message',
                        sender: 'You',
                        message: 'Mike! Good to see you here buddy',
                        timestamp: '10:32 AM',
                        isCurrentUser: true
                    },
                    {
                        type: 'admin',
                        message: 'You made John a group admin'
                    }
                ]
            },
            {
                date: yesterday,
                content: [
                    {
                        type: 'message',
                        sender: 'John',
                        message: 'Thanks for making me admin! I\'ll help manage the group 💪',
                        timestamp: '11:15 AM',
                        isCurrentUser: false
                    },
                    {
                        type: 'message',
                        sender: 'Sarah',
                        message: 'So what\'s the plan for this weekend?',
                        timestamp: '2:30 PM',
                        isCurrentUser: false
                    },
                    {
                        type: 'message',
                        sender: 'Mike',
                        message: 'I was thinking we could go to the beach! 🏖️',
                        timestamp: '2:32 PM',
                        isCurrentUser: false
                    },
                    {
                        type: 'message',
                        sender: 'You',
                        message: 'That sounds amazing! What time should we meet?',
                        timestamp: '2:35 PM',
                        isCurrentUser: true
                    },
                    {
                        type: 'left',
                        message: 'Alex left'
                    },
                    {
                        type: 'message',
                        sender: 'John',
                        message: 'Oh no, Alex left 😔 Did anyone talk to him?',
                        timestamp: '4:20 PM',
                        isCurrentUser: false
                    }
                ]
            },
            {
                date: today,
                content: [
                    {
                        type: 'joined',
                        message: 'Emma joined using this group\'s invite link'
                    },
                    {
                        type: 'message',
                        sender: 'Emma',
                        message: 'Hi everyone! Emma here 👋',
                        timestamp: '8:45 AM',
                        isCurrentUser: false
                    },
                    {
                        type: 'message',
                        sender: 'Sarah',
                        message: 'Hey Emma! Welcome to our crazy family group 😄',
                        timestamp: '8:46 AM',
                        isCurrentUser: false
                    },
                    {
                        type: 'message',
                        sender: 'You',
                        message: 'Welcome Emma! We were just planning a beach trip',
                        timestamp: '8:50 AM',
                        isCurrentUser: true
                    },
                    {
                        type: 'settings',
                        message: 'Group description changed by Sarah'
                    },
                    {
                        type: 'message',
                        sender: 'Mike',
                        message: 'I can bring snacks and drinks! 🥤🍕',
                        timestamp: '9:15 AM',
                        isCurrentUser: false
                    },
                    {
                        type: 'message',
                        sender: 'Emma',
                        message: 'I\'ll bring the music playlist 🎵',
                        timestamp: '9:45 AM',
                        isCurrentUser: false
                    },
                    {
                        type: 'message',
                        sender: 'John',
                        message: 'Perfect! I\'ll bring the volleyball 🏐',
                        timestamp: '10:20 AM',
                        isCurrentUser: false
                    }
                ]
            }
        ];

        // Load each date section immediately (no delays)
        contentByDates.forEach((dateSection) => {
            // Add date header with proper formatting
            const formattedDate = this.formatDateHeader(dateSection.date);
            this.addDateHeader(formattedDate);
            
            // Add content for this date immediately
            dateSection.content.forEach((item) => {
                if (item.type === 'message') {
                    this.addMessage(item);
                } else {
                    this.addNotification(item);
                }
            });
        });
        
        // Scroll to bottom after all content is loaded
        this.scrollToBottom();
    }

    addMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.className = `chat-message ${message.isCurrentUser ? 'sent' : 'received'}`;
        
        messageElement.innerHTML = `
            ${!message.isCurrentUser ? `<div class="sender-name">${message.sender}</div>` : ''}
            <div class="message-bubble">
                <div class="message-text">${message.message}</div>
                <div class="message-time">${message.timestamp}</div>
            </div>
        `;

        this.chatMessages.appendChild(messageElement);
    }

    addNotification(notification) {
        const notificationElement = document.createElement('div');
        notificationElement.className = `system-notification notification-${notification.type}`;
        
        notificationElement.innerHTML = `<div>${notification.message}</div>`;

        this.chatMessages.appendChild(notificationElement);
    }

    simulateRealTimeActivity() {
        const realTimeContent = [
            {
                type: 'joined',
                message: 'David joined using this group\'s invite link',
                delay: 5000
            },
            {
                type: 'message',
                sender: 'David',
                message: 'Hey guys! What did I miss?',
                delay: 6000,
                isCurrentUser: false
            },
            {
                type: 'added',
                message: 'John added Lisa',
                delay: 12000
            },
            {
                type: 'message',
                sender: 'Lisa',
                message: 'Thanks John! Excited to join the family group! ❤️',
                delay: 13000,
                isCurrentUser: false
            }
        ];

        realTimeContent.forEach(item => {
            setTimeout(() => {
                if (item.type === 'message') {
                    const currentTime = new Date();
                    const timeString = currentTime.toLocaleTimeString('en-US', { 
                        hour: 'numeric', 
                        minute: '2-digit',
                        hour12: true 
                    });
                    
                    this.addMessage({
                        ...item,
                        timestamp: timeString
                    });
                } else {
                    this.addNotification(item);
                }
                this.scrollToBottom();
            }, item.delay);
        });
    }

    scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
}

// Initialize the app (same as before)
document.addEventListener('DOMContentLoaded', function() {
    const whatsappUI = new WhatsAppGroupUI();
    
    function sendMessage() {
        const messageField = document.querySelector('.message-field');
        const messageText = messageField.value.trim();
        
        if (messageText) {
            const currentTime = new Date();
            const timeString = currentTime.toLocaleTimeString('en-US', { 
                hour: 'numeric', 
                minute: '2-digit',
                hour12: true 
            });
            
            whatsappUI.addMessage({
                sender: 'You',
                message: messageText,
                timestamp: timeString,
                isCurrentUser: true
            });
            whatsappUI.scrollToBottom();
            messageField.value = '';
        }
    }

    document.querySelector('.send-btn').addEventListener('click', sendMessage);
    document.querySelector('.message-field').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});
