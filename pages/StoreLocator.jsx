import React from "react";
import Head from "next/head";
import StoreLocatorWidget from "../components/StoreLocatorWidget";
import Footer from "../components/Footer";
import { mainSection } from "../styles/StoreLocator.module.css";
import Navbar from "../components/Navbar";

const StoreLocator = () => {
  return (
    <>
      <Head>
        <title>Store Locator - DeathWishCoffeeClone</title>
      </Head>
      <Navbar />
      <main className={mainSection}>
        <h2>
          Find <strong>Death Wish coffee </strong>Near You
        </h2>
        <StoreLocatorWidget />
      </main>
      <Footer />
    </>
  );
};

export default StoreLocator;
