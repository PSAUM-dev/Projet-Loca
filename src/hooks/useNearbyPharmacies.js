import { useEffect, useState } from "react";
import useUserLocation from "./useUserLocation";
import { getNearbyPharmaciesWith } from "../services/geminiService";

export default function useNearbyPharmacies () {

    const [nearbyPharmacies, setNearbyPharmacies] = useState([]);
    const [error, setError] = useState(null);

    const { location } = useUserLocation();

    useEffect(() => { 

        const fetchPharmacies = async () => {

            try {

                const pharmacies = await getNearbyPharmaciesWith("aspirin", {
                    latitude: location.latitude,
                    longitude: location.longitude
                });

                setNearbyPharmacies(pharmacies);

                //console.info("Fetched Pharmacies:", pharmacies);

            } catch (err) {
                setError(err);
            }

        }

        fetchPharmacies();

    }, []);

    return { nearbyPharmacies, error }

}