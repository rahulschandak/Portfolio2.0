import React, { useRef } from "react";
import Slider from "react-slick";
import BodyLabel from "./body-label";
import StringToBullets from "../stringToBullets/stringToBullets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

function VerticalCarousel({ children }) {

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
}

export default VerticalCarousel;
