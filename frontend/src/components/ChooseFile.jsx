import React, { useState } from 'react';

const ChooseFile = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [predictedClass, setPredictedClass] = useState(null);
  const [probability, setProbability] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    const fileInput = document.querySelector('input[type="file"]');
    formData.append('file', fileInput.files[0]);

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const result = await response.json();
      setPredictedClass(result.predicted_class);
      setProbability(result.probability);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-[#263c28]">
      <div className="h-[100vh] flex justify-center items-center bg-[#9CAE0C] rounded-t-3xl">
        <div className="w-[30vw] h-[60vh] rounded-3xl bg-[#95A420] flex flex-col justify-center content-center items-center m-6">
          <div className="w-[60%] h-[40%] bg-white flex justify-center items-center overflow-hidden">
            {imagePreview ? (
              <img src={imagePreview} alt="Uploaded" className="object-cover h-full w-full" />
            ) : (
              <p>No image uploaded</p>
            )}
          </div>
          <input type="file" className="m-4" onChange={handleImageUpload} />
          <button className="rounded-xl border-white border-2 p-2" onClick={handleSubmit}>
            Send file
          </button>
          {predictedClass && (
            <p className="mt-4 text-white">
              Predicted Class: {predictedClass} ({(probability * 100).toFixed(2)}%)
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChooseFile;