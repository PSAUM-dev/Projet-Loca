
const HeroInput = ({ label, placeHolder, className }) => {
    return (

        <div class={`flex flex-col text-left px-6 ${className}`}>
            <label class="text-xs font-bold text-gray-800" for="location-search">{label}</label>
            <input class="w-full text-sm border-0 bg-transparent text-gray-900 p-0 focus:outline-none focus:border-transparent" id="location-search" placeholder={placeHolder} type="text" />
        </div>

    )
}

export default HeroInput
