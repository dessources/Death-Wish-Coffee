import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

const SubNavbar = () => {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${"cafe.jpg"})`,
      }}
    >
      <Box sx={{
        width: 450,
        marginTop: 25,
        marginLeft: 20
      }}>
        <Typography variant="h2" style={{
            fontWeight: 'bold'
        }}>COLOMBIAN, KICKED UP !</Typography>
        <Typography variant="h6">
          Roundhouse your bad habits and start the new year fresh with an
          all-new blend ready to fuel you forward. Available in Ground, Whole
          Bean and Death Cups for a limited time only.
        </Typography>
        <Button variant="contained" style={{
            backgroundColor: 'red',
            color: 'black',
            width: '215px',
            height: '65px',
            fontWeight: 'bold',
            marginTop: '25px'
        }}>SHOP</Button>
      </Box>
    </div>
  );
};

export default SubNavbar;
