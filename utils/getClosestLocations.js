import axios from "axios";
import { resolve } from "styled-jsx/css";
import { AREA_LABEL } from "./constants";
import { getLocationsIn } from "./queries";
export default async function getClosestLocations(center) {
  //using Google's Reverse Geocoding Api, we get the
  //Geographical information of the user's location
  // from which we can extract the region (i.e administrative area (county, "département"))
  //they are in

  const area = await axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${center.lat()},${center.lng()}&key=${
        process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
      }`
    )
    .then(({ data }) => {
      const locationComponents = data.results[0].address_components;
      return locationComponents.find((item) => item.types.includes(AREA_LABEL));
    });

  return getLocationsIn(area.long_name);
}
