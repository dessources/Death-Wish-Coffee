import React from "react";
import gallery01 from "../images/gallery01.webp";
import gallery02 from "../images/gallery02.webp";
import gallery03 from "../images/gallery03.webp";
import gallery04 from "../images/gallery04.jpg";
import Image from "next/image";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";


const galleryImages = [gallery01, gallery02, gallery03, gallery04];

const CoffeeCulture = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 1415;
    } else {
      current.scrollLeft += 1415;
    }
  };

  return (
    <div>
      <h1 className="title-gallery">Coffee Culture</h1>
      <div className="CoffeeCulture">
        <div className="gallery">
          <div className="gallery-container" ref={scrollRef}>
            {galleryImages.map((image, index) => (
              <div
                className="gallery-images-card"
                key={`gallery_image-${index + 1}`}
              >
                <Image src={image} alt="" /> 
              </div>
            ))}
          </div>
          <div className="gallery-icons">
            <ArrowCircleLeftIcon
              className="arrow-icon"
              onClick={() => scroll("left")}
            />
            <ArrowCircleRightIcon
              className="arrow-icon"
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCulture;
