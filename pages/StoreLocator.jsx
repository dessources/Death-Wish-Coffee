import React, { useState, useEffect } from "react";

const Map = () => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: { lat: 37.7749, lng: -122.4194 },
    });
    setMap(map);
  }, []);

  useEffect(() => {
    if (!map) return;

    // Add markers to the map
    const newMarkers = [
      { position: { lat: 37.7749, lng: -122.4194 }, title: "San Francisco" },
      { position: { lat: 40.7128, lng: -74.006 }, title: "New York" },
      { position: { lat: 34.0522, lng: -118.2437 }, title: "Los Angeles" },
    ].map((location) => {
      return new window.google.maps.Marker({
        position: location.position,
        map,
        title: location.title,
      });
    });

    setMarkers(newMarkers);
  }, [map]);

  const handleSearch = () => {
    const searchTerm = searchInput.toLowerCase();
    const results = markers.filter((marker) => {
      return marker.title.toLowerCase().includes(searchTerm);
    });
    setSearchResults(results);

    if (results.length > 0) {
      // Set the map's center and zoom level based on the search results
      const bounds = new window.google.maps.LatLngBounds();
      results.forEach((result) => {
        bounds.extend(result.getPosition());
      });
      map.fitBounds(bounds);
    }
  };

  return (
    <>
      <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <div id="map" style={{ height: "400px", width: "100%" }} />
    </>
  );
};

export default Map;
