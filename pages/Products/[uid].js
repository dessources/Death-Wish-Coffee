import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import WholeBean from "../../components/WholeBean.jsx";
import Ground from "../../components/GroundIcon.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselLightningIcon from "../../components/CarouselLightningIcon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  productsDetails,
  imagesDetailsProduct,
  descriptionDetailsProduct,
  priceDetailsProduct,
  desciptionTitleDetailsProduct,
  descriptions,
  stylesDetailsProduct,
  coffeeDetails,
  btnStyles,
  btnAddCart,
  size,
  reviews,
  selectedLabel,
  style,
  titleSize
} from "../../styles/uid.module.css";
import RatingStars from "../../components/RatingStars.jsx";
import handleAddToCart from "../../utils/handleAddToCart";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, showCart } from "../../redux/cart.slice";

import { getCoffeesUid, getOneCoffee } from "../../utils/queries.js";

export const getStaticPaths = async () => {
  const data = await getCoffeesUid();
  console.log(data);
  const paths = data?.coffees?.map((coffee) => {
    return {
      params: { uid: coffee.uid },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const uid = context.params.uid;
  const data = await getOneCoffee(uid);

  return {
    props: { coffee: data.coffees[0] },
  };
};

const Detail = ({ coffee }) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = React.useState("");
  const [selectedStyle, setselectedStyle] = React.useState("");
  const labelIcons = { ground: <Ground />, "whole bean": <WholeBean /> };

  const handleSubmit = () => {
    if ((!selectedStyle && coffee?.styles.length) || (!selectedSize && coffee?.sizes)) {
      // TODO : aficher un modal qui affiche le message de l'alert
      alert("Veuillez indiquez votre choix pour tous les options disponibles");
    } else {
      const data = handleAddToCart({ ...coffee, size: selectedSize, style: selectedStyle });
      dispatch(addToCart(data));
      dispatch(showCart(true));
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <CarouselLightningIcon type={"next"} />,
    prevArrow: <CarouselLightningIcon type={"prev"} />,
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
            <img src={coffee?.mediumImage} alt="" />
            {coffee?.images?.map((image) => (
              <img src={image} alt="" />
            ))}
          </Slider>
        </div>
        <div className={descriptionDetailsProduct}>
          <div>
            <h1
              style={{
                color: coffee?.accentColor,
              }}
            >
              {coffee?.name}
            </h1>
          </div>
          <div className={priceDetailsProduct}>${coffee?.price}</div>
          <div className={reviews}>
            <span>
              <RatingStars rating={coffee?.rating} style={{ color: coffee?.accentColor }} />
              {coffee?.reviews ? `${coffee?.reviews} reviews` : ""}
            </span>
          </div>
          <div className={desciptionTitleDetailsProduct}>{coffee?.descriptionTitle}</div>
          <div className={descriptions}>
            {coffee?.descriptions?.map((description, i) => (
              <p key={i}>{description}</p>
            ))}
          </div>

          <div>
            {coffee?.sizes && (
              <>
                <h3 className={titleSize}>
                  <strong>Size</strong>
                </h3>
                <div className={size}>
                  {Object.keys(coffee?.sizes).map((size, id) => (
                    <React.Fragment key={id}>
                      <input
                        className={btnStyles}
                        type="radio"
                        name="size"
                        id={coffee?.uid + size}
                        value={size}
                        onClick={() => setSelectedSize(size === selectedSize ? "" : size)}
                      />
                      <label htmlFor={coffee?.uid + size} className={selectedSize === size ? selectedLabel : ""}>
                        {size.replace("_", " ")}: ${coffee?.sizes[size]}
                      </label>
                    </React.Fragment>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className={stylesDetailsProduct}>
            {coffee?.styles.length > 0 && (
              <>
                <h3 className={titleSize}>
                  <strong>Style</strong>
                </h3>
                <div className={style}>
                  {coffee?.styles?.map((style, i) => (
                    <React.Fragment key={i}>
                      <input
                        className={btnStyles}
                        type="radio"
                        id={coffee?.uid + style}
                        name="style"
                        value={style}
                        onClick={(e) => setselectedStyle(style === selectedStyle ? "" : style)}
                      />
                      <label
                        htmlFor={coffee?.uid + style}
                        className={selectedStyle === style ? selectedLabel : ""}
                      >
                        <span>{labelIcons[style]}</span>
                        <p style={{ marginLeft: "10px" }}>{style}</p>
                      </label>
                    </React.Fragment>
                  ))}
                </div>
              </>
            )}
          </div>
          <button
            className={btnAddCart}
            onClick={handleSubmit}
            style={{
              backgroundColor: coffee?.accentColor,
            }}
          >
            ADD TO CART
          </button>
          <div className={coffeeDetails}>
            {coffee?.details && (
              <>
                {coffee?.details?.map((detail, i) => (
                  <div key={i}>
                    <h4>{`${detail.title} Details`}</h4>
                    <ul>
                      {detail?.content.map((contents, i) => (
                        <li key={i}>{contents}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <div
        className={reviews}
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          marginTop: "50px",
        }}
      >
        <span
          style={{
            color: coffee?.accentColor,
          }}
        >
          <RatingStars rating={coffee?.rating} />
        </span>
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          fontWeight: "bold",
          fontSize: "30px",
        }}
      >
        {coffee?.reviews} reviews
      </div>
      {/* <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <KeyboardArrowDownIcon
          style={{
            fontSize: "50px",
            color: coffee?.accentColor,
            cursor: "pointer",
          }}
        />
      </div> */}
      <Footer style={{ backgroundColor: coffee?.accentColor }} />
    </div>
  );
};

export default Detail;
