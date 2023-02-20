import React from "react";
import getNewMarkers from "../utils/getNewMarkers";
import { useMediaQuery } from "@mui/material";
import getClosestLocations from "../utils/getClosestLocations";
import getUserLocationCenterMap from "../utils/getUserLocationCenterMap";
import initMap from "../lib/initMap";
const useStoreLocator = (mapApiReady) => {
  const [map, setMap] = React.useState(null);
  const [markers, setMarkers] = React.useState([]);
  const [locations, setLocations] = React.useState([]);
  const [center, setCenter] = React.useState(null);
  const [searchInput, setSearchInput] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const showMap = useMediaQuery("(min-width:770px)");

  React.useEffect(() => {
    if (!showMap) {
      setMap(null);
    } else if (mapApiReady && !map) {
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
    // Add markers to the map
    getClosestLocations(center).then((data) => {
      setLocations(data.storeLocations);
      const newMarkers = getNewMarkers(data.storeLocations, map);
      setMarkers(newMarkers);
    });
  }, [map, center]);

  React.useEffect(() => {
    if (markers?.length > 0) {
      // Set the map's center and zoom level based on the search results
      const bounds = new window.google.maps.LatLngBounds();
      markers.forEach((marker) => {
        bounds?.extend(marker.getPosition());
      });
      map?.fitBounds(bounds);

      map?.setZoom(14);
    }
  }, [markers]);

  React.useEffect(() => {
    if (showMap) {
      markers?.forEach((marker) => {
        marker.setMap(null);
      });

      const newMarkers = getNewMarkers(searchResults.slice(0, 5), map);
      setMarkers(newMarkers);
    }
  }, [searchResults]);
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = searchInput.toLowerCase();
    const results = locations.filter(({ name, address, city, zipCode }) => {
      const likeName = name.toLowerCase().includes(searchTerm);
      const likeAddress = address.toLowerCase().includes(searchTerm);
      const likeCity = city.toLowerCase().includes(searchTerm);
      const likeZipCode = zipCode.toString().includes(searchTerm);
      return likeName || likeAddress || likeCity || likeZipCode;
    });
    setSearchResults(results);
  };
  return { searchInput, setSearchInput, handleSearch, searchResults, locations, showMap };
};

export default useStoreLocator;
