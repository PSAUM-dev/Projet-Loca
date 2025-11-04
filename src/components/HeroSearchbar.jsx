import HeroButton from "./form/HeroButton"
import HeroInput from "./form/HeroInput"

const HeroSearchbar = () => {
    return (

        <div className="relative grid grid-cols-[70%_30%] md:grid-cols-[37%_37%_26%] items-center bg-white rounded-full shadow-2xl border border-gray-200 h-16">


            <HeroInput className={"hidden  md:flex"} label={"Localisation"} placeHolder={"Ville, quartier, etc."} />
            <HeroInput className={"h-full justify-center border-0 border-r border-l border-gray-200"} label={"Médicament"} placeHolder={"Ibuprofen, paracetamol, etc."} />


            <div className="flex items-center justify-end px-6">
                <HeroButton text={"Recherche"} />
            </div>

        </div>

    )
}

export default HeroSearchbar
