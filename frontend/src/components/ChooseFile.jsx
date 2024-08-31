import React, { useState } from 'react'
// import { useState } from 'react';

const ChooseFile = () => {
  const [imagePreview, setImagePreview] = useState(null);

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

  return (
    <div className="bg-[#263c28]">


    <div className="h-[100vh] flex justify-center items-center bg-green-2 bg-[#0B683] bg-[#9CAE0C] rounded-t-3xl">
      <div className="w-[30vw] h-[60vh] rounded-3xl bg-red- bg-[#0B583] bg-[#ADC01] 
      bg-[#95A420] flex flex-col justify-center content-center items-center  m-6">
        <div className="w-[60%] h-[40%] bg-white flex justify-center items-center overflow-hidden">
          {imagePreview ? (
            <img src={imagePreview} alt="Uploaded" className="object-cover h-full w-full" />
          ) : (
            <p>No image uploaded</p>
          )}
        </div>
        <input type="file" className="m-4" onChange={handleImageUpload} />
        <button class="rounded-xl border-white border-2 p-2">Send file</button>
        <button class="rounded-xl border-2 border-red-600 p-2 m-3 ">view result</button>
      </div>
    </div>
    </div>
    
  );
}

export default ChooseFile;