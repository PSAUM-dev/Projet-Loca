import { useEffect, useState } from "react";
import Map from "../components/MapContainer";
import PharmacyMapItem from "../components/PharmacyMapItem";
import { getNearbyPharmaciesWith } from "../services/geminiService";
import { OctagonAlert } from "lucide-react";

const Pharmacies = () => {

  const [locationOnMap, setLocationOnMap] = useState({ lat: 4.848, lng: 11.502 });
  const [pharmacies, setPharmacies] = useState({ error: null, data: [] });
  const [selectedPharm, setSelectedPharm] = useState(null);

  useEffect(() => {

    const getPharmacies = async () => {
      const result = await getNearbyPharmaciesWith('any');
      setPharmacies(result);

      console.info('LES PHARMACIES', result);
    }

    getPharmacies();

  }, [])

  return (

    <div className="grid grid-cols px-2 md:px-0 md:grid-cols-[40%_60%]">
      <div className="absolute top-0 left-0 -z-10 w-screen h-screen">
        <Map location={locationOnMap} />
      </div>

      <div className="md:ml-20 md:w-[400px] mt-5 h-150 2xl:h-180 bg-white rounded-2xl shadow-lg">

        <div className="bg-zinc-50 flex flex-wrap justify-center p-5 rounded-2xl m-4">

          <input className="input rounded-2xl focus:shadow-0 focus:border-gray-200 focus:outline-none" type="text" name="" id="" placeholder="Recherche" />

          <div className="grid grid-cols-[50%_50%] w-full gap-x-1">

            <select className="select w-full rounded-2xl focus:shadow-0 focus:border-gray-200 focus:outline-none open:border-gray-200 open:outline-none mt-4" name="" id="">
              <option value="">Ouvert maintenant</option>
              <option value="">Fermé</option>
              <option value="">Tous</option>
            </select>

            <select className="select rounded-2xl focus:shadow-0 focus:border-gray-200 focus:outline-none open:border-gray-200 open:outline-none mt-4" name="" id="">
              <option value="">Plus proche</option>
              <option value="">Plus éloigné</option>
            </select>

          </div>

        </div>

        <div className="px-5">
          <p>Consultez les <span className="font-bold">{pharmacies.length}</span> résultats.</p>
        </div>

        <div className="overflow-hidden h-[405px] 2xl:h-[520px] overflow-y-scroll p-2">

          <ul className="space-y-2">

            {
              (pharmacies.data.length > 0) ? (

                pharmacies.data.map((pharmacy, index) => {
                  return <li key={index}>
                    <PharmacyMapItem id={index} setLocationOnMap={setLocationOnMap} pharmacy={pharmacy} currentPharm={selectedPharm} markAsSelected={setSelectedPharm} />
                  </li>
                })

              ) : (pharmacies.error !== null) ? (
                <div className="bg-red-50 flex justify-center items-center h-[380px] 2xl:h-[495px] w-full">
                  <div className="text-center">
                    <OctagonAlert w-auto h-5/>
                    <p className="text-red-500 mb-4">Nombre de requêtes vers le serveur trop élevé, réessayez dans quelques secondes</p>
                    <a className="text-center" href="#">Réessayer</a>
                  </div>
                </div>
              ) : (
                (
                  <div className="bg-gray-50 flex justify-center items-center h-[380px] 2xl:h-[495px] w-full">
                    <span className="loading loading-dots loading-sm"></span>
                  </div>
                )
              )
            }

          </ul>
        </div>

      </div>

    </div>

  )
}

export default Pharmacies;
