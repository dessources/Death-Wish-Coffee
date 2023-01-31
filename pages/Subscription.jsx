import { AppBar, Container, Box, Typography, Button } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { runOut } from "../styles/Subscription.module.css";

const Subscription = () => {
  return (
    <>
      <Navbar />
      <Box
        style={{
          maxWidth: "100%",
          height: "880px",
          backgroundImage: `url(${"subscribe2.png.webp"})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="subscribeHero"
      >
        <Box className="save">
          <Typography
            variant="h1"
            align="center"
            style={{
              color: "white",
              fontSize: 69,
              marginTop: 150,
              fontWeight: "1000",
              fontFamily: "revansmedium",
            }}
          >
            SUBSCRIBE & SAVE
          </Typography>
          <Typography
            variant="body1"
            style={{
              fontSize: 24,
              fontWeight: "lighter",
              textAlign: "center",
              marginTop: 20,
              fontFamily: "'FenomenSans-Book'",
            }}
          >
            Never run out of coffee and save 10% on all coffee subscription orders. Start a subscription today to
            take advantage of subscriber-only savings, early access to exclusive products and more.
          </Typography>

          <Button
            variant="contained"
            style={{
              fontFamily: "'FenomenSans-Book'",
              color: "black",
              width: "210px",
              height: "60px",
              fontWeight: "500",
              marginTop: "50px",
              marginLeft: "15%",
              marginRight: 15,
              cursor: "pointer",
              display: "inline-block",
            }}
            className="subscribeButton"
          >
            <Link href="#">CHOOSE SUBSCRIPTION</Link>
          </Button>
          <Button
            variant="contained"
            style={{
              fontFamily: "'FenomenSans-Book'",

              color: "black",
              width: "160px",
              height: "60px",
              fontWeight: "500",
              marginTop: "50px",
              marginLeft: 5,
              marginRight: "auto",
              cursor: "pointer",
              display: "inline-block",
            }}
            className="goToLogin"
          >
            <Link href={"/Login"}>MEMBER LOGIN</Link>
          </Button>
        </Box>
      </Box>
      <Box
        style={{
          backgroundColor: "rgba(0, 0, 0, .5)",
          width: "612px",
          height: "320px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        className="saveResp"
      >
        <Typography
          variant="h1"
          align="center"
          style={{
            color: "white",
            fontSize: 40,
            marginTop: 50,
            fontWeight: "1000",
            fontFamily: "revansmedium",
          }}
        >
          SUBSCRIBE & SAVE
        </Typography>
        <Typography
          // variant="body1"
          style={{
            color: "red",
            fontSize: 21,
            fontFamily: `"FenomenSans-Book" !important`,
            fontWeight: "lighter",
            textAlign: "center",
            marginTop: 10,
            paddingRight: 3,
            paddingLeft: 3,
          }}
          className={runOut}
        >
          Never run out of coffee and save 10% on all coffee subscription orders. Start a subscription today to
          take advantage of subscriber-only savings, early access to exclusive products and more.
        </Typography>

        <Button
          variant="contained"
          style={{
            color: "black",
            width: "210px",
            height: "60px",
            fontFamily: "FenomenSans-Book",

            fontWeight: "500",
            marginTop: "25px",
            marginLeft: "auto",
            marginRight: "auto",
            cursor: "pointer",
            display: "block",
          }}
          className="subscribeButtonResp"
        >
          <Link href="#">CHOOSE SUBSCRIPTION</Link>
        </Button>
        <Button
          variant="contained"
          sx={{
            color: "black",
            width: "160px",
            height: "60px",
            fontWeight: "500",
            marginTop: "30px",
            marginLeft: "auto",
            fontFamily: "FenomenSans-Book",
            marginRight: "auto",
            cursor: "pointer",
            display: "block",
          }}
          className="goToLoginResp"
        >
          <Link href={"/Login"}>MEMBER LOGIN</Link>
        </Button>
      </Box>
      <Container className="benefits">
        <Typography variant="h1" align="center" className="benefitsTitle">
          SUBSCRIPTION BENEFITS
        </Typography>
        <Box
          style={{
            maxWidth: "100%",
            maxHeight: 320,
            backgroundColor: "black",
            display: "flex",
          }}
          className="cards"
        >
          <Card sx={{ maxWidth: 474 }} style={{ backgroundColor: "black" }} className="truck">
            <CardMedia component="img" alt="red truck" height="165" image="truck.png" />
            <CardContent>
              <Typography
                variant="h5"
                style={{
                  color: "white",
                  fontSize: "26px",
                  fontFamily: "revansmedium",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                NEVER RUN OUT
              </Typography>
              <Typography
                variant="body1"
                style={{
                  color: "white",
                  fontSize: 24,
                  fontWeight: "lighter",
                  textAlign: "center",
                  marginTop: 20,
                }}
              >
                Your coffee will always be there for you.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 474 }} style={{ backgroundColor: "black" }} className="savings">
            <CardMedia component="img" alt="savings" height="165" image="save.png" />
            <CardContent>
              <Typography
                variant="h5"
                style={{
                  color: "white",
                  fontSize: "26px",
                  fontFamily: "revansmedium",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
                gutterBottom
              >
                SAVE EACH MONTH
              </Typography>
              <Typography
                variant="body1"
                style={{
                  color: "white",
                  fontSize: 24,
                  fontWeight: "lighter",
                  textAlign: "center",
                  marginTop: 20,
                }}
              >
                Save 10% and get free shipping.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 474 }} style={{ backgroundColor: "black" }} className="access">
            <CardMedia component="img" alt="easy access" height="165" image="access.png" />
            <CardContent>
              <Typography
                variant="h5"
                style={{
                  color: "white",
                  fontSize: "26px",
                  fontFamily: "revansmedium",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                EXCLUSIVE ACCESS
              </Typography>
              <Typography
                variant="body1"
                style={{
                  color: "white",
                  fontSize: 24,
                  fontWeight: "lighter",
                  textAlign: "center",
                  marginTop: 20,
                }}
              >
                To limited-edition products and fresh, new releases.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 474 }} style={{ backgroundColor: "black" }} className="manage">
            <CardMedia component="img" alt="manage" height="165" image="manage.png" />
            <CardContent>
              <Typography
                variant="h5"
                style={{
                  color: "white",
                  fontSize: "26px",
                  fontFamily: "revansmedium",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                MANAGE WITH EASE
              </Typography>
              <Typography
                variant="body1"
                style={{
                  color: "white",
                  fontSize: 24,
                  fontWeight: "lighter",
                  textAlign: "center",
                  marginTop: 20,
                }}
              >
                Flexible options to pause, swap or cancel at anytime.
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{ maxWidth: "50%" }}
            style={{ backgroundColor: "black", marginTop: 15 }}
            className="truckResp"
          >
            <CardMedia
              sx={{ height: 48, width: 76, margin: "auto" }}
              component="img"
              alt="red truck"
              image="truck.png"
            />
            <CardContent>
              <Typography
                variant="h5"
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontFamily: "revansmedium",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                NEVER RUN OUT
              </Typography>
              <Typography
                variant="body1"
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "lighter",
                  textAlign: "center",
                  marginTop: 20,
                }}
              >
                Your coffee will always be there for you.
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{ maxWidth: "50%" }}
            style={{ backgroundColor: "black", marginTop: 15 }}
            className="savingsResp"
          >
            <CardMedia
              sx={{ height: 48, width: 76, margin: "auto" }}
              component="img"
              alt="savings"
              image="save.png"
            />
            <CardContent>
              <Typography
                variant="h5"
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontFamily: "revansmedium",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
                gutterBottom
              >
                SAVE EACH MONTH
              </Typography>
              <Typography
                variant="body1"
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "lighter",
                  textAlign: "center",
                  marginTop: 20,
                }}
              >
                Save 10% and get free shipping.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: "50%" }} style={{ backgroundColor: "black" }} className="accessResp">
            <CardMedia
              sx={{ height: 48, width: 76, margin: "auto" }}
              component="img"
              alt="easy access"
              image="access.png"
            />
            <CardContent>
              <Typography
                variant="h5"
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontFamily: "revansmedium",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                EXCLUSIVE ACCESS
              </Typography>
              <Typography
                variant="body1"
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "lighter",
                  textAlign: "center",
                  marginTop: 20,
                }}
              >
                To limited-edition products and fresh, new releases.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: "50%" }} style={{ backgroundColor: "black" }} className="manageResp">
            <CardMedia
              sx={{ height: 48, width: 76, margin: "auto" }}
              component="img"
              alt="manage"
              image="manage.png"
            />
            <CardContent>
              <Typography
                variant="h5"
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontFamily: "revansmedium",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                MANAGE WITH EASE
              </Typography>
              <Typography
                variant="body1"
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "lighter",
                  textAlign: "center",
                  marginTop: 20,
                }}
              >
                Flexible options to pause, swap or cancel at anytime.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
      <Container
        style={{
          backgroundColor: "#201E1D",
          maxWidth: "100%",
          maxHeight: "445px",
          paddingTop: 60,
          paddingBottom: 100,
        }}
      >
        <Typography variant="h1" align="center" className="needHelpTitle">
          NEED HELP CHOOSING ?
        </Typography>
        <Typography variant="body1" className="needHelpText">
          Take a short quiz to figure out which one of our everyday roasts is best for you.
        </Typography>
        <Button variant="contained" className="findBrew">
          <Link href="/Quizz">FIND MY BREW</Link>
        </Button>
      </Container>
      <Container
        style={{
          backgroundColor: "black",
          maxHeight: "689px",
          maxWidth: "100%",
          marginBottom: "100px",
        }}
        className="reviews"
      >
        <Typography
          variant="h1"
          align="center"
          style={{
            color: "white",
            fontSize: 69,
            fontWeight: "1000",
            marginTop: 100,
            marginBottom: 100,
            fontFamily: "revansmedium",
          }}
        >
          CUSTOMER REVIEWS
        </Typography>
        <Box
          style={{
            maxWidth: "100%",
            maxHeight: 280,
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card sx={{ maxWidth: 520 }} style={{ backgroundColor: "black" }}>
            <CardMedia component="img" alt="ratings" height="50" image="stars.png" />
            <CardContent>
              <Typography
                variant="h5"
                style={{
                  color: "white",
                  fontSize: "26px",
                  fontFamily: "revansmedium",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Loved it so much
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                style={{
                  color: "white",
                  fontSize: 24,
                  fontWeight: "lighter",
                  textAlign: "center",
                  marginTop: 20,
                }}
              >
                Very smooth and rich flavor. I loved it so much I got a subscription of the Medium Roast Death
                Cups
              </Typography>
              <Typography
                variant="h5"
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontFamily: "revansmedium",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                - Sue P.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 520 }} style={{ backgroundColor: "black" }}>
            <CardMedia component="img" alt="ratings" height="50" image="stars.png" />
            <CardContent>
              <Typography
                variant="h5"
                style={{
                  color: "white",
                  fontSize: "26px",
                  fontFamily: "revansmedium",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Best. Coffee. EVER.
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                style={{
                  color: "white",
                  fontSize: 24,
                  fontWeight: "lighter",
                  textAlign: "center",
                  marginTop: 20,
                }}
              >
                I'm on a subscription, and probably will be untill the day I drop dead!
              </Typography>
              <Typography
                variant="h5"
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontFamily: "revansmedium",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                - Jephta C.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 520 }} style={{ backgroundColor: "black" }}>
            <CardMedia component="img" alt="ratings" height="50" image="stars.png" />
            <CardContent>
              <Typography
                variant="h5"
                style={{
                  color: "white",
                  fontSize: "26px",
                  fontFamily: "revansmedium",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                The kick you need
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                style={{
                  color: "white",
                  fontSize: 24,
                  fontWeight: "lighter",
                  textAlign: "center",
                  marginTop: 20,
                }}
              >
                We love the coffee so much that we have a monthly subscription to the dark and medium roast!
              </Typography>
              <Typography
                variant="h5"
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontFamily: "revansmedium",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                - Erica O.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
      <Container
        style={{
          backgroundColor: "black",
          maxHeight: "392px",
          maxWidth: "100%",
          marginBottom: "20px",
        }}
        className="reviewsResp"
      >
        <Typography
          variant="h1"
          align="center"
          style={{
            color: "white",
            fontSize: 40,
            fontWeight: "1000",
            marginTop: 50,
            marginBottom: 50,
            fontFamily: "revansmedium",
          }}
        >
          CUSTOMER REVIEWS
        </Typography>
        <Box
          style={{
            maxWidth: "100%",
            maxHeight: 185 /*  */,
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card sx={{ maxWidth: 588 }} style={{ backgroundColor: "black" }}>
            <CardMedia
              sx={{ height: 28, width: 156, margin: "auto" }}
              component="img"
              alt="ratings"
              image="stars.png"
            />
            <CardContent>
              <Typography
                variant="h5"
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontFamily: "revansmedium",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Loved it so much
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "lighter",
                  textAlign: "center",
                  marginTop: 20,
                }}
              >
                Very smooth and rich flavor. I loved it so much I got a subscription of the Medium Roast Death
                Cups
              </Typography>
              <Typography
                variant="h5"
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontFamily: "revansmedium",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                - Sue P.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
      <AppBar position="static" sx={{ top: "auto", bottom: 0 }}>
        <Container
          style={{ backgroundColor: "black", maxHeight: 423, maxWidth: "100%" }}
          className="footerBlack"
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Link
              href={"/"}
              style={{
                marginRight: 50,
                marginLeft: "auto",
                marginTop: 100,
              }}
            >
              <img
                src={"https://cdn.shopify.com/s/files/1/0271/7209/files/dwc-logo.png?v=1624458280"}
                alt=""
                style={{
                  height: 230,
                  widtth: 230,
                }}
              />
            </Link>
            <Box
              style={{
                marginRight: 50,
                marginLeft: 50,
                maxWidth: 104,
              }}
            >
              <Typography
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 130,
                }}
              >
                Company
              </Typography>
              <Typography
                className="link"
                style={{
                  fontSize: 16,
                  fontWeight: "lighter",
                }}
                gutterBottom
              >
                Reviews
              </Typography>
              <Typography
                className="link"
                style={{
                  fontSize: 16,
                  fontWeight: "lighter",
                }}
                gutterBottom
              >
                FAQ + Help
              </Typography>
              <Typography
                className="link"
                style={{
                  fontSize: 16,
                  fontWeight: "lighter",
                }}
                gutterBottom
              >
                Refund Policy
              </Typography>
              <div style={{ width: 650, display: "flex" }}>
                <Typography
                  style={{
                    fontSize: 16,
                    fontWeight: "lighter",
                    marginTop: 60,
                  }}
                  gutterBottom
                >
                  @ Death Wish Coffee Co 2023 All Rights Reserved.
                </Typography>

                <Link href="#">
                  <TwitterIcon
                    style={{
                      color: "black",
                      maxHeight: 35,
                      width: 30,
                      marginLeft: 90,
                      marginTop: 60,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      padding: 3,
                    }}
                  />
                </Link>
                <Link href="#">
                  <FacebookIcon
                    style={{
                      color: "black",
                      maxHeight: 35,
                      width: 30,
                      marginLeft: 12,
                      marginTop: 60,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      padding: 3,
                    }}
                  />
                </Link>
                <Link href="#">
                  <InstagramIcon
                    style={{
                      color: "black",
                      maxHeight: 35,
                      width: 30,
                      marginLeft: 12,
                      marginTop: 60,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      padding: 3,
                    }}
                  />
                </Link>
                <Link href="#">
                  <YouTubeIcon
                    style={{
                      color: "black",
                      maxHeight: 35,
                      width: 30,
                      marginLeft: 12,
                      marginTop: 60,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      padding: 3,
                    }}
                  />
                </Link>
              </div>
            </Box>

            <Box style={{ marginRight: 50, marginLeft: 50 }}>
              <Typography
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 130,
                }}
              >
                Accounts + Orders
              </Typography>
              <Typography
                className="link"
                style={{
                  fontSize: 16,
                  fontWeight: "lighter",
                }}
                gutterBottom
              >
                Your Account
              </Typography>
              <Typography
                className="link"
                style={{
                  fontSize: 16,
                  fontWeight: "lighter",
                }}
                gutterBottom
              >
                Shopping Details
              </Typography>
              <Typography
                className="link"
                style={{
                  fontSize: 16,
                  fontWeight: "lighter",
                }}
                gutterBottom
              >
                Subscription
              </Typography>
              <Typography
                className="link"
                style={{
                  fontSize: 16,
                  fontWeight: "lighter",
                }}
                gutterBottom
              >
                Wholesale
              </Typography>
            </Box>
            <Box
              style={{
                marginRight: "auto",
                marginLeft: 50,
              }}
            >
              <Typography
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 130,
                }}
              >
                Legal
              </Typography>
              <Typography
                className="link"
                style={{
                  fontSize: 16,
                  fontWeight: "lighter",
                }}
                gutterBottom
              >
                Terms + Conditions
              </Typography>
              <Typography
                className="link"
                style={{
                  fontSize: 16,
                  fontWeight: "lighter",
                }}
                gutterBottom
              >
                Privacy Policy
              </Typography>
              <Typography
                className="link"
                style={{
                  fontSize: 16,
                  fontWeight: "lighter",
                }}
              >
                PROP 65
              </Typography>
              <Typography
                style={{
                  fontSize: 16,
                  fontWeight: "lighter",
                  marginTop: 25,
                }}
              >
                Get Wired with us
              </Typography>
            </Box>
          </div>
        </Container>
        <Container className="footerResp">
          <div className="footerMenu">
            <h2>END OF THE ROAD, JACK.</h2>
            <Typography
              style={{
                width: 140,
                fontSize: "16px",
                fontWeight: "lighter",
                marginTop: 20,
                marginLeft: "auto",
                marginRight: "auto",
                color: "white",
              }}
            >
              Get Wired with us
            </Typography>
            <div
              style={{
                width: 149,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Link href="#">
                <TwitterIcon
                  style={{
                    color: "black",
                    maxHeight: 33,
                    width: 28,
                    marginTop: 0,
                    borderRadius: "50%",
                    backgroundColor: "white",
                    padding: 3,
                  }}
                />
              </Link>
              <Link href="#">
                <FacebookIcon
                  style={{
                    color: "black",
                    maxHeight: 33,
                    width: 28,
                    marginLeft: 12,
                    marginTop: 0,
                    borderRadius: "50%",
                    backgroundColor: "white",
                    padding: 3,
                  }}
                />
              </Link>
              <Link href="#">
                <InstagramIcon
                  style={{
                    color: "black",
                    maxHeight: 33,
                    width: 28,
                    marginLeft: 12,
                    marginTop: 0,
                    borderRadius: "50%",
                    backgroundColor: "white",
                    padding: 3,
                  }}
                />
              </Link>
              <Link href="#">
                <YouTubeIcon
                  style={{
                    color: "black",
                    maxHeight: 33,
                    width: 28,
                    marginLeft: 12,
                    marginTop: 0,
                    borderRadius: "50%",
                    backgroundColor: "white",
                    padding: 3,
                  }}
                />
              </Link>
            </div>
            <Typography
              style={{
                fontSize: 9,
                fontWeight: "lighter",
                marginTop: 5,
                width: "765px",
                marginLeft: "auto",
              }}
              gutterBottom
            >
              @ Death Wish Coffee Co 2023 All Rights Reserved.
            </Typography>
          </div>
        </Container>
      </AppBar>
    </>
  );
};

export default Subscription;
