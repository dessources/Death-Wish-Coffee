import React from "react";
import { Navbar } from "../components";
import { SubNavbar } from "../components";
import { FeaturedProducts } from "../components";
import HomepageVideos from "../components/HomepageVideos";
import { CoffeeCulture } from "../components";
import Footer from "../components/Footer";

const index = () => {
  return (
    <>
      <Navbar />
      <SubNavbar />
      <FeaturedProducts />
      <HomepageVideos />
      <CoffeeCulture />
      <Footer id="HomeFooter" />
    </>
  );
};

export default index;
