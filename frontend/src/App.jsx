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
import ChooseFile from './components/ChooseFile';
import Weather from './components/Weather';
import Boost from './components/Boost';
import Page2 from './components/Page2';
import Footer from './components/Footer';
// import Joke from './components/Jokes';


function App() {
  // const [count, setCount] = useState(0)

  return (

    <>
    <div class=" overflow-x-hidden ">


    <title>AgriScan</title>
      <Navbar></Navbar>
    
    <Landing></Landing>
    <Page2></Page2>
   <Weather></Weather>
   <CropSlider></CropSlider>
   <TwoStripes></TwoStripes>
    <Boost></Boost>
    <ChooseFile></ChooseFile>
    {/* <Footer></Footer> */}
    {/* <input type="file" /> */}
    {/* <Joke></Joke> */}
    </div>
    </>
  )
}

export default App
