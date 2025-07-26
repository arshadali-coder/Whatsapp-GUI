import requests
import json
import time

# === CONFIGURATION ===
API_KEY = "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"  # Replace with your key
INPUT_JSON = "structured_chat.json"    # Your input file
OUTPUT_JSON = "cleaned_whatsapp_data.json"

# === SETUP ===
HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}
API_URL = "https://api.perplexity.ai/chat/completions"

# === Load data ===
with open(INPUT_JSON, "r", encoding="utf-8") as f:
    data = json.load(f)

# === Step 1: Extract all unique senders ===
raw_senders = set()

for day in data:
    for message in day.get("content", []):
        sender = message.get("sender")
        if sender:
            raw_senders.add(sender)

# === Step 2: Clean each name using Perplexity ===
def clean_name(name):
    prompt = f"Extract only the real human name from the following contact string by removing slang, location or group identifiers:\n\nInput: {name}\nOutput:"
    payload = {
        "model": "sonar-pro",
        "messages": [{"role": "user", "content": prompt}]
    }
    try:
        response = requests.post(API_URL, headers=HEADERS, json=payload)
        if response.status_code == 200:
            return response.json()["choices"][0]["message"]["content"].strip()
        else:
            print(f"Error for {name}: {response.status_code}")
            return name
    except Exception as e:
        print(f"Exception for {name}: {e}")
        return name

# === Clean names and store mapping ===
sender_map = {}

for i, raw_name in enumerate(raw_senders):
    print(f"[{i+1}/{len(raw_senders)}] Cleaning: {raw_name}")
    cleaned = clean_name(raw_name)
    sender_map[raw_name] = cleaned
    time.sleep(1.2)  # avoid rate limit

# === Step 3: Replace names in data ===
for day in data:
    for message in day.get("content", []):
        sender = message.get("sender")
        if sender and sender in sender_map:
            message["sender"] = sender_map[sender]

# === Step 4: Save the updated JSON ===
with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print(f"\n✅ Done! Cleaned JSON saved to: {OUTPUT_JSON}")
