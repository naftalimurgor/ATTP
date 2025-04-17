from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)
model = joblib.load("trust_model.pkl")

@app.route('/score', methods=['POST'])
def score():
    # The data should come from an oracle
    data = request.json
    features = np.array([[data['reputation'], data['latency'], data['success_rate'], data['confidence_score']]])
    prob = model.predict_proba(features)[0][1]
    return jsonify({"trust_score": prob})

app.run(port=5001)