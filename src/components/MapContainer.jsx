import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import { useEffect, useState } from "react";
import useUserLocation from "../hooks/useUserLocation";

const containersStyle = {
    width: '100%',
    height: '100%'
};

const Map = ({location = { lat: 4.848, lng: 12.502 }}) => {

    const [center, setCenter] = useState(location);

    useEffect(() => {

        if (location.lat && location.lng) {
           setCenter({ lat: parseFloat(location.lat), lng: parseFloat(location.lng) });
        }


    }, [location]);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API
    });

    const options = {
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        cameraControl : false
    };

    if (!isLoaded) return <div className="bg-gray-100 w-screen h-screen flex items-center justify-center">
        <p className="ms-80"><span className="loading loading-spinner bg-[#4f46e5] w-10 h-10"></span></p>
    </div>;

    return (
        <GoogleMap mapContainerStyle={containersStyle} center={center} zoom={16} options={options}>
            <Marker position={center} />
        </GoogleMap>
    )
}

export default Map;
