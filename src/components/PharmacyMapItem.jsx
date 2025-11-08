import { MapPinned, Phone } from "lucide-react"

const PharmacyMapItem = ({ pharmacy, setLocationOnMap, markAsSelected, currentPharm, id, display = {
    name: true,
    location: true,
    distance: true,
    status: true,
    mapButton: true,
    phone: true
} }) => {

    const myID = id;

    const openingHours = pharmacy.place.result.opening_hours ?? { open_now: false };
    const stateIndex = openingHours.open_now ? 1 : 0;

    const lng = pharmacy.place.result.geometry.location.lng;
    const lat = pharmacy.place.result.geometry.location.lat;

    console.info('Pharmacy Data', pharmacy);

    const pharmacyState = [
        {
            libelle: "Fermé",
            text: "text-red-600",
            bg: "bg-red-600"
        },

        {
            libelle: "Ouvert",
            text: "text-green-600",
            bg: "bg-green-600"
        }
    ]

    const pointPositionOnMap = () => {
        setLocationOnMap({ lat: lat, lng: lng });
        markAsSelected(myID);
    }

    return (

        <div  onClick={pointPositionOnMap}
            className={`flex 
            flex-col gap-2 p-4 border border-white 
            hover:cursor-pointer
            hover:border-primary rounded-lg ${(myID === currentPharm) ? 'bg-blue-50' : ''}`}>

            {
                (display.name) ? (
                    <div className="flex justify-between items-start">
                        <h4 className="font-bold">{pharmacy.title}</h4>

                        {
                            (display.distance) ? (
                                <span className="text-sm font-medium text-gray-600">.1km</span>
                            ) : ""
                        }

                    </div>
                ) : ""
            }

            {
                (display.location) ? (
                    <p className="text-sm text-gray-600">{pharmacy.place.result.formatted_address}</p>
                ) : ""
            }

            {
                (display.status) ? (
                    <div className="flex items-center gap-2">
                        <span className={`inline-block h-2 w-2 rounded-full ${pharmacyState[stateIndex].bg}`}></span>
                        <p className={`text-sm font-medium ${pharmacyState[stateIndex].text}`}>{pharmacyState[stateIndex].libelle}</p>
                    </div>
                ) : ""
            }

            {
                (display.phone) ? (
                    <p className="text-sm text-gray-600">
                        <a className="flex justify-start transition-colors duration-300 hover:bg-gray-100 p-1 rounded-lg" href={`tel:${pharmacy.place.result.formatted_phone_number}`}>
                            <Phone className="w-3 h-auto mr-2"/>
                            {pharmacy.place.result.formatted_phone_number}
                        </a>
                    </p>
                ) : ""
            }

            {
                (display.mapButton) ? (
                    <div className="flex gap-2 pt-2">

                        <a onClick={pointPositionOnMap} target="_blank" className="btn btn-sm shadow-0 rounded-3xl hover:bg-transparent border border-[#4338ca] hover:text-[#4338ca] text-white bg-[#4338ca]">
                            
                            <span className="material-symbols-outlined text-xs">Voir</span>
                        </a>
                        

                        <a href={pharmacy.uri} target="_blank" className="btn btn-sm shadow-0 rounded-3xl bg-transparent border border-[#4338ca] text-[#4338ca] hover:text-white hover:bg-[#4338ca]">
                            <MapPinned className="w-4 h-auto" />
                            <span className="material-symbols-outlined text-xs">Aller sur Map</span>
                        </a>

                    </div>
                ) : ""
            }

        </div>

    )
}

export default PharmacyMapItem
