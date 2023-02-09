import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Container } from "@mui/system";
import { Button, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";

//styles
import {
  rebelsResp,
  rebels,
  rebelsRespTitle,
  rebelsRespText,
  history,
  flash1,
  flash2,
  historyTitle,
  timeline,
  milestone,
  milestoneYear,
  milestoneImg,
  milestoneContent,
  milestoneTitle,
  milestoneText,
  timelineResp,
  apply,
} from "../styles/About.module.css";

const About = () => {
  const onMobile = useMediaQuery("(max-width:768px)");
  return (
    <>
      <Navbar />
      <Box
        className={rebelsResp}
        style={{
          width: 717,
          height: 180,
        }}
      >
        <Typography variant="h1" align="left" className={rebelsRespTitle}>
          REBELS WITH CAUSES
        </Typography>
        <Typography
          className={rebelsRespText}
          variant="body2"
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "lighter",
          }}
        >
          We lead with an alternative point of view, providing bold smooth cups of coffee to our people. We find
          fresh ways to enjoy coffee and we foster community along the way. Disrupting the status quo interests
          us, so we create edgy, sarcastic content. We live to rebel against blah beans-and a boring, lackluster
          life.
        </Typography>
      </Box>
      <Box
        style={{
          maxWidth: "100%",
          height: onMobile ? "500px" : "1194px",
          backgroundImage: `url(${"images/rebels.jpg"})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingTop: 220,
        }}
      >
        <Box
          className={rebels}
          style={{
            marginLeft: 200,
            width: 629,
            height: 273,
          }}
        >
          <Typography
            variant="h1"
            align="left"
            style={{
              color: "white",
              fontSize: 60,
              marginTop: 200,
              fontWeight: "900",
              fontFamily: "revansmedium",
            }}
          >
            REBELS WITH CAUSES
          </Typography>
          <Typography
            variant="body2"
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "lighter",
              marginTop: 10,
            }}
          >
            We lead with an alternative point of view, providing bold smooth cups of coffee to our people. We
            find fresh ways to enjoy coffee and we foster community along the way. Disrupting the status quo
            interests us, so we create edgy, sarcastic content. We live to rebel against blah beans-and a boring,
            lackluster life.
          </Typography>
        </Box>
      </Box>
      <Container className={history}>
        <img src="images/flash1.png" alt="red flash" className={flash1} />

        <Typography variant="h1" align="center" className={historyTitle}>
          OUR HISTORY
        </Typography>
        <img src="images/flash2.png" alt="red flash" className={flash2} />
      </Container>
      <Container className={timeline}>
        <div className={milestone}>
          <div className={milestoneYear}>
            <span>2012</span>
            <img className={milestoneImg} src="images/2012.png" alt="bottle" />
          </div>
          <div className={milestoneContent}>
            <Typography className={milestoneTitle}>THE CREATION</Typography>
            <p className={milestoneText}>
              Mike Brown brings his idea for Death Wish Coffee to life, creating the recipe + roasting process.
            </p>
          </div>
        </div>

        <div className={milestone}>
          <div className={milestoneContent}>
            <Typography className={milestoneTitle}>GOOD MORNING AMERICA</Typography>
            <p className={milestoneText} variant="body1">
              "Good Morning America" airs a segment on Death Wish Coffee and introduces us to thousands of people
            </p>
          </div>
          <div className={milestoneYear}>
            <img src="images/2013.png" alt="GMA" />
            <span>2013</span>
          </div>
        </div>

        <div className={milestone}>
          <div className={milestoneYear}>
            <span>2016</span>
            <img src="images/2016.png" alt="bean" />
          </div>
          <div className={milestoneContent}>
            <Typography className={milestoneTitle}>SUPER BOWL 50 AD AIRS</Typography>
            <p className={milestoneText}>
              We become the smallest company to run a commercial during Super Bowl 50, exposing 167 million
              viewers to Death Wish Coffee.
            </p>
          </div>
        </div>

        <div className={milestone}>
          <div className={milestoneContent}>
            <Typography className={milestoneTitle}>CAFFEINATED THE UNIVERSE</Typography>
            <p className={milestoneText}>
              With the help of NASA Food Labs, Death Wish Coffee developed an instant freeze-dried blend of its
              coffee to fuel the astronauts on the International Space Station.
            </p>
          </div>
          <div className={milestoneYear}>
            <img src="images/2018.png" alt="rocket" />
            <span>2018</span>
          </div>
        </div>

        <div className={milestone}>
          <div className={milestoneYear}>
            <span> 2020</span>
            <img src="images/2020.png" alt="house" />
          </div>
          <div className={milestoneContent}>
            <Typography className={milestoneTitle}>HISTORIC HOMECOMINGS</Typography>
            <p className={milestoneText}>
              Death Wish Coffee headquarters moves to historic building from 1889 in Saratoga Springs, NY-the
              location of our original coffee shop.
            </p>
          </div>
        </div>
      </Container>
      <Container className={timelineResp}>
        <Box
          style={{
            height: 150,
            display: "flex",
            flexDirection: "column",
            marginBottom: 120,
            marginTop: 50,
          }}
        >
          <Typography
            style={{
              color: "red",
              fontSize: 20,
              fontWeight: 900,
            }}
            align="center"
          >
            2012
          </Typography>
          <img
            src="images/2012.png"
            alt="2012"
            style={{
              height: 180,

              marginLeft: 110,
            }}
          />
          <Typography
            style={{
              color: "red",
              fontSize: 18,
              fontWeight: 900,
              fontFamily: "revansmedium",
              marginTop: 15,
            }}
            align="center"
          >
            THE CREATION
          </Typography>
          <Typography
            variant="body1"
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "lighter",
              fontFamily: "FenomenSans-Book",
            }}
            align="center"
          >
            Mike Brown brings his idea for Death Wish Coffee to life, creating the recipe + roasting process.
          </Typography>
        </Box>
        <Box
          style={{
            height: 150,
            display: "flex",
            flexDirection: "column",
            marginBottom: 120,
            marginTop: 50,
          }}
        >
          <Typography
            style={{
              color: "red",
              fontSize: 20,
              fontWeight: 900,
            }}
            align="center"
          >
            2013
          </Typography>
          <img src="images/2013.png" alt="GMA" />
          <Typography
            style={{
              color: "red",
              fontSize: 18,
              fontWeight: 900,
              fontFamily: "revansmedium",
              marginTop: 15,
            }}
            align="center"
          >
            GOOD MORNING AMERICA
          </Typography>
          <Typography
            variant="body1"
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "lighter",
              fontFamily: "FenomenSans-Book",
            }}
            align="center"
          >
            "Good Morning America" airs a segment on Death Wish Coffee and introduces us to thousands of people.
          </Typography>
        </Box>
        <Box
          style={{
            height: 150,
            display: "flex",
            flexDirection: "column",
            marginBottom: 120,
            marginTop: 50,
          }}
        >
          <Typography
            style={{
              color: "red",
              fontSize: 20,
              fontWeight: 900,
            }}
            align="center"
          >
            2016
          </Typography>
          <img src="images/2016.png" alt="bean" />
          <Typography
            style={{
              color: "red",
              fontSize: 18,
              fontWeight: 900,
              fontFamily: "revansmedium",
              marginTop: 15,
            }}
            align="center"
          >
            SUPER BOWL 50 AD AIRS
          </Typography>
          <Typography
            variant="body1"
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "lighter",
              fontFamily: "FenomenSans-Book",
            }}
            align="center"
          >
            We become the smallest company to run a commercial during Super Bowl 50, exposing 167 million viewers
            to Death Wish Coffee.
          </Typography>
        </Box>
        <Box
          style={{
            height: 150,
            display: "flex",
            flexDirection: "column",
            marginBottom: 120,
            marginTop: 50,
          }}
        >
          <Typography
            style={{
              color: "red",
              fontSize: 20,
              fontWeight: 900,
            }}
            align="center"
          >
            2018
          </Typography>
          <img src="images/2018.png" alt="rocket" />
          <Typography
            style={{
              color: "red",
              fontSize: 18,
              fontWeight: 900,
              fontFamily: "revansmedium",
              marginTop: 15,
            }}
            align="center"
          >
            CAFFEINATED THE UNIVERSE
          </Typography>
          <Typography
            variant="body1"
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "lighter",
              fontFamily: "FenomenSans-Book",
            }}
            align="center"
          >
            With the help of NASA Food Labs, Death Wish Coffee developed an instant freeze-dried blend of its
            coffee to fuel the astronauts on the International Space Station.
          </Typography>
        </Box>
        <Box
          style={{
            height: 150,
            display: "flex",
            flexDirection: "column",
            marginBottom: 120,
            marginTop: 50,
          }}
        >
          <Typography
            style={{
              color: "red",
              fontSize: 20,
              fontWeight: 900,
            }}
            align="center"
          >
            2020
          </Typography>
          <img src="images/2020.png" alt="GMA" />
          <Typography
            style={{
              color: "red",
              fontSize: 18,
              fontWeight: 900,
              fontFamily: "revansmedium",
              marginTop: 15,
            }}
            align="center"
          >
            HISTORIC HOMECOMINGS
          </Typography>
          <Typography
            variant="body1"
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "lighter",
              fontFamily: "FenomenSans-Book",
            }}
            align="center"
          >
            Death Wish Coffee headquarters moves to historic building from 1889 in Saratoga Springs, NY-the
            location of our original coffee shop.
          </Typography>
        </Box>
      </Container>
      <Container
        className={apply}
        style={{
          maxWidth: 990,
          maxHeight: 500,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 172,
          paddingBottom: 172,
        }}
      >
        <Typography
          variant="h1"
          align="center"
          style={{
            color: "white",
            fontSize: 56,
            fontWeight: "900",
            fontFamily: "revansmedium",
            marginTop: 100,
          }}
        >
          APPLY YOURSELF
        </Typography>
        <Typography
          variant="body1"
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "lighter",
            fontFamily: "FenomenSans-Book",
            textAlign: "center",
          }}
        >
          Wanna join the team that actually has fun when they work? And did we mention we'll provide all the
          coffee that you can drink?
        </Typography>
        <Button
          variant="contained"
          style={{
            color: "black",
            backgroundColor: "red",
            width: "150px",
            fontWeight: "600",
            fontSize: "12px",
            marginTop: "25px",
            marginLeft: "auto",
            marginRight: "auto",
            cursor: "pointer",
            display: "block",
            padding: 15,
          }}
          className="applyButton"
        >
          <Link href="#">APPLY HERE</Link>
        </Button>
      </Container>
      <Footer />
    </>
  );
};

export default About;
