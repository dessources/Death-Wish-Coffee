export default function getNewMarkers(locations, map) {
  return locations?.map((location) => {
    return new window.google.maps.Marker({
      position: { lat: location.coordinates.latitude, lng: location.coordinates.longitude },
      map,
      title: location.name,
    });
  });
}
