import zipfile
import os

# Get current file's directory (i.e., app/)
current_dir = os.path.dirname(__file__)

# Move one level up (i.e., project/)
parent_dir = os.path.abspath(os.path.join(current_dir, os.pardir))

# Path to zip file in parent
zip_path = os.path.join(parent_dir, "chats-data.zip")

# Path to extract
extract_path = os.path.join(parent_dir, "extracted_files")

with zipfile.ZipFile(zip_path, 'r') as zip_ref:
    zip_ref.extractall(extract_path)

print("ZIP extracted to:", extract_path)
