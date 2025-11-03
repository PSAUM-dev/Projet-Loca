import { Home } from "lucide-react"
import { NavLink } from "react-router-dom"

const NavbarHomeLink = () => {
    return (
        <NavLink className={({ isActive }) => `hover:text-[#4f46e5] ${isActive ? "text-[#4f46e5]" : "text-gray-500"} font-bold transition-all duration-400 px-4 py-2 rounded-full`} to="/">
            <Home />
        </NavLink>
    )
}

export default NavbarHomeLink
