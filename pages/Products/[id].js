import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import GrainIcon from "@mui/icons-material/Grain";
import LensBlurIcon from "@mui/icons-material/LensBlur";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import KeepMountedModal from '../../components/Modal'
import Product from '../../components/Products.jsx'
import {productsDetails, imagesDetailsProduct, descriptionDetailsProduct, priceDetailsProduct, desciptionTitleDetailsProduct, 
  desciptionDetailsProduct, stylesDetailsProduct, coffeeDetails, btnStyles, btnAddCart } from "../../styles/id.module.css";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.slice'
import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch(
    `http://localhost:1337/api/coffees?populate=main_image,images`
  );

  const data = await res.json();

  const paths = data?.data?.map((coffee) => {
    return {
      params: { id: coffee.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    `http://localhost:1337/api/coffees/${id}?populate=main_image,images`
  );
  const data = await res.json();

  return {
    props: { coffee: data },
  };
};

const Detail = ({ coffee }) => {

  const dispatch = useDispatch();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: (
      <FlashOnIcon
        style={{
          color: coffee?.data?.attributes?.accent_color,
        }}
      />
    ),
    prevArrow: (
      <FlashOnIcon
        style={{
          color: coffee?.data?.attributes?.accent_color,
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  return (
    <div>
      <Navbar />

      <div className={productsDetails}>
        <div className={imagesDetailsProduct}>
          <Slider {...settings}>
            <img
              src={
                coffee?.data?.attributes?.main_image?.data?.attributes?.formats
                  ?.medium?.url
              }
              alt=""
            />
            {coffee?.data?.attributes?.images.data.map((image) => (
              <img src={image?.attributes?.formats?.medium?.url} alt="" />
            ))}
          </Slider>
        </div>
        <div className={descriptionDetailsProduct}>
          <div>
            <h1 style={{ color: coffee?.data?.attributes?.accent_color }}>
              {coffee?.data?.attributes?.name}
            </h1>
          </div>
          <div className={priceDetailsProduct}>
            ${coffee?.data?.attributes?.price}
          </div>
          <div>{coffee?.data?.attributes?.rating}</div>
          <div className={desciptionTitleDetailsProduct}>
            {coffee?.data?.attributes?.description_title}
          </div>
          <div className={desciptionDetailsProduct}>
            {coffee?.data?.attributes?.descriptions}
          </div>
          <div className={coffeeDetails}>
            {coffee?.data?.attributes?.details?.map((detail) => (
              <ul>
                {detail?.content.map((contents) => (
                  <li>{contents}</li>
                ))}
              </ul>
            ))}
          </div>

          <div>
            {coffee?.data?.attributes?.sizes && (
              <>
                <h3>
                  <strong>Size</strong>
                </h3>

                {Object.keys(coffee?.data?.attributes?.sizes).map((size) => (
                  <>
                    <Button className={btnStyles} variant="contained">
                      ${coffee?.data?.attributes?.sizes[size]}
                    </Button>
                  </>
                ))}
              </>
            )}
          </div>
          <div className={stylesDetailsProduct}>
            <h3>
              <strong>Type</strong>
            </h3>
            {coffee?.data?.attributes?.styles?.map((style) => (
              <Button
                className={btnStyles}
                variant="contained"
                startIcon={
                  style == "ground" ? (
                    <LensBlurIcon style={{ fontSize: "50px" }} />
                  ) : (
                    <GrainIcon style={{ fontSize: "50px" }} />
                  )
                }
              >
                {style}
              </Button>
            ))}
          </div>
          <button
            className={btnAddCart}
            onClick={() => dispatch(addToCart(coffee.data.attributes))}
            style={{
              backgroundColor: coffee?.data?.attributes?.accent_color,
            }}
          >
             
            ADD TO CART
          
          </button>
          
          
        </div>
      </div>
      <Footer
        style={{ backgroundColor: coffee?.data?.attributes?.accent_color }}
      />
    </div>
  );
};

export default Detail;
