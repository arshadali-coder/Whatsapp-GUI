from flask import Flask, render_template
from whatsapp_parser import parse_whatsapp_chat
import os

app = Flask(__name__)

@app.route("/")
def home():
    import os
    base_dir = os.path.dirname(__file__)
    file_path = os.path.join(base_dir, "chat.txt")
    messages = parse_whatsapp_chat(file_path)
    return render_template("chat.html", messages=messages)

if __name__ == "__main__":
    app.run(debug=True)
