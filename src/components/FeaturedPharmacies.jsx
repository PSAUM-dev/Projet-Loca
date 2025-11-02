import PharmacieCardItem from "./PharmacieCardItem"

const FeaturedPharmacies = () => {
    return (

        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5 h-64 px-4 md:px-20">

            <PharmacieCardItem />
            <PharmacieCardItem />
            <PharmacieCardItem />
            <PharmacieCardItem />

        </div>

    )
}

export default FeaturedPharmacies
