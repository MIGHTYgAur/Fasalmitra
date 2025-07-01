import React, { useState } from 'react';
import MarkDown from 'markdown-to-jsx';

const ChooseFile = ({apiData}) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [result, setResult] = useState('');
  const [recentDetections, setRecentDetections] = useState([]);
  const [loading, setLoading] = useState(false);

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
    console.log(fileInput.files[0]);
    formData.append('file', fileInput.files[0]);
    formData.append('location', apiData.location);
    formData.append('rain', apiData.rain);
    formData.append('temperature', apiData.temperature);
    formData.append('windSpeed', apiData.windSpeed);
    formData.append('soilTemp', apiData.soilTemp);

    console.log(apiData)

    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/user/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const result = await response.json();
      setResult(result);

      // Add the new detection to recent detections
      setRecentDetections([
        { image: imagePreview, disease: result.predicted_class },
        ...recentDetections,
      ]);

      // Clear image preview and reset form
      fileInput.value = ''; // Clear file input
      setImagePreview(null); // Clear image preview
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  function renderMarkdown(text) {
    return (
      <MarkDown>
        {text}
      </MarkDown>
    )
  }

return(
    <div className="bg-[#A3B928] min-h-screen">
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#98AF19] rounded-t-3xl px-4 py-8">
        <h1 
          style={{wordSpacing:"1vh", letterSpacing:"6px"}} 
          className="font-bold font-roboto text-2xl sm:text-3xl lg:text-4xl tracking-strech text-center mb-8"
        >
          Check health of Wheat Crop 
        </h1>
        
        {/* Main Card - Responsive and Centered */}
        <div className="w-full max-w-sm sm:max-w-md p-6 rounded-3xl bg-[#95A420] flex flex-col justify-center items-center mx-auto">
          <div className="w-full aspect-square max-w-xs bg-white flex justify-center items-center overflow-hidden rounded-lg mb-4">
            {imagePreview ? (
              <img src={imagePreview} alt="Uploaded" className="object-cover h-full w-full" />
            ) : (
              <p className="text-gray-500 text-center p-4">No image uploaded</p>
            )}
          </div>
          
          <input 
            type="file" 
            className="mb-4 w-full max-w-xs text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-gray-700 hover:file:bg-gray-100" 
            onChange={handleImageUpload} 
          />
          
          <button 
            className="rounded-xl border-white border-2 px-6 py-3 text-white font-semibold hover:bg-white hover:text-[#95A420] transition-colors duration-200 w-full max-w-xs"
            onClick={handleSubmit}
          >
            Send file
          </button>
        </div>

        {/* Results Section - Responsive */}
        {loading ? (
          <div className="w-full max-w-4xl mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg mx-4">
            <div className="text-center text-white">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                </div>
                <p className="font-semibold text-lg">Analyzing your crop image...</p>
                <p className="text-sm text-white/80">This may take a few moments</p>
              </div>
            </div>
          </div>
        ) : result && result.predicted_class ? (
          <div className="w-full max-w-4xl mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg mx-4">
            <div className="text-center mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Prediction Result
              </h3>
              <div className="inline-block px-4 sm:px-6 py-3 bg-white/20 rounded-full border border-white/30">
                <span className="text-white font-semibold text-base sm:text-lg">
                  {result.predicted_class}
                </span>
              </div>
            </div>
            
            {result.Result && (
              <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <h4 className="text-green-900 font-semibold text-xl sm:text-2xl mb-3">
                  Recommendation:
                </h4>
                <div className="text-green-900 text-sm sm:text-base leading-relaxed">
                  {renderMarkdown(result.Result)}
                </div>
              </div>
            )}
          </div>
        ) : null}
      </div>

      {/* Recent Activity Section - Responsive */}
      <div className="flex flex-col justify-center items-center px-4 pb-8">
        <div className="w-full max-w-4xl mt-8 rounded-3xl bg-[#95A420] p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-white">Recent Activity</h2>
          <ul className="space-y-2">
            {recentDetections.length > 0 ? (
              recentDetections.map((detection, index) => (
                <li key={index} className="border-b border-white/20 py-3 last:border-b-0">
                  <div className="flex items-center space-x-4">
                    <img
                      src={detection.image}
                      alt="Detection"
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-md flex-shrink-0"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-white text-sm sm:text-base">{detection.disease}</p>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li className="text-white/70 text-center py-8">No recent detections</li>
            )}
          </ul>
        </div>
      </div>
    </div>
);
};

export default ChooseFile;