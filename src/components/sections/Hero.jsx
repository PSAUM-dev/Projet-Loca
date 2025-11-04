import HeroSearchbar from "../HeroSearchbar";

const Hero = () => {

    return (

        <div className="container mx-auto px-4 pt-16 pb-12">

            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter text-gray-800">Ta santé, proche de chez toi.</h1>
                <p className="text-lg text-gray-500 md:text-xl font-normal mt-4">Trouves des pharmacies de confiance proche de toi pour tes prescriptions, tes médicaments et avis d'experts.</p>
            </div>

            <div className="w-full max-w-2xl mx-auto mt-10">
                <HeroSearchbar />
            </div>

        </div>

    );

}

export default Hero;