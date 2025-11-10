import { GoogleGenAI } from "@google/genai";
const genAI = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

async function getPharmacyPlaceData(placeId) {
  const finalPlaceId = placeId.split('/')[1];
  
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${finalPlaceId}&fields=name,formatted_address,formatted_phone_number,photos,opening_hours,rating,geometry&key=${import.meta.env.VITE_GOOGLE_MAP_API}`;
  const placeDetails = await fetch(url);

  const data = await placeDetails.json();
  return data;
}

async function getPharmacyPlaceDataCorsAny(placeId = "") {

  const finalPlaceId = placeId.split('/')[1];
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url = `${proxy}https://maps.googleapis.com/maps/api/place/details/json?place_id=${finalPlaceId}&fields=name,formatted_address,formatted_phone_number,photos,opening_hours,rating,geometry&key=${import.meta.env.VITE_GOOGLE_MAP_API}`;
  const placeDetails = await fetch(
    url
  );

  const data = await placeDetails.json();
  return data;
}

export async function getNearbyPharmaciesWith(prompt, location = { latitude: 37.7749, longitude: -122.4194 }) {

  const finalPrompt = `Find pharmacies near me. List the closest ones first.`;

  try {

    const response = await genAI.models.generateContent({

      model: "gemini-2.5-flash",
      contents: finalPrompt,

      config: {
        tools: [{ googleMaps: {} }],
      },

      toolConfig: {
        retrievalConfig: {
          latLng: {
            latitude: location.latitude,
            longitude: location.longitude
          }
        }
      }

    });

    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;

    if (!groundingChunks || groundingChunks.length === 0) {
      return [];
    }

    const pharmacies = await Promise.all( groundingChunks
      .filter(chunk => chunk.maps) // Ensure the chunk is from Google Maps
      .map(async chunk => ({
        title: chunk.maps.title,
        uri: chunk.maps.uri,
        //place : await getPharmacyPlaceDataCorsAny(chunk.maps.placeId)
        place : await getPharmacyPlaceData(chunk.maps.placeId)
      }))
    );

    // Remove duplicates based on URI
    const uniquePharmacies = Array.from(new Map(pharmacies.map(p => [p.uri, p])).values());

    return {error : null, data : uniquePharmacies};

  } catch (error) {
    
    return {error : error, data : []};
  }
}
