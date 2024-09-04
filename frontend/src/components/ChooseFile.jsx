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

  // const handleSubmit = async (event) => {
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

  // return (
  //   <div className="bg-[#263c28]">
  //     <div className="h-[100vh] flex justify-center items-center bg-[#9CAE0C] rounded-t-3xl">

  //  const handleSubmit = async (event) => {
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
  
// const fpredictedClass="Yellow Rust";
  return (
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
          // onClick={handleSubmit}
          >
            Send file
          </button>
          {predictedClass && (
            <p className="mt-4 text-white">
              Predicted Class: {predictedClass} ({(probability * 100).toFixed(2)}%)
            </p>
          )}
        </div>
        

        <div className="w-[98vw] p-3 min-h-[10vh] rounded-3xl bg-white">
          {
            predictedClass==='Yellow Rust' &&(
              <div className="">
                <p class="flex justify-center font-bold text-[4vh]">Yellow Stripe Rust</p>
                <div className="flex gap-12 justify-center">
                  <div className="w-[30vh]">
                  <img src="https://www.researchgate.net/profile/Muhammad-Khan-1184/publication/355143782/figure/fig1/AS:1076895806427138@1633763376857/Fig-1-Symptoms-of-Stripe-Yellow-rust-Level-of-resistance-susceptibility-on-the-basis-of_Q320.jpg" alt="" />

                  </div>
                  <div className="w-[30vh] h-[30vh]">

                  <img src="https://tse4.mm.bing.net/th?id=OIP.nIsae8_ALKXN3IWHlniYkAHaFj&pid=Api&P=0&h=180" alt="" />
                  </div>

                  <div className="w-[30vh] h-[30vh]">
                  <img src="https://www.adama.com/west-canada/sites/adama_west_canada/files/styles/twitter_card/public/2021-10/ADAS-stripe-rust-600x400.jpg?h=252f27fa&itok=jFczoUn_" className="object-fill " alt="" />

                  </div>
                </div>

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
                    <img src="https://5.imimg.com/data5/SELLER/Default/2023/4/299515690/UO/GE/CF/182028316/azoxy-super-500x500.jpg" alt="" />
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
                  <div className="w-[30%]">
                  <img src="https://tse1.mm.bing.net/th?id=OIP.FL66YFGe-TeBHfgr2JPjcAHaFq&pid=Api&P=0&h=180https://cropscience.bayer.co.uk/media/86150/brown-rust_375x225.jpg" alt="" />

                  </div>
                  <div className="w-[30%]">

                  <img src="https://tse3.mm.bing.net/th?id=OIP.aFBBRrE4rV4aFS3XnLV9HQHaEc&pid=Api&P=0&h=180" alt="" />
                  </div>

                  <div className="w-[30%]">
                  <img src="https://www.cropscience.bayer.co.nz/-/media/bcs-inter/ws_newzealand/pests/diseases/leaf-rust---wheat/leaf-rust_wheat_2.jpg?h=551&w=826&la=en&hash=5FA587200B24B8BBDBE01D40B51DDC1093373926" alt="" />

                  </div>
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
                    <img src="https://agroshopy.com/image/cache/catalog/TILT-500x500.jpg" alt="" />
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
<div className="flex  gap-12 justify-center">
                  <div className="w-[30vh] overflow-y-hidden">
                  <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1725474557/loh_19_t87ada.jpg" alt="" />

                  </div>
                  <div className="w-[30vh]">

                  <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1725474562/loh_12_aeeboi.jpg" alt="" />
                  </div>

                  <div className="w-[30vh]">
                  <img src="https://res.cloudinary.com/dsctxyrvw/image/upload/v1725474577/loh_14_kpar4c.jpg" alt="" />

                  </div>
                </div>
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
    </div>
  );
};

export default ChooseFile;
