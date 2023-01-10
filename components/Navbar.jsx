import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{
            background: "black",
            paddingRight: "10%",
            paddingLeft: "10%",
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
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
