import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/carsoul.css";
import Bw from "../assets/bw.png";


const Carsoul = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="carsoul-component">
      <Slider {...settings}>
        <div className="one">
          <img src={Bw} alt="" className="carousel-image" />
        </div>
        <div className="one">
          <img src={Bw} alt="" className="carousel-image" />
        </div>
        <div className="one">
          <img src={Bw} alt="" className="carousel-image" />
        </div>
        <div className="one">
          <img src={Bw} alt="" className="carousel-image" />
        </div>
      </Slider>
    </div>
  );
}

export default Carsoul;
