import React from "react";
import { list } from "../styles/StoreLocator.module.css";
function StoreInfo({ searchResults, className }) {
  return (
    <div className={className}>
      {searchResults.length > 0
        ? searchResults.map((result, i) => {
            return (
              <div key={i}>
                <p>{result.name}</p>
                <span>{result.phoneNumber}</span>
              </div>
            );
          })
        : "No Results"}
    </div>
  );
}

export default StoreInfo;
