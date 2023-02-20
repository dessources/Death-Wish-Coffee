import React from "react";
import { locationListItem, locationsListHeader, locationsList } from "../styles/StoreLocator.module.css";
function StoreInfo({ locations, className }) {
  return (
    <div className={className}>
      {locations.length > 0 ? (
        <>
          <div className={locationsListHeader}>
            <h4>
              {locations.length} {locations.length === 1 ? "location" : "locations"} found
            </h4>
          </div>
          <div className={locationsList}>
            {" "}
            {locations.map((location, i) => {
              return (
                <div key={i} className={locationListItem}>
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
