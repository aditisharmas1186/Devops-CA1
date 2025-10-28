# src/app.py
from flask import Flask, request, jsonify
import joblib
import pandas as pd
import os


MODEL_PATH = os.environ.get('MODEL_PATH', 'src/model.joblib')
app = Flask(__name__)


model = joblib.load(MODEL_PATH)


@app.route('/predict', methods=['POST'])
def predict():
payload = request.json
# expect JSON with list of records
df = pd.DataFrame(payload['instances'])
preds = model.predict(df)
return jsonify({'predictions': preds.tolist()})


@app.route('/health')
def health():
return jsonify({'status': 'ok'})


if __name__ == '__main__':
app.run(host='0.0.0.0', port=5000)
