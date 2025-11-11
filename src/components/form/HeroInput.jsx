
const HeroInput = ({ label, placeHolder, className, value, onValueChange }) => {
    return (

        <div className={`flex flex-col text-left px-6 ${className}`}>
            <label className="text-xs font-bold text-gray-800" htmlFor="location-search">{label}</label>

            <input className="w-full text-sm border-0 bg-transparent text-gray-900 p-0 focus:outline-none focus:border-transparent"
            id="location-search" 
            placeholder={placeHolder} 
            type="text" 
            value={value} onChange={(e) => onValueChange(e.target.value)}/>

        </div>

    )
}

export default HeroInput
