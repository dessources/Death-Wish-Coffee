import React from "react";
import Head from "next/head";
import Script from "next/script";
import Footer from "../components/Footer";
import { mainSection, list, mapContainer, mapClass } from "../styles/StoreLocator.module.css";
import Navbar from "../components/Navbar";
import useMap from "../hooks/useMap";

const StoreLocator = () => {
  const { searchInput, setSearchInput, handleSearch } = useMap();

  return (
    <>
      <Head>
        <title>Store Locator - DeathWishCoffeeClone</title>
      </Head>
      <Navbar />
      <main className={mainSection}>
        <div className={list}></div>
        <div className={mapContainer}>
          <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
          <button onClick={handleSearch}>Search</button>
          <div id={"map"} className={mapClass} />
        </div>
      </main>
      <Footer />
      <Script src="https://polyfill.io/v3/polyfill.min.js?features=default"></Script>
      <Script
        strategy="beforeInteractive"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&v=weekly`}
        defer
      ></Script>
    </>
  );
};

export default StoreLocator;
