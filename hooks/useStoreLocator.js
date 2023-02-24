import React from "react";
import getNewMarkers from "../utils/getNewMarkers";
import { useMediaQuery } from "@mui/material";
import getClosestLocations from "../utils/getClosestLocations";
import { searchLocationsNear } from "../utils/queries";

import getUserLocationCenterMap from "../utils/getUserLocationCenterMap";
import initMap from "../lib/initMap";
const useStoreLocator = (mapApiReady) => {
  const [map, setMap] = React.useState(null);
  const [markers, setMarkers] = React.useState([]);
  const [locations, setLocations] = React.useState([]);
  const [center, setCenter] = React.useState(null);
  const [search, setSearch] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState("");
  // const [searchResults, setSearchResults] = React.useState([]);
  const showMap = useMediaQuery("(min-width:770px)");

  React.useEffect(() => {
    if (!showMap) {
      setMap(null);
    } else if (mapApiReady) {
      if (navigator.geolocation) {
        if (!center) {
          //if userLocation is not defined
          //we are going to define it and center the map on it
          getUserLocationCenterMap(setCenter);
        }

        const newMap = initMap({
          zoom: 2,
        });
        setMap(newMap);
      } else {
        alert(
          "Oops it seems that geolocation is not supported by your browser. Please try to manually insert your location information."
        );
      }
    }

    return () => setMap(null);
  }, [showMap, mapApiReady]);

  React.useEffect(() => {
    if (map && center) {
      map.setCenter(center);
    }
  }, [center]);

  React.useEffect(() => {
    if (!map || !center) return;
    if (locations?.length === 0) {
      getClosestLocations(center).then((data) => {
        console.log("🚀 ~ file: useStoreLocator.js:54 ~ getClosestLocations ~ data:", data);

        setLocations(data);
        setSearch(false);
      });
    }
  }, [map, center]);

  React.useEffect(() => {
    if (markers?.length > 0) {
      // Set the map's center and zoom level based on the search results
      const bounds = new window.google.maps.LatLngBounds();
      markers.forEach((marker) => {
        bounds?.extend(marker.getPosition());
      });
      map?.fitBounds(bounds);

      if (!search) map?.setZoom(14);
    }
  }, [markers]);

  React.useEffect(() => {
    if (showMap && markers.length > 0) {
      markers?.forEach((marker) => {
        marker.setMap(null);
      });
    }
    const newMarkers = getNewMarkers(locations, map);
    setMarkers(newMarkers);
  }, [locations, showMap]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(true);
    const searchTerm = searchInput.toLowerCase();
    searchLocationsNear(searchTerm).then(({ storeLocations }) => {
      setLocations(storeLocations);
      setSearch(true);
      map?.setZoom(7);
    });
  };

  const searchNearby = (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
      setLocations([]);
      //setting the center of the map will automatically trigger
      // an effect that will get the neighboring store locations
      // so no need to call setLocations()
      getUserLocationCenterMap(setCenter);
    } else {
      alert(
        "Oops it seems that geolocation is not supported by your browser. Please try to manually insert your location information."
      );
    }
  };
  return { searchInput, setSearchInput, handleSearch, searchNearby, locations, showMap, setCenter };
};

export default useStoreLocator;
