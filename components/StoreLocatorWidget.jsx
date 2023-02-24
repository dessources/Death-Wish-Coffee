import React from "react";
import Script from "next/script";

import StoreInfo from "./StoreInfo";
import useStoreLocator from "../hooks/useStoreLocator";
import { storeLocatorWidget, mapContainer, mapClass, searchForm, list } from "../styles/StoreLocator.module.css";
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";
export default function StoreLocatorWidget() {
  const [mapApiReady, setMapApiReady] = React.useState("");

  const { searchInput, setSearchInput, handleSearch, searchNearby, locations, showMap, setCenter } =
    useStoreLocator(mapApiReady);
  const mapRef = React.useRef(null);
  return (
    <div className={storeLocatorWidget}>
      <form className={searchForm} onSubmit={handleSearch}>
        {/*since THe form only has one input, pressing enter will trigger the 
        OnSubmit event */}
        <button type={"button"} onClick={searchNearby}>
          <PlaceIcon />
          search nearby
        </button>
        <input
          type="text"
          value={searchInput}
          placeholder="Enter city/zip code"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSearch}>
          Search <SearchIcon />
        </button>
      </form>
      <StoreInfo locations={locations} setCenter={setCenter} className={list} />

      <div className={mapContainer}>
        <div id={"map"} className={showMap ? mapClass : "no"} ref={mapRef} />
      </div>
      <Script
        strategy="beforeInteractive"
        src="https://polyfill.io/v3/polyfill.min.js?features=default"
      ></Script>
      <Script>{`function func () {}`}</Script>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=func&v=weekly`}
        onReady={() => setMapApiReady(true)}
        defer
      ></Script>
    </div>
  );
}
