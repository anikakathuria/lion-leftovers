from flask import Flask, jsonify
import requests

app = Flask(__name__)

# Microservice URLs
INVENTORY_SERVICE_URL = 'http://inventory-service'
ORDER_SERVICE_URL = 'http://order-service'
FEEDBACK_SERVICE_URL = 'http://feedback-service'

def safe_request(url):
    try:
        return requests.get(url).json()
    except requests.exceptions.RequestException:
        return None  # Or handle appropriately

@app.route('/summary')
def get_summary():
    inventory = safe_request(f"{INVENTORY_SERVICE_URL}/items")
    orders = safe_request(f"{ORDER_SERVICE_URL}/orders")
    feedback = safe_request(f"{FEEDBACK_SERVICE_URL}/feedback")

    return jsonify({
        'inventory': inventory or "Inventory service unavailable",
        'orders': orders or "Order service unavailable",
        'feedback': feedback or "Feedback service unavailable"
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)
