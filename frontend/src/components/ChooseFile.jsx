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

return(
    <div className="bg-[#263c2] bg-[#A3B928] min-h-[150vh] ">
      <div className=" min-h-[100vh] flex flex-col justify-center items-center bg-[#9CAE0] bg-[#98AF19] rounded-t-3xl mb-4 p-5">
        <h1 style={{wordSpacing:"1vh",letterSpacing:"6px"}} className="font-bold font-roboto text-4xl tracking-strech" >Check health of Wheat Crop </h1>
        <div className="w-[30vw] h-[60vh] p-6 rounded-3xl bg-[#95A420] flex flex-col justify-center content-center items-center m-6">

          <div className="w-[60%] h-[40%] bg-white flex justify-center items-center overflow-hidden">
            {imagePreview ? (
              <img src={imagePreview} alt="Uploaded" className="object-cover h-full w-full" />
            ) : (
              <p>No image uploaded</p>
            )}
          </div>
          <input type="file" className="m-4" onChange={handleImageUpload} />
          <button className="rounded-xl border-white border-2 p-2" 
          onClick={handleSubmit}
          >
            Send file
          </button>
          {predictedClass && (
            <p className="mt-4 text-white">
              Predicted disease: {predictedClass}
            </p>
          )}
        </div>
        

        <div className="w-[65vw] p-3 min-h-[10vh] rounded-3xl bg-white">
          {
            predictedClass==='Yellow Rust' &&(
              <div className="">
                <p class="flex justify-center font-bold text-[4vh]">Yellow Stripe Rust</p>
               

                <div className="p-2">
                  <p className="font-bold ">Symptoms</p>
                  <p>Tiny, rusty pustules arranged in stripes.</p>
                  <p>Stems and heads can also be affected</p>
                </div>

                <div className="bg-blue-100 p-2 rounded-xl">
                  The severtiy of the disease depends on the susceptibility of the plant. In vulnerable varieties, the fungus produces tiny, yellow to orange ("rusty") pustules that are arranged in rows forming narrow stripes parallel to the leaf veins. They eventually merge and can engulf the whole leaf, a feature that appears earlier in young plants. These pustules (0.5 to 1mm in diameter) can sometimes also be found long , necrotic,light brown stripes or blotches are visible on leaves, often covered with rusty pustules.In severe infections, the growth of plants is seriously compromised and tissues are damaged. The reduced leaf area leads to lower productivity, fewer spikes per plant and fewer grains per spike. Overall, the disease can lead to severe crop losses.
                </div>

                <div className="flex ">
                  <div className="">
                    <img className="w-[30vh] h-[30vh]" src="https://5.imimg.com/data5/SELLER/Default/2023/4/299515690/UO/GE/CF/182028316/azoxy-super-500x500.jpg" alt="" />
                  </div>
                  <div className="p-4">
                     <p className="font-semibold">Azoxystrobin 11.0%, Tebuconazole 18.3% SC;</p>
                     <p className="font-semibold">Propiconazole 25.0% EC;</p>
                     <p className="font-semibold">Tebuconazole 50.0%,Trifloxystrobin 25.0% WG;</p>       
                     <p className="font-semibold">Azoxystrobin 18.2%,Difenoconazole 11.4% SC;</p>  

                     <p className="italic"><span className="font-bold">Disclaimer: </span>Product recommendations are based on the following active ingredients</p>           
                  </div>
                  
                </div>

              </div>
            )
          }

          {
            predictedClass==='Brown Rust' &&(
              <div className="">
                <p class="flex justify-center font-bold text-[4vh]">Leaf Rust ( Brown Rust )</p>
                <div className="flex ">
            
                </div>

                <div className="p-2">
                  <p className="font-bold ">Symptoms</p>
                  <p>Small orange to brown pustules on leaves.</p>
                  <p>Pustules surrounded by yellow margin.</p>
                  <p>Leaf sheaths can also be affected.</p>
                </div>

                <div className="bg-blue-100 p-2 rounded-xl">
                  Leaf rust is the most common rust disease of wheat . The symptoms depend on the susceptibility of the plant affected. It is characterized by numerous small reddish orange to brown pustules scattered on both surfaces of leaves, leaf sheaths and husks. They are surfaces of leaves, leaf sheaths and husks. They are up to 1.5 mm in diameter, slightly raised and round to oblong. In vulnerable plants, tiny secondary pimples and pale green or yellow halo can appear around the primary pustules. Over time. the color turns to dark brown or black. In more resistant wheat varieties, the orange pustule are usually smaller and they might be surrounded by chlorotic or necrotic water loss, and reduced productivity. These symtoms, added to reduced floral set and grain shriveling, compromise the yield.
                </div>

                <div className="flex ">
                  <div className="">
                    <img className="w-[30vh] h-[30vh]" src="https://agroshopy.com/image/cache/catalog/TILT-500x500.jpg" alt="" />
                  </div>
                  <div className="p-4">
                     <p className="font-semibold">Propiconazole 25.0% EC;</p>
                     <p className="font-semibold">Azoxystrobin 18.2%,Difenoconazole 11.4% SC;</p>  
                     <p className="font-semibold">Mancozeb 75.0% WP;</p>
                     <p className="font-semibold">Zineb 75.0% WP;</p>       

                     <p className="italic"><span className="font-bold">Disclaimer: </span>Product recommendations are based on the following active ingredients</p>           
                  </div>
                  
                </div>

              </div>
            )
          }


  { predictedClass==='Healthy Plant' && (

  <div className="">
    <p class="flex justify-center font-bold text-[4vh]">Healthy Plant</p>
                <div className="p-2">
                  <p className="font-bold ">Symptoms</p>
                  <p>Dark green colored plant.</p>
                  <p>Firm leaves.</p>
                  <p>Brightly colored flowers.</p>
                  <p>Well-shaped , good-colored, nutirtious grains, pods or fruits.</p>
                  <p>Root system is well developed</p>
                </div>


  </div>
  )}
        </div>
      </div>

    
        
        {/* Recent Activity Section */}
        <div className="flex flex-col justify-center items-center">
        <div className="w-[95vw] mt-8 rounded-3xl bg-[#95A420] p-4">
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
