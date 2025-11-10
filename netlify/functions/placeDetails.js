export async function handler(event) {

  const { place_id } = event.queryStringParameters;

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=name,formatted_address,formatted_phone_number,photos,opening_hours,rating,geometry&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // solve CORS
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
}
