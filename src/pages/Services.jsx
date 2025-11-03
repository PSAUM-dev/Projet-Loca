
import { OctagonAlert, Search } from "lucide-react";
import HeroImage from "../assets/images/services.png";
import { Link } from "react-router-dom";
import ServiceCardItem from "../components/ServiceCardItem";

const Services = () => {
  return (

    <div className="grid grid-cols-1 md:grid-cols-6 mt-20 2xl:mt-0 py-5">

      <div className="col-start-2 col-span-4 grid grid-cols-1 md:grid-cols-2 gap-x-4">

        <img src={HeroImage} alt="" />

        <div className="grid grid-cols-1 gap-4">

          <ServiceCardItem />
          
          <div className="bg-white max-h-[210px] shadow-lg grid grid-cols-[10%_90%] p-4">

            <OctagonAlert />
            <div className="grid grid-cols-1">
              <h3 className="font-bold text-xl">Trouves une pharmacie proche de chez toi</h3>

              <p className="text-gray-400 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sint ab labore temporibus repudiandae rerum assumenda
              </p>

              <Link to={"/pharmacies"} className="btn group bg-[#4f46e5] text-white rounded-full mt-2">
                <Search className="rotate-0 transition-transform duration-600 group-hover:rotate-360" />
                <span className="hidden md:flex">Trouver une pharmacie</span>
              </Link>
              
            </div>


          </div>

        </div>

      </div>

    </div>

  )
}

export default Services;
