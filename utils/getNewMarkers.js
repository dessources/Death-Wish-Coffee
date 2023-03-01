export default function getNewMarkers(locations, map) {
  return locations?.slice(0, 8).map(({ coordinates, name }) => {
    return new window.google.maps.Marker({
      position: {
        lat: coordinates.latitude,
        lng: coordinates.longitude,
      },
      map,
      title: name,
    });
  });
}
