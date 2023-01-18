import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const FeaturedProducts = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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

  const [data, setData] = React.useState();
  const [status, setStatus] = React.useState("idle");

  React.useEffect(() => {
    setStatus("fetching");
    fetch(
      `https://strapi-death-wish-coffee-backend.onrender.com/api/coffees?filters[id][$in][0]=78&filters[id][$in][1]=86&filters[id][$in][2]=75&filters[id][$in][3]=80&filters[id][$in][4]=84&populate=main_image`
    )
      .then((res) => res.json())
      .then((data) => {
        setStatus("done");
        console.log(data.data);
        setData(data.data);
      });
  }, []);
  return (
    
    <div className="FeaturedProducts">
      <Slider {...settings}>
     {data?.map((coffee, id) => (
        <Card className="card">
          <CardActionArea
            style={{
              backgroundColor: "black",
              color: "white",
            }}
          >
            <CardMedia
              className="image-coffee"
              component="img"
              image={
                coffee?.attributes?.main_image?.data?.attributes?.formats
                  ?.medium?.url
              }
              alt="coffee"
            />

            <CardContent style={{
              
            }}>
              <Box style={{
                height: '90px'
              }}>
              <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                {coffee?.attributes?.name}
              </Typography>
              </Box>
              <Typography
              fontWeight="bold"
                variant="body1"
                color="text.secondary"
                style={{
                  color: "white",
                  
                }}
              >
                <Box style={{
                  fontWeight: "bold",
                  fontSize: '22px'
                }}>
                {coffee?.attributes?.rating}⭐
                
                💲{coffee?.attributes?.price}
                </Box>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{
              backgroundColor: "black",
              justifyContent: "center",
              
            }}
          >
            <Button
              size="small"
              style={{
                color: "black",
                backgroundColor: "red",
                width: "185px",
                height: "70px",
                fontWeight: 'bold'
              }}
            >
              SHOP NOW
            </Button>
          </CardActions>
        </Card>
      ))}
    </Slider>
    </div>
    
  );
};

export default FeaturedProducts;