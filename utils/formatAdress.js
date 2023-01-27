export default function formatAdress(adress) {
  const obj = {
    city: "Sunrise",
    country: "US",
    line1: "14001 Northwest 4th Street",
    line2: null,
    postal_code: "33325",
    state: "FL",
  };

  const line1 = obj.line1;
  const line2 = obj.line2 ? obj.line2 : "";
  const city = obj.city;
  const postal_code = obj.postal_code;
  const state = obj.state ? obj.state : "";
  const country = obj.country;

  return `${line1} ${line2} ${city}, ${state} ${postal_code}, ${country}`;
}
