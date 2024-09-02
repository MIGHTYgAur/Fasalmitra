
// import React, { useState } from 'react'
// // import { useState } from 'react';

// const ChooseFile = () => {
//   const [imagePreview, setImagePreview] = useState(null);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="bg-[#263c28]">


//     <div className="h-[100vh] flex justify-center items-center bg-green-2 bg-[#0B683] bg-[#9CAE0C] rounded-t-3xl">
//       <div className="w-[30vw] h-[60vh] rounded-3xl bg-red- bg-[#0B583] bg-[#ADC01] 
//       bg-[#95A420] flex flex-col justify-center content-center items-center  m-6">
//         <div className="w-[60%] h-[40%] bg-white flex justify-center items-center overflow-hidden">
//           {imagePreview ? (
//             <img src={imagePreview} alt="Uploaded" className="object-cover h-full w-full" />
//           ) : (
//             <p>No image uploaded</p>
//           )}
//         </div>
//         <input type="file" className="m-4" onChange={handleImageUpload} />
//         <button class="rounded-xl border-white border-2 p-2">Send file</button>
//         <button class="rounded-xl border-2 border-red-600 p-2 m-3 ">view result</button>
//       </div>
//     </div>
//     </div>
    
//   );
// }

// export default ChooseFile;



// import React, { useState } from 'react';

// const ChooseFile = () => {
//   const [imagePreview, setImagePreview] = useState(null);
//   const [predictedClass, setPredictedClass] = useState('');

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     const fileInput = document.querySelector('input[type="file"]');
//     formData.append('file', fileInput.files[0]);

//     try {
//       const response = await fetch('http://127.0.0.1:5000/predict', {
//         method: 'POST',
//         body: formData
//       });

//       const result = await response.json();
//       setPredictedClass(result.predicted_class);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="bg-[#263c28] h-[100vh] flex justify-center items-center">
//       <div className="w-[30vw] h-[60vh] rounded-3xl bg-[#95A420] flex flex-col justify-center items-center m-6">
//         <div className="w-[60%] h-[40%] bg-white flex justify-center items-center overflow-hidden">
//           {imagePreview ? (
//             <img src={imagePreview} alt="Uploaded" className="object-cover h-full w-full" />
//           ) : (
//             <p>No image uploaded</p>
//           )}
//         </div>
//         <input type="file" className="m-4" onChange={handleImageUpload} />
//         <button
//           className="rounded-xl border-white border-2 p-2"
//           onClick={handleSubmit}
//         >
//           Send file
//         </button>
//         <button className="rounded-xl border-2 border-red-600 p-2 m-3">
//           View result
//         </button>
//         {predictedClass && (
//           <div className="mt-4">
//             <p>Predicted Class: {predictedClass}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChooseFile;

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

  // return (
  //   <div className="bg-[#263c28]">
  //     <div className="h-[100vh] flex justify-center items-center bg-[#9CAE0C] rounded-t-3xl">

  // //  const handleSubmit = async (event) {
  //   event.preventDefault();

  //   const formData = new FormData();
  //   const fileInput = document.querySelector('input[type="file"]');
  //   formData.append('file', fileInput.files[0]);

  //   try {
  //     const response = await fetch('http://127.0.0.1:5000/predict', {
  //       method: 'POST',
  //       body: formData,
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to fetch');
  //     }

  //     const result = await response.json();
  //     setPredictedClass(result.predicted_class);
  //     setProbability(result.probability);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };


  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch('http://127.0.0.1:5000/predict', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ key: 'value' }), // Adjust your data here
  //     });
  
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  
  //     const result = await response.json();
  //     console.log(result);
  //   } catch (error) {
  //     console.error('Fetch error:', error);
  //   }
  // }
  return (
    <div className="bg-[#263c2] bg-[#A3B928] ">
      <div className="h-[100vh] flex flex-col justify-center items-center bg-[#9CAE0] bg-[#98AF19] rounded-t-3xl mb-4">
        <h1 style={{wordSpacing:"1vh",letterSpacing:"6px"}} className="font-bold font-roboto text-4xl tracking-strech" >Check health of Wheat Crop </h1>

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
      </div>
    </div>
  );
};

export default ChooseFile;
