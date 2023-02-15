import React from "react";

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
  sectionButton,
  reverse,
} from "../styles/HomepageVideos.module.css";

const HomepageVideos = () => {
  // React.useEffect(() =>
  //   document.querySelectorAll("video").forEach((video) => {
  //     video.currentTime = 3;
  //     video.pause();
  //   })
  // );
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
            data-src="https://media.graphassets.com/fpNxKHSRQqO1ciJS4SFf"
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline
            src="https://media.graphassets.com/fpNxKHSRQqO1ciJS4SFf"
          ></video>
          <div className={sectionText}>
            <p>Always sourced from the highest-quality beans. Ruining other coffee since 2012.</p>
            <Link href={"/Shop"}>
              <button className={sectionButton}>SHOP NOW</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={sectionContainer}>
        <div className={videoText}>
          <video
            className={`${sectionVideo} ${reverse}`}
            data-src="https://media.graphassets.com/cvZdL1QzT0ecpUBhclCq"
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline=""
            src="https://media.graphassets.com/cvZdL1QzT0ecpUBhclCq"
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
            data-src="https://media.graphassets.com/h0T2YBYQlSPtSnDCzb0O"
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline=""
            src="https://media.graphassets.com/h0T2YBYQlSPtSnDCzb0O"
          ></video>

          <div className={sectionText}>
            <p>
              Prefer the hands-on experience over online shopping? Find Death Wish Coffee in a grocery store near
              you.
            </p>
            <Link href="/StoreLocator">
              <button className={sectionButton}>Find Store</button>
            </Link>
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
