export default function getUserLocationCenterMap(setCenter) {
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      const center = new window.google.maps.LatLng(coords.latitude, coords.longitude);
      setCenter(center);
    },
    () => {
      alert("Unable to get your location.");
    }
  );
}
