import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const SubNavbar = () => {
  return (
    <>
      <div
        className="home"
        style={{
          backgroundImage: `url(${"cafe.jpg"})`,
        }}
      >
        <Box className="text-Subnavbar"
          sx={{
            width: 450,
            marginTop: 40,
            marginLeft: 20,
          }}
        >
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              color: "white"
            }}
          >
            <span style={{
              color: 'red'
            }}>C</span>OLOMBIAN, KICKED UP !
          </Typography>
          <Typography variant="h6"
              style={{color: 'white'}}
          >
            Roundhouse your bad habits and start the new year fresh with an
            all-new blend ready to fuel you forward. Available in Ground, Whole
            Bean and Death Cups for a limited time only.
          </Typography>
          <Button
            variant="contained"
            style={{
              backgroundColor: "red",
              color: "black",
              width: "215px",
              height: "65px",
              fontWeight: "bold",
              marginTop: "25px",
            }}
          >
            SHOP
          </Button>
        </Box>
      </div>

      <Box className="text-smallscreen"
          sx={{
            padding: '55px'
            
          }}
        >
          <Typography
            variant="h3"
            style={{
              fontWeight: "bold",
            }}
          >
            COLOMBIAN, KICKED UP !
          </Typography>
          <Typography variant="h6">
            Roundhouse your bad habits and start the new year fresh with an
            all-new blend ready to fuel you forward. Available in Ground, Whole
            Bean and Death Cups for a limited time only.
          </Typography>
          <Button
            variant="contained"
            style={{
              backgroundColor: "red",
              color: "black",
              width: "215px",
              height: "65px",
              fontWeight: "bold",
              marginTop: "25px",
            }}
          >
            SHOP
          </Button>
        </Box>
      <Typography
        variant="h6"
        style={{
          fontWeight: "bold",
          color: "red",
          textAlign: "center",
          marginTop: "80px",
          fontSize: '68px'
        }}
      >
        <div className="small-text">
       REBELLIOUS BY NATURE
       </div>
      </Typography>
      
      <Typography
        variant="h5"
        style={{
          textAlign: "center",
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: 20 
        }}
      >
        Death Wish Coffee delivers a bold, full-bodied yet smooth and flavorful brew that will awaken your taste buds, with an extra kick of caffeine to ignite your attitude. We use the highest quality Fair Trade and organic arabica and robusta beans and roast them to never-bitter perfection.
      </Typography>
      <Typography
        variant="h5"
        style={{
          fontWeight: "bold",
          color: "red",
          textAlign: "center",
          marginTop: 10
        }}
      >
        Mugs up, mother functioners.
      </Typography>
    </>
  );
};

export default SubNavbar;
