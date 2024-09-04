import React, { useState } from 'react';

const ChooseFile = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [predictedClass, setPredictedClass] = useState(null);
  const [probability, setProbability] = useState(null);
  const [recentDetections, setRecentDetections] = useState([]);

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

      // Add the new detection to recent detections
      setRecentDetections([
        { image: imagePreview, disease: result.predicted_class },
        ...recentDetections,
      ]);

      // Clear image preview and reset form
      
      fileInput.value = ''; // Clear file input
    } catch (error) {
      console.error('Error:', error);
    }
  };

 
  return (
    <div className="bg-[#263c2] bg-[#A3B928]">
      <div className="flex flex-col justify-center items-center bg-[#9CAE0] bg-[#98AF19] rounded-t-3xl mb-4">
        <h1 style={{ wordSpacing: "1vh", letterSpacing: "6px" }} className="font-bold font-roboto text-4xl tracking-strech">
          Check health of Wheat Crop
        </h1>

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
              Predicted disease: {predictedClass}
            </p>
          )}
        </div>
        
        {/* Recent Activity Section */}
        <div className="w-[30vw] mt-8 rounded-3xl bg-[#95A420] p-4">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <ul>
            {recentDetections.length > 0 ? (
              recentDetections.map((detection, index) => (
                <li key={index} className="border-b border-gray-200 py-2">
                  <div className="flex items-center">
                    <img
                      src={detection.image}
                      alt="Detection"
                      className="w-16 h-16 object-cover rounded-md mr-4"
                    />
                    <div>
                      <p className="font-medium text-white">{detection.disease}</p>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li className="text-gray-500">No recent detections</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChooseFile;
