from PIL import Image
import numpy as np
def preprocess_image(image, target_size):
    image = image.resize(target_size)
    image_arr = np.array(image)
    image_arr = np.expand_dims(image, axis=0)  # Add batch dimension
    image_arr = image_arr / 255.0  # Normalize the image
    return image_arr