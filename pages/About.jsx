import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Box, Container } from '@mui/system'
import { Button, Typography } from '@mui/material'
import Link from "next/link";

//styles
import {
  rebelsResp, 
  rebels,
  rebelsRespTitle,
  history,
  flash1,
  flash2,
  historyTitle,
  timeline,
  creation,
  creationYear,
  creationImg,
  creationTitle,
  creationText,
  goodMorning,
  goodMorningTitle,
  goodMorningText,
  goodMorningDate,
  gmYearResp,
  gmYear,
  superBowl,
  superBowlDate,
  superBowlTitle,
  superBowlText,
  caffeinated,
  caffeinatedTitle,
  caffeinatedText,
  caffeinatedDate,
  caffeinatedYear,
  historic,
  historicDate,
  historicTitle,
  historicText
} from '../styles/About.module.css'

const About = () => {
  return (
    <>
      <Navbar />
      <Box
          className={rebelsResp}
          style={{
            width: 717,
            height: 180
          }}
        >
          <Typography
            variant='h1'
            align='left'
            className={rebelsRespTitle}
            
          >
            REBELS WITH CAUSES

          </Typography>
          <Typography
            variant="body2"
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: 'lighter',
              

            }}
          >
            We lead with an alternative point of view, providing bold smooth cups of coffee to our people. We find fresh ways to enjoy coffee and we foster community along the way. Disrupting the status quo interests us, so we create edgy, sarcastic content. We live to rebel against blah beans-and a boring, lackluster life.
          </Typography>

        </Box>
      <Box
        style={{
          maxWidth: '100%',
          height: '1194px',
          backgroundImage: `url(${"images/rebels.jpg"})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          paddingTop: 220,

        }}
        
      >
        <Box
          className={rebels}
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
        className={history}
        
      >
        <img
          src="images/flash1.png"
          alt="red flash"
          className={flash1}
        />
        
        <Typography
          variant='h1'
          align='center'
          className={historyTitle}
          
        >
          OUR HISTORY
        </Typography>
        <img
          src="images/flash2.png"
          alt="red flash"
          className={flash2}
        />
        

      </Container>
      <Container
        className={timeline}
        
      >
        <Box
          className={creation}
          
        >
          <Typography
            className={creationYear}
            
          >
            2012
          </Typography>
          <img
            className={creationImg}
            src="images/2012.png"
            alt="bottle"
            
          />
        </Box>
        <Box
          style={{
            maxWidth: '50%',
            marginRight: 25,
            marginBottom: 50
          }}
        >
          <Typography
            className={creationTitle}
            
          >
            THE CREATION
          </Typography>
          <Typography
            className={creationText}
            variant="body1"
           
          >
            Mike Brown brings his idea for Death Wish Coffee to life, creating the recipe + roasting process.
          </Typography>
        </Box>
        <Box
          className={goodMorning}
          
        >
          <Typography
            className={goodMorningTitle}
            
          >
            GOOD MORNING AMERICA
          </Typography>
          <Typography
            className={goodMorningText}
            variant="body1"
            
          >
            "Good Morning America" airs a segment on Death Wish Coffee and introduces us to thousands of people
          </Typography>
        </Box>
        <Box
          className={goodMorningDate}
          
        >
          <Typography
            className={gmYearResp}
            
          >
            2013
          </Typography>
          <img
            src="images/2013.png"
            alt="GMA"
            style={{
              height: 180,
              marginRight: 20
            }}
          />
          <Typography
            className={gmYear}
            
          >
            2013
          </Typography>
        </Box>
        <Box
          className={superBowl}
          
        >
          <Typography
            className={superBowlDate}
          
          >
            2016
          </Typography>
          <img
            src="images/2016.png"
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
            className={superBowlTitle}
            
          >
            SUPER BOWL 50 AD AIRS
          </Typography>
          <Typography
            className={superBowlText}
            variant="body1"
            
          >
            We become the smallest company to run a commercial during Super Bowl 50, exposing 167 million viewers to Death Wish Coffee.
          </Typography>
        </Box>
        <Box
          className={caffeinated}
          
        >
          <Typography
            className={caffeinatedTitle}
            
          >
            CAFFEINATED THE UNIVERSE
          </Typography>
          <Typography
            className={caffeinatedText}
            variant="body1"
            
          >
            With the help of NASA Food Labs, Death Wish Coffee developed an instant freeze-dried blend of its coffee to fuel the astronauts on the International Space Station.
          </Typography>
        </Box>
        <Box
          className={caffeinatedDate}
          
        >
          <img
            src="images/2018.png"
            alt="rocket"
            style={{
              height: 180,
              marginRight: 20
            }}
          />
          <Typography
            className={caffeinatedYear}
            
          >
            2018
          </Typography>
        </Box>
        <Box
          className={historic}
          
        >
          <Typography
            className={historicDate}
            
          >
            2020
          </Typography>
          <img
            src="images/2020.png"
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
            className={historicTitle}
            
          >
            HISTORIC HOMECOMINGS
          </Typography>
          <Typography
            className={historicText}
            variant="body1"
            
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
