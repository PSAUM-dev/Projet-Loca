import { OctagonAlert, Search } from "lucide-react"
import { Link } from "react-router-dom"

const ServiceCardItem = () => {
    return (
        <div className="bg-white max-h-[210px] shadow-lg grid grid-cols-[10%_90%] p-4">

            <OctagonAlert />
            <div className="grid grid-cols-1">
                <h3 className="font-bold text-xl">Trouves tes médicaments proches de chez toi</h3>

                <p className="text-gray-400 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint ab labore temporibus repudiandae rerum assumenda
                </p>

                <Link to={"/pharmacies"} className="btn group bg-[#4f46e5] text-white rounded-full mt-2">
                    <Search className="rotate-0 transition-transform duration-600 group-hover:rotate-360" />
                    <span className="hidden md:flex">Trouver un médicament</span>
                </Link>
            </div>


        </div>
    )
}

export default ServiceCardItem
