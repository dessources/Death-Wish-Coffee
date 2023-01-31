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
import { reviews, card, featuredProducts, nameProduct } from "../styles/FeaturedProducts.module.css";
import { getSpecificCoffees } from "../utils/queries";
const FeaturedProducts = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <CarouselLightningIcon type={"next"} sx={{ transform: "translate(-15%,0%) !important" }} />,
    prevArrow: (
      <CarouselLightningIcon
        type={"prev"}
        sx={{ transform: "rotateX(0) rotateY(180deg) translate(-15%,0%) !important " }}
      />
    ),
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
          <Card key={id} className={card} sx={{ borderRadius: "0", background: "transparent" }}>
            <CardActionArea
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "0 20px",
              }}
              sx={{ "& .MuiCardActionArea-focusHighlight": { opacity: "0!important" } }}
            >
              {coffee ? (
                <Link href={`/Products/${coffee?.uid}`}>
                  <CardMedia className="image-coffee" component="img" image={coffee?.mediumImage} alt="coffee" />
                </Link>
              ) : (
                <Skeleton variant="rectangular" width={400} height={400} />
              )}

              <CardContent style={{}}>
                <Box
                  style={{
                    height: "60px",
                  }}
                >
                  <Link href={`/Products/${coffee?.uid}`}>
                    <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                      <span className={nameProduct}>{coffee?.name}</span>
                    </Typography>
                  </Link>
                </Box>

                <Box
                  fontWeight="bold"
                  variant="body1"
                  color="text.secondary"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  <Box className={reviews}>
                    <RatingStars rating={coffee?.rating} />
                    {coffee?.reviews} Reviews
                  </Box>
                  <Box
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    ${coffee?.price}
                  </Box>
                </Box>
              </CardContent>
            </CardActionArea>
            <CardActions
              style={{
                backgroundColor: "black",
                justifyContent: "center",
              }}
            >
              <Link href={`/Products/${coffee?.uid}`}>
                <Button
                  size="small"
                  style={{
                    color: "black",
                    backgroundColor: "red",
                    width: "185px",
                    height: "70px",
                    fontWeight: "bold",
                  }}
                >
                  SHOP NOW
                </Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedProducts;
