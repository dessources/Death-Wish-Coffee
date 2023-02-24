import axios from "axios";
import { AREA_LABEL } from "./constants";
import { getLocationsIn } from "./queries";
import sortByDistance from "./sortByDistance";
export default async function getClosestLocations(center) {
  //using Google's Reverse Geocoding Api, we get the
  //Geographical information of the user's location
  // from which we can extract the region (i.e administrative area (county, "département"))
  //they are in
  const location = { lat: center.lat(), lng: center.lng() };

  const area = await axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    )
    .then(({ data }) => {
      const locationComponents = data.results[0].address_components;
      return locationComponents.find((item) => item.types.includes(AREA_LABEL));
    });

  const { storeLocations } = await getLocationsIn(area.long_name);
  return Promise.resolve(sortByDistance(location, storeLocations));
}
