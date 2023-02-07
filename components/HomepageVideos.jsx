import React from "react";
import { Box, Container } from "@mui/system";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

//styles
import {
  handsText,
  fairTrade,
  sectionContainer,
  section,
  sectionTitle,
  sectionVideo,
  sectionText,
  videoText,
  sectionTextResp,
  sectionButton,
  sectionButtonResp,
  reverse,
  beansTextResp,
  beansButtonResp,
} from "../styles/HomepageVideos.module.css";

const HomepageVideos = () => {
  return (
    <>
      <div className={fairTrade}>
        <img src="images/hands.png" alt="handshake" />
        <p className={handsText}>
          Our Medium Roast, Dark Roast, Espresso Roast and Valhalia Java Coffees are always Fair Trade + USDA
          Certified Organic.
        </p>
      </div>
      <div className={sectionContainer}>
        <div className={section}>
          <h3 className={sectionTitle}>COFFEE THAT SLAPS</h3>
        </div>
        <div className={videoText}>
          <video
            className={sectionVideo}
            data-src="https://embed-ssl.wistia.com/deliveries/d9a39eb6a2274b30f628820bf7e9bd5871488da6/file.mp4"
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline=""
            src="https://embed-ssl.wistia.com/deliveries/d9a39eb6a2274b30f628820bf7e9bd5871488da6/file.mp4"
          ></video>
          <div className={sectionText}>
            <p>Always sourced from the highest-quality beans. Ruining other coffee since 2012.</p>
            <Link href={"/Shop"}>
              <button className={sectionButton}>SHOP NOW</button>
            </Link>
          </div>
        </div>
        {/* <div>
          <p className={sectionTextResp}>
            Always sourced from the highest-quality beans. Ruining other coffee since 2012.
          </p>
          <Link href={"/Shop"}>
            <p className={sectionButtonResp}>SHOP NOW</p>
          </Link>
        </div> */}
      </div>

      <div className={sectionContainer}>
        <div className={videoText}>
          <video
            className={sectionVideo}
            data-src="https://embed-ssl.wistia.com/deliveries/42ece833a6917e2cb95dc8c45cb8254e/file.mp4"
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline=""
            src="https://embed-ssl.wistia.com/deliveries/42ece833a6917e2cb95dc8c45cb8254e/file.mp4"
          ></video>
          <div className={`${sectionText} ${reverse}`}>
            <p>Handcrafted mugs, tees, hoodies and more to pair with caffeine-heavy habits.</p>
            <Link href={"/Shop"}>
              <button className={sectionButton}>SHOP NOW</button>
            </Link>
          </div>
        </div>
        <div className={section}>
          <h3 className={`${sectionTitle} ${reverse}`}>EMBODY THE BREW</h3>
        </div>
      </div>

      <div className={sectionContainer}>
        <div className={section}>
          <h3 className={sectionTitle}>HANDLE OUR BEANS</h3>
        </div>
        <div className={videoText}>
          <video
            className={sectionVideo}
            data-src="https://embed-ssl.wistia.com/deliveries/afddc092f9ffceeb8d79f1136c2d60511f83a26f/file.mp4"
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline=""
            src="https://embed-ssl.wistia.com/deliveries/afddc092f9ffceeb8d79f1136c2d60511f83a26f/file.mp4"
          ></video>

          <div className={sectionText}>
            <p>
              Prefer the hands-on experience over online shopping? Find Death Wish Coffee in a grocery store near
              you.
            </p>
            <button className={sectionButton}>
              <Link href="/StoreLocator">Find Store</Link>
            </button>
          </div>
        </div>
        {/* <div>
          <p className={sectionTextResp}>
            Prefer the hands-on experience over online shopping? Find Death Wish Coffee in a grocery store near
            you.
          </p>
          <p className={sectionButtonResp}>
            <Link href="/StoreLocator">Find Store</Link>
          </p>
        </div> */}
      </div>
    </>
  );
};

export default HomepageVideos;
