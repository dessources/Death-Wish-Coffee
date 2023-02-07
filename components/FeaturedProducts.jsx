import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box"; // requires a loader
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import CarouselLightningIcon from "./CarouselLightningIcon";
import Skeleton from "@mui/material/Skeleton";
import RatingStars from "../components/RatingStars";
import {
  reviews,
  card,
  featuredProducts,
  nameProduct,
  cardActionAreaClass,
  price,
  imageContainer,
} from "../styles/FeaturedProducts.module.css";
import { getSpecificCoffees } from "../utils/queries";

const FeaturedProducts = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <CarouselLightningIcon id="featSlickNext" />,
    prevArrow: <CarouselLightningIcon id="featSlickPrev" />,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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

  const [data, setData] = React.useState();
  React.useEffect(() => {
    getSpecificCoffees({ featured: true }).then((data) => setData(data.coffees));
  }, []);
  return (
    <div className={featuredProducts}>
      <Slider {...settings}>
        {data?.map((coffee, id) => (
          <div key={id} className={card}>
            <div className={cardActionAreaClass}>
              {coffee ? (
                <>
                  <div className={imageContainer}>
                    <Link href={`/Products/${coffee?.uid}`}>
                      <img src={coffee?.mediumImage} className="image-coffee" alt="coffee" />
                    </Link>
                  </div>
                </>
              ) : (
                <Skeleton variant="rectangular" width={400} height={400} />
              )}

              <div>
                <Link href={`/Products/${coffee?.uid}`}>
                  <h4 className={nameProduct}>{coffee?.name}</h4>
                </Link>
                <div>
                  <div className={reviews}>
                    <RatingStars rating={coffee?.rating} />
                    {coffee?.reviews} Reviews
                  </div>
                  <div className={price}>${coffee?.price}</div>
                </div>
              </div>
            </div>

            <Link href={`/Products/${coffee?.uid}`}>
              <button>SHOP NOW</button>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedProducts;
