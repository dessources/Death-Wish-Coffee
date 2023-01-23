import React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeepMountedModal from '../components/Modal.js'

const Navbar = ({handleOpen}) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
      <div className="navbar">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="fixed"
            style={{
              background: "black",
              paddingRight: "8%",
              paddingLeft: "8%",
            }}
          >
            <Toolbar>
              <Typography
                className="link"
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                <Link href={"/Subscription"}>SUBSCRIPTION</Link>
              </Typography>

              <Typography
                className="link"
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontWeight: "bold",
                }}
              >
                <Link href={"/Shop"}>SHOP</Link>
              </Typography>

              <Typography
                className="link"
                variant="h6"
                component="div"
                style={{
                  fontWeight: "bold",
                }}
              >
                <Link href={"/StoreLocator"}>STORE LOCATOR</Link>
              </Typography>

              <Link href={"/"}>
                <img
                  src={
                    "https://cdn.shopify.com/s/files/1/0271/7209/files/dwc-logo.png?v=1624458280"
                  }
                  alt=""
                  style={{
                    height: "140px",
                    marginLeft: "60px",
                    marginRight: "60px",
                  }}
                />
              </Link>

              <Typography
                className="link"
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontWeight: "bold",
                }}
              >
                <Link href={"/Blog"}>BLOG & RECIPES</Link>
              </Typography>

              <Typography
                className="link"
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontWeight: "bold",
                }}
              >
                <Link href={"/About"}>ABOUT</Link>
              </Typography>

              <Box className="icons">
                <Link href={"/Login"}>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                    <LoginIcon />
                  </IconButton>
                </Link>

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
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <div 
        className="smallscreen"
        style={{backgroundColor: "black"}}
        
        >
        <Box
          style={{
            marginTop: "30px",
            
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link href={"/Login"}>
              <LoginIcon />
            </Link>
          </IconButton>

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
            <ShoppingCartIcon onClick={handleOpen}/>
            <KeepMountedModal/>
          </IconButton>
        </Box>

        <Link href={"/"}>
          <img
            src={
              "https://cdn.shopify.com/s/files/1/0271/7209/files/dwc-logo.png?v=1624458280"
            }
            alt=""
            style={{
              height: "140px",
            }}
          />
        </Link>
        <MenuIcon
          onClick={() => setToggleMenu(true)}
          style={{
            color: "white",
            fontSize: "50",
            marginTop: "30px",
          }}
        />
        {toggleMenu && (
          <div className="smallscreen-menu">
            <CloseIcon
              onClick={() => setToggleMenu(false)}
              className="close"
              style={{
                fontSize: "50",
                
              }}
            />
            <Box
              style={{
                textAlign: "center",
                marginTop: "150px",
                
              }}
            >
              <hr />
              <Typography
                className="link"
                variant="h4"
                component="div"
                style={{
                  fontWeight: "bold",
                  padding: 40,
                }}
              >
                <Link href={"/Subscription"}>SUBSCRIPTION</Link>
              </Typography>
              <hr />
              <Typography
                className="link"
                variant="h4"
                component="div"
                style={{
                  fontWeight: "bold",
                  padding: 40,
                }}
              >
                <Link href={"/Shop"}>SHOP</Link>
              </Typography>
              <hr />
              <Typography
                className="link"
                variant="h4"
                component="div"
                style={{
                  fontWeight: "bold",
                  padding: 40,
                }}
              >
                <Link href={"/StoreLocator"}>STORE LOCATOR</Link>
              </Typography>
              <hr />
              <Typography
                className="link"
                variant="h4"
                component="div"
                style={{
                  fontWeight: "bold",
                  padding: 40,
                }}
              >
                <Link href={"/Blog"}>BLOG & RECIPES</Link>
              </Typography>
              <hr />
              <Typography
                className="link"
                variant="h4"
                component="div"
                style={{
                  fontWeight: "bold",
                  padding: 40,
                }}
              >
                <Link href={"/About"}>ABOUT</Link>
              </Typography>
              <hr />
            </Box>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
