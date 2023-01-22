import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Box, Container } from '@mui/system'
import { Button, Typography } from '@mui/material'
import Link from "next/link";

const About = () => {
  return (
    <>
      <Navbar />
      <Box
        style={{
          maxWidth: '100%',
          height: '1194px',
          backgroundImage: `url(${"rebels.jpg"})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          paddingTop: 220,

        }}
        className="aboutHero"
      >
        <Box
          className="rebels"
          style={{
            marginLeft: 200,
            width: 629,
            height: 273
          }}
        >
          <Typography
            variant='h1'
            align='left'
            style={{
              color: 'white',
              fontSize: 60,
              marginTop: 200,
              fontWeight: '900',
              fontFamily: 'revansmedium'
            }}
          >
            REBELS WITH CAUSES

          </Typography>
          <Typography
            variant="body2"
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'lighter',
              marginTop: 10,

            }}
          >
            We lead with an alternative point of view, providing bold smooth cups of coffee to our people. We find fresh ways to enjoy coffee and we foster community along the way. Disrupting the status quo interests us, so we create edgy, sarcastic content. We live to rebel against blah beans-and a boring, lackluster life.
          </Typography>

        </Box>

      </Box>
      <Container
        className="history"
        style={{
          backgroundColor: 'black',
          width: '100%',
          height: 346,
          display: 'flex',
          justifyContent: 'space-evenly',


        }}
      >
        <img
          src="flash1.png"
          alt="red flash"
          style={{ height: 300 }}
        />
        <Typography
          variant='h1'
          align='center'
          style={{
            color: 'white',
            fontSize: 56,
            fontWeight: '900',
            fontFamily: 'revansmedium',
            marginTop: 100
          }}
        >
          OUR HISTORY
        </Typography>
        <img
          src="flash2.png"
          alt="red flash"
          style={{ height: 300 }}
        />

      </Container>
      <Container
        className='timeline'
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          backgroundColor: 'black',
          maxWidth: 1434
        }}
      >
        <Box
          style={{
            height: 198,
            maxWidth: '50%',
            display: 'flex',
            alignItems: 'center',
            marginRight: 50,
            marginLeft: 'auto',
            marginBottom: 50
          }}
        >
          <Typography
            style={{
              color: 'red',
              fontSize: 40,
              fontWeight: 900,
              marginLeft: 100
            }}
          >
            2012
          </Typography>
          <img
            src="2012.png"
            alt="bottle"
            style={{
              height: 180,
            }}
          />
        </Box>
        <Box
          style={{
            maxWidth: '50%',
            marginRight: 'auto',
            marginBottom: 50
          }}
        >
          <Typography
            style={{
              color: 'red',
              fontSize: 38,
              fontWeight: 900,
              textAlign: 'left',
              fontFamily: 'revansmedium',
              marginTop: 30
            }}
          >
            THE CREATION
          </Typography>
          <Typography
            variant="body1"
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: 'lighter',
              textAlign: 'left',

            }}
          >
            Mike Brown brings his idea for Death Wish Coffee to life, creating the recipe + roasting process.
          </Typography>
        </Box>
        <Box
          style={{
            maxWidth: '50%',
            marginRight: 50,
            marginLeft: 'auto',
            marginBottom: 50
          }}
        >
          <Typography
            style={{
              color: 'red',
              fontSize: 38,
              fontWeight: 900,
              textAlign: 'right',
              fontFamily: 'revansmedium',
              marginTop: 30
            }}
          >
            GOOD MORNING AMERICA
          </Typography>
          <Typography
            variant="body1"
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: 'lighter',
              textAlign: 'right',

            }}
          >
            "Good Morning America" airs a segment on Death Wish Coffee and introduces us to thousands of people
          </Typography>
        </Box>
        <Box
          style={{
            height: 198,
            maxWidth: '50%',
            display: 'flex',
            alignItems: 'center',
            marginLeft: 50,
            marginRight: 'auto',
            marginBottom: 50
            
          }}
        >
          <img
            src="2013.png"
            alt="GMA"
            style={{
              height: 180,
              marginRight: 20
            }}
          />
          <Typography
            style={{
              color: 'red',
              fontSize: 40,
              fontWeight: 900,
              marginRight: 100

            }}
          >
            2013
          </Typography>
        </Box>
        <Box
          style={{
            height: 198,
            maxWidth: '50%',
            display: 'flex',
            alignItems: 'center',
            marginRight: 50,
            marginLeft: 'auto',
            marginBottom: 50
          }}
        >
          <Typography
            style={{
              color: 'red',
              fontSize: 40,
              fontWeight: 900,
              marginLeft: 100
            }}
          >
            2016
          </Typography>
          <img
            src="2016.png"
            alt="bean"
            style={{
              height: 180,
            }}
          />
        </Box>
        <Box
          style={{
            maxWidth: '50%',
            marginRight: 'auto',
            marginBottom: 50
          }}
        >
          <Typography
            style={{
              color: 'red',
              fontSize: 38,
              fontWeight: 900,
              textAlign: 'left',
              fontFamily: 'revansmedium',
              marginTop: 30
            }}
          >
            SUPER BOWL 50 AD AIRS
          </Typography>
          <Typography
            variant="body1"
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: 'lighter',
              textAlign: 'left',

            }}
          >
            We become the smallest company to run a commercial during Super Bowl 50, exposing 167 million viewers to Death Wish Coffee.
          </Typography>
        </Box>
        <Box
          style={{
            maxWidth: '50%',
            marginRight: 50,
            marginLeft: 'auto',
            marginBottom: 50
          }}
        >
          <Typography
            style={{
              color: 'red',
              fontSize: 38,
              fontWeight: 900,
              textAlign: 'right',
              fontFamily: 'revansmedium',
              marginTop: 30
            }}
          >
            CAFFEINATED THE UNIVERSE
          </Typography>
          <Typography
            variant="body1"
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: 'lighter',
              textAlign: 'right',

            }}
          >
            With the help of NASA Food Labs, Death Wish Coffee developed an instant freeze-dried blend of its coffee to fuel the astronauts on the International Space Station.
          </Typography>
        </Box>
        <Box
          style={{
            height: 198,
            maxWidth: '50%',
            display: 'flex',
            alignItems: 'center',
            marginLeft: 50,
            marginRight: 'auto',
            marginBottom: 50
          }}
        >
          <img
            src="2018.png"
            alt="rocket"
            style={{
              height: 180,
              marginRight: 20
            }}
          />
          <Typography
            style={{
              color: 'red',
              fontSize: 40,
              fontWeight: 900,
              marginRight: 100

            }}
          >
            2018
          </Typography>
        </Box>
        <Box
          style={{
            height: 198,
            maxWidth: '50%',
            display: 'flex',
            alignItems: 'center',
            marginRight: 50,
            marginLeft: 'auto',
            marginBottom: 50
          }}
        >
          <Typography
            style={{
              color: 'red',
              fontSize: 40,
              fontWeight: 900,
              marginLeft: 100
            }}
          >
            2020
          </Typography>
          <img
            src="2020.png"
            alt="house"
            style={{
              height: 180,
            }}
          />
        </Box>
        <Box
          style={{
            maxWidth: '50%',
            marginRight: 'auto',
            marginBottom: 50
          }}
        >
          <Typography
            style={{
              color: 'red',
              fontSize: 38,
              fontWeight: 900,
              textAlign: 'left',
              fontFamily: 'revansmedium',
              marginTop: 30
            }}
          >
            HISTORIC HOMECOMINGS
          </Typography>
          <Typography
            variant="body1"
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: 'lighter',
              textAlign: 'left',

            }}
          >
            Death Wish Coffee headquarters moves to historic building from 1889 in Saratoga Springs, NY-the location of our original coffee shop.
          </Typography>
        </Box>

      </Container>
      <Container
        className="apply"
        style={{
          maxWidth: 990,
          maxHeight: 500,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 172,
          paddingBottom: 172
        }}
      >
        <Typography
          variant='h1'
          align='center'
          style={{
            color: 'white',
            fontSize: 56,
            fontWeight: '900',
            fontFamily: 'revansmedium',
            marginTop: 100
          }}
        >
          APPLY YOURSELF
        </Typography>
        <Typography
            variant="body1"
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: 'lighter',
              textAlign: 'center',

            }}
          >
            Wanna join the team that actually has fun when they work? And did we mention we'll provide all the coffee that you can drink?
          </Typography>
        <Button
          variant="contained"
          style={{
            color: "black",
            backgroundColor: "red",
            width: "150px",
            fontWeight: "600",
            fontSize: '12px',
            marginTop: "25px",
            marginLeft: "auto",
            marginRight: "auto",
            cursor: "pointer",
            display: "block",
            padding: 15
          }}
          className="applyButton"
        >
            <Link href="#" className='applyLink'>APPLY HERE</Link>
            
        </Button>
      </Container>
      <Footer />
    </>
  )
}

export default About
