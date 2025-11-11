import HeroButton from "./form/HeroButton"
import HeroInput from "./form/HeroInput"

import PharmacyMapItem from "../components/PharmacyMapItem";
import { getNearbyPharmaciesWith } from "../services/geminiService";
import { useState } from "react";
import { X } from "lucide-react";

const HeroSearchbar = () => {

    const [resultOpen, setResultOpen] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [pharmaciesResult, setPharmaciesResult] = useState({error : null, data : []});
    const [searchLocation, setSearchLocation] = useState('');
    const [searchMedication, setSearchMedication] = useState('');

    const handleSearch = async () => {

        setIsLoading(true);

        const response = await getNearbyPharmaciesWith(searchLocation)
        console.info('all Promise', response);

        if (!response.error) {
            const pharmacies = response;
            setPharmaciesResult(pharmacies);
        }

        setIsLoading(false);
        setResultOpen(true);

    }

    const closeResultElement = () => {
        setResultOpen(false);
        setSearchLocation('');
        setSearchMedication('');
    }

    return (

        <>
            <div className="relative grid grid-cols-[70%_30%] md:grid-cols-[37%_37%_26%] items-center rounded-full shadow-2xl border border-gray-200 h-16">


                <HeroInput
                    className={"hidden  md:flex"}
                    label={"Localisation"}
                    placeHolder={"Ville, quartier, etc."}
                    value={searchLocation}
                    onValueChange={setSearchLocation}
                />

                <HeroInput
                    className={"h-full justify-center border-0 border-r border-l-0 md:border-l border-gray-200"}
                    label={"Médicament"}
                    placeHolder={"Ibuprofen, paracetamol, etc."}
                    value={searchMedication}
                    onValueChange={setSearchMedication} />


                <div className="flex items-center justify-end px-6">
                    <HeroButton text={"Recheche"} loading={isLoading} onClick={handleSearch} />
                </div>

                {
                    (resultOpen) ? (
                        <div className="absolute top-full mt-2 w-full h-auto z-9990 bg-white shadow-2xl rounded-2xl p-5">
                            <div className="flex justify-end mb-2">
                                <button onClick={closeResultElement} className="hover:bg-gray-200 transition-all duration-300 rounded-lg hover:cursor-pointer"><X /></button>
                            </div>
                            <div className=" max-h-[350px] overflow-y-hidden overflow-y-scroll">



                                <ul>

                                    {
                                        (pharmaciesResult.data.length > 0) ? (

                                            pharmaciesResult.data.map((pharmacy, index) => {

                                                return <li key={index} className="border border-white">

                                                    <PharmacyMapItem pharmacy={pharmacy} display={{
                                                        name: true,
                                                        location: true,
                                                        distance: true,
                                                        status: true,
                                                        mapButton: false,
                                                        phone: false
                                                    }} />

                                                </li>

                                            })

                                        ) : (

                                            (pharmaciesResult.error) ? (

                                                <li>
                                                    <div className="w-full text-center bg-red-200">
                                                        <p className="text-gray-500">Impossible de joindre le serveur. Vérifiez votre connexion et réessayez</p>
                                                    </div>
                                                </li>

                                            ) : (
                                                <li>
                                                    <div className="w-full text-center">
                                                        <p className="text-gray-500">Aucune pharmacie trouvée.</p>
                                                    </div>
                                                </li>
                                            )

                                        )
                                    }

                                </ul>
                            </div>
                        </div>

                    ) : ""
                }



            </div>
        </>

    )
}

export default HeroSearchbar
