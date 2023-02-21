import React from "react";
import { locationListItem, locationsListHeader, locationsList } from "../styles/StoreLocator.module.css";
function StoreInfo({ locations, className, setCenter }) {
  const [locationsPageIndex, setLocationPageIndex] = React.useState(0);
  const handleMouseEnter =
    ({ coordinates }) =>
    () =>
      setCenter(new window.google.maps.LatLng(coordinates?.latitude, coordinates?.longitude));

  return (
    <div className={className}>
      {locations.length > 0 ? (
        <>
          <div className={locationsListHeader}>
            <h4>
              {locations.length > 8 ? 8 : locations.length} {locations.length === 1 ? "location" : "locations"}{" "}
              found
            </h4>
          </div>
          <div className={locationsList}>
            {locations.slice(locationsPageIndex, locationsPageIndex + 8).map((location, i) => {
              return (
                <div key={i} className={locationListItem} onMouseEnter={handleMouseEnter(location)}>
                  <p>{location.name}</p>
                  <span>
                    {location.address} {location.city}, {location.zipCode}
                  </span>
                  <span>{location.phoneNumber}</span>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        "No Results"
      )}
    </div>
  );
}

export default StoreInfo;
