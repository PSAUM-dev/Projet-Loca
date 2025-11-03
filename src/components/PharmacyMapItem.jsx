import { MapPinned } from "lucide-react"

const PharmacyMapItem = () => {
    return (

        <div className="flex flex-col gap-2">

            <div className="flex justify-between items-start">
                <h4 className="font-bold">Pharmacy du Soleil</h4>
                <span className="text-sm font-medium text-gray-600">.1km</span>
            </div>

            <p className="text-sm text-gray-600">Yaoundé, Centre-ville</p>

            <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-green-600"></span>
                <p className="text-sm font-medium text-green-600">Ouvert</p>
                <p className="text-sm text-gray-600">- Ferme à 17h</p>
            </div>

            <p className="text-sm text-gray-600">(237) 620 940 918</p>

            <div className="flex gap-2 pt-2">

                <a href="#" className="btn shadow-0 rounded-3xl bg-transparent border border-[#4338ca] text-[#4338ca] hover:text-white hover:bg-[#4338ca]">
                    <MapPinned />
                    <span className="material-symbols-outlined text-base">Aller sur Map</span>
                </a>
            </div>

        </div>

    )
}

export default PharmacyMapItem
