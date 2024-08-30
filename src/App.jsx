// import { useState } from 'react'
// import MySwiper from "./components/MySwiper"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import MyCarousel from "./components/MyCarousel";
// import CropSlider from './components/Cropslider';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CropSlider from './components/Cropslider';
import TwoStripes from './components/TwoStripes';



function App() {
  // const [count, setCount] = useState(0)

  return (

    <>
    <div class=" overflow-x-hidden ">


    <title>AgriScan</title>
      <Navbar></Navbar>
    
    <Landing></Landing>
   <CropSlider></CropSlider>
   <TwoStripes></TwoStripes>
    
    <input type="file" />
    </div>
    </>
  )
}

export default App
