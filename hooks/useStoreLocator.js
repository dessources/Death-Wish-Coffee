import React from "react";
import getNewMarkers from "../utils/getNewMarkers";
import { useMediaQuery } from "@mui/material";

import { getAllLocations } from "../utils/queries";
const useStoreLocator = (mapApiReady) => {
  const [map, setMap] = React.useState(null);
  const [markers, setMarkers] = React.useState([]);
  const [locations, setLocations] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const showMap = useMediaQuery("(min-width:770px)");
  React.useEffect(() => {
    if (!showMap) {
      setMap(null);
    } else if (mapApiReady && !map) {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: { lat: 50.6263118, lng: 6.0295882 },
      });
      setMap(map);
    }
    return () => setMap(null);
  }, [showMap, mapApiReady]);

  React.useEffect(() => {
    if (!map) return;
    // Add markers to the map
    getAllLocations().then((data) => {
      setLocations(data.storeLocations);
      const newMarkers = getNewMarkers(data.storeLocations, map);
      setMarkers(newMarkers);
    });
  }, [map]);

  React.useEffect(() => {
    if (markers?.length > 0) {
      // Set the map's center and zoom level based on the search results
      const bounds = new window.google.maps.LatLngBounds();
      markers.forEach((marker) => {
        bounds.extend(marker.getPosition());
      });
      map?.fitBounds(bounds);
      if (searchResults.length > 0) {
        map?.setZoom(5);
      }
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
  return { searchInput, setSearchInput, handleSearch, searchResults, showMap };
};

export default useStoreLocator;
