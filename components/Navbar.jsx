import React from "react";
import { useState } from "react";
import getRightFunc from "../utils/getRightFunc";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from "./Cart";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from '@mui/icons-material/Person';
import { getSession, useSession, signOut } from "next-auth/react";
import logo from "../images/logo.webp";

import {
  appBarClass,
  navbar,
  smallscreen,
  link,
  close,
  smallscreenMenu,
  smallScreenLogo,
  rightIcons,
} from "../styles/Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { showCart } from "../redux/cart.slice";

const Navbar = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const [toggleMenu, setToggleMenu] = useState(false);
  const cart = useSelector((state) => state.cart);
  const getItemsCount = () => {
    return cart.products.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
  const handleOpen = () => {
    dispatch(showCart(true));
  };

  const linkStyles = { fontFamily: "FenomenSans" };
  return (
    <>
      <nav>
        <div className={navbar}>
          <Box>
            <div className={appBarClass}>
              <Toolbar
                sx={{ width: "70%", margin: "0 auto", "& > div": { flex: "1 1 0", textAlign: "center" } }}
              >
                <Typography
                  className={link}
                  variant="h6"
                  component="div"
                  style={{
                    fontWeight: "bold",
                    cursor: "pointer",
                    flex: "1.5 1.5 0",
                    textAlign: "right",
                  }}
                >
                  <Link href={"/Subscription"} style={linkStyles}>
                    SUBSCRIPTION
                  </Link>
                </Typography>

                <Typography
                  className={link}
                  variant="h6"
                  component="div"
                  style={{
                    fontWeight: "bold",
                    flex: "1.5 1.5 0",
                    textAlign: "right",
                  }}
                >
                  <Link href={"/Shop"} style={linkStyles}>
                    SHOP
                  </Link>
                </Typography>

                <div
                  style={{
                    height: "120px",
                    width: "120px",
                    marginLeft: "60px",
                    marginRight: "60px",
                    visibility: "hidden",
                    flex: "1.5 1.5 0",
                  }}
                ></div>
                <Typography
                  className={link}
                  variant="h6"
                  component="div"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  <Link href={"/StoreLocator"} style={linkStyles}>
                    STORE LOCATOR
                  </Link>
                </Typography>

                <Link href={"/"} style={linkStyles}>
                  <Image
                    src={logo}
                    alt=""
                    style={{
                      height: "130px",
                      width: "130px",
                      position: "absolute",
                      top: "10%",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                </Link>

                {/* <Typography
                className={link}
          variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  fontWeight: "bold",
                }}
              >
                <Link href={"/Blog"}>BLOG & RECIPES</Link>
              </Typography> */}

                <Typography
                  className={link}
                  variant="h6"
                  component="div"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  <Link href={"/About"} style={linkStyles}>
                    ABOUT
                  </Link>
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {session ? (
                   <Link href={"/Account"}>
                   <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                     <PersonIcon />
                   </IconButton>
                 </Link>
                  ):(
                    <Link href={"/Login"}>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                      <LoginIcon />
                    </IconButton>
                  </Link>
                  )}
                  

                  {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <SearchIcon />
                  </IconButton> */}
                  <ShoppingCartIcon id="shoppingCartIcon" onClick={handleOpen} />

                  <span
                    style={{
                      color: "#e63d2f",
                      fontSize: "16px",
                      fontWeight: "bold",
                      alignSelf: "flex-start",
                    }}
                  >
                    {getItemsCount()}
                  </span>
                </Box>
              </Toolbar>
            </div>
          </Box>
        </div>
        <div className={smallscreen}>
          <MenuIcon
            onClick={() => setToggleMenu(true)}
            style={{
              color: "white",
              fontSize: "50",
            }}
          />
          {toggleMenu && (
            <div className={smallscreenMenu}>
              <CloseIcon
                onClick={() => setToggleMenu(false)}
                className={close}
                style={{
                  color: "white",
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
                  className={link}
                  variant="h4"
                  component="div"
                  style={{
                    fontWeight: "bold",
                    padding: 40,
                    color: "white",
                  }}
                >
                  <Link href={"/Subscription"}>SUBSCRIPTION</Link>
                </Typography>
                <hr />
                <Typography
                  className={link}
                  variant="h4"
                  component="div"
                  style={{
                    fontWeight: "bold",
                    padding: 40,
                    color: "white",
                  }}
                >
                  <Link href={"/Shop"}>SHOP</Link>
                </Typography>
                <hr />
                <Typography
                  className={link}
                  variant="h4"
                  component="div"
                  style={{
                    fontWeight: "bold",
                    padding: 40,
                    color: "white",
                  }}
                >
                  <Link href={"/StoreLocator"}>STORE LOCATOR</Link>
                </Typography>
                <hr />
                {/* <Typography
                  className={link}
                  variant="h4"
                  component="div"
                  style={{
                    fontWeight: "bold",
                    padding: 40,
                    color: "white",
                  }}
                >
                  <Link href={"/Blog"}>BLOG & RECIPES</Link>
                </Typography>
                <hr /> */}
                <Typography
                  className={link}
                  variant="h4"
                  component="div"
                  style={{
                    fontWeight: "bold",
                    padding: 40,
                    color: "white",
                  }}
                >
                  <Link href={"/About"}>ABOUT</Link>
                </Typography>
                <hr />
              </Box>
            </div>
          )}
          <Link href={"/"} className={smallScreenLogo}>
            <Image
              src={logo}
              alt=""
              style={{
                height: "130px",
                width: "130px",
                position: "absolute",
                top: "10%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          </Link>
          <Box className={rightIcons}>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <Link href={"/Login"}>
                <LoginIcon style={{ color: "white" }} />
              </Link>
            </IconButton>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleOpen}
            >
              <ShoppingCartIcon id="shoppingCartIcon2" />
              <span
                style={{
                  color: "red",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                {getItemsCount()}
              </span>
            </IconButton>
          </Box>
        </div>
      </nav>
      <Cart />
    </>
  );
};

export default Navbar;
