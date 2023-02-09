import { Container, Box, Typography, Button } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Footer from "../components/Footer";
import { runOut } from "../styles/Subscription.module.css";

//styles
import {
  subscribeHero,
  save,
  buttons,
  subscribeButton,
  goToLogin,
  saveResp,
  subscribeButtonResp,
  goToLoginResp,
  benefits,
  cards,
  truck,
  benefitsTitle,
  savings,
  access,
  manage,
  truckResp,
  savingsResp,
  accessResp,
  manageResp,
  needHelpTitle,
  needHelpText,
  findBrew,
  reviews,
  reviewsResp,
} from "../styles/Subscription.module.css";

const Subscription = () => {
  return (
    <>
      <Navbar />
      <Box
        style={{
          maxWidth: "100%",
          height: "880px",
          backgroundImage: `url(${"images/subscribe2.png.webp"})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingTop: "3rem",
        }}
        className={subscribeHero}
      >
        <Box className={save}>
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
              color: "white",
            }}
          >
            Never run out of coffee and save 10% on all coffee subscription orders. Start a subscription today to
            take advantage of subscriber-only savings, early access to exclusive products and more.
          </Typography>

          <div className={buttons}>
            <Link href="/CreateSubscription">
              <Button
                variant="contained"
                style={{
                  padding: "1rem 1rem",
                  backgroundColor: "#e12727",
                  fontFamily: '"FenomenSans-Book"',
                  color: "black",
                  fontSize: "17px",
                  cursor: "pointer",
                  border: "none",
                  borderRadius: "0",
                }}
                className={subscribeButton}
              >
                CHOOSE SUBSCRIPTION
              </Button>
            </Link>
            <Link href={"/Login"}>
              <Button
                variant="contained"
                style={{
                  padding: "1rem 1rem",
                  backgroundColor: "#e12727",
                  fontFamily: '"FenomenSans-Book"',
                  color: "black",
                  fontSize: "17px",
                  cursor: "pointer",
                  border: "none",
                  borderRadius: "0",
                }}
                className={goToLogin}
              >
                MEMBER LOGIN
              </Button>
            </Link>
          </div>
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
        className={saveResp}
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
            color: "white",
            fontSize: 21,
            fontFamily: `"FenomenSans-Book" !important`,
            fontWeight: "lighter",
            textAlign: "center",
            marginTop: 10,
            paddingRight: 3,
            paddingLeft: 3,
          }}
        >
          Never run out of coffee and save 10% on all coffee subscription orders. Start a subscription today to
          take advantage of subscriber-only savings, early access to exclusive products and more.
        </Typography>

        <div className={buttons}>
          <Link href="/CreateSubscription">
            <Button
              variant="contained"
              style={{
                padding: "1rem 1rem",
                backgroundColor: "#e12727",
                fontFamily: '"FenomenSans-Book"',
                color: "black",
                fontSize: "17px",
                cursor: "pointer",
                border: "none",
                borderRadius: "0",
              }}
              className={subscribeButtonResp}
            >
              CHOOSE SUBSCRIPTION
            </Button>
          </Link>
          <Link href={"/Login"}>
            {" "}
            <Button
              variant="contained"
              sx={{
                padding: "1rem 1rem",
                backgroundColor: "#e12727",
                fontFamily: '"FenomenSans-Book"',
                color: "black",
                fontSize: "17px",
                cursor: "pointer",
                border: "none",
                borderRadius: "0",
              }}
              className={goToLoginResp}
            >
              MEMBER LOGIN
            </Button>
          </Link>
        </div>
      </Box>
      <div className={benefits}>
        <Typography variant="h1" align="center" className={benefitsTitle}>
          SUBSCRIPTION BENEFITS
        </Typography>
        <Box
          style={{
            maxWidth: "100%",

            backgroundColor: "black",
            display: "flex",
          }}
          className={cards}
        >
          <Card sx={{ maxWidth: 474 }} style={{ backgroundColor: "black" }} data-turc="4" className={truck}>
            <CardMedia component="img" alt="red truck" height="165" image="images/truck.png" />
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
                Your coffee will always be there for youd.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 474 }} style={{ backgroundColor: "black" }} className={savings}>
            <CardMedia component="img" alt="savings" height="165" image="images/save.png" />
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
          <Card sx={{ maxWidth: 474 }} style={{ backgroundColor: "black" }} className={access}>
            <CardMedia component="img" alt="easy access" height="165" image="images/access.png" />
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
          <Card sx={{ maxWidth: 474 }} style={{ backgroundColor: "black" }} className={manage}>
            <CardMedia component="img" alt="manage" height="165" image="images/manage.png" />
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
            className={truckResp}
          >
            <CardMedia
              sx={{ height: 48, width: 76, margin: "auto" }}
              component="img"
              alt="red truck"
              image="images/truck.png"
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
            className={savingsResp}
          >
            <CardMedia
              sx={{ height: 48, width: 76, margin: "auto" }}
              component="img"
              alt="savings"
              image="images/save.png"
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
                SAVE EACH MONTH
              </Typography>
              <Typography
                variant="body1"
                style={{
                  width: "100%",
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
          <Card sx={{ maxWidth: "50%" }} style={{ backgroundColor: "black" }} className={accessResp}>
            <CardMedia
              sx={{ height: 48, width: 76, margin: "auto" }}
              component="img"
              alt="easy access"
              image="images/access.png"
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
          <Card sx={{ maxWidth: "50%" }} style={{ backgroundColor: "black" }} className={manageResp}>
            <CardMedia
              sx={{ height: 48, width: 76, margin: "auto" }}
              component="img"
              alt="manage"
              image="images/manage.png"
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
      </div>
      <Container
        style={{
          backgroundColor: "#201E1D",
          maxWidth: "100%",

          paddingTop: 60,
          paddingBottom: 100,
        }}
      >
        <Typography variant="h1" align="center" className={needHelpTitle}>
          NEED HELP CHOOSING ?
        </Typography>
        <Typography variant="body1" className={needHelpText}>
          Take a short quiz to figure out which one of our everyday roasts is best for you.
        </Typography>
        <Button
          variant="contained"
          sx={{
            padding: "1rem 1rem",
            backgroundColor: "#e12727",
            fontFamily: '"FenomenSans-Book"',
            color: "black",
            fontSize: "17px",
            cursor: "pointer",
            border: "none",
            borderRadius: "0",
          }}
          className={findBrew}
        >
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
        className={reviews}
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
            <CardMedia component="img" alt="ratings" height="50" image="images/stars.png" />
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
            <CardMedia component="img" alt="ratings" height="50" image="images/stars.png" />
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
            <CardMedia component="img" alt="ratings" height="50" image="images/stars.png" />
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
        className={reviewsResp}
      >
        <Typography
          variant="h1"
          align="center"
          style={{
            color: "white",
            fontSize: 32,
            fontWeight: "bold",
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
            maxHeight: 185,
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
              image="images/stars.png"
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
      <Footer id="subscriptionFooter" />
    </>
  );
};

export default Subscription;
