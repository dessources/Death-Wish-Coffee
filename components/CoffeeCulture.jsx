import React from "react";
import gallery01 from "../images/gallery01.webp";
import gallery02 from "../images/gallery02.webp";
import gallery03 from "../images/gallery03.webp";
import gallery04 from "../images/gallery04.jpg";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const galleryImages = [gallery01, gallery02, gallery03, gallery04];

const CoffeeCulture = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    centerPadding: '10%',
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className="CoffeeCulture">
      
      <h1 className="title-Coffee-Culture">COFFEE CULTURE</h1>
      <Slider {...settings}>
      
            {galleryImages.map((image, index) => (
              
              <div className="image">
                <Image src={image} alt="" />
              </div>          
            ))}          
          </Slider>
          </div>
    
  );
};

export default CoffeeCulture;
