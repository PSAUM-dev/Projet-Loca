import { Fragment } from "react"
import Hero from "../components/sections/Hero"
import FeaturedPharmacies from "../components/FeaturedPharmacies"


const Home = () => {
    return (
        <Fragment>
            <section className="h-full">
                <Hero />
            </section>

            <section className='2xl:mt-10'>

                <FeaturedPharmacies />
            </section>
        </Fragment>
    )
}

export default Home
