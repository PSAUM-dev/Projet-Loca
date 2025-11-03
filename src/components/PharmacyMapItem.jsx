import { MapPinned } from "lucide-react"

const PharmacyMapItem = () => {
    return (

        <div class="flex flex-col gap-2">

            <div class="flex justify-between items-start">
                <h4 class="font-bold">Pharmacy du Soleil</h4>
                <span class="text-sm font-medium text-gray-600">.1km</span>
            </div>

            <p class="text-sm text-gray-600">Yaoundé, Centre-ville</p>

            <div class="flex items-center gap-2">
                <span class="inline-block h-2 w-2 rounded-full bg-green-600"></span>
                <p class="text-sm font-medium text-green-600">Ouvert</p>
                <p class="text-sm text-gray-600">- Ferme à 17h</p>
            </div>

            <p class="text-sm text-gray-600">(237) 620 940 918</p>

            <div class="flex gap-2 pt-2">

                <a href="#" className="btn shadow-0 rounded-3xl bg-transparent border border-[#4338ca] text-[#4338ca] hover:text-white hover:bg-[#4338ca]">
                    <MapPinned />
                    <span class="material-symbols-outlined text-base">Aller sur Map</span>
                </a>
            </div>

        </div>

    )
}

export default PharmacyMapItem
