from flask import Flask, request, jsonify
from PIL import Image
import numpy as np
import tensorflow as tf
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Load the model
model = tf.keras.models.load_model('model/model_wheat.h5')

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
