import Map from "../components/services/Map";
import PharmacyMapItem from "../components/PharmacyMapItem";

const Pharmacies = () => {
  return (

    <div className="grid grid-cols px-2 md:px-0 md:grid-cols-[40%_60%]">
      <div className="absolute top-0 left-0 -z-10 w-screen h-screen">
        <Map />
      </div>

      <div className="md:ml-20 md:w-[400px] mt-5 h-150 2xl:h-180 bg-white rounded-2xl shadow-lg">

        <div className="bg-zinc-200 flex flex-wrap justify-center p-5 rounded-2xl m-4">

          <input className="input rounded-2xl focus:shadow-0 focus:border-gray-200 focus:outline-none" type="text" name="" id="" placeholder="Recherche" />

          <div className="grid grid-cols-[50%_50%] w-full">
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
          <p>Consultez les <span className="font-bold">15</span> résultats.</p>
        </div>

        <div class="overflow-hidden h-[405px] 2xl:h-[520px] overflow-y-scroll p-2">

          <ul class="space-y-2">

            {
              Array.from({ length: 15 }).map((_, index) => (
                <li key={index} class="border border-white hover:border-primary rounded-lg p-4 ">
                  <PharmacyMapItem />
                </li>
              ))
            }

          </ul>
        </div>

      </div>

    </div>

  )
}

export default Pharmacies;
