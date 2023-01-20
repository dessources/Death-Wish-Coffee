import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Box, Container, display } from '@mui/system'
import { Typography } from '@mui/material'

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
              fontSize: 69,
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
            fontSize: 60,
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
          backgroundColor: 'black'
        }}
      >
        <Box
          style={{
            height: 198,
            maxWidth: '50%',
            display: 'flex',
            alignItems: 'center',
            marginRight: 50,
            marginLeft: 'auto'
          }}
        >
          <Typography
            style={{
              color: 'red',
              fontSize: 40,
              fontWeight: 900,

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
            marginRight: 'auto'
          }}
        >
          <Typography
            style={{
              color: 'red',
              fontSize: 40,
              fontWeight: 900,
              textAlign: 'left',
              fontFamily: 'revansmedium',
              marginTop:30
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

      </Container>
      <Footer />
    </>
  )
}

export default About
