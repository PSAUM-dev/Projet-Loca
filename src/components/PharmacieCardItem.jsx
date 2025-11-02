import pharmacyInterior from "../assets/images/Pharmacy inbterior.jpg";

const PharmacieCardItem = () => {
    return (
        <div>
            <a href="">
                <img className="rounded-lg transition-transform hover:rotate-1 duration-300 hover:scale-103" src={pharmacyInterior} alt="" />

            <div className="grid grid-cols-[80%_20%] justify-between mt-2">

                <div>
                    <p className="font-semibold text-sm">Nom de la pharmacie</p>
                    <p className="text-xs text-gray-600">Yaoundé, Centre-ville</p>
                </div>

                <p className="text-end text-gray-600 text-xs">
                    4km
                </p>

            </div>
            </a>
        </div>
    )
}

export default PharmacieCardItem
