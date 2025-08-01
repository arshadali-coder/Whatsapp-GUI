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
        "date": "2025-07-25",
        "content": [
            {
                "type": "settings",
                "message": "Messages and calls are end-to-end encrypted. Only people in this chat can read, listen to, or share them. Learn more."
            },
            {
                "type": "joined",
                "message": "You joined using this group's invite link"
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "JMI is better option",
                "timestamp": "5:50 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Yea mere hisaab se bhi",
                "timestamp": "5:50 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Tere ko kaise maaloom kya baat hri",
                "timestamp": "5:50 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Chal jaata hai pata, Talent h",
                "timestamp": "5:50 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Tu toh abhi aaya",
                "timestamp": "5:50 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "☺️",
                "timestamp": "5:50 PM",
                "isCurrentUser": false
            },
            {
                "type": "added",
                "message": "~ 🥳 added ~ Priya Rai"
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Maine iet choice filling me daala to hai but most probably lunga nahi (lko ka hu, college bahar lena hai)",
                "timestamp": "5:51 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "sab lko se hi hai kya😭",
                "timestamp": "5:52 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Kon kon hai lko se",
                "timestamp": "5:52 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "same with I would’ve picked IET magar lko mei aur nahi rehna",
                "timestamp": "5:52 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "poorey jee prep time socha tha iske baad ghar se bahar niklunga and all",
                "timestamp": "5:52 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Bhai delhi aaja, city achi hai kafi",
                "timestamp": "5:52 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78601 88444",
                "message": "Humbi sirf iet lko ki cse hi daal rahe choice filling me....dekhte hai milta hai ki ni🤷🏼‍♀️",
                "timestamp": "5:52 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74794 16301",
                "message": "same",
                "timestamp": "5:52 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Yes",
                "timestamp": "5:53 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Humko lagta hai JMI jyada better place h",
                "timestamp": "5:53 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Arre delhi bohot Ghuma hoon Qutab Minar chodh ke poora delhi Ghuma hua hai bachpan se",
                "timestamp": "5:53 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Maine LU bhi daaldiya cuz iet akele Acha nahi lag raha tha <This message was edited>",
                "timestamp": "5:53 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Fir bhi bhai Delhi Lucknow se kafi Betterr hai",
                "timestamp": "5:53 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Fr",
                "timestamp": "5:54 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Yea delhi has more opportunities than lko",
                "timestamp": "5:54 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Traffic hata do to delhi bohot better hai",
                "timestamp": "5:54 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Hm noida and gurugram advantage",
                "timestamp": "5:54 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Yea",
                "timestamp": "5:54 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "tumhe kya branch mili hai?",
                "timestamp": "5:55 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "sf ya regular?",
                "timestamp": "5:55 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78601 88444",
                "message": "Wohi parents phouch rahe the ki agar jmi or iet same hi placement or opportunity ke maamle me then phir duur kyu jaana.... isiliye i was confused 🤷🏼‍♀️",
                "timestamp": "5:55 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 97190 75855",
                "message": "Yup , acche colleges in and around hone ki vajeh se companies bhi aati.",
                "timestamp": "5:55 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "mujhe regular mil jaati but i thought sf mei kuch extra padhinge zyada likha tha usme toh😔😭",
                "timestamp": "5:55 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Sf",
                "timestamp": "5:55 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Sameeeeee",
                "timestamp": "5:55 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Ha ladki hi toh parents bolte hai Ghar ke pass rhne ko",
                "timestamp": "5:56 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Lko se ho??",
                "timestamp": "5:56 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78601 88444",
                "message": "Yes",
                "timestamp": "5:56 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Delhi has way more opportunities",
                "timestamp": "5:56 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Lko me kuch nahi hai for tech at the very least",
                "timestamp": "5:57 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Mhmm anyways delhi ain't that far",
                "timestamp": "5:57 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "haa literal kuchni hota",
                "timestamp": "5:57 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "By road 5hrs lagte",
                "timestamp": "5:57 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Yes",
                "timestamp": "5:57 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Koi community nahi kuch nahi hai",
                "timestamp": "5:58 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "haa",
                "timestamp": "5:58 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74085 36077",
                "message": "Follow this link to join my WhatsApp group: https://chat.whatsapp.com/EaZAiOka2Ys47rmrx6mtvF?mode=r_t",
                "timestamp": "5:58 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74085 36077",
                "message": "All girls please join this discussion group for much needed conversation and doubts",
                "timestamp": "5:59 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74085 36077",
                "message": "Males are prohibited 🚫  I request only girls to join",
                "timestamp": "5:59 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Dusra link banalo",
                "timestamp": "6:00 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Ye expire hogyi",
                "timestamp": "6:00 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74085 36077",
                "message": "Follow this link to join my WhatsApp group: https://chat.whatsapp.com/JnZZKnTRxUz9H3xJVZ2XHl?mode=r_t",
                "timestamp": "6:01 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74085 36077",
                "message": "All girls please join this discussion group for much needed conversation and doubts",
                "timestamp": "6:01 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74085 36077",
                "message": "Males are prohibited 🚫  I request only girls to join",
                "timestamp": "6:01 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74085 36077",
                "message": "Follow this link to join my WhatsApp group: https://chat.whatsapp.com/JnZZKnTRxUz9H3xJVZ2XHl?mode=r_t",
                "timestamp": "6:01 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Bhai check kar raha tha",
                "timestamp": "6:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Dusri link to join bhi kar li hogi ab tk",
                "timestamp": "6:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Just trying to help in technical matters",
                "timestamp": "6:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Yahaan bhi cut-off paar nhi hua 😭",
                "timestamp": "6:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74794 16301",
                "message": "tech team ko bulao",
                "timestamp": "6:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Women quota yha bhi lag rha",
                "timestamp": "6:03 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74794 16301",
                "message": "😂",
                "timestamp": "6:03 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 97190 75855",
                "message": "IMG-20250725-WA0082.jpg (file attached)",
                "timestamp": "6:03 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Bhai at least hum log group banate hain to join karne ka option sabko rahata hai but disclaimer hota hai ki Apne risk per join karo Ham prohibit nahin karte kisi ko bhi",
                "timestamp": "6:04 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Ham ladke hai janab hamare saath aisa hi hota h",
                "timestamp": "6:04 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Not reservation",
                "timestamp": "6:05 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74085 36077",
                "message": "It's prohibited since it's not risky to join",
                "timestamp": "6:05 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Yeah, By the way Good Initiative 😌",
                "timestamp": "6:06 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "This message was deleted",
                "timestamp": "6:06 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 81125 26883",
                "message": "🤣🤣🤣🤣🤣🤣",
                "timestamp": "6:07 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 81125 26883",
                "message": "This message was deleted",
                "timestamp": "6:08 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 87551 87688",
                "message": "https://chat.whatsapp.com/FFaxRyS14u2LBnJW6aTJPb?mode=r_t",
                "timestamp": "6:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "YouTube delete hota hai ??",
                "timestamp": "6:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 81125 26883",
                "message": "This message was deleted",
                "timestamp": "6:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 98713 69595",
                "message": "This message was deleted",
                "timestamp": "6:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 81125 26883",
                "message": "This message was deleted",
                "timestamp": "6:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 81125 26883",
                "message": "This message was deleted",
                "timestamp": "6:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Yah freshers ka group hai",
                "timestamp": "6:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 87551 87688",
                "message": "Dono h isme juniors aur seniors",
                "timestamp": "6:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Gender bhar diya n apna",
                "timestamp": "6:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "iyh batao phle",
                "timestamp": "6:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 87551 87688",
                "message": "Tumne bhardiya?",
                "timestamp": "6:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Doubt toh tujhe tha n",
                "timestamp": "6:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 87551 87688",
                "message": "Mujhe fill up mei tha aur tujhe gender mei",
                "timestamp": "6:12 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 87551 87688",
                "message": "🤣",
                "timestamp": "6:12 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Fill up 💀💀",
                "timestamp": "6:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "tamiz se baat  kiya kro",
                "timestamp": "6:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": ".",
                "timestamp": "6:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 87551 87688",
                "message": "Mei toh tamiz se hi krta hu tum hi shuruaat karte ho ab bhi isne kari",
                "timestamp": "6:15 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 87551 87688",
                "message": ".",
                "timestamp": "6:15 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Maine suru kiya tha",
                "timestamp": "6:16 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 87551 87688",
                "message": "Tu wapas padh smjha maine arshad ko bhii bola",
                "timestamp": "6:18 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "This message was deleted",
                "timestamp": "6:18 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 87551 87688",
                "message": "This message was deleted",
                "timestamp": "6:19 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Tu mil college me",
                "timestamp": "6:19 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 87551 87688",
                "message": "👍👍",
                "timestamp": "6:19 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "IMG-20250725-WA0084.jpg (file attached)",
                "timestamp": "6:19 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Kya be ladte rehte ho",
                "timestamp": "6:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "Aktu se door rho bhai kitna rote hai sab",
                "timestamp": "6:22 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "Aktu wale",
                "timestamp": "6:22 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Aktu wale sach me rote hain hamesha",
                "timestamp": "6:23 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "Unki degree tk late me aati hai",
                "timestamp": "6:23 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "🤣🤣🤣",
                "timestamp": "6:23 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Convocation bhi nhi hota",
                "timestamp": "6:24 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "Wahi isilie mai sirf hbtu hi bhara tha",
                "timestamp": "6:24 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Guys tum mein se kisine BITSAT nahi diya tha kya?",
                "timestamp": "6:24 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Hbtu toh acha hai kafi",
                "timestamp": "6:24 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78601 88444",
                "message": "I also filled it...R1 me core chemical mila",
                "timestamp": "6:24 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "Nahi hai",
                "timestamp": "6:25 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "Sirf chemical acha hai waha ke",
                "timestamp": "6:25 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "40l nhi the kharch krne ko",
                "timestamp": "6:25 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "Jmi ke similar hi h",
                "timestamp": "6:25 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "Haa",
                "timestamp": "6:25 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Par worth it hai kaafi",
                "timestamp": "6:25 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Mera toh pura plan BITS ka tha",
                "timestamp": "6:25 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "Bhai pilani IIT ke lebel ka hai",
                "timestamp": "6:25 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Par exam se 2 din pehle typhoid",
                "timestamp": "6:25 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "Is saal ka placement dekha?",
                "timestamp": "6:25 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Aur fir 14 injections",
                "timestamp": "6:26 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Haan",
                "timestamp": "6:26 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Bhai tagda hai Pilani",
                "timestamp": "6:26 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "Muje R3 me electrical mili thi lekin fir bahar agya counseling se",
                "timestamp": "6:26 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Mujhe r3 me eni mili thi hyderabad me",
                "timestamp": "6:26 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "Old IIT ke comparison ka hai alumni network bhi bhot tagda h",
                "timestamp": "6:26 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78601 88444",
                "message": "Brother, regret mat karao...🫠",
                "timestamp": "6:26 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "Acha mtlb 9 avg package hai",
                "timestamp": "6:27 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Kahaan Bits?",
                "timestamp": "6:27 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Lia kyun nahi fir",
                "timestamp": "6:27 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "Jana chaiyeh tha bhaj",
                "timestamp": "6:27 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "Branch bhi shi h",
                "timestamp": "6:27 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Mann nahi tha tbh",
                "timestamp": "6:27 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Man🫠",
                "timestamp": "6:27 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "Bhai kya bolu tuje",
                "timestamp": "6:28 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Bohot paise lagjaate dude",
                "timestamp": "6:28 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Abe bhai",
                "timestamp": "6:28 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Khair your choice",
                "timestamp": "6:28 PM",
                "isCurrentUser": false
            },
            {
                "type": "joined",
                "message": "+91 86512 74965 joined using this group's invite link"
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "40 45 lakhs btech ke liye",
                "timestamp": "6:29 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Itne nahi hai",
                "timestamp": "6:31 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Btech ka 4 saal ka course hai",
                "timestamp": "6:31 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Usme 28 ke around lgte hain",
                "timestamp": "6:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Rehna ghumna",
                "timestamp": "6:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Travel",
                "timestamp": "6:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Bohot factors the tabhi chodha",
                "timestamp": "6:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Discuss karne ka Mann nahi",
                "timestamp": "6:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Hm",
                "timestamp": "6:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "PTT-20250725-WA0085.opus (file attached)",
                "timestamp": "6:33 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "Fees 20 lakh hai",
                "timestamp": "6:33 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 86512 74965",
                "message": "Hii",
                "timestamp": "6:34 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Phir bhi bht jyada hai",
                "timestamp": "6:34 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "Hmm",
                "timestamp": "6:36 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "Islie sab log nhi ja pate",
                "timestamp": "6:36 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Hiiii",
                "timestamp": "6:47 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Adb se ho jata hai",
                "timestamp": "6:47 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Which Branch acc to third list ?",
                "timestamp": "6:47 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Krna kyu haii",
                "timestamp": "6:48 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 86512 74965",
                "message": "CSDS",
                "timestamp": "6:48 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Tumne to hi pucha",
                "timestamp": "6:49 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Shukriya aapne meri knowledge me izaafa kr diya",
                "timestamp": "6:50 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Are ye to Mera farz tha",
                "timestamp": "6:50 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Kya me hi manglu bacha hu jise cse nahi mili",
                "timestamp": "6:51 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "😂😂😂",
                "timestamp": "6:51 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Hh bhai tu hi hai",
                "timestamp": "6:52 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 86512 74965",
                "message": "Uske padhna padta hai",
                "timestamp": "6:55 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "This message was deleted",
                "timestamp": "6:56 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "...kuch bol bhai",
                "timestamp": "6:56 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Has everyone who registered for the Student Email ID, got those??",
                "timestamp": "6:58 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Yes,",
                "timestamp": "6:59 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "don’t know about everyone but i didn’t got",
                "timestamp": "6:59 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "registered for it 5-6 days ago",
                "timestamp": "6:59 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Same here",
                "timestamp": "6:59 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "I even went to CIT",
                "timestamp": "6:59 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "They did the verification in front of me, and said it'll be mailed in about 2 days, it's 5 days now...",
                "timestamp": "7:00 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "what verification?",
                "timestamp": "7:00 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Jo Working Email ID tumne daali hogi",
                "timestamp": "7:00 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Uska koi verification krte hain",
                "timestamp": "7:00 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "how did you got it?",
                "timestamp": "7:00 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Waise normally uske liye bhi mail aata hai",
                "timestamp": "7:00 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "you received a mail? <This message was edited>",
                "timestamp": "7:01 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "But mere paas nhi aaya tha",
                "timestamp": "7:01 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "So I went to the campus to CIT",
                "timestamp": "7:01 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "And got it done there...",
                "timestamp": "7:01 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "mene register kara tha on website and kal parso tak underprocess bata raha tha",
                "timestamp": "7:01 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Normally registered from jmi web",
                "timestamp": "7:01 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "abhi check karne ke liye khola toh it shows closed but i didn’t received any mail",
                "timestamp": "7:01 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "what is it? is it in some manner like yourname@jmi.in or something?",
                "timestamp": "7:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Yes",
                "timestamp": "7:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 72678 86354",
                "message": "What kinda email is he asking for?",
                "timestamp": "7:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "It means tumhara verification ho chuka hai, ab ID mail hona baaki hai",
                "timestamp": "7:03 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Student Email ID bhai",
                "timestamp": "7:03 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "IMG-20250725-WA0087.jpg (file attached)",
                "timestamp": "7:04 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74794 16301",
                "message": "Mujhe main ka nahi aaya",
                "timestamp": "7:05 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74794 16301",
                "message": "Username aur password diya hai",
                "timestamp": "7:05 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Tumne apply Kara tha??",
                "timestamp": "7:05 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Wo bhi aaya hoga check kro aache",
                "timestamp": "7:05 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Ek website hai waise jispe Student Email ID se Kuchh brands pr discount mil jaayega....",
                "timestamp": "7:05 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74794 16301",
                "message": "Nahi hai bhai",
                "timestamp": "7:05 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "myunidays.com",
                "timestamp": "7:05 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Isspr coupon generate krwake mil jaata hai",
                "timestamp": "7:06 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Apple ke pdt pe",
                "timestamp": "7:06 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Hn mujhe bhi aya tha ye mail",
                "timestamp": "7:06 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "VIRAT Bhai Jamia instagram Reddit",
                "message": "Bhai Hostel Form Submit karte Time kya kya Documents dene hai ( For Boys )",
                "timestamp": "7:08 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 72678 86354",
                "message": "This message was deleted",
                "timestamp": "7:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74794 16301",
                "message": "Haan dono ke liye",
                "timestamp": "7:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74794 16301",
                "message": "IMG-20250725-WA0089.jpg (file attached)",
                "timestamp": "7:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74794 16301",
                "message": "Institutional email/internet account",
                "timestamp": "7:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 72678 86354",
                "message": "IMG-20250725-WA0090.jpg (file attached)",
                "timestamp": "7:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74794 16301",
                "message": "Lekin sirf ye aaya",
                "timestamp": "7:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "IMG-20250725-WA0091.jpg (file attached)",
                "timestamp": "7:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74794 16301",
                "message": "Koi procedure karna hoga kya mujhe",
                "timestamp": "7:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Mereko kuch nahi aaya in regards to id and all",
                "timestamp": "7:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 91553 89964",
                "message": "Did not receive any such email",
                "timestamp": "7:31 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 88814 58243",
                "message": "next list kab tak aayegi?",
                "timestamp": "7:34 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Apply kiye v ho ki nai ?",
                "timestamp": "7:35 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Bhai pehle 3rd list ko ho jane do <This message was edited>",
                "timestamp": "7:35 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "2 din meh aa jayega apply karne ke baad",
                "timestamp": "7:35 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 91553 89964",
                "message": "nope, my jamia pr krna hai?",
                "timestamp": "7:35 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Wahi pe hoga internet krke",
                "timestamp": "7:36 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Apple music 60 meh mil jayega student id seh",
                "timestamp": "7:36 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Han",
                "timestamp": "7:36 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Wahan option h",
                "timestamp": "7:36 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Student mail apply ka",
                "timestamp": "7:36 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Amd wifi meh whitelist karne ka",
                "timestamp": "7:36 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Maine kara tha usme but mail aaya nahi",
                "timestamp": "7:36 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Ek hafta hogaya",
                "timestamp": "7:36 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Firse karo",
                "timestamp": "7:36 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Jo mail daaloge udhar hi aayega",
                "timestamp": "7:37 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Nahi karne delhi raha",
                "timestamp": "7:37 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Office Jana yar fir",
                "timestamp": "7:37 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Haan obviously but aaya nahi",
                "timestamp": "7:37 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Wahi karunga",
                "timestamp": "7:37 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Abe ye tumko nahi lagta my Jamia kabhi kabhi password wrong ka error aata he",
                "timestamp": "7:46 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 97096 74618",
                "message": "Yrr website pe abhi bhi mera purana course hi dikh rha hai?",
                "timestamp": "8:12 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Areeb Chess Jamia Licches 1400",
                "message": "does jamia have a chess group/club?",
                "timestamp": "8:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Room no. 112 me contact kro",
                "timestamp": "8:15 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 97096 74618",
                "message": "Baaki log ka change hua kya?",
                "timestamp": "8:16 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Pata nah bhai",
                "timestamp": "8:16 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 97096 74618",
                "message": "Phle baaki log s confirm krlu fir dekhunga jo aap ne btaya",
                "timestamp": "8:16 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Jo tmhe new branch mila h usme addmission hi gya h ??",
                "timestamp": "8:17 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 97096 74618",
                "message": "Self finance se regular me upgrade hua tha , gya tha to wo bole automatic ho jata hai, aane ki zrurat nhi h",
                "timestamp": "8:18 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Achaa achaa haan toh dw",
                "timestamp": "8:18 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99189 29756",
                "message": "https://chat.whatsapp.com/FFaxRyS14u2LBnJW6aTJPb?mode=r_t",
                "timestamp": "8:18 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99189 29756",
                "message": "Boises,,, seniors se interaction ke liye ye group join kr skte hain aaplog",
                "timestamp": "8:18 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Ho jayega class avi konsa run kr rha",
                "timestamp": "8:19 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 91531 50416",
                "message": "This message was deleted",
                "timestamp": "8:28 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 91553 89964",
                "message": "abhi mere pass koi personal device nhi hai toh internet wale id ko skip kr skte hai kyuki wha mac address fill krna hai",
                "timestamp": "8:34 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Han",
                "timestamp": "8:34 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Internet abhi nahi karna",
                "timestamp": "8:35 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Woh institute meh wifi chalane ke liye h",
                "timestamp": "8:35 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 91553 89964",
                "message": "thanks",
                "timestamp": "8:35 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Mac address bharna compulsory field nhi h",
                "timestamp": "8:35 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "VIRAT Bhai Jamia instagram Reddit",
                "message": "Bhai kal Saturday ko open rahegi Jamia ? Kal Hoatel ka form Submit karne ja rha tha mai",
                "timestamp": "8:55 PM",
                "isCurrentUser": false
            },
            {
                "type": "added",
                "message": "~ . added ~ mohd faiz"
            },
            {
                "type": "message",
                "sender": "+91 94679 05914",
                "message": "Follow this link to join my WhatsApp group: https://chat.whatsapp.com/CK75vsGOyfx2vbWNrGbEcu?mode=ac_t",
                "timestamp": "9:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 94679 05914",
                "message": "Hello... I am from 2nd year..",
                "timestamp": "9:04 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 94679 05914",
                "message": "📢 Hello Jamia B.Tech Students!",
                "timestamp": "9:08 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 89248 23098",
                "message": "Ek sath do scholarship le skte hai kya",
                "timestamp": "9:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 94679 05914",
                "message": "Haan",
                "timestamp": "9:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 89248 23098",
                "message": "Liye ho??",
                "timestamp": "9:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Are bhai Goa trip pe jayega kya 2 scholarship leke🤣",
                "timestamp": "9:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 94679 05914",
                "message": "Jii",
                "timestamp": "9:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 89248 23098",
                "message": "Kaun kaun sa",
                "timestamp": "9:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 94679 05914",
                "message": "Abb sbb details mai batane ka time toh nhi hain!!",
                "timestamp": "9:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 89248 23098",
                "message": "Na bhai ghar se ek rupiya na lunga sara isi se pay kar dunga 🤣 ye soch rha hun",
                "timestamp": "9:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 89248 23098",
                "message": "Hostel fee or college fee dono",
                "timestamp": "9:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 82735 62723",
                "message": "Bhai fee receipt kho gayi h hostel ki",
                "timestamp": "9:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "This message was deleted",
                "timestamp": "9:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 89248 23098",
                "message": "Time mile tab bata dena",
                "timestamp": "9:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 89248 23098",
                "message": "Download kar lo",
                "timestamp": "9:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 82735 62723",
                "message": "Koi problem h kya isse",
                "timestamp": "9:12 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 94679 05914",
                "message": "Jbb jrurt pde .. Tbh",
                "timestamp": "9:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 89248 23098",
                "message": "No",
                "timestamp": "9:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 89248 23098",
                "message": "Ok",
                "timestamp": "9:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 89248 23098",
                "message": "Approx",
                "timestamp": "9:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 82735 62723",
                "message": "Bata do",
                "timestamp": "9:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 89248 23098",
                "message": "Nhi padegi yar",
                "timestamp": "9:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 94679 05914",
                "message": "Income certificate bnawake rkhlo...",
                "timestamp": "9:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 94679 05914",
                "message": "Bss start hone wali hain scholarship",
                "timestamp": "9:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74794 16301",
                "message": "Bhai tum to AMU ja rahe the",
                "timestamp": "9:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 89248 23098",
                "message": "Hai",
                "timestamp": "9:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Another imp document",
                "timestamp": "9:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 89248 23098",
                "message": "Baki digilocker vala hai income cirtificate",
                "timestamp": "9:15 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 94679 05914",
                "message": "Check grup...",
                "timestamp": "9:15 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Xerox dena tha",
                "timestamp": "9:15 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Usme toh photocopy deni thi nam",
                "timestamp": "9:16 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 89248 23098",
                "message": "Xerox ke liye line lagana padta or us din meri train chhutane vali thi isliye jaldi jaldi me de diya",
                "timestamp": "9:16 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 89248 23098",
                "message": "Baad me mil jayega na ye sab document",
                "timestamp": "9:16 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Hostel wale documents me to sab photocopy hi deni thi",
                "timestamp": "9:16 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 89248 23098",
                "message": "Are o nikl jayega digilocker se",
                "timestamp": "9:16 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Koi nahi 6months baad to new hi banta hai",
                "timestamp": "9:17 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "I joined late can you pls resend it??",
                "timestamp": "9:17 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 89248 23098",
                "message": "Ab de diya jaldi jaldi me",
                "timestamp": "9:17 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 94679 05914",
                "message": "Grup description",
                "timestamp": "9:17 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 89248 23098",
                "message": "Haan",
                "timestamp": "9:17 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 94679 05914",
                "message": "...",
                "timestamp": "9:47 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 94679 05914",
                "message": "Pin krdo... Isse",
                "timestamp": "9:48 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Areeb Chess Jamia Licches 1400",
                "message": "scholarship ke liye financial weak howna zaruri hai ?.. ya marks biased bhi hota ?",
                "timestamp": "9:49 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 89248 23098",
                "message": "Jab financial weak nhi ho to kya jarurat hai iski 🤣",
                "timestamp": "9:51 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 94679 05914",
                "message": "Marks and Financial condition",
                "timestamp": "9:51 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Different scholarship me different eligibility hoti hai kuch marks based hoti hai or kuch financial weak students ke liye",
                "timestamp": "9:52 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "IMG-20250715-WA0041.jpg (file attached)",
                "timestamp": "10:30 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "kisi ke paas yeh pdf hai?",
                "timestamp": "10:30 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "Yeh wala h nhi main pdf se check kro jisme saara tha",
                "timestamp": "10:31 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "matlab?",
                "timestamp": "10:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 98713 69595",
                "message": "Bhai",
                "timestamp": "10:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 98713 69595",
                "message": "Ece achi hai ki ece?",
                "timestamp": "10:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "Are ek pdf tha usme saare branch ka placement report h",
                "timestamp": "10:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 98713 69595",
                "message": "Arey matlab electrical and computer ki electronic and computer",
                "timestamp": "10:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "can you send it pleas",
                "timestamp": "10:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "2020 se lekr 2025 tk ki",
                "timestamp": "10:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "placement_cs_jamia_placed_students_data_batch_2024.pdf (file attached)",
                "timestamp": "10:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "yh data maine reddit par ek ladke se liya tha toh usne mujhe aise hi bheja tha. so koi pdf nhi hai iski",
                "timestamp": "10:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "jamia ki official site par yeh mili mujhe",
                "timestamp": "10:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 98713 69595",
                "message": "??",
                "timestamp": "10:33 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "jisme placements obv kaafi bekar hai compated to this",
                "timestamp": "10:33 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 98713 69595",
                "message": "Bataow na bc",
                "timestamp": "10:33 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "DOC-20250605-WA0015..pdf (file attached)",
                "timestamp": "10:33 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "usi se pdf maang lo <This message was edited>",
                "timestamp": "10:34 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 98713 69595",
                "message": "Bhai @918292848166",
                "timestamp": "10:34 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "Jv bola pdf nhi h toh kaise bhejga",
                "timestamp": "10:34 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 98713 69595",
                "message": "Maine ye wali ece upar rakhi thi",
                "timestamp": "10:34 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "ek sf hai ek normal",
                "timestamp": "10:35 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Obviously, electronic and communication engineering is way better than a new and hybrid branch",
                "timestamp": "10:35 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "ecm new branch hain last year introduce hui hai so koi data nhu hi iska",
                "timestamp": "10:36 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "ece better branch hai obviously",
                "timestamp": "10:37 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "ecm ka india me kuchh scope nhi hai. gate hi krna padega at the end",
                "timestamp": "10:39 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Optum ne to decent packages diye h",
                "timestamp": "10:42 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 86512 74965",
                "message": "This message was deleted",
                "timestamp": "10:42 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "2025 batch ko",
                "timestamp": "10:42 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 86512 74965",
                "message": "This message was deleted",
                "timestamp": "10:42 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "Is baar kafi shi placement lga h",
                "timestamp": "10:42 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "And tcs as usual 7 8 and even lower",
                "timestamp": "10:42 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "Mechanical second best branch rha h",
                "timestamp": "10:43 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "TCS 3.5 Bhi deti h bht jagah",
                "timestamp": "10:43 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Yahaan to phir bhi theek h",
                "timestamp": "10:43 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "Hnn yeh toh h yha bhi di h kuch ko",
                "timestamp": "10:43 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "3.5",
                "timestamp": "10:43 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Diya h",
                "timestamp": "10:44 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "3.5 bhi",
                "timestamp": "10:44 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99068 85579",
                "message": "Mech vs vlsi?",
                "timestamp": "10:44 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99068 85579",
                "message": "Kya better hai",
                "timestamp": "10:44 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Vlsi",
                "timestamp": "10:44 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Intrest dekh le bhai",
                "timestamp": "10:44 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Ece generally has more scope",
                "timestamp": "10:44 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "Vlsi ka benefit masters ke baad hi pta chlega",
                "timestamp": "10:44 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99068 85579",
                "message": "Still suggestion",
                "timestamp": "10:44 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Cause tm cse walon ke saath placement me baith skte",
                "timestamp": "10:44 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "Agr masters tk plan h toh vlsi",
                "timestamp": "10:45 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "The placements are decent tho",
                "timestamp": "10:45 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Itne bhi bure nhi h jitna socha tha",
                "timestamp": "10:45 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "STK-20250725-WA0005.webp (file attached)",
                "timestamp": "10:45 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "Bhai mechanical wale baith jate kuch companies me",
                "timestamp": "10:45 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "STK-20250725-WA0103.webp (file attached)",
                "timestamp": "10:46 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "But that depends on the companies",
                "timestamp": "10:46 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Ece walon ko zyada companies allow krti h generally",
                "timestamp": "10:46 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "Bhai yeh baat batao ki second year wale iss group kyu join kr rkhe h",
                "timestamp": "10:47 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "IMG-20250725-WA0104.jpg (file attached)",
                "timestamp": "10:48 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Offcampus h wo",
                "timestamp": "10:48 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "51lpa wala",
                "timestamp": "10:48 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Someone cracked it 🫡🫡",
                "timestamp": "10:49 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Ohhh me to faltu me khus ho gaya tha abhi",
                "timestamp": "10:49 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "True",
                "timestamp": "10:49 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "I heard ki koi ladki thi Microsoft wali",
                "timestamp": "10:49 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Altho optum wale on campus h",
                "timestamp": "10:49 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "But as good as it sounds, these packages are a rarity.",
                "timestamp": "10:49 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Achchaa",
                "timestamp": "10:49 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "Hmm shi suna tha",
                "timestamp": "10:49 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "No idea who it was but kudos to them 😶‍🌫",
                "timestamp": "10:49 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Waise generally Placements ka thoda downfall hogaya",
                "timestamp": "10:50 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "But bhai placement rate bohot Kam he",
                "timestamp": "10:50 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Hm bhai socho pure Batch se sirf ek ka hua hai toh",
                "timestamp": "10:50 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "Girls ko jada opportunity rhti h generally",
                "timestamp": "10:50 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Not necessarily.",
                "timestamp": "10:50 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "IMG-20250715-WA0041.jpg (file attached)",
                "timestamp": "10:50 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Hm diversity hiring",
                "timestamp": "10:50 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "Hmm dekh lena  kuch companies  prefer krti h",
                "timestamp": "10:51 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Haan Kuch companies specifically reservations rakhti hain",
                "timestamp": "10:51 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "OoOooo",
                "timestamp": "10:51 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Sb companies tcs ki tarah harkatein nhi krti 💀",
                "timestamp": "10:51 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Yapp",
                "timestamp": "10:52 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Faang crack krna is pure skill 🫡",
                "timestamp": "10:52 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "Bhai samsung ban hatyegi jamia se kiya lgta h",
                "timestamp": "10:52 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Ban kyu hua?",
                "timestamp": "10:53 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "FAANG krti hai majority me",
                "timestamp": "10:53 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Kesa ban bhai ?",
                "timestamp": "10:53 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "Bacche cheating pakde gye the 3 saal phle",
                "timestamp": "10:53 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Cheating krte hue pakde gaye the seniors",
                "timestamp": "10:53 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Kaisi cheating",
                "timestamp": "10:53 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "?",
                "timestamp": "10:53 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "Toh ban krsi thi samsung",
                "timestamp": "10:53 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "Sab ka answer same tha pure batch ka",
                "timestamp": "10:53 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Wo whi jante hai.",
                "timestamp": "10:53 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "STK-20250722-WA0023.webp (file attached)",
                "timestamp": "10:53 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Kya pta islie hi itna kam placements",
                "timestamp": "10:54 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "?",
                "timestamp": "10:54 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Hamare chore choriyo se kam he ke",
                "timestamp": "10:54 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Amazon ne bhi ban laga rkha hai shayad",
                "timestamp": "10:54 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "🤡",
                "timestamp": "10:54 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "Hmm sunne me toh aaya h pr pta nhi confirm",
                "timestamp": "10:54 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Mere ko bhi confirm nhi hai",
                "timestamp": "10:55 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Abe ye senior",
                "timestamp": "10:55 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "Bhai samsung aati thi toh ece walo ko accha placement lg jata tha pr ab utna nhi lgta",
                "timestamp": "10:55 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "Ho skta h",
                "timestamp": "10:55 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "May be kiya dean hi kuch kr skti h ban ke topic pe",
                "timestamp": "10:56 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Mass hiring hoti thi phle",
                "timestamp": "10:56 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Hmm is pdf me samsung ka acha placement he",
                "timestamp": "10:56 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "Hmm suna tha unke mja the",
                "timestamp": "10:56 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "C dot ne bhi visit krna band kr diya ab toh",
                "timestamp": "10:57 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "lgta hm log aate tk bs tcs hi na rh jaye",
                "timestamp": "10:57 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Ab kya hi kare",
                "timestamp": "10:57 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Mehnat karni hogi mittr",
                "timestamp": "10:58 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Bahi tcs bhediya hi aakhri umeed hai",
                "timestamp": "10:58 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "Yeh bhi h pta nhi kiya hoga",
                "timestamp": "10:58 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "Is saal jaisa placement ho bhadiya rhega",
                "timestamp": "10:59 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Ek baat batao kisi ko issue aarha python install krne me",
                "timestamp": "10:59 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "🙂",
                "timestamp": "10:59 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 93415 20823",
                "message": "Bhai mereko mingw me aarha h",
                "timestamp": "10:59 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Bhai tumahara laptop aa gya Aaj aane wala tha??",
                "timestamp": "10:59 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Bc kal phir se karunga",
                "timestamp": "11:00 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Hh bhai aagya",
                "timestamp": "11:00 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Skill issue",
                "timestamp": "11:00 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Congratulations",
                "timestamp": "11:00 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "null",
                "timestamp": "11:01 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Congo",
                "timestamp": "11:01 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Acer alg or Nitro v",
                "timestamp": "11:01 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Nitro nhi h ig",
                "timestamp": "11:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Fir to alg ya aspire 7 hoga",
                "timestamp": "11:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Aspire series but 7 nhi",
                "timestamp": "11:05 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Nah browser ka issue hai",
                "timestamp": "11:21 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "<Media omitted>",
                "timestamp": "11:34 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70793 86432",
                "message": "Bhai kal JMI aa raha hoo hostel forms submit karne",
                "timestamp": "11:39 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Saturday and Sunday office band rhta h",
                "timestamp": "11:40 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70793 86432",
                "message": "Yahi janna tha 🤘",
                "timestamp": "11:40 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Ab to extend ho gyi h",
                "timestamp": "11:41 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Orientation wale day aakr kra lena",
                "timestamp": "11:41 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70793 86432",
                "message": "Notification to 25 ke extension ka hai par obviously 28 wali bhi ho hi gayi hogi 👍",
                "timestamp": "11:43 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78200 29195",
                "message": "Hmm mai bhi 28 ko hi submit krunga",
                "timestamp": "11:43 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 84392 98163",
                "message": "Is grp me koi aesa bhi hai kya jisne room okhla vihar metro station ke pass liya ho",
                "timestamp": "11:50 PM",
                "isCurrentUser": false
            }
        ]
    },
    {
        "date": "2025-07-09",
        "content": [
            {
                "type": "settings",
                "message": "~ ABCD🙈🙉🙊 created group \"Jamia B.Tech (unofficial)\""
            }
        ]
    },
    {
        "date": "2025-07-26",
        "content": [
            {
                "type": "message",
                "sender": "+91 88814 58243",
                "message": "Rating?",
                "timestamp": "7:17 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Areeb Chess Jamia Licches 1400",
                "message": "lichess- 1400",
                "timestamp": "8:01 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 88814 58243",
                "message": "Time control?",
                "timestamp": "8:21 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Areeb Chess Jamia Licches 1400",
                "message": "rapid",
                "timestamp": "8:28 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "IMG-20250726-WA0034.jpg (file attached)",
                "timestamp": "9:09 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 82871 98408",
                "message": "Bhai khalega kya online??",
                "timestamp": "9:30 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Which app ?",
                "timestamp": "9:31 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 82871 98408",
                "message": "Lichess",
                "timestamp": "9:31 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Chess com",
                "timestamp": "9:31 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 82871 98408",
                "message": "Ruk h mere pe ek account",
                "timestamp": "9:31 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Yes",
                "timestamp": "9:31 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Piper Chess Club",
                "timestamp": "9:32 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Bhejo",
                "timestamp": "9:32 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 82871 98408",
                "message": "chesstime234566",
                "timestamp": "9:32 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 82871 98408",
                "message": "Ye account h",
                "timestamp": "9:32 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Active rhta hai",
                "timestamp": "9:32 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Hn bhai",
                "timestamp": "9:32 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Tournament hote rhte hain",
                "timestamp": "9:32 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Oo badhiya phir toh",
                "timestamp": "9:33 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Ek Senior ne apni trophy bhi dikhayi thi",
                "timestamp": "9:33 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Blitz Jeeta tha ig",
                "timestamp": "9:33 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Mujhe hostel ki bhot tension ho rhi hai 😔",
                "timestamp": "9:33 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Ruk bhej rha",
                "timestamp": "9:33 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Aas paas ke area rehne layak nhi hai",
                "timestamp": "9:34 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 82871 98408",
                "message": "Ok bhai",
                "timestamp": "9:34 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Aadat ho jayegi",
                "timestamp": "9:34 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Areeb Chess Jamia Licches 1400",
                "message": "grp link hai ?",
                "timestamp": "9:37 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Mere paas nhi hai",
                "timestamp": "9:37 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Bhai ek mistake ho gyi",
                "timestamp": "9:37 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 82871 98408",
                "message": "Ruk ek sec",
                "timestamp": "9:38 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Bhai yh 3min wala n laga",
                "timestamp": "9:38 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Rating kitni hai tumhari?",
                "timestamp": "9:38 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Chess com pr?",
                "timestamp": "9:38 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 82871 98408",
                "message": "Phir",
                "timestamp": "9:38 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "15 min",
                "timestamp": "9:38 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Mai chess board per khelna prefer karta hun",
                "timestamp": "9:39 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 82871 98408",
                "message": "Dekh",
                "timestamp": "9:40 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Abeey mere se bhi koi khel lo 😭",
                "timestamp": "9:40 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Aata hu download krke",
                "timestamp": "9:40 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 82871 98408",
                "message": "Zaroor bhai",
                "timestamp": "9:40 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 88814 58243",
                "message": "do u play bullet?/",
                "timestamp": "9:40 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Areeb Chess Jamia Licches 1400",
                "message": "yup",
                "timestamp": "9:41 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 88814 58243",
                "message": "wanna play rn?",
                "timestamp": "9:41 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Bullet gun metro sab khel lenge",
                "timestamp": "9:41 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Areeb Chess Jamia Licches 1400",
                "message": "sure",
                "timestamp": "9:41 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 88814 58243",
                "message": "wait link deta hu",
                "timestamp": "9:41 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Areeb Chess Jamia Licches 1400",
                "message": "lichess?",
                "timestamp": "9:41 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 88814 58243",
                "message": "works",
                "timestamp": "9:41 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 88814 58243",
                "message": "https://lichess.org/zH5jVaHl",
                "timestamp": "9:41 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 88814 58243",
                "message": "gg",
                "timestamp": "9:44 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Areeb Chess Jamia Licches 1400",
                "message": "lichess id",
                "timestamp": "9:45 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 88814 58243",
                "message": "im mostly on chess.com",
                "timestamp": "9:46 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "https://link.chess.com/play/nDenxp",
                "timestamp": "9:46 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "@918292848166 @919457123321 @918881458243",
                "timestamp": "9:47 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "@918287198408",
                "timestamp": "9:47 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Areeb Chess Jamia Licches 1400",
                "message": "wapis bhejo",
                "timestamp": "9:47 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 88814 58243",
                "message": "nhi ho rha",
                "timestamp": "9:47 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Okay",
                "timestamp": "9:48 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Just search for username",
                "timestamp": "9:48 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Arshad15809k",
                "timestamp": "9:48 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 82871 98408",
                "message": "Send",
                "timestamp": "9:49 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": ".",
                "timestamp": "9:49 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 82871 98408",
                "message": "Abort😭",
                "timestamp": "9:49 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Resend kro",
                "timestamp": "9:50 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 82871 98408",
                "message": "Done",
                "timestamp": "9:50 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 82871 98408",
                "message": "Good game",
                "timestamp": "9:53 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Areeb Chess Jamia Licches 1400",
                "message": "a game with me ?",
                "timestamp": "9:54 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "For you 🙂",
                "timestamp": "9:54 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 82871 98408",
                "message": "Vo bhi accha tha",
                "timestamp": "9:54 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Mere saath bhi",
                "timestamp": "9:54 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Search termitemitey",
                "timestamp": "9:55 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 82871 98408",
                "message": "Done",
                "timestamp": "9:57 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 88814 58243",
                "message": "https://lichess.org/nBrl8hYJ",
                "timestamp": "9:58 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 88814 58243",
                "message": "who was this?",
                "timestamp": "10:00 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 88814 58243",
                "message": "https://lichess.org/BiAdFeqh",
                "timestamp": "10:00 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 82871 98408",
                "message": "Bhai net chala gaya😂",
                "timestamp": "10:00 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 88814 58243",
                "message": "lol",
                "timestamp": "10:00 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 88814 58243",
                "message": "aaja firse",
                "timestamp": "10:00 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 82871 98408",
                "message": "Bhai 2 min ka kar de",
                "timestamp": "10:03 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Bg",
                "timestamp": "10:04 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Blunder Game 😭",
                "timestamp": "10:04 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "That's how two 600 elo play",
                "timestamp": "10:04 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 88814 58243",
                "message": "thik",
                "timestamp": "10:08 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 88814 58243",
                "message": "https://lichess.org/rQd5hqew",
                "timestamp": "10:08 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "@918651270151 aao bhai",
                "timestamp": "10:16 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Abort hogya",
                "timestamp": "10:17 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Bheja hai phir",
                "timestamp": "10:18 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Khana khane aagya ab to",
                "timestamp": "10:20 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Room pe jaake khelte h 🌚",
                "timestamp": "10:20 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Rehan bhai aao mere sath",
                "timestamp": "10:20 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "💀💀",
                "timestamp": "10:20 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 82871 98408",
                "message": "😭😂😂",
                "timestamp": "10:23 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Aaja Bhai ham khelenge sath me 😭",
                "timestamp": "10:25 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 98979 40211",
                "message": "Grp me faltu baten zyada ho rhi h ab...",
                "timestamp": "11:00 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Admin ko tag kro",
                "timestamp": "11:01 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Abhi jab ladkiyaan saari hat hi gayi apna grp banake to phir dikkat h anyway",
                "timestamp": "11:01 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Ye waala group chodh diya kya unhone?",
                "timestamp": "11:05 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Boys only ka kya fayda hua",
                "timestamp": "11:05 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Ek chess ka alag se grp bnalo n",
                "timestamp": "11:06 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Chhoda nhi hai",
                "timestamp": "11:06 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 85297 26149",
                "message": "Mai kal begum hazrat mahal hostel provost office mein form submit karne aayi thi. Ek ladki ko maine apni file pakadne ke liye di thi lekin uss se wapas lena bhul gayi. Uss file mein important documents the. Please ye message doosre groups mein forward kar dein taaki mujhe meri file mil jaaye. Thank you <This message was edited>",
                "timestamp": "11:06 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "par unke paas altleast ek safe space h na",
                "timestamp": "11:06 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "To phir esme timepass hogi to bhi kuchh jyada dikkat nhi h",
                "timestamp": "11:07 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Girls only group hai ek",
                "timestamp": "11:07 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Usme bheji",
                "timestamp": "11:07 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Joined ho na ?",
                "timestamp": "11:07 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Girls only me",
                "timestamp": "11:07 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 85297 26149",
                "message": "Girls only group mein mai nahi hu",
                "timestamp": "11:07 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "STK-20250723-WA0144.webp (file attached)",
                "timestamp": "11:07 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Wha pe shayad koi help kre tmhari",
                "timestamp": "11:07 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Wait lemme give u the linj",
                "timestamp": "11:07 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 85297 26149",
                "message": "Agar uska invite link ho toh bhej de",
                "timestamp": "11:08 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 85297 26149",
                "message": "Agar aap kisi aur department ke group mein hai toh waha ye message forward kar dein please",
                "timestamp": "11:08 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Pucha nhi ladki kis dept ki thi",
                "timestamp": "11:08 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 85297 26149",
                "message": "Nahi puchha tha",
                "timestamp": "11:09 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Bht badhiya 😭",
                "timestamp": "11:09 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Good Job Girl 🤧👍🏻 <This message was edited>",
                "timestamp": "11:09 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Konsi branch hai ?",
                "timestamp": "11:09 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 85297 26149",
                "message": "Csds",
                "timestamp": "11:09 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Abe tu yh backchodi band kr",
                "timestamp": "11:10 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Dekho aise puchhte h branch and depart",
                "timestamp": "11:10 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Kya kya tha usme original",
                "timestamp": "11:10 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Koi lost and found department ho",
                "timestamp": "11:10 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Usme pata karwaalo",
                "timestamp": "11:10 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Great idea tbh",
                "timestamp": "11:10 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 85297 26149",
                "message": "10th 12th ki original marksheet aur pass certificate",
                "timestamp": "11:11 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Ya phir usi office me jaake poocho ki koi ladki aayi thi ka",
                "timestamp": "11:11 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Kya",
                "timestamp": "11:11 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 85297 26149",
                "message": "Original slc character certificate",
                "timestamp": "11:11 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Yaa phir wahi pe kursi lagake baith jaao intezaar me",
                "timestamp": "11:11 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Maar khayega bhai",
                "timestamp": "11:11 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Damn kaafi zyada important",
                "timestamp": "11:11 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Kon??",
                "timestamp": "11:11 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 85297 26149",
                "message": "Office mein aa kae puchha unhone waha dhundhna lekin nahi mila",
                "timestamp": "11:11 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 85297 26149",
                "message": "Kisi doosre ladki ka contact vo nahi de rahe",
                "timestamp": "11:12 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Acha",
                "timestamp": "11:12 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Matlab unpe contact hai us ladki ka ?",
                "timestamp": "11:12 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Lost and found waale me pata karo that's all",
                "timestamp": "11:12 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Hostel form me photo hoti hai?",
                "timestamp": "11:13 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "If yes then jaake forms dekhlo office me poochke",
                "timestamp": "11:13 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "And recognize karlo photo se",
                "timestamp": "11:13 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Pr esne kisi random ladki ko diya h shayad",
                "timestamp": "11:14 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Follow this link to join my WhatsApp group: https://chat.whatsapp.com/JnZZKnTRxUz9H3xJVZ2XHl?mode=r_t",
                "timestamp": "11:15 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Isme puch lo",
                "timestamp": "11:15 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "I'm guessing ki agar uss office paas khadi thi to hostel ke liye hi hogi",
                "timestamp": "11:16 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Haan lkn koi aur course ka v ho skti h",
                "timestamp": "11:16 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Yeah",
                "timestamp": "11:17 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Arre to hostel form to sabka same hi hoga na",
                "timestamp": "11:17 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Isliye better h provost office me hi apni baat rakho wahi kuch kr skte h aise find krte reh jaoge so u should request them hope they would be helpful... @918529726149",
                "timestamp": "11:18 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Unko bhi kya pata kon ladki kaha ki ladki",
                "timestamp": "11:19 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Wahi kahi camera check kare",
                "timestamp": "11:19 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Agar wo log photos dikha de to ye recognize karlega",
                "timestamp": "11:19 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Usse kya solve hoga",
                "timestamp": "11:19 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Wo chahe to mil skta h",
                "timestamp": "11:19 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "I don't think ki kisi random ladki  ka form isko dekhne denge",
                "timestamp": "11:19 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Chori thodi hua hai bhai deke waapas lena bhula hai",
                "timestamp": "11:19 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Hope u find ur documents",
                "timestamp": "11:19 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Ek baar recognise ho jayega... Uske details mil jayenge",
                "timestamp": "11:19 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Aree naam toh pata hoga documents hai toh",
                "timestamp": "11:20 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Wo sab to theek h par esne bina kisi contact info ke imp. Files chhod kaise diya 😭😭 <This message was edited>",
                "timestamp": "11:20 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "This message was deleted",
                "timestamp": "11:20 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Rhen de bhai, bechari pehle hi pareshaan hogi",
                "timestamp": "11:20 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Sis code didint worked",
                "timestamp": "11:20 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Genuine case hai to probably allow kardenge idk",
                "timestamp": "11:20 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Bhai us documents me contacts wagera honge na usse contact kr le",
                "timestamp": "11:21 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Abe par jiske documents lost hue he vo to he hi nahi online aur tum sab baate kare jaa rahe",
                "timestamp": "11:21 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Uske baare me",
                "timestamp": "11:21 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Let's hope allow kr de",
                "timestamp": "11:21 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Haan be",
                "timestamp": "11:21 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Agar jo random ladki hai uspe dimaag hua to*",
                "timestamp": "11:21 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Recognize to ye kar hi lega",
                "timestamp": "11:21 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Wo eske documents se esko trace kr legi",
                "timestamp": "11:21 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "😭😭",
                "timestamp": "11:21 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Marksheet pe contact info hota hai??",
                "timestamp": "11:22 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Arey bhai unke paas contact details v toh hoga",
                "timestamp": "11:22 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Mushkil hai",
                "timestamp": "11:22 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 96548 62911",
                "message": "Or agar aur zyda dimaag hua to ise blackmail kr skti",
                "timestamp": "11:22 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Easy hai, kam se kam provost office me jaake wo random ladki bata skti hai and apna contact and then baad me ye puchhegi to eska document mil jayega",
                "timestamp": "11:22 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "I mean kuch toh likha hoga.. kaha se 12th kiya hai kab Kiya hai ese pata chl jayega",
                "timestamp": "11:22 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Extra knowledge",
                "timestamp": "11:22 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Mat kar lala",
                "timestamp": "11:22 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Pagal hai kya film nhi chal rhi idhar",
                "timestamp": "11:22 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Exactly my point",
                "timestamp": "11:23 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Yeah yeah that's my point",
                "timestamp": "11:23 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Office me kursi laga ke baith jaao kabhi na kabhi to aayegi",
                "timestamp": "11:23 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Kya vo Paisa mange ?",
                "timestamp": "11:23 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Sukr mana mai admin nhi hu",
                "timestamp": "11:23 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Bas kr dimag Kam chala",
                "timestamp": "11:23 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Yea naam wagera se try kar sakti",
                "timestamp": "11:23 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Definitely",
                "timestamp": "11:24 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Ya phir usko wo photocopies lagi to dumping ground.....",
                "timestamp": "11:24 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 96548 62911",
                "message": "1.5L csds fee ke",
                "timestamp": "11:24 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Thats the fucking serial killer type of idea..",
                "timestamp": "11:24 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Worthy trade i suppose",
                "timestamp": "11:24 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Main hota to pure 4 saal ki fees mangta",
                "timestamp": "11:25 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Hostel ka v*",
                "timestamp": "11:25 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Itne paise se Acha duplicate docs banjaaye",
                "timestamp": "11:25 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "IMG-20250726-WA0049.jpg (file attached)",
                "timestamp": "11:26 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 96548 62911",
                "message": "Par agr isne 1.5L blackmailer ko diye to yeh 3 saal ki hi csds fee bhar paegi",
                "timestamp": "11:27 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "@919599460379 Ye sab kya dekhna pad rha hai bhai tere group mein 😭",
                "timestamp": "11:27 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "@918529726149 bhai tuh girls grp pe pehle check kr le agr nhi hai toh orientation wale din toh aayegi hi tb announcement krwa diyo",
                "timestamp": "11:27 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "You deleted this message",
                "timestamp": "11:27 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Aur usko ye bhi clear nhi h ki bandi ka department kya h",
                "timestamp": "11:27 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Chalta hai",
                "timestamp": "11:27 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Yes",
                "timestamp": "11:27 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Wahi tooo that's the worst part",
                "timestamp": "11:28 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "B con hons waali hui to????",
                "timestamp": "11:28 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Koi na naam father's name yeh toh pata hoga ??",
                "timestamp": "11:28 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 95994 60379",
                "message": "?",
                "timestamp": "11:28 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Bhai ye batao girls group alag he aur boys group alag hai to groups ke beech interconnectivity kese hoti like info share karni ho.",
                "timestamp": "11:28 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Mai aur @918292848166 jaake saare department me announcement karwa dete h ☺️",
                "timestamp": "11:28 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Itne irresponsible kais hote hain yh log",
                "timestamp": "11:28 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Ek gender neutral bhi h",
                "timestamp": "11:29 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Ye waala group wahi hai",
                "timestamp": "11:29 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 96548 62911",
                "message": "Final option Doraemon ki help leni pdegi ab",
                "timestamp": "11:29 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Ye waala*",
                "timestamp": "11:29 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Ye common group hai",
                "timestamp": "11:29 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Akele ja bhai",
                "timestamp": "11:29 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Wtf",
                "timestamp": "11:29 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Fr",
                "timestamp": "11:29 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Anywhere dorr",
                "timestamp": "11:29 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Abeey oye, Skills 😌",
                "timestamp": "11:29 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 95994 60379",
                "message": "Hua kya hai group pe ye batayega koi mere 853 msg aaye hue the",
                "timestamp": "11:29 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Ladki gum hogyi h ek",
                "timestamp": "11:29 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Admin bana bhai terese nhi hora",
                "timestamp": "11:29 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 96548 62911",
                "message": "Astagfirullah",
                "timestamp": "11:29 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Ladki nahi uska samaan",
                "timestamp": "11:29 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Kisi ke Documents leke",
                "timestamp": "11:30 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 95994 60379",
                "message": "Group se",
                "timestamp": "11:30 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Kuch nahi pata",
                "timestamp": "11:30 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Jamia se",
                "timestamp": "11:30 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Random thi",
                "timestamp": "11:30 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Random to wo bh-",
                "timestamp": "11:30 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Aree documents toh hai na usme bhi nahi rehti kya father name and all",
                "timestamp": "11:30 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Tmhe task dekr gyi h 😂",
                "timestamp": "11:30 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 95994 60379",
                "message": "Isme meri jimmedari thodi hai koi ghum ho ya kuch ho uske baap ko bta bhai merko kyu tag kr rha",
                "timestamp": "11:30 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Aur ye tension me he ab",
                "timestamp": "11:31 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Abe uske documents gumhue hain",
                "timestamp": "11:31 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 96548 62911",
                "message": "*Mujhe ky mai to admin hu* moments",
                "timestamp": "11:31 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Ye banda hamesha serious hi rhta h",
                "timestamp": "11:31 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "🤣",
                "timestamp": "11:31 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Ladki h na isliye bacha tension me h",
                "timestamp": "11:31 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Ha",
                "timestamp": "11:31 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Arshad vella hai aaj kal",
                "timestamp": "11:31 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 95994 60379",
                "message": "Bhai to aise bol yrr tag to aise kr rhe hain log jaise mene ghum kiya hai",
                "timestamp": "11:32 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Abe to vo admin he na",
                "timestamp": "11:32 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Bhai mt bol fir left kr jayegaa",
                "timestamp": "11:32 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "You deleted this message",
                "timestamp": "11:32 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Bhai admin bana",
                "timestamp": "11:32 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Hehe 😅",
                "timestamp": "11:32 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Yeah that's my point",
                "timestamp": "11:32 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 96548 62911",
                "message": "Tu arshad ka soch wo to aise tension lera jaise usne hi kiye hai gum",
                "timestamp": "11:32 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Moderation hona chahiye grp pe",
                "timestamp": "11:32 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "🌚🌚",
                "timestamp": "11:33 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 95994 60379",
                "message": "Bhai pakistani drama dekh rha  hun kal shaam 7 baje se abhi last episode khatam hi hone wala tha ki tag kr diya ksi ne thara mood kharab kr dala",
                "timestamp": "11:33 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Bc kaha se kaha aagye😭😭",
                "timestamp": "11:33 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Helping Nature*",
                "timestamp": "11:33 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Bruhhh",
                "timestamp": "11:33 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Desh drohi 😤",
                "timestamp": "11:33 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 72678 86354",
                "message": "This message was deleted",
                "timestamp": "11:34 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "For girl ye v likh de",
                "timestamp": "11:34 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Vpn laag kr dekh rha",
                "timestamp": "11:34 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Par bhai jiske gum hue he vo kaha he",
                "timestamp": "11:34 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 95994 60379",
                "message": "Kabhi main kabhi tum 😌",
                "timestamp": "11:34 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Shi bola",
                "timestamp": "11:34 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 72678 86354",
                "message": "🤌",
                "timestamp": "11:34 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Uska to naam bhi bhul gaya mai shit",
                "timestamp": "11:35 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "🌚🌚",
                "timestamp": "11:35 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Helping Nature 🍄‍🟫",
                "timestamp": "11:35 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Aage",
                "timestamp": "11:35 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Haan Bhai dekha maine v 😂",
                "timestamp": "11:35 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "🤣",
                "timestamp": "11:35 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Matlab soch Raha Hai bhai Kitna jyada yah Banda Apne connection banabe ki kosis me hai",
                "timestamp": "11:35 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "This isn't the helping nature,this is some other kind of nature and you knew what I am talking about",
                "timestamp": "11:36 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Hmm jeevansathi chaiye usko",
                "timestamp": "11:36 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Ye soch rha hai sare departments me connection hona chahiye iska🤣",
                "timestamp": "11:36 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Tinder bana ke rkha isko",
                "timestamp": "11:36 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Abeey documents hi dhundh lo 😭😭",
                "timestamp": "11:36 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Bhai jamia jake announcement karwa rhe the itna vella hai",
                "timestamp": "11:37 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Tmhare dhundhne se mil jayenge",
                "timestamp": "11:37 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Introvert hu mai real life me 🙂",
                "timestamp": "11:37 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Avi v ye chalu hi h",
                "timestamp": "11:37 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Haa to gumshuda ka naam kya tha",
                "timestamp": "11:37 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Ahem-",
                "timestamp": "11:37 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Chal jhuta",
                "timestamp": "11:37 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "This message was deleted",
                "timestamp": "11:37 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Ahem ji",
                "timestamp": "11:37 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Bekar me tag Krna band kro",
                "timestamp": "11:38 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Yh sab kya kr rha",
                "timestamp": "11:38 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 96548 62911",
                "message": "Woh alag tarah se try krra h",
                "timestamp": "11:38 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Aree naam toh pata kr ke dega .. maybe it can help",
                "timestamp": "11:38 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Use apna doc chahiye use dhund ne do",
                "timestamp": "11:38 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Tum toh bhai baar baar alg hi le jaa rahe ho",
                "timestamp": "11:38 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Jiske document gum hue hai usne galti kardi yaha inform karke",
                "timestamp": "11:39 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Yes it can",
                "timestamp": "11:39 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Wahi usko koi fikr hi nai h itna discussion uske upar ho gya h",
                "timestamp": "11:39 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Inko kuch aur lag raha he",
                "timestamp": "11:39 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "This message was deleted",
                "timestamp": "11:40 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Unemployment at its peak",
                "timestamp": "11:40 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Jiske gum hue uska toh pata hi nhi hai",
                "timestamp": "11:40 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Baat wo nhi",
                "timestamp": "11:40 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Lagta hai @918651270151 manually dhundhne chala gaya",
                "timestamp": "11:41 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "You deleted this message",
                "timestamp": "11:41 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Helping nature 🌚",
                "timestamp": "11:41 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Uski talash khatam nhi hoti",
                "timestamp": "11:41 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Yh kisi bhi had tk ja skta hai",
                "timestamp": "11:41 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Haan r8 let her handle it",
                "timestamp": "11:41 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Kabhi ghamand nahi kiya  😌",
                "timestamp": "11:41 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Wohi toh bc inhe samjh nhi aati",
                "timestamp": "11:41 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Yeah",
                "timestamp": "11:41 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "🤡",
                "timestamp": "11:42 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 91531 50416",
                "message": "How many affidavit are required for hotstel form jmi",
                "timestamp": "11:42 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 91531 50416",
                "message": "?",
                "timestamp": "11:42 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "You deleted this message",
                "timestamp": "11:42 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Ladkio ko 4 lag rhe",
                "timestamp": "11:42 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Oh so she is her",
                "timestamp": "11:42 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Filhaal avi nai chaiye",
                "timestamp": "11:42 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Ladko ko ek bhi nhi",
                "timestamp": "11:42 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Hnn tabhi toh arshad bhai pareshan h",
                "timestamp": "11:42 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 91531 50416",
                "message": "Okk",
                "timestamp": "11:42 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Galat aphwahe mat failao bhai, Upar bhi jaana h 🥲",
                "timestamp": "11:43 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "@918651270151 bhai jamia pahuch rha hai provost office dhundne ke liye or sare departments me announcement karwake aayega",
                "timestamp": "11:43 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Mujhe arshad bhai ki chinta andr hi andr se satai ja rahi hai",
                "timestamp": "11:43 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "🤣 <This message was edited>",
                "timestamp": "11:43 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "😂",
                "timestamp": "11:43 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Bhai aaj toh clg band rhta hain",
                "timestamp": "11:43 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "You deleted this message",
                "timestamp": "11:43 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Arshad bhai ko kon rok skta hai",
                "timestamp": "11:44 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Bhai ke irade",
                "timestamp": "11:44 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Oo 😳",
                "timestamp": "11:44 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Joke tha bhai 😭",
                "timestamp": "11:44 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Koi bhi her honi chahiye",
                "timestamp": "11:44 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Joke nhi bhai mujhe lagta hai tum sahi me kar sakte ho",
                "timestamp": "11:44 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "STK-20250726-WA0050.webp (file attached)",
                "timestamp": "11:45 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Chasma sahi krle apna pehle tu",
                "timestamp": "11:45 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Arey kya baat kr rhe ho Bhai jaan de dega",
                "timestamp": "11:45 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "IMG-20250723-WA0120.jpg (file attached)",
                "timestamp": "11:45 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Jaan pe baat aa gyi arshad bhai",
                "timestamp": "11:45 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Pie jaan bach ke rho",
                "timestamp": "11:45 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Kuch logo ki galt nazar hai",
                "timestamp": "11:46 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Appe",
                "timestamp": "11:46 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Guardian ke baare me aise baat nhi krte londe",
                "timestamp": "11:46 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Aaja bhai mere ghar pe wapas",
                "timestamp": "11:46 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Yaar edhar kitna censor Krna padta h",
                "timestamp": "11:46 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Python download Krna hai phir se",
                "timestamp": "11:47 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 95994 60379",
                "message": "Good night guys me chala sona jb tk tum log me se koi do lad lena 😂😂😂",
                "timestamp": "11:47 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "2 baje",
                "timestamp": "11:47 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Lunch karke aata hu",
                "timestamp": "11:47 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Nfc kab ??",
                "timestamp": "11:47 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "3 baje",
                "timestamp": "11:47 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Gar pe python install 🌚",
                "timestamp": "11:47 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Dean office ka asar aagya bhai me",
                "timestamp": "11:48 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Chal jaata hu mujhe kuchh ration bhi khareedna h aaj",
                "timestamp": "11:48 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Inta jaldi jaldi  nhi ho skta",
                "timestamp": "11:48 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Okay",
                "timestamp": "11:48 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Pie jaan don't you understand meme",
                "timestamp": "11:48 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Bhai mila tera khoya hua saman ?",
                "timestamp": "11:48 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Ya abhi bhi metro me dhundh rha h <This message was edited>",
                "timestamp": "11:48 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Pie jaan ik the meme u were talking Abt",
                "timestamp": "11:48 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Ss nhi hai shitt😭",
                "timestamp": "11:49 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Dlt kr diya tha kya esne saara msg ?",
                "timestamp": "11:49 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Kisi na kise ke phone me hoga group me bheja tha",
                "timestamp": "11:49 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Pie jaan then why you were making it some big shit??",
                "timestamp": "11:49 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Bc inke blackmailing khtam nhi hote😭😭",
                "timestamp": "11:50 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Pie jaan stfu",
                "timestamp": "11:50 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "U pmo",
                "timestamp": "11:50 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Stfu u pmo hgf ksn fufu",
                "timestamp": "11:50 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Pie jaan lad kyu rahe ho??",
                "timestamp": "11:50 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "kgf",
                "timestamp": "11:50 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Icl 😭",
                "timestamp": "11:50 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Mere kuch samjh nhi aa rha",
                "timestamp": "11:51 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Bachha hai tu abhi",
                "timestamp": "11:51 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Bahut badhiya",
                "timestamp": "11:51 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "This message was deleted",
                "timestamp": "11:51 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Avi sbi vlc mp",
                "timestamp": "11:51 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "This message was deleted",
                "timestamp": "11:51 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Sorry sorry",
                "timestamp": "11:51 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "This message was deleted",
                "timestamp": "11:51 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "😂😂😂",
                "timestamp": "11:52 AM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Yousuf Jamia WhatsApp",
                "message": "upgraded from regular to self finance need to report to the dean office.",
                "timestamp": "12:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Yousuf Jamia WhatsApp",
                "message": "Ye log paisa lene ke liye turant bulate hain",
                "timestamp": "12:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Yousuf Jamia WhatsApp",
                "message": "Dene ke liye aaj kal",
                "timestamp": "12:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Yousuf Jamia WhatsApp",
                "message": "😑",
                "timestamp": "12:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Double standard",
                "timestamp": "12:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Yousuf Jamia WhatsApp",
                "message": "😭😭",
                "timestamp": "12:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "joined",
                "message": "+91 81711 14186 joined using this group's invite link"
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "You deleted this message",
                "timestamp": "12:03 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 83188 89573",
                "message": "Bhai logo hostel documents submit karne ka date kab tak extend ho gya h",
                "timestamp": "12:06 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 83188 89573",
                "message": "Offline",
                "timestamp": "12:06 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Bhai orientation ke din jakr submit kr dena",
                "timestamp": "12:07 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Waise bhi aug 1 se classes start ho jayengi",
                "timestamp": "12:07 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Yep",
                "timestamp": "12:07 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Kisne bataya??",
                "timestamp": "12:07 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Maine pata Kiya",
                "timestamp": "12:07 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Pakka hai ye",
                "timestamp": "12:07 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Ek faculty se",
                "timestamp": "12:07 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Official grp admin ne bola h",
                "timestamp": "12:08 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Are toh phr woh log keh rahe the ki orientation 7-10 din chlta hai??",
                "timestamp": "12:08 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Kuch nhi hota aisa",
                "timestamp": "12:08 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Vehem",
                "timestamp": "12:08 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Bakwas kr rhe log",
                "timestamp": "12:08 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 84392 98163",
                "message": "Are bhai pakka hai kya bilkul 1 se class start hai",
                "timestamp": "12:08 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Bhai jab mai keh raha tha ki it doesn't make sense ki ek hafta orientation mile koi toh aakr gaali de gya tha😭",
                "timestamp": "12:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Hh bhai atleast usne toh YHI bola",
                "timestamp": "12:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 84392 98163",
                "message": "Yaar agar me orientation chordu",
                "timestamp": "12:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Yeah",
                "timestamp": "12:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "This message was deleted",
                "timestamp": "12:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Toh fir aage maja nhi aayega",
                "timestamp": "12:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "This message was deleted",
                "timestamp": "12:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 85297 26149",
                "message": "Mil gayi file thank you for your help guys",
                "timestamp": "12:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74794 16301",
                "message": "@918292848166 bhai pichle saal to chala tha 12 din",
                "timestamp": "12:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Oo congratulations nhi toh cbse office ke chakkar katne padte",
                "timestamp": "12:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74794 16301",
                "message": "Lekin phir bhi",
                "timestamp": "12:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Congratulations 🎉🎇👏",
                "timestamp": "12:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Ab uss admin ne YHI bola bhai",
                "timestamp": "12:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74794 16301",
                "message": "Official wale group ke?",
                "timestamp": "12:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Hm",
                "timestamp": "12:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74794 16301",
                "message": "Dekha jayega phir",
                "timestamp": "12:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74794 16301",
                "message": "Kal aa raha main",
                "timestamp": "12:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Bhai yeh sb jamia walo ki galti ki wajah se hua hai they said orientation will be \"from\" instead of \"on\"",
                "timestamp": "12:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Sahi h fir 1 seh college",
                "timestamp": "12:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74794 16301",
                "message": "Waise bhi hostel ka form dena tha",
                "timestamp": "12:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74794 16301",
                "message": "Nahi nahi",
                "timestamp": "12:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Tum log pehle din seh hi aaoge?",
                "timestamp": "12:12 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Bhai, ye ladkon ke pg jhaat jaise kyu hai?",
                "timestamp": "12:12 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Ya pg hostel dekhoge",
                "timestamp": "12:12 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Ok milte hain clg me for pata hai n aage kya hoga...",
                "timestamp": "12:12 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Ladke konse phool ki bahar h",
                "timestamp": "12:12 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "This message was deleted",
                "timestamp": "12:12 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Sed Lyf",
                "timestamp": "12:12 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Mard ka jeewan kathin hai Mitrrr",
                "timestamp": "12:12 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Chudenge woh toh aniwarya h",
                "timestamp": "12:12 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Flat lele bhai",
                "timestamp": "12:12 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Bhai kisi ko pg lena ho toh btao saath mein dekh lenge",
                "timestamp": "12:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "H mere paas toh paas meh",
                "timestamp": "12:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Noida meh bhi h",
                "timestamp": "12:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Kidhar bhi reh sakta",
                "timestamp": "12:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Flat ka hai plan but door padega",
                "timestamp": "12:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Noida se aayega daily",
                "timestamp": "12:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Nah Shaheen bagh meh uncle rehte",
                "timestamp": "12:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Udhar rahunga kuch din toh",
                "timestamp": "12:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Noida wali jagah pyari h",
                "timestamp": "12:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Shaheen bagh meh kon rahega",
                "timestamp": "12:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Shaheen bagh ke ander side jao Machi market lgta hai",
                "timestamp": "12:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Acha uncle logo ke sath rhoge fir whi restrictions",
                "timestamp": "12:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "null",
                "timestamp": "12:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "IMG-20250726-WA0061.jpg (file attached)",
                "timestamp": "12:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "IMG-20250726-WA0065.jpg (file attached)",
                "timestamp": "12:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "IMG-20250726-WA0063.jpg (file attached)",
                "timestamp": "12:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Noida area bhi thik hai",
                "timestamp": "12:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Noida wala idhar h",
                "timestamp": "12:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Legit",
                "timestamp": "12:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "I don't like shaheen bagh",
                "timestamp": "12:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Bekar sa h",
                "timestamp": "12:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Crowded and fucked",
                "timestamp": "12:15 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Ghar accha h andar seh bas",
                "timestamp": "12:15 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Botanical mein flat milega?",
                "timestamp": "12:15 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Nah no restrictions chill h",
                "timestamp": "12:15 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Brokers ko pakdo mil jayega",
                "timestamp": "12:15 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Fir thik shi hai",
                "timestamp": "12:15 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Muslim ko play dete nhi hai jaldi 😔",
                "timestamp": "12:15 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Flat",
                "timestamp": "12:15 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Hh yh bhi hai",
                "timestamp": "12:16 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "You try then muslim area waha dikkat nhi hogi",
                "timestamp": "12:16 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Muslim area sabse unsafe lgta hai",
                "timestamp": "12:16 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 81711 14186",
                "message": "Johri farm is best, crowded bilkul nahi he",
                "timestamp": "12:17 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Rahul Sharma naam bataiyo",
                "timestamp": "12:17 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Yeh bhi hai bhai lgta hai kabhi kabhi toh hum difficulty level high pe khel rahe hai",
                "timestamp": "12:17 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Exactly",
                "timestamp": "12:17 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Bhai",
                "timestamp": "12:17 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "No offence",
                "timestamp": "12:17 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Par acche nahi hote",
                "timestamp": "12:17 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Muslim area",
                "timestamp": "12:17 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Agree bhai",
                "timestamp": "12:17 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "True",
                "timestamp": "12:17 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Not all",
                "timestamp": "12:17 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Wtf",
                "timestamp": "12:18 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "😭 hot to get a flat 101",
                "timestamp": "12:18 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Bhai aadhar card bhi lete woh log..",
                "timestamp": "12:18 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "How*",
                "timestamp": "12:18 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Digi locket wala nakli banana kitna hi hard h",
                "timestamp": "12:18 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Whi toh documents submit Krna hota hai",
                "timestamp": "12:18 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Original lete hai maybe",
                "timestamp": "12:18 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Original loda mera digilocker wala edit maar ke print out dede",
                "timestamp": "12:19 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Original aadhar nahi h",
                "timestamp": "12:19 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Boldena",
                "timestamp": "12:19 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Security purpose ke liye original hi lelte hai",
                "timestamp": "12:19 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Edit karwaya tha",
                "timestamp": "12:19 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Toh aaya nahi",
                "timestamp": "12:19 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Exactly",
                "timestamp": "12:19 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Tbh ek glossy paper par print karwake",
                "timestamp": "12:19 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Laminate karwade",
                "timestamp": "12:19 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "No one will know",
                "timestamp": "12:19 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Try kr tu mil jaye toh mere ko bhi baatana",
                "timestamp": "12:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Ab pata chal rha hai college mein placement kyu nhi hote. Rehne ki jagah hi nhi hai",
                "timestamp": "12:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "If ever known then you gonna be fucked up",
                "timestamp": "12:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Pure btech hostel hote toh farak pdta",
                "timestamp": "12:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Fr",
                "timestamp": "12:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Mene ek baar ese wine shop wale ko pagal banaya tha",
                "timestamp": "12:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Wese toh",
                "timestamp": "12:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Direct FIR",
                "timestamp": "12:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Maan leta h",
                "timestamp": "12:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Lekin us din koi aur betha tha",
                "timestamp": "12:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Wine shop??",
                "timestamp": "12:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Choro i hate alcohol wese bhi",
                "timestamp": "12:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Wine shop tuh kya krra tha??",
                "timestamp": "12:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Bhai it's haram",
                "timestamp": "12:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "😰 uui maa",
                "timestamp": "12:21 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Fr bht dikaat hori idhar",
                "timestamp": "12:21 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "No one is truly halal",
                "timestamp": "12:21 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Dekho",
                "timestamp": "12:21 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Haram toh gaane sunna bhi hai",
                "timestamp": "12:21 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Exactly",
                "timestamp": "12:21 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Nhi hai kisne bola",
                "timestamp": "12:21 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Nhi hai",
                "timestamp": "12:21 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Gf bana bhi haram hai 😔",
                "timestamp": "12:21 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Haa instrumental",
                "timestamp": "12:21 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "H bhai",
                "timestamp": "12:21 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Hh toh teri hai",
                "timestamp": "12:21 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Real",
                "timestamp": "12:22 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Proof??",
                "timestamp": "12:22 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Google it",
                "timestamp": "12:22 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Yes real",
                "timestamp": "12:22 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "I did google it way before I think you should try it again",
                "timestamp": "12:22 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Bol toh aise rha ki chaar pach hai",
                "timestamp": "12:22 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Kya google kiya tha",
                "timestamp": "12:22 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "IMG-20250726-WA0066.jpg (file attached)",
                "timestamp": "12:23 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Waah bhai 4 shaadi halal hai aur gf haram😭😭",
                "timestamp": "12:23 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Here",
                "timestamp": "12:23 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Mubarak ho",
                "timestamp": "12:23 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Aur nahi toh kya",
                "timestamp": "12:23 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74794 16301",
                "message": "Iska ye matlab to nahi hai na ki ek haram kaam kar rahe ho to saare karo",
                "timestamp": "12:23 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Gf is haram",
                "timestamp": "12:23 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Bohut",
                "timestamp": "12:23 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Shaadi is halal",
                "timestamp": "12:23 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Isiliye I'm saying",
                "timestamp": "12:23 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "No one is truly halal",
                "timestamp": "12:23 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Meh toh especially nahi",
                "timestamp": "12:23 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Han agreed",
                "timestamp": "12:23 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74794 16301",
                "message": "Balki usse bhi bachne ki koshish karo",
                "timestamp": "12:23 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 97190 75855",
                "message": "Bhai bahut complicated issue hai ye",
                "timestamp": "12:23 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Haa lekin jitna jante hai utne haram kaamo se bachne ki koshish karni chahiye",
                "timestamp": "12:24 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Tbh it is old ideology, it needs reforms",
                "timestamp": "12:24 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Apna personal opinion diya maine",
                "timestamp": "12:24 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Bas",
                "timestamp": "12:24 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Agreed",
                "timestamp": "12:25 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Na bhai yha toh nhi ho rhe reform janta ko dekh lar",
                "timestamp": "12:25 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "I don't think so",
                "timestamp": "12:25 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Yahi woh problem h jab apna opinion aane lagta h na toh wahi religion bend hota h",
                "timestamp": "12:25 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Ese for some",
                "timestamp": "12:25 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "They'll start considering beer halal",
                "timestamp": "12:25 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Kya baat kar rahe ek din ka orientation thodi higa",
                "timestamp": "12:25 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Fruit beer is",
                "timestamp": "12:25 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "I do agree too there is some things in Islam that need a reform indeed",
                "timestamp": "12:25 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Jis cheez se dimag control mein na ho wo haram hai bhai",
                "timestamp": "12:25 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Ek din ka hi hoga",
                "timestamp": "12:25 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Usmeh alcohol nahi hota",
                "timestamp": "12:25 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Hh whi toh",
                "timestamp": "12:26 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Women ko lekar jitni cheeze h",
                "timestamp": "12:26 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "There's many progressive sects but most do not follow them",
                "timestamp": "12:26 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Like sufism",
                "timestamp": "12:26 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Arre Maine 2 3 log se poocha tha offline 5 6 din kaha tha unhone",
                "timestamp": "12:26 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Fr",
                "timestamp": "12:26 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "True",
                "timestamp": "12:26 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 97190 75855",
                "message": "+_+",
                "timestamp": "12:26 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Sufism is progressive?",
                "timestamp": "12:26 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "This message was deleted",
                "timestamp": "12:27 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "There's alvelism in turkey too",
                "timestamp": "12:27 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70546 11484",
                "message": "pakki baat hai?",
                "timestamp": "12:27 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Drinking is in their culture",
                "timestamp": "12:27 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Leave it",
                "timestamp": "12:27 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Hmm",
                "timestamp": "12:28 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Most of ppl are still conservative",
                "timestamp": "12:28 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Drinking toh dekho bohut subjective h",
                "timestamp": "12:28 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Tbh",
                "timestamp": "12:28 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "I don't like drinking",
                "timestamp": "12:28 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Ew sa h",
                "timestamp": "12:28 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "Yes",
                "timestamp": "12:28 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "IMG-20250726-WA0067.jpg (file attached)",
                "timestamp": "12:28 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Bc flat ki baat ho rhi thi",
                "timestamp": "12:28 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Stay high stay mast 🫦",
                "timestamp": "12:28 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Guys mera 2nd round mein. Regular to SF hua tha, toh mujhe bhi jaana hai kya",
                "timestamp": "12:29 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "No",
                "timestamp": "12:29 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "2nd round me gaye the?",
                "timestamp": "12:29 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70076 23544",
                "message": "As in 2nd ke baad",
                "timestamp": "12:29 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "This message was deleted",
                "timestamp": "12:29 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Haan Ofc",
                "timestamp": "12:29 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Fir nahi jana",
                "timestamp": "12:29 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "This message was deleted",
                "timestamp": "12:29 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Ab nahi jaana 👍",
                "timestamp": "12:29 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74794 16301",
                "message": "Haan haan wahi to kaha",
                "timestamp": "12:38 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 74794 16301",
                "message": "Jo kar rahe ho usse bhi bacho",
                "timestamp": "12:39 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Haa",
                "timestamp": "12:39 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "This message was deleted",
                "timestamp": "12:39 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 82735 62723",
                "message": "😂",
                "timestamp": "12:45 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "(I used chatgpt to correct my grammatical mistakes, but I wrote it myself)",
                "timestamp": "12:52 PM",
                "isCurrentUser": false
            },
            {
                "type": "added",
                "message": "~ Ahad added +91 83061 17469"
            },
            {
                "type": "message",
                "sender": "+91 76688 57743",
                "message": "Bhai ko Dharm guru ban na hai ?",
                "timestamp": "12:54 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Kya pata bht scope hai iss field me",
                "timestamp": "12:55 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76688 57743",
                "message": "Haa😂",
                "timestamp": "12:55 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Isko toh ai replace nhi kr skta",
                "timestamp": "12:55 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Zaid Kafka",
                "timestamp": "1:00 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "One must imagine sisyphus as happy",
                "timestamp": "1:00 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Yh sisyphus kya hai 😭",
                "timestamp": "1:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "All of us are selective sinners.we choose the sins we are comfortable with,and judge others that commit the ones we're not comfortable with",
                "timestamp": "1:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Thats what I said",
                "timestamp": "1:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Rip",
                "timestamp": "1:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Judge toh ni karta meh lmfao",
                "timestamp": "1:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Whatever floats ur boat",
                "timestamp": "1:03 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Yes you do in someway or everyone else",
                "timestamp": "1:03 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "I just make fun of people  🫦",
                "timestamp": "1:04 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Usmeh maza h",
                "timestamp": "1:04 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Making fun of another is also some kind of judgement",
                "timestamp": "1:04 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "🫦 bc itna kyu sochna",
                "timestamp": "1:05 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Chill",
                "timestamp": "1:05 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "How thoughtful so cute  🥺",
                "timestamp": "1:05 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Kon 4 log",
                "timestamp": "1:05 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Bht hua itna bhi deep nhi hai 😭",
                "timestamp": "1:05 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Zaid x adil",
                "timestamp": "1:05 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Kab link milegi",
                "timestamp": "1:05 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "😰",
                "timestamp": "1:05 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Bhai mujhe 4 logo se fark nhi padhta..",
                "timestamp": "1:06 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "5 logo se padhta hai",
                "timestamp": "1:06 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Good boyy",
                "timestamp": "1:06 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "😭 5vi ka humour",
                "timestamp": "1:06 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 97190 75855",
                "message": "It was not considered haram because it was considered wrong .",
                "timestamp": "1:06 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Teri gandi photos idhar bheju👹",
                "timestamp": "1:06 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "I ain't reading all that",
                "timestamp": "1:06 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Nahi nhi bhai",
                "timestamp": "1:06 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Philosophy rekhta par",
                "timestamp": "1:06 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Kare",
                "timestamp": "1:06 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 97190 75855",
                "message": "Who told u to? Lol",
                "timestamp": "1:06 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "+",
                "timestamp": "1:07 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Camus kha se aa gya",
                "timestamp": "1:07 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "+1",
                "timestamp": "1:07 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "+1",
                "timestamp": "1:07 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "U didn't get the point,",
                "timestamp": "1:07 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Bhai waise tumne thik kaha tha yaha discussion krne se fayeda nhi hai many ppl might feel offended",
                "timestamp": "1:08 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Idhar bhi LW RW",
                "timestamp": "1:08 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Those who have knowledge knows the reality, those who speak without knowledge...what can be done of them bruh...",
                "timestamp": "1:08 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 97190 75855",
                "message": "Atleast I did my part :)",
                "timestamp": "1:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 97190 75855",
                "message": "Now leave it.",
                "timestamp": "1:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Good boy 😉",
                "timestamp": "1:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "😭😭😭😭😭😭😭😭",
                "timestamp": "1:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Arguing with a religious person is as good as arguing with a rock",
                "timestamp": "1:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Calm down, what I said is true all u can do is argue",
                "timestamp": "1:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Bhai woh sb chodo yeh batao class kabse start hai??",
                "timestamp": "1:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "True",
                "timestamp": "1:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Bruhh chill 💀💀",
                "timestamp": "1:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "+1",
                "timestamp": "1:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "W",
                "timestamp": "1:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Gaandi college hostel nhi de rha mc inki gannd phat jaye",
                "timestamp": "1:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "STK-20250726-WA0070.webp (file attached)",
                "timestamp": "1:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Gaandu",
                "timestamp": "1:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Gandhi bhi gandu tha",
                "timestamp": "1:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Dono fine",
                "timestamp": "1:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "One evidence is enough for 40 persons of knowledge, however 40 evidences are not enough for a single person without knowledge",
                "timestamp": "1:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "+69",
                "timestamp": "1:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Din meh salt raat meh assault",
                "timestamp": "1:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Where are 40 evidence??",
                "timestamp": "1:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "There is no evidence, everything is jst bs",
                "timestamp": "1:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Tell me what evidence you need",
                "timestamp": "1:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Pehli baar kaam ki baat ki",
                "timestamp": "1:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "On what thing",
                "timestamp": "1:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Din me salt march raat me dandi march",
                "timestamp": "1:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "I'll give you",
                "timestamp": "1:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Bhai yha pe nhi kro baat kya pta ye log real life mein ladne aa Jaye kya bharosa",
                "timestamp": "1:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Gandhi be like mujhe kyun toda",
                "timestamp": "1:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Let it be.. yrr ladne ka fayda nhi hai. Placement waise hi chudi Hui hai",
                "timestamp": "1:12 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "STK-20250723-WA0136.webp (file attached)",
                "timestamp": "1:12 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Every magical things happened before cameras were not invented 😭",
                "timestamp": "1:12 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "+1",
                "timestamp": "1:12 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "-∞",
                "timestamp": "1:12 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Lgta hai apne baba ecosystem nhi suna",
                "timestamp": "1:12 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "No worries, whenever you want I'll always be available to give you the evidences wholeheartedly brother...",
                "timestamp": "1:12 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Nahi and when you ask for proof it's cited in a book",
                "timestamp": "1:12 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "BOOK MEH TOH RAMAYAN BHI LIKHI H YAR",
                "timestamp": "1:12 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Have you read that all??",
                "timestamp": "1:12 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Maan loge kya",
                "timestamp": "1:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Not everything, but I'll try with the best of my ability...",
                "timestamp": "1:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "U can make ur own story and tell ur child and grandchild",
                "timestamp": "1:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "BHAII HAINAA",
                "timestamp": "1:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Bruhh... I am saying again many ppl can get offended so pls be careful",
                "timestamp": "1:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Imagine making a story and then saying it came to me from the gods",
                "timestamp": "1:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "And I'm",
                "timestamp": "1:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "His best man",
                "timestamp": "1:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Offend hone do bhai, offend kyu ho rhe agar wo right hai",
                "timestamp": "1:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Exactly",
                "timestamp": "1:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "If they are certain",
                "timestamp": "1:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "+1",
                "timestamp": "1:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Bhai Zinda bhi rehna hai placement ke liye",
                "timestamp": "1:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Woh offend nahi honge",
                "timestamp": "1:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Hamari tadad jyada hai dar mat",
                "timestamp": "1:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Bwhaha",
                "timestamp": "1:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Mujhe nhi lgta",
                "timestamp": "1:15 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Bhai kaun kab kaha palat Jaye barosha nhi hai",
                "timestamp": "1:15 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Mujhe toh tere pe hi skh hai",
                "timestamp": "1:15 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "I am the man of my word..",
                "timestamp": "1:15 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "👍",
                "timestamp": "1:16 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Bhai I want to ask kl ek senior ne bataya tha ki scholarship ke liye bank account ko zero balance se saving me krwa lo but uske liye toh umar 18 honi chahiye na??..",
                "timestamp": "1:24 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 96548 62911",
                "message": "Hn to clg leave kr and ek drop lele",
                "timestamp": "1:25 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "😭😭 genuinely asking",
                "timestamp": "1:26 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "IMG-20250726-WA0071.jpg (file attached)",
                "timestamp": "1:26 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "This message was deleted",
                "timestamp": "1:27 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Abe chomu india ke hi clg ka hai",
                "timestamp": "1:28 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Pata hai but yeh beech wala hickey kyu de Raha hai??",
                "timestamp": "1:28 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Puch usse ja kr",
                "timestamp": "1:28 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 72678 86354",
                "message": "I believe, u have proper knowledge abt the rlgn and philosophy as well.",
                "timestamp": "1:44 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 91531 50416",
                "message": "hgr_undertaking_2025july15.pdf (file attached)",
                "timestamp": "2:04 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 91531 50416",
                "message": "Is this also necessary for jmi hostel?",
                "timestamp": "2:04 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Hostel allot hone ke baad shayad",
                "timestamp": "2:04 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "I don't know Nd I don't care tbh.",
                "timestamp": "2:05 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 91531 50416",
                "message": "1 and last page will be filled after allotment <This message was edited>",
                "timestamp": "2:05 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 91531 50416",
                "message": "Any girl here applied for jmi hostel...?",
                "timestamp": "2:07 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Hey Girl, Join the girls only group",
                "timestamp": "2:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Mat kar lala",
                "timestamp": "2:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Phir se suru kr diya",
                "timestamp": "2:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 91531 50416",
                "message": "Link",
                "timestamp": "2:09 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Tu hi  advertisement kr rha kya girls grp ka",
                "timestamp": "2:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Wait",
                "timestamp": "2:10 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Helping Nature*",
                "timestamp": "2:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "For girls only",
                "timestamp": "2:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "M i right",
                "timestamp": "2:11 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Kuchh batein mujhe aisi pata hai jo leak nhi honi chahiye",
                "timestamp": "2:12 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Par dekh le tu ab",
                "timestamp": "2:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Konse-",
                "timestamp": "2:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Bhai meri bhi help kr phir",
                "timestamp": "2:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Python download Krde mera aake",
                "timestamp": "2:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Gandi photos bheju teri👹",
                "timestamp": "2:13 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Tu to soo rha h",
                "timestamp": "2:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Esi esi gaaliya deta mai tujhe",
                "timestamp": "2:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Lekin family dekhti h ab kya hi karein",
                "timestamp": "2:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Follow this link to join my WhatsApp group: https://chat.whatsapp.com/JnZZKnTRxUz9H3xJVZ2XHl?mode=r_t",
                "timestamp": "2:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "2 din plan cancel Kiya h tune",
                "timestamp": "2:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Mai so nhi rha mera mann nhi hai jane ka",
                "timestamp": "2:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Kyu kya hui",
                "timestamp": "2:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Ye purana h bhai",
                "timestamp": "2:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Naya wala bhi hai kya??",
                "timestamp": "2:15 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Abe link toh kaam kr rha hai",
                "timestamp": "2:15 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Link",
                "timestamp": "2:15 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "VID-20250726-WA0073.mp4 (file attached)",
                "timestamp": "2:19 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Yh ceo inte bha*we kyu hote hain",
                "timestamp": "2:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Software engineering will die but it will kill every other profession first",
                "timestamp": "2:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Yep",
                "timestamp": "2:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Promotion krne ke liye",
                "timestamp": "2:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 81711 14186",
                "message": "That's why he hired tarpit bansal fo 800cr",
                "timestamp": "2:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Yahi sooch ke jinda hu abhi tak",
                "timestamp": "2:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "Zuck bc",
                "timestamp": "2:21 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Jokerberg",
                "timestamp": "2:21 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Bhai unofficial hai 🙏",
                "timestamp": "2:21 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "🤡",
                "timestamp": "2:21 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "Sabse badiya hai Property dealing kro bc",
                "timestamp": "2:21 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Jaise wha compitition nhi hai",
                "timestamp": "2:21 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Plumber ban jao bc",
                "timestamp": "2:22 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "You deleted this message",
                "timestamp": "2:22 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "🌚",
                "timestamp": "2:22 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "You deleted this message",
                "timestamp": "2:22 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 76784 42719",
                "message": "I hate my mind",
                "timestamp": "2:22 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "This message was deleted",
                "timestamp": "2:22 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "You deleted this message",
                "timestamp": "2:22 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "This message was deleted",
                "timestamp": "2:22 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "You deleted this message",
                "timestamp": "2:22 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "Astronaut",
                "timestamp": "2:22 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "Teacher",
                "timestamp": "2:22 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "Bdhaiya episode tha",
                "timestamp": "2:22 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "You deleted this message",
                "timestamp": "2:22 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "You deleted this message",
                "timestamp": "2:23 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "This message was deleted",
                "timestamp": "2:23 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "You deleted this message",
                "timestamp": "2:23 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "This message was deleted",
                "timestamp": "2:23 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "STK-20250724-WA0045.webp (file attached)",
                "timestamp": "2:23 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Aasim Bhai Jamia WhatsApp Discord",
                "message": "This message was deleted",
                "timestamp": "2:23 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 73797 87138",
                "message": "This message was deleted",
                "timestamp": "2:24 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "This message was deleted",
                "timestamp": "2:24 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Boys only naam ka grp bana hai bhai",
                "timestamp": "2:24 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Kyu barbaad kr rhe ho edhar ka decorem <This message was edited>",
                "timestamp": "2:24 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "This message was deleted",
                "timestamp": "2:31 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "This message was deleted",
                "timestamp": "2:31 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "This message was deleted",
                "timestamp": "2:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 72678 86354",
                "message": "This message was deleted",
                "timestamp": "2:35 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Hostel ki online date 1 august tak extend kardi",
                "timestamp": "4:46 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 83188 89573",
                "message": "Same bhai",
                "timestamp": "4:46 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 83188 89573",
                "message": "Koi btado bhai logo",
                "timestamp": "4:47 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 81711 14186",
                "message": "Obviously wo bhi extend hogyi hogi,",
                "timestamp": "4:47 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 83188 89573",
                "message": "Kabtak",
                "timestamp": "4:47 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 83188 89573",
                "message": "1 tak",
                "timestamp": "4:47 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "To date kya hogi wo to aya nhi",
                "timestamp": "4:47 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 72678 86354",
                "message": "2 week orientation me krenge kya bhai koi idea?",
                "timestamp": "4:48 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "College tour",
                "timestamp": "4:48 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 81711 14186",
                "message": "31 ko aawoge, us din submit kardena,",
                "timestamp": "4:48 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Aur sab info",
                "timestamp": "4:48 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 81711 14186",
                "message": "Esa kuch nahi, simple sa orientation hota he 1 din ka",
                "timestamp": "4:49 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "To",
                "timestamp": "4:51 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Campus tour nhi dete??",
                "timestamp": "4:51 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Itna soch ke mat likh soja",
                "timestamp": "4:52 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Campus tour and all hota hai",
                "timestamp": "4:52 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 81711 14186",
                "message": "Jamia bhut bda he, aur department pass pass bhi nahi he",
                "timestamp": "4:52 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Last year bhi 2 hafte chla tha",
                "timestamp": "4:52 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Faculty of engineering and technology ka denge",
                "timestamp": "4:52 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 81711 14186",
                "message": "Bhai le Lena to, tujhe de denge tour,",
                "timestamp": "4:53 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Ok",
                "timestamp": "4:57 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "1 din ka nhi hoga",
                "timestamp": "4:59 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Minimum 10 days",
                "timestamp": "4:59 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Ka hota",
                "timestamp": "4:59 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Saare departments ke teacher aakr apna introduction denge",
                "timestamp": "4:59 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Hnn",
                "timestamp": "4:59 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Bhai 10 nhi 15",
                "timestamp": "4:59 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Har teacher kam se kam 30 min toh speech de hi deta hai, zyada se zyada 1hr bhi lg skta hai",
                "timestamp": "5:00 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Yes",
                "timestamp": "5:00 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Toh time toh lgega kaafi",
                "timestamp": "5:00 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Worst thing? Iski attendance bhi lgegi most probably... <This message was edited>",
                "timestamp": "5:01 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Ha",
                "timestamp": "5:01 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "First day sw",
                "timestamp": "5:01 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Bhai ye 14 days kaun aaega",
                "timestamp": "5:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "STK-20250722-WA0169.webp (file attached)",
                "timestamp": "5:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Attendance lgego",
                "timestamp": "5:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Main to soch rha tha 2 din aa jaaunga bs",
                "timestamp": "5:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "College bhi to aoge hi",
                "timestamp": "5:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "STK-20250725-WA0053.webp (file attached)",
                "timestamp": "5:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Hm beech beech mai",
                "timestamp": "5:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Main soch rha tha 2 days attend krke firse hometown chla jaaun",
                "timestamp": "5:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "And then jb classes start ho tb aaun",
                "timestamp": "5:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "OMG hometown",
                "timestamp": "5:03 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "Yesss",
                "timestamp": "5:03 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 63062 21042",
                "message": "STK-20250725-WA0094.webp (file attached)",
                "timestamp": "5:03 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "IMG-20250726-WA0124.jpg (file attached)",
                "timestamp": "5:29 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Gaddar Spotted 😤😤",
                "timestamp": "5:29 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Ladkio ke group mai ek behrupiya",
                "timestamp": "5:29 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Unko pareshaan krta hua",
                "timestamp": "5:29 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Ladkio ispe case kardo",
                "timestamp": "5:29 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Gaddar spotted",
                "timestamp": "5:29 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "+1",
                "timestamp": "5:30 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "This message was deleted",
                "timestamp": "5:30 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "This message was deleted",
                "timestamp": "5:30 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Yeah",
                "timestamp": "5:30 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Yeah es grp ka admin apne ko admin nhi bana rha alag dimaag kharab hua h <This message was edited>",
                "timestamp": "5:31 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "This message was deleted",
                "timestamp": "5:31 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Iski fielding set krni padegi",
                "timestamp": "5:31 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Dlt karde lala",
                "timestamp": "5:31 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "VID-20250726-WA0125.mp4 (file attached)",
                "timestamp": "5:31 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Galat karrha h",
                "timestamp": "5:31 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Iska pak drama khatam kyu nhi ho raha",
                "timestamp": "5:31 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Usko disturb kardiya drama dekh rha hoga",
                "timestamp": "5:31 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Udhar jaane ki planning krrha hoga ab",
                "timestamp": "5:31 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "You deleted this message",
                "timestamp": "5:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Admin to tum ho bhai tum bhi to gaddar hue",
                "timestamp": "5:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 97190 75855",
                "message": "Bhai Classes 1st aug se hai ya orientation hi chalta rahega 10-15 days ?",
                "timestamp": "5:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "1 Aug as per sources",
                "timestamp": "5:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Another mystery",
                "timestamp": "5:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Kahaan ka admin bhai 😭",
                "timestamp": "5:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Nhi bhai Orientation chalega kuch din",
                "timestamp": "5:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Ek hi grp me admin hu mai Wo hai Boys only",
                "timestamp": "5:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Tum bhi to ho usmai",
                "timestamp": "5:32 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Areey nhi hu Bhai",
                "timestamp": "5:33 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 97190 75855",
                "message": "STK-20250726-WA0126.webp (file attached)",
                "timestamp": "5:33 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Group mai",
                "timestamp": "5:33 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Nope nope",
                "timestamp": "5:33 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 97190 75855",
                "message": "Vohi toh bhai",
                "timestamp": "5:33 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Fir ss kaise mila",
                "timestamp": "5:33 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Classes 10-15 aug se shuru hogi",
                "timestamp": "5:33 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Confirm",
                "timestamp": "5:33 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Yeh arshad keh raha 1 se",
                "timestamp": "5:34 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Are bhai 1 se nhi hongi",
                "timestamp": "5:34 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Ab dekho kab hota h <This message was edited>",
                "timestamp": "5:34 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "1 se hona chahiye",
                "timestamp": "5:34 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Kal seniors wale group me bhi bola tha ki 10 din ke aas pas hoga orientation",
                "timestamp": "5:34 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "This message was deleted",
                "timestamp": "5:34 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Iske liye protest kare kya",
                "timestamp": "5:34 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Haan",
                "timestamp": "5:34 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Suno to ek idea h",
                "timestamp": "5:35 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Aur tu arshad kya kr rha grp me 🌚",
                "timestamp": "5:35 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Nhi",
                "timestamp": "5:35 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Forwarded msg*",
                "timestamp": "5:35 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Jaate hi khof beth jayega dean office me hamara",
                "timestamp": "5:35 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Ye ss kisne liya",
                "timestamp": "5:35 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Jaate hi bhaga denge",
                "timestamp": "5:35 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "@919911189782 ????????? Ss kaise liya????",
                "timestamp": "5:35 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "@918651270151 ne",
                "timestamp": "5:35 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Ohh hoo kon bheja 😂",
                "timestamp": "5:35 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Wo bolra tune",
                "timestamp": "5:35 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Boys only me h na tu",
                "timestamp": "5:35 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Are bhai isne mere pe bheja",
                "timestamp": "5:35 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Ki me bhej du group me lekin mene nhi bheja",
                "timestamp": "5:36 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Nai hu usme",
                "timestamp": "5:36 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Krde add",
                "timestamp": "5:36 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Proof dikhau kya",
                "timestamp": "5:36 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Aaja udhar pinned h sender",
                "timestamp": "5:36 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Wo bolra aqif ne bheja",
                "timestamp": "5:36 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Ye @918651270151 meri fielding set kar rha",
                "timestamp": "5:36 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Krdee addddd",
                "timestamp": "5:36 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Haaa bc",
                "timestamp": "5:36 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Isne teri fielding lagadi",
                "timestamp": "5:36 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Don't worry i know whole story <This message was edited>",
                "timestamp": "5:37 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Arshad bhai kaafi pahuche hoye aadmi h",
                "timestamp": "5:37 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Be careful ☠️",
                "timestamp": "5:37 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Jinse bhi bheja uske paas Aasim Bhai Jamia WhatsApp Discord ka number save h",
                "timestamp": "5:37 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Haa",
                "timestamp": "5:37 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Only @918651270151",
                "timestamp": "5:37 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 97190 75855",
                "message": "Discord master blaster toh sirf ek hai",
                "timestamp": "5:37 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Discord wala",
                "timestamp": "5:37 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 97190 75855",
                "message": "STK-20250726-WA0128.webp (file attached)",
                "timestamp": "5:37 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Sirf wahi hai",
                "timestamp": "5:37 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Are mere dm me se delete kardiya 🤣 mastermind ban rha hai",
                "timestamp": "5:37 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Sao boys only me bhi discuss hoskti h",
                "timestamp": "5:37 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Mujhe dm karke bolra arshad ye aqif ne bheja",
                "timestamp": "5:38 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Ss",
                "timestamp": "5:38 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Londa sharma rha",
                "timestamp": "5:38 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Are bhai boys only wale ki chats padho samjh aajayega",
                "timestamp": "5:38 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Bas ye game khel rha hai mere sath msg delete karke",
                "timestamp": "5:38 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Hm",
                "timestamp": "5:38 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Iski fielding lagani padegi ab",
                "timestamp": "5:39 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 78386 39074",
                "message": "Sharma nhi rha Damage control kr rha hai",
                "timestamp": "5:39 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "IMG-20250726-WA0129.jpg (file attached)",
                "timestamp": "5:39 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Nigga who tf is this",
                "timestamp": "5:39 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Saiyaara Part 2 Hero",
                "timestamp": "5:39 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "𝑆𝒉𝑎𝒉𝑎𝑏✨🖤 Jamia",
                "message": "Haan Bhai",
                "timestamp": "5:39 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "😂😂",
                "timestamp": "5:40 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "This message was deleted",
                "timestamp": "5:50 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "This message was deleted",
                "timestamp": "5:51 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "You deleted this message",
                "timestamp": "5:51 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "You deleted this message",
                "timestamp": "5:52 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "You deleted this message",
                "timestamp": "5:52 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99068 85579",
                "message": "Orientation kb hogi kisi ko idea hai?",
                "timestamp": "5:59 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "January me",
                "timestamp": "6:00 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Galat mat bol bhai",
                "timestamp": "6:00 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "14 February*",
                "timestamp": "6:01 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99068 85579",
                "message": "Chalo tb tk drop ki tayari karu ga",
                "timestamp": "6:01 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "30**",
                "timestamp": "6:01 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99068 85579",
                "message": "Sahi hai",
                "timestamp": "6:01 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "2 october bhai gandhi jayanti aur orientation same day ho jayega",
                "timestamp": "6:01 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Tu phir se aagya back**** krne",
                "timestamp": "6:01 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Form fill kr diya n",
                "timestamp": "6:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Priority order shi se bhara ki nhi",
                "timestamp": "6:02 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99068 85579",
                "message": "STK-20250726-WA0146.webp (file attached)",
                "timestamp": "6:03 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99068 85579",
                "message": "Abhi web site pe nhi hai",
                "timestamp": "6:03 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "Pls don't start again",
                "timestamp": "6:03 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Oooh pane phir se meri knowledge badha di 🥸",
                "timestamp": "6:04 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Kal try kriyo ho jayega",
                "timestamp": "6:04 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Mai chala ek website banane jaldi se 😁",
                "timestamp": "6:04 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99068 85579",
                "message": "Vpn use karle",
                "timestamp": "6:04 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Tum sab log bhi use kar paoge 🌚",
                "timestamp": "6:04 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Maine bhi apna pahla code likh liya ab batao Jara se hacking kaise karte hain",
                "timestamp": "6:05 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99068 85579",
                "message": "Lucky patcher",
                "timestamp": "6:05 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "VID-20250726-WA0147.mp4 (file attached)",
                "timestamp": "6:07 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "print(\"Your Computer is Hacked\")",
                "timestamp": "6:07 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "..",
                "timestamp": "6:07 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Ahem-",
                "timestamp": "6:07 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Areey ruko abhi start krta hu banana",
                "timestamp": "6:08 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Maja aayega dekhna 1 hafte me ready kar dunga",
                "timestamp": "6:08 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Bana kya raha ?",
                "timestamp": "6:14 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Kuchh aise bht jyada to use me nahi aayega par agar use me aaya to lifesaving hoga",
                "timestamp": "6:15 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Bc nuclear bana rha kya",
                "timestamp": "6:15 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Kam use hoga lekin life saving hoga ??",
                "timestamp": "6:16 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Whatsapp ka chat export karke daalo wahaan pe exact clone ho jayega",
                "timestamp": "6:16 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Kasam se bhai jitna faltu dimag Tera chalta hai na, wo choorr idea acha hai",
                "timestamp": "6:16 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Bana kaam toh aayega",
                "timestamp": "6:16 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Haan, ss ka chakkar khatam",
                "timestamp": "6:16 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Par isse life save kese hogi",
                "timestamp": "6:17 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "🤣",
                "timestamp": "6:17 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Mohd Aqif Boys Only Group",
                "message": "Bana bhai fir",
                "timestamp": "6:17 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Oye ye clone ka samajh na aaya",
                "timestamp": "6:17 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Stalking krne ke liye basically.",
                "timestamp": "6:18 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "mohdishan Jamia Reddit Instagram",
                "message": "Ohhh",
                "timestamp": "6:18 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 99909 24032",
                "message": "This product is very humane",
                "timestamp": "6:18 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Yeah",
                "timestamp": "6:18 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "SaaS product",
                "timestamp": "6:18 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Usecase kya hoga",
                "timestamp": "6:18 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "+91 70002 35797",
                "message": "Cybersecurity meh aana h?",
                "timestamp": "6:19 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Jaise tu es grp ka chat export kar",
                "timestamp": "6:19 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Bola toh stalk krne me aasani hoga",
                "timestamp": "6:19 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Pura ka pura dusre ko bhej skta h",
                "timestamp": "6:19 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Aise long ss nhi lene honge",
                "timestamp": "6:19 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Zaid Rahman Jamia Reddit",
                "message": "Nhi bhai",
                "timestamp": "6:19 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Waise nhi bhej sakte?",
                "timestamp": "6:19 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Abhi mai export karke",
                "timestamp": "6:19 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Pdf bhejdu",
                "timestamp": "6:19 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Par wo UI nahi milega na",
                "timestamp": "6:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Mai UI banaunga eska",
                "timestamp": "6:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Same abhi ke jaisa interface ayga kya",
                "timestamp": "6:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "To stalking kaise hua ye",
                "timestamp": "6:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Maine nahi kaha stalking h",
                "timestamp": "6:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Anonymousity badh jayegi",
                "timestamp": "6:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "No",
                "timestamp": "6:20 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "As your data is exposed in the ss",
                "timestamp": "6:21 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "I'll also clean the saved contacts in next versions",
                "timestamp": "6:21 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Aur esi bahane ek naya framework dekh Lerha hu",
                "timestamp": "6:22 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Fast API 😌",
                "timestamp": "6:22 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Public",
                "timestamp": "6:26 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Api",
                "timestamp": "6:27 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Syed Navish Jamia whatsapp",
                "message": "Hi to lega",
                "timestamp": "6:27 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Wo framework hai web development ka",
                "timestamp": "6:28 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Maine aise flask use krta hu",
                "timestamp": "6:28 PM",
                "isCurrentUser": false
            },
            {
                "type": "message",
                "sender": "Arshad Ali",
                "message": "Par abhi espe switch Krna h",
                "timestamp": "6:28 PM",
                "isCurrentUser": false
            }
        ]
    }
]
        const contentByDates1 = [
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
