import React from "react";
import { getAllLocations } from "../utils/queries";
const useMap = () => {
  const [map, setMap] = React.useState(null);
  const [locations, setLocations] = React.useState([]);
  const [markers, setMarkers] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  React.useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: 50.6263118, lng: 6.0295882 },
    });
    setMap(map);
  }, []);

  React.useEffect(() => {
    if (!map) return;
    // Add markers to the map
    getAllLocations().then((data) => {
      console.log(data);
      setLocations(data.storeLocations);
      const newMarkers = data.storeLocations.map((location) => {
        return new window.google.maps.Marker({
          position: { lat: location.coordinates.latitude, lng: location.coordinates.longitude },
          map,
          title: location.name,
        });
      });
      setMarkers(newMarkers);
    });
  }, [map]);

  React.useEffect(() => {
    if (searchResults.length > 0) {
      // Set the map's center and zoom level based on the search results
      const bounds = new window.google.maps.LatLngBounds();
      searchResults.forEach((result) => {
        bounds.extend(result.getPosition());
      });
      map.fitBounds(bounds);
      map.setZoom(13);
    }
  }, [searchResults]);

  const handleSearch = () => {
    const searchTerm = searchInput.toLowerCase();
    const results = locations.filter(({ name, address, city, zipCode }) => {
      const likeName = name.toLowerCase().includes(searchTerm);
      const likeAddress = address.toLowerCase().includes(searchTerm);
      const likeCity = city.toLowerCase().includes(searchTerm);
      const likeZipCode = zipCode.toString().includes(searchTerm);
      return likeName || likeAddress || likeCity || likeZipCode;
    });
    const newMarkers = results.map((result) => {
      return new window.google.maps.Marker({
        position: { lat: result.coordinates.latitude, lng: result.coordinates.longitude },
        map,
        title: result.name,
      });
    });
    setSearchResults(newMarkers);
  };
  return { searchInput, setSearchInput, handleSearch };
};

export default useMap;
