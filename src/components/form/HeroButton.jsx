import { Search } from "lucide-react"

const HeroButton = ({ text, onClick, loading }) => {
    return (
        <div>
            <button className="btn group bg-[#4f46e5] text-white rounded-full" onClick={onClick}>

                {
                    (!loading) ? (

                        <Search className="rotate-0 transition-transform duration-600 group-hover:rotate-360" />

                    ) : ( <span className="loading loading-spinner h-5 w-auto bg-wite"></span> )
                }

                <span className="hidden md:flex">{text}</span>

            </button>
        </div>
    )
}

export default HeroButton
