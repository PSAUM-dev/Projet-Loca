import { useEffect, useState } from "react";
import Map from "../components/MapContainer";
import PharmacyMapItem from "../components/PharmacyMapItem";
import { getNearbyPharmaciesWith } from "../services/geminiService";

const Pharmacies = () => {

  const [pharmacies, setPharmacies] = useState([]);

  useEffect(() => {

    const getPharmacies = async () => {
      const result = await getNearbyPharmaciesWith('any');
      setPharmacies(result);
    }

    getPharmacies();

  }, [])

  return (

    <div className="grid grid-cols px-2 md:px-0 md:grid-cols-[40%_60%]">
      <div className="absolute top-0 left-0 -z-10 w-screen h-screen">
        <Map />
      </div>

      <div className="md:ml-20 md:w-[400px] mt-5 h-150 2xl:h-180 bg-white rounded-2xl shadow-lg">

        <div className="bg-zinc-200 flex flex-wrap justify-center p-5 rounded-2xl m-4">

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
              (pharmacies.length > 0) ? (

                pharmacies.map((pharmacy, index) => {
                  return <li key={index} className="border border-white hover:border-primary rounded-lg p-4 ">
                    <PharmacyMapItem pharmacy={pharmacy} />
                  </li>
                })

              ) : (
                <div className="bg-gray-50 flex justify-center items-center h-[380px] 2xl:h-[495px] w-full">
                  <span className="loading loading-dots loading-sm"></span>
                </div>
              )
            }

          </ul>
        </div>

      </div>

    </div>

  )
}

export default Pharmacies;
