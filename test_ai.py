import requests
import json

# 1. Create a person
url = "http://127.0.0.1:8000/api/resume-jibon/"
data = {
    "nam_dham": "Test User 123",
    "contact_shongjog": "test@example.com",
    "skills_khomota": "Python, Django, Sleeping",
    "experience_oviggota": [],
    "education_porashona": []
}
headers = {'Content-Type': 'application/json'}

try:
    print("Creating Resume Jibon...")
    response = requests.post(url, json=data, headers=headers)
    print("Create Status:", response.status_code)
    try:
        resume_id = response.json()['id']
        print("Resume ID:", resume_id)
        
        # 2. Call AI
        print("Calling AI Process (Process Koro)...")
        ai_url = f"http://127.0.0.1:8000/api/resume-jibon/{resume_id}/process_koro_resume/"
        ai_response = requests.post(ai_url, headers=headers)
        print("AI Status:", ai_response.status_code)
        print("AI Output:", json.dumps(ai_response.json(), indent=2))
        
    except KeyError:
        print("Failed to get ID from creation response")
        print(response.text)

except Exception as e:
    print("Error:", e)
