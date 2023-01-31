import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import WholeBean from "../../components/WholeBean.jsx";
import Ground from "../../components/GroundIcon.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FlashOnIcon from "@mui/icons-material/FlashOn";
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
  selectedLabel,
  btnStyles,
  btnAddCart,
  style,
  size,
  reviews,
<<<<<<< HEAD:pages/Products/[id].js
  selectedLabel,
  size,
  style,
} from "../../styles/id.module.css";
=======
} from "../../styles/uid.module.css";
>>>>>>> 2abd997b27b7e59e1ff8c6434ff53535e9932681:pages/Products/[uid].js
import RatingStars from "../../components/RatingStars.jsx";
import handleAddToCart from "../../utils/handleAddToCart";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, showCart } from "../../redux/cart.slice";

<<<<<<< HEAD:pages/Products/[id].js
export const getStaticPaths = async () => {
  const res = await fetch(
    `http://localhost:1337/api/coffees?populate=main_image,images`
  );

  const data = await res.json();
=======
import { getCoffeesUid, getOneCoffee } from "../../utils/queries.js";
>>>>>>> 2abd997b27b7e59e1ff8c6434ff53535e9932681:pages/Products/[uid].js

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
<<<<<<< HEAD:pages/Products/[id].js
  const id = context.params.id;
  const res = await fetch(
    `http://localhost:1337/api/coffees/${id}?populate=main_image,images`
  );
  const data = await res.json();
=======
  const uid = context.params.uid;
  const data = await getOneCoffee(uid);
>>>>>>> 2abd997b27b7e59e1ff8c6434ff53535e9932681:pages/Products/[uid].js

  return {
    props: { coffee: data.coffees[0] },
  };
};

const Detail = ({ coffee }) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = React.useState("");
  const [selectedStyle, setselectedStyle] = React.useState("");
  const labelIcons = { ground: <Ground />, "whole bean": <WholeBean />};

  const handleSubmit = () => {
    if ((!selectedStyle && coffee?.styles.length) || (!selectedSize && coffee?.sizes)) {
      // TODO : aficher un modal qui affiche le message de l'alert
      alert("Veuillez indiquez votre choix pour tous les options disponibles");
    } else {
<<<<<<< HEAD:pages/Products/[id].js
      const data = handleAddToCart({
        ...coffee?.data?.attributes,
        size: selectedSize,
        style: selectedStyle,
      });
=======
      const data = handleAddToCart({ ...coffee, size: selectedSize, style: selectedStyle });
>>>>>>> 2abd997b27b7e59e1ff8c6434ff53535e9932681:pages/Products/[uid].js
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
<<<<<<< HEAD:pages/Products/[id].js
=======
          <div className={priceDetailsProduct}>${coffee?.price}</div>
>>>>>>> 2abd997b27b7e59e1ff8c6434ff53535e9932681:pages/Products/[uid].js
          <div className={reviews}>
            <span style={{ color: coffee?.accentColor }}>
              <RatingStars rating={coffee?.rating} />
              {coffee?.reviews ? `${coffee?.reviews} reviews` : ""}
            </span>
          </div>
<<<<<<< HEAD:pages/Products/[id].js
          <div className={desciptionTitleDetailsProduct}>
            {coffee?.data?.attributes?.description_title}
          </div>
          <div className={desciptionDetailsProduct}>
            {coffee?.data?.attributes?.descriptions}
          </div>
=======
          <div className={desciptionTitleDetailsProduct}>{coffee?.description_title}</div>
          <div className={descriptions}>{coffee?.descriptions}</div>
>>>>>>> 2abd997b27b7e59e1ff8c6434ff53535e9932681:pages/Products/[uid].js

          <div>
            {coffee?.sizes && (
              <>
                <h3>
                  <strong>Size</strong>
                </h3>
                <div className={size}>
<<<<<<< HEAD:pages/Products/[id].js
                  {Object.keys(coffee?.data?.attributes?.sizes).map((size) => (
                    <>
=======
                  {Object.keys(coffee?.sizes).map((size, id) => (
                    <React.Fragment key={id}>
>>>>>>> 2abd997b27b7e59e1ff8c6434ff53535e9932681:pages/Products/[uid].js
                      <input
                        className={btnStyles}
                        type="radio"
                        name="size"
<<<<<<< HEAD:pages/Products/[id].js
                        id={coffee?.data?.attributes?.uid + size}
                        value={size}
                        onClick={() =>
                          setSelectedSize(size === selectedSize ? "" : size)
                        }
                      />
                      <label
                        htmlFor={coffee?.data?.attributes?.uid + size}
                        className={selectedSize === size ? selectedLabel : ""}
                      >
                        {size.replace("_", " ")}: $
                        {coffee?.data?.attributes?.sizes[size]}
                      </label>
                    </>
=======
                        id={coffee?.uid + size}
                        value={size}
                        onClick={() => setSelectedSize(size === selectedSize ? "" : size)}
                      />
                      <label htmlFor={coffee?.uid + size} className={selectedSize === size ? selectedLabel : ""}>
                        {size.replace("_", " ")}: ${coffee?.sizes[size]}
                      </label>
                    </React.Fragment>
>>>>>>> 2abd997b27b7e59e1ff8c6434ff53535e9932681:pages/Products/[uid].js
                  ))}
                </div>
              </>
            )}
          </div>

          <div className={stylesDetailsProduct}>
            {coffee?.styles.length > 0 && (
              <>
                <h3>
                  <strong>Style</strong>
                </h3>
                <div className={style}>
<<<<<<< HEAD:pages/Products/[id].js
                  {coffee?.data?.attributes?.styles?.map((style) => (
                    <>
                      <input
                        className={btnStyles}
                        type="radio"
                        id={coffee?.data?.attributes?.uid + style}
                        name="style"
                        value={style}
                        onClick={(e) =>
                          setselectedStyle(style === selectedStyle ? "" : style)
                        }
                      />
                      <label
                        htmlFor={coffee?.data?.attributes?.uid + style}
                        className={selectedStyle === style ? selectedLabel : ""}
                      >
                        <span>{labelIcons[style]}</span>
                        <p style={{marginLeft:'10px'}}>{style}</p>
                      </label>
                    </>
=======
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
>>>>>>> 2abd997b27b7e59e1ff8c6434ff53535e9932681:pages/Products/[uid].js
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
                <p
                  style={{
                    color: coffee?.accentColor,
                    fontWeight: "bold",

                    cursor: "pointer",
                  }}
                >
                  Coffee Details :
                </p>
                {coffee?.details?.map((detail) => (
                  <ul>
                    {detail?.content.map((contents, i) => (
                      <li key={i}>{contents}</li>
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
            color: coffee?.accentColor,
            cursor: "pointer",
          }}
        />
      </div>
<<<<<<< HEAD:pages/Products/[id].js
      <Footer
        style={{ backgroundColor: coffee?.data?.attributes?.accent_color }}
      />
=======
      <Footer style={{ backgroundColor: coffee?.accentColor }} />
>>>>>>> 2abd997b27b7e59e1ff8c6434ff53535e9932681:pages/Products/[uid].js
    </div>
  );
};

export default Detail;
