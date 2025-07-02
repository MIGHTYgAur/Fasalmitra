from flask import Flask, request, jsonify
from PIL import Image
from .utils.preprocessing import preprocess_image
import numpy as np
import tensorflow as tf
from flask_cors import CORS
from tensorflow.keras.models import load_model
import os

app = Flask(__name__)
CORS(app, origins=[os.environ.get("BACKEND_URL", "http://localhost:5000")])

current_dir = os.path.dirname(os.path.abspath(__file__))
# Load the model from the specified path
file_path = os.path.join(current_dir, "..", "model", "model_wheat_vgg.h5")
model = load_model(file_path)
print("Model loaded")

class_names = ["Brown Rust", "Healthy", "Yellow Rust"]


@app.route('/')
def index():
    return jsonify(message="Welcome to the Wheat Disease Prediction API"), 200

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify(error="No file part in the request"), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify(error="No file selected"), 400

    try:
        image = Image.open(file)
        processed_image = preprocess_image(image, target_size=(256, 256))  
    except Exception as e:
        return jsonify(error="Error processing image"), 400

    predictions = model.predict(processed_image)                       
    predicted_class_index = np.argmax(predictions, axis=1)[0]
    predicted_class_name = class_names[predicted_class_index]
    predicted_probability = predictions[0][predicted_class_index]

    return jsonify({
        'predicted_class': predicted_class_name,
        'probability': float(predicted_probability)
    })

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))  # Use 5000 locally, $PORT on Railway
    app.run(host="0.0.0.0", port=port)