export default function getNewMarkers(locations, map) {
  return locations?.map(({ coordinates, name }) => {
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
