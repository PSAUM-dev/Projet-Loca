export async function getNearbyPharmacies(lat, lng) {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=2000&type=pharmacy&key=${import.meta.env.VITE_GOOGLE_MAP_API}`
  );
  const data = await response.json();
  return data.results;
}
