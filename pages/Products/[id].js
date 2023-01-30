import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import WholeBean from "../../components/WholeBean.jsx";
import Ground from "../../components/GroundIcon.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  productsDetails,
  imagesDetailsProduct,
  descriptionDetailsProduct,
  priceDetailsProduct,
  desciptionTitleDetailsProduct,
  desciptionDetailsProduct,
  stylesDetailsProduct,
  coffeeDetails,
  btnStyles,
  btnAddCart,
  reviews,
  selectedLabel,
  size,
  style,
} from "../../styles/id.module.css";
import RatingStars from "../../components/RatingStars.jsx";
import handleAddToCart from "../../utils/handleAddToCart";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, showCart } from "../../redux/cart.slice";

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:1337/api/coffees?populate=main_image,images`);

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
  const res = await fetch(`http://localhost:1337/api/coffees/${id}?populate=main_image,images`);
  const data = await res.json();

  return {
    props: { coffee: data },
  };
};

const Detail = ({ coffee }) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = React.useState("");
  const [selectedStyle, setselectedStyle] = React.useState("");
  const labelIcons = { ground: <Ground />, "whole bean": <WholeBean /> };

  const handleSubmit = () => {
    if (
      (!selectedStyle && coffee?.data?.attributes?.styles) ||
      (!selectedSize && coffee?.data?.attributes?.sizes)
    ) {
      // TODO : aficher un modal qui affiche le message de l'alert
      alert("Veuillez indiquez votre choix pour tous les options disponibles");
    } else {
      const data = handleAddToCart({
        ...coffee?.data?.attributes,
        size: selectedSize,
        style: selectedStyle,
      });
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
            <img src={coffee?.data?.attributes?.main_image?.data?.attributes?.formats?.medium?.url} alt="" />
            {coffee?.data?.attributes?.images.data.map((image) => (
              <img src={image?.attributes?.formats?.medium?.url} alt="" />
            ))}
          </Slider>
        </div>
        <div className={descriptionDetailsProduct}>
          <div>
            <h1 style={{ color: coffee?.data?.attributes?.accent_color }}>{coffee?.data?.attributes?.name}</h1>
          </div>
          <div className={priceDetailsProduct}>${coffee?.data?.attributes?.price}</div>
          <div className={reviews}>
            <span style={{ color: coffee?.data?.attributes?.accent_color }}>
              <RatingStars rating={coffee?.data?.attributes?.rating} />
              {coffee?.data?.attributes?.reviews ? `${coffee?.data?.attributes?.reviews} reviews` : ""}
            </span>
          </div>
          <div className={desciptionTitleDetailsProduct}>{coffee?.data?.attributes?.description_title}</div>
          <div className={desciptionDetailsProduct}>{coffee?.data?.attributes?.descriptions}</div>

          <div>
            {coffee?.data?.attributes?.sizes && (
              <>
                <h3>
                  <strong>Size</strong>
                </h3>
                <div className={size}>
                  {Object.keys(coffee?.data?.attributes?.sizes).map((size) => (
                    <>
                      <input
                        className={btnStyles}
                        type="radio"
                        name="size"
                        id={coffee?.data?.attributes?.uid + size}
                        value={size}
                        onClick={() => setSelectedSize(size === selectedSize ? "" : size)}
                      />
                      <label
                        htmlFor={coffee?.data?.attributes?.uid + size}
                        className={selectedSize === size ? selectedLabel : ""}
                      >
                        {size.replace("_", " ")}: ${coffee?.data?.attributes?.sizes[size]}
                      </label>
                    </>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className={stylesDetailsProduct}>
            {coffee?.data?.attributes?.styles && (
              <>
                <h3>
                  <strong>Type</strong>
                </h3>
                <div className={style}>
                  {coffee?.data?.attributes?.styles?.map((style) => (
                    <>
                      <input
                        className={btnStyles}
                        type="radio"
                        id={coffee?.data?.attributes?.uid + style}
                        name="style"
                        value={style}
                        onClick={(e) => setselectedStyle(style === selectedStyle ? "" : style)}
                      />
                      <label
                        htmlFor={coffee?.data?.attributes?.uid + style}
                        className={selectedStyle === style ? selectedLabel : ""}
                      >
                        <span>{labelIcons[style]}</span>
                        <p style={{ marginLeft: "10px" }}>{style}</p>
                      </label>
                    </>
                  ))}
                </div>
              </>
            )}
          </div>
          <button
            className={btnAddCart}
            onClick={handleSubmit}
            style={{
              backgroundColor: coffee?.data?.attributes?.accent_color,
            }}
          >
            ADD TO CART
          </button>
          <div className={coffeeDetails}>
            {coffee?.data?.attributes?.details && (
              <>
                <p
                  style={{
                    color: coffee?.data?.attributes?.accent_color,
                    fontWeight: "bold",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Coffee Details :
                </p>
                {coffee?.data?.attributes?.details?.map((detail) => (
                  <ul>
                    {detail?.content.map((contents) => (
                      <li>{contents}</li>
                    ))}
                  </ul>
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
            color: coffee?.data?.attributes?.accent_color,
          }}
        >
          <RatingStars rating={coffee?.data?.attributes?.rating} />
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
        {coffee?.data?.attributes?.reviews} reviews
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <KeyboardArrowDownIcon
          style={{
            fontSize: "50px",
            color: coffee?.data?.attributes?.accent_color,
            cursor: "pointer",
          }}
        />
      </div>
      <Footer style={{ backgroundColor: coffee?.data?.attributes?.accent_color }} />
    </div>
  );
};

export default Detail;
