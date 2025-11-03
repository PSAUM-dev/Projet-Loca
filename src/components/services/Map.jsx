import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

const containersStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 3.848,
    lng: 11.502
};

const Map = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API
    });

    const options = {
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: true,
        fullscreenControl: false,
        cameraControl : false
    };

    if (!isLoaded) return <div className="bg-gray-100 w-screen h-screen flex items-center justify-center">
        <p className="ms-80"><span className="loading loading-spinner bg-[#4f46e5] w-10 h-10"></span></p>
    </div>;

    return (

        <GoogleMap mapContainerStyle={containersStyle} center={center} zoom={20} options={options}>

            <Marker position={center} />

        </GoogleMap>

    )
}

export default Map;
