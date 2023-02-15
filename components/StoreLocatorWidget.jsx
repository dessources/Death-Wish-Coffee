import React from "react";
import Script from "next/script";

import StoreInfo from "./StoreInfo";
import useStoreLocator from "../hooks/useStoreLocator";
import { storeLocatorWidget, mapContainer, mapClass, searchForm, list } from "../styles/StoreLocator.module.css";

export default function StoreLocatorWidget() {
  const [mapApiReady, setMapApiReady] = React.useState("");

  const { searchInput, setSearchInput, handleSearch, searchResults, showMap } = useStoreLocator(mapApiReady);
  const mapRef = React.useRef(null);
  return (
    <div className={storeLocatorWidget}>
      <form className={searchForm} onSubmit={handleSearch}>
        {/*since THe form only has one input, pressing enter will trigger the 
        OnSubmit event */}
        <button>search nearby</button>
        <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </form>
      <StoreInfo searchResults={searchResults} className={showMap ? list : "that"} />

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
