from flask import Flask, request, jsonify
from PIL import Image
from utils.preprocessing import preprocess_image
import numpy as np
import tensorflow as tf
from flask_cors import CORS
from tensorflow.keras.models import load_model
import os

app = Flask(__name__)
CORS(app)
# Get the directory of the current script
current_dir = os.path.dirname(os.path.abspath(__file__))

# Build the path to the model file
file_path = os.path.join(current_dir, "..", "..", "model", "model_wheat.h5")
print(file_path)
# Load the model using the file path

model = load_model(file_path)

# # Load the model
# model = tf.keras.models.load_model('C:/Users/Gaurav Gaur/Documents/GitHub/Fasalmitra/model/model_wheat.h5')

# Define the class names
class_names = ["Brown Rust","Healthy","Yellow Rust"]


@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify(error="No file part in the request"), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify(error="No file selected for uploading"), 400

    # Process the file
    image = Image.open(file)
    processed_image = preprocess_image(image, target_size=(256, 256))
    
    # Get predictions
    predictions = model.predict(processed_image)
    predicted_class_index = np.argmax(predictions, axis=1)[0]
    predicted_class_name = class_names[predicted_class_index]
    predicted_probability = predictions[0][predicted_class_index]

    # Return the class name and the probability
    return jsonify({
        'predicted_class': predicted_class_name,
        'probability': float(predicted_probability)
    })

if __name__ == '__main__':
    app.run(debug=True)
