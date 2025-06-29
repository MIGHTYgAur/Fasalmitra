import express from 'express';
import multer from 'multer';
import getAdvice from '../llm.js';
import FormData from 'form-data';
import axios from 'axios';
const upload = multer({ storage: multer.memoryStorage() }); // Store files in memory
const Router = express.Router();

Router.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to Fasalmitra API' });
});

Router.post('/predict', upload.single('file'), async (req, res) => {
    // fix the error handling as per axios syntax, currently not that..
    if(!req.file) {
        return res.status(400).json({ error: 'No image file provided' });
        }
        const {location, rain, temperature, windSpeed, soilTemp} = req.body;

    try {
        const formData = new FormData();
        
        // Create a Blob from the file buffer (similar to how frontend handles files)

        formData.append('file', req.file.buffer, { 
                filename: req.file.originalname,
                contentType: req.file.mimetype
        });
        
        console.log('Sending file:', req.file.originalname);
        
        const response = await axios.post(process.env.MODEL_API_URL, 
        formData,
        {
            headers: formData.getHeaders(), // Use FormData headers and under content-type
        },
  
        );

        if (response.status !== 200) {
            return res.status(response.status).json({ error: 'Failed to process the image' });
        }
        const data = await response.data
        console.log('Response from model API:', data);
        const { predicted_class} = data;

        const Result = await getAdvice(location, rain, temperature, windSpeed, soilTemp, predicted_class);

        return res.status(200).json({
            predicted_class: predicted_class,
            Result: Result
        });
        
    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
    
});

export default Router;