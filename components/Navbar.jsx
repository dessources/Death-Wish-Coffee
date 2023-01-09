import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
      style={{
        background: 'black',
        paddingRight: '10%',
        paddingLeft: '10%',
        paddingTop: '5px'
      }}>
        
        <Toolbar>
            
          <Typography className="link" variant="h6" component="div" sx={{ flexGrow: 1 }}
          style={{
            fontWeight: 'bold',
            cursor: 'pointer',
            
        
          }}>
            SUBSCRIPTION
          </Typography>
          <Typography className="link" variant="h6" component="div" sx={{ flexGrow: 1 }}
          style={{
            fontWeight: 'bold'
            
          }}>
            SHOP
          </Typography>
          <Typography className="link" variant="h6" component="div" 
          style={{
            fontWeight: 'bold'
            
          }}>
            STORE LOCATOR
          </Typography>

          <img src={"https://cdn.shopify.com/s/files/1/0271/7209/files/dwc-logo.png?v=1624458280"} alt="" 
          style={{
            height: '140px',
            marginLeft: '60px',
            marginRight: '60px'
          }}/>

          <Typography className="link" variant="h6" component="div" sx={{ flexGrow: 1 }}
          style={{
            fontWeight: 'bold'
          }}>
            BLOG & RECIPES
          </Typography>
          <Typography className="link" variant="h6" component="div" sx={{ flexGrow: 1 }}
          style={{
            fontWeight: 'bold'
            
          }}>
            ABOUT
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SearchIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ShoppingCartIcon />
          </IconButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
