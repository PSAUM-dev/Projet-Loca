import { useEffect, useState } from "react";

export default function useUserLocation() {
    const initialLocation = { latitude: null, longitude: null, country: null, city: null, rue: null };

    const [location, setLocation] = useState(initialLocation);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        // On et la position
        if (!navigator.geolocation) {
            setError("La géolocalisation n'est pas supportée par votre navigateur");
            setLoading(false);
            return;
        }

        const getUserLocation = () => {

            setError(null);
            setLocation(initialLocation);
            setLoading(true);

            navigator.geolocation.getCurrentPosition(

                async (position) => {
                    const { latitude, longitude } = position.coords;

                    try {

                        const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${import.meta.env.VITE_GOOGLE_MAP_API}`);
                        const data = await res.json();

                        //console.log(data);

                        if (data.results && data.results.length > 0) {
                            const address = data.results[0].address_components;
                            const country = address.find(component => component.types.includes("country"))?.long_name;
                            const city = address.find(component => component.types.includes("locality"))?.long_name;
                            const rue = address.find(component => component.types.includes("route"))?.long_name;

                            //console.info(country, city, rue);

                            setLocation({ latitude, longitude, country, city, rue });
                        }

                    } catch (error) {
                        setError("Erreur lors de la récupération de l'adresse", error);
                        setLoading(false);

                    } finally {
                        setLoading(false);
                    }
                },

                (err) => {
                    setError(err.message);
                    setLoading(false);
                }

            );
        }

        getUserLocation();

        const updateInterval = 60000;
        const interval = setInterval(getUserLocation, updateInterval);

        return () => clearInterval(interval);

    }, []);

    return { location, error, loading };
}