import { NavLink } from "react-router-dom"

const NavbarLink = ({text, link}) => {
  return (
    <NavLink className={
        ({isActive}) => `
            hover:bg-gray-200 text-gray-500 transition-all duration-400 px-4 py-2 rounded-full
            ${isActive ? "bg-gray-200" : ""}
        `
    } to={link}>
        {text}    
    </NavLink>
  )
}

export default NavbarLink
