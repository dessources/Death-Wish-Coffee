import calculateDistance from "./calculateDistance";

function sortByDistance(location, locations) {
  const res = locations.sort(
    ({ coordinates: locA }, { coordinates: locB }) =>
      calculateDistance({ ...location }, { lat: locA.latitude, lng: locA.longitude }) -
      calculateDistance({ ...location }, { lat: locB.latitude, lng: locB.longitude })
  );
  // console.log(
  //   res.map(({ coordinates, name, address }) => {
  //     const d = calculateDistance({ ...location }, { lat: coordinates.latitude, lng: coordinates.longitude });
  //     console.log(`${name} at ${address} ${d} miles`);
  //     return d;
  //   })
  // );
  return res;
}

export default sortByDistance;
