import React from "react";
import gallery01 from "../images/gallery01.webp";
import gallery02 from "../images/gallery02.webp";
import gallery03 from "../images/gallery03.webp";
import gallery04 from "../images/gallery04.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { titleCoffeeCulture, imageCaroussel, CoffeeCultureSection } from "../styles/CoffeeCulture.module.css";
import CarouselLightningIcon from "./CarouselLightningIcon";

const galleryImages = [gallery01, gallery02, gallery03, gallery04];

const CoffeeCulture = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    centerPadding: "10%",
    adaptiveHeight: true,
    nextArrow: <CarouselLightningIcon type={"next"} />,
    prevArrow: <CarouselLightningIcon type={"prev"} />,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={CoffeeCultureSection} id="coffeeCulture" data-testid="coffee-culture-section">
      <h1 className={titleCoffeeCulture}>COFFEE CULTURE</h1>
      <Slider {...settings}>
        {galleryImages.map((image, index) => (
          <div key={index} className={imageCaroussel}>
            <img src={image.src} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CoffeeCulture;
