import React from 'react';
import Slider from 'react-slick';
import "./Cropslider.css"

const CropSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1, // Change one slide at a time
        autoplay: true,
        autoplaySpeed: 3000, // Slide every 3 seconds
        arrows: true, // Enable arrow controls
    };

    const slides = [
        {
            img: "https://www.taranis.com/wp-content/webp-express/webp-images/uploads/2022/12/nutrients.jpg.webp",
            text: "Nutrient Deficiencies"
        },
        {
            img: "https://www.taranis.com/wp-content/webp-express/webp-images/uploads/2022/12/disease.jpg.webp",
            text: "Disease Pressure"
        },
        {
            img: "https://www.taranis.com/wp-content/webp-express/webp-images/uploads/2022/12/field_health.jpg.webp",
            text: "Field Health"
        },
        // Add more slides as needed
    ];

    return (

      <div className="bg-[#384c34]">

    <div className=" bg-[#263c28] h-[50vh] -mt-[10vh] z-2 rounded-t-3xl ">
         <div className=" relative left-[17%] w-[67%] p-4 translate-y-[10vh]">
         <div className="crop-slider">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="item">
                        <div className="item-img">
                            <img src={slide.img} alt={slide.text} style={{ borderRadius: '50%', width: '250px', height: '250px' }} />
                        </div>
                        <div className="item-text ">
                            {slide.text}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
       </div>
       
    </div>
      </div>
    );
};

export default CropSlider;
