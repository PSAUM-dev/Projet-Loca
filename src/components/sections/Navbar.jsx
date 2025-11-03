import { MapPinnedIcon, Menu } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NavbarLink from "./NavbarLink";
import NavbarHomeLink from "./NavbarHomeLink";
import useUserLocation from "../hooks/useUserLocation";


const Navbar = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { location } = useUserLocation();

    function toggleDropdown() {
        setDropdownOpen(!dropdownOpen);
    }

    return (
        <div className="w-screen flex items-center justify-center h-20 xl:h-20 2xl:h-60 z-10 md:p-0 px-2">

            <div className="md:w-4/5 w-full h-3/4 2xl:h-1/3 bg-white drop-shadow-lg rounded-full flex  justify-between items-center px-5">

                <div className="flex items-center gap-2">
                    <div className="p-2 h-7 w-7 bg-[#4f46e5] rounded-full"></div>
                    <span className="hidden md:flex font-bold">
                        <Link to={'/'}>Projet Loca</Link>
                    </span>

                    {
                        (location.city) ? (
                            <span className="flex items-center gap-2 bg-gray-200 py-1 px-2 rounded-xl">
                                <MapPinnedIcon className="w-4 h-4" />
                                <span className="text-gray-700 text-sm">{location.rue} {location.city}, {location.country}</span>
                            </span>

                        ) : ("")
                    }




                </div>


                <div className="flex gap-4">

                    <div className=" px-8">
                        <ul className="hidden md:flex items-center space-x-2">
                            <li className="me-10"><NavbarHomeLink /></li>

                            <li><NavbarLink text="Pharmacie" link="/pharmacies" /></li>
                            <li><NavbarLink text="Services" link="/services" /></li>

                        </ul>
                    </div>

                    <div className="flex items-center md:hidden">
                        <NavbarHomeLink />
                        <a href="#" onClick={() => toggleDropdown()}><Menu /></a>
                    </div>

                </div>

                <div className={`absolute bg-white rounded-lg top-16 2xl:top-21 right-0 w-full z-9999 p-5 md:hidden md:w-[250px] ${dropdownOpen ? '' : 'hidden'}`}>
                    <ul className="grid gap-y-4">
                        <li><NavbarLink text="Pharmacie" link="/pharmacies" /></li>
                        <li><NavbarLink text="Services" link="/services" /></li>
                    </ul>
                </div>

            </div>





        </div>
    );
}

export default Navbar;