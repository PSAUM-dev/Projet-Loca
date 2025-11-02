import { Home, Menu } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NavbarLink from "./NavbarLink";
import NavbarHomeLink from "./NavbarHomeLink";


const Navbar = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    function toggleDropdown() {
        setDropdownOpen(!dropdownOpen);
    }

    return (
        <div className="w-screen flex items-center justify-center h-20 xl:h-20 2xl:h-60 z-10 md:p-0 px-2">

            <div className="md:w-4/5 w-full h-3/4 2xl:h-1/3 bg-white drop-shadow-lg rounded-full flex  justify-between items-center px-5">

                <div className="flex items-center gap-2">
                    <div className="p-2 h-7 w-7 bg-[#4f46e5] rounded-full"></div>
                    <span className="font-bold">
                        <Link to={'/'}>Projet Loca</Link>
                    </span>
                </div>


                <div className="flex gap-4">

                    <div className=" px-8">
                        <ul className="hidden md:flex items-center space-x-2">
                            <li><NavbarHomeLink /></li>

                            <li><NavbarLink text="Pharmacie" link="/pharmacies" /></li>
                            <li><NavbarLink text="Services" link="/services" /></li>
                            <li><NavbarLink text="À propos" link="/about" /></li>

                        </ul>
                    </div>

                    <div className="flex items-center md:hidden">
                        <NavbarHomeLink />
                        <a href="#" onClick={() => toggleDropdown()}><Menu /></a>
                    </div>

                </div>

                <div className={`absolute bg-white rounded-lg top-16 2xl:top-21 right-0 w-full p-5 md:hidden md:w-[250px] ${dropdownOpen ? '' : 'hidden'}`}>
                    <ul className="grid gap-y-4">
                        <li><NavbarLink text="Pharmacie" link="/pharmacies" /></li>
                        <li><NavbarLink text="Services" link="/services" /></li>
                        <li><NavbarLink text="À propos" link="/about" /></li>
                    </ul>
                </div>

            </div>





        </div>
    );
}

export default Navbar;