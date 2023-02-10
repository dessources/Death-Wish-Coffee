import React from "react";

import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

//styles
import {
  footerBlack,
  link,
  companyLinks,
  rights,
  socialIcons,
  footerBlackContainer,
  mobileFooterHeading,
  logoIcon,
  newsLetter,
  footerSection,
} from "../styles/Footer.module.css";
import logo from "../images/logo.webp";
const Footer = ({ id }) => {
  return (
    <div className={footerSection} id={id}>
      <div>
        <div className={newsLetter} id="newsletter">
          <h5>LET'S DRINK COFFEE AND THROW THINGS AT HAPPY PEOPLE</h5>
          <form>
            <input type={"email"} placeholder="Enter your Email Address" />
            <button type="submit">SIGN ME UP</button>
          </form>
        </div>
        <div className={footerBlackContainer}>
          <h5 className={mobileFooterHeading}>End of the road, Jack</h5>
          <div className={footerBlack}>
            <Link className={logoIcon} href={"/"}>
              <img src={logo.src} alt="" />
            </Link>
            <div className={companyLinks}>
              <div>
                <h5>Company</h5>
                <p className={link}>Reviews</p>
                <p className={link}>FAQ + Help</p>
                <p className={link}>Refund Policy</p>
              </div>

              <div>
                <h5>Accounts + Orders</h5>
                <p className={link}>
                  <Link href={"/Account"}>Your Account</Link>
                </p>
                <p className={link}>Shopping Details</p>
                <p className={link}>
                  <Link href={"/Subscription"}>Subscription</Link>
                </p>
                <p className={link}>Wholesale</p>
              </div>
              <div>
                <h5>Legal</h5>
                <p className={link}>Terms + Conditions</p>
                <p className={link}>Privacy Policy</p>
                <p className={link}>PROP 65</p>
              </div>

              <p className={rights}>@ Death Wish Coffee Co 2023 All Rights Reserved.</p>
              <div className={socialIcons}>
                <p>Get Wired with us</p>
                <div>
                  <Link href="#">
                    <TwitterIcon />
                  </Link>
                  <Link href="#">
                    <FacebookIcon />
                  </Link>
                  <Link href="#">
                    <InstagramIcon />
                  </Link>
                  <Link href="#">
                    <YouTubeIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
