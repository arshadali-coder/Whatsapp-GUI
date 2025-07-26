import re
from datetime import datetime

def parse_whatsapp_chat(file_path):
    messages = []
    pattern = r"^(\d{1,2}/\d{1,2}/\d{4}), (\d{1,2}:\d{2} ?[ap]m) - (.*?): (.*)"

    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    for line in lines:
        match = re.match(pattern, line)
        if match:
            date_str = match.group(1)
            time_str = match.group(2).replace(" ", "").lower()
            sender = match.group(3)
            message = match.group(4)

            try:
                timestamp = datetime.strptime(f"{date_str} {time_str}", "%d/%m/%Y %I:%M%p")
            except ValueError:
                continue  # skip if datetime fails

            messages.append({
                "sender": sender,
                "message": message,
                "time": timestamp.strftime("%b %d, %I:%M %p")
            })

    return messages
