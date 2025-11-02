import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

const containersStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 3.848,
    lng: 11.502
};

const Map = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: ""//import.meta.env.VITE_GOOGLE_MAP_API
    });

    if (!isLoaded) return <div>Chargement</div>;

    return (

        <GoogleMap mapContainerStyle={containersStyle} center={center} zoom={13}>

            <Marker position={center} />

        </GoogleMap>

    )
}

export default Map;
