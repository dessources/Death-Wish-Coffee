export default function initMap(settings) {
  const map = new window.google.maps.Map(document.getElementById("map"), {
    ...settings,
    center: { lat: settings?.center?.lat || 30.7135562, lng: settings?.center?.lng || -44.9090954 },
  });

  return map;
}
