# FasalMitra 🌱 : AI-Driven Crop Disease Prediction and Management System 

India is an agrarian economy where a significant portion of the population relies on agriculture. By identifying diseases early, farmers can take corrective actions to protect their crops, ensuring higher yields and better quality produce. 
Implementing an early crop disease detection model can significantly enhance the resilience and productivity of Indian agriculture, benefiting both farmers and the broader economy.
<br>
The application will serve as a tool for farmers, agricultural experts, and extension workers to identify crop diseases at an early stage and take necessary actions to prevent widespread damage. 
<br><br>
<img src = "fasalmitra_homepgae-ezgif.com-cut.gif" alt="homepage">


## Tech Stack

**Frontend:** React, TailwindCSS

**Backend:** Node, Express

**Machine Learning:** TensorFlow for model development, with OpenCV for image processing


## Machine Learning Workflow
1. Data Collection: Gathering the dataset of wheat crop. It is an Image dataset containing images of healthy and unhealthy wheat crop leaves.

2. Model Training: The  models was be trained using labeled datasets of crop images to recognize specific diseases.We have used the CNN model architecture consisting of CNN Layer, Max Pooling, Flatten a Linear Layers. 

3. Prediction: When a user uploads a new image, the model predicts the disease. The best model was able to achieve 99.79% of test accuracy.
<img src="Screenshot 2024-08-31 182838.png" alt="batch of image"/>

Dataset Link : https://www.kaggle.com/datasets/kamal01/top-agriculture-crop-disease

## Future Implementations
1) Training the model on more classes of crops.
2) Developing a recommender system for suggesting suitable pesticides and control methods for crop diseases
3) Integrating real-time environmental data (like temperature, humidity, and rainfall) from sensors or APIs to assess the likelihood of disease outbreaks.
