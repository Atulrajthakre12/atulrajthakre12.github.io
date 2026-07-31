
import requests

# लक्ष्य URL (वह वेबसाइट जिसे आप एक्सेस करना चाहते हैं)
url = 'https://www.google.com'

print(f"अनुरोध (request) भेजा जा रहा है: {url} ...")

try:
    # GET अनुरोध (request) भेजें
    response = requests.get(url)

    # जाँच करें कि क्या अनुरोध सफल रहा (status code 200 का अर्थ है सफलता)
    if response.status_code == 200:
        print("✅ सफलता! वेबसाइट से डेटा प्राप्त हुआ।")
        print("-" * 30)
        # प्रतिक्रिया (response) के पहले 500 वर्ण (characters) प्रिंट करें
        # (पूरा HTML बहुत बड़ा होता है)
        print(response.text[:500])
        print("-" * 30)
        print("(... शेष HTML काट दिया गया है ...)")
    else:
        print(f"❌ त्रुटि: वेबसाइट से संपर्क करने में विफल। Status code: {response.status_code}")

except requests.exceptions.RequestException as e:
    # अगर कोई नेटवर्क त्रुटि या अन्य समस्या होती है
    print(f"⚠️ एक त्रुटि हुई: {e}")