import { Menu } from "lucide-react";


const Navbar = () => {
    return (
        <div className="w-screen flex items-center justify-center h-20 xl:h-20 2xl:h-60 z-10 md:p-0 px-2 bg-blue-200">

            <div className="md:w-4/5 w-full h-3/4 2xl:h-1/3 bg-white drop-shadow-lg rounded-full flex  justify-between items-center px-5">

                <div className="flex items-center gap-2">
                    <div className="p-2 h-7 w-7 bg-[#4f46e5] rounded-full"></div>
                    <span className="font-bold">Projet Loca</span>
                </div>


                <div className="flex gap-4">

                    <div className="border-r border-gray-200 px-8">
                        <ul className="hidden md:flex items-center space-x-4">
                            <li><a className="hover:bg-gray-200 transition-all duration-400 font-bold px-4 py-2 rounded-full" href="">Pharmacie</a></li>
                            <li><a className="hover:bg-gray-200 transition-all duration-400 px-4 py-2 rounded-full" href="">Service</a></li>
                            <li><a className="hover:bg-gray-200 transition-all duration-400 px-4 py-2 rounded-full" href="">À propos</a></li>
                        </ul>
                    </div>

                    <div>
                        <a href="#"><Menu /></a>
                    </div>

                </div>

                <div className="absolute  bg-red-200 top-16 2xl:top-21 right-0 w-full p-5 md:w-[250px]">
                    <ul>
                        <li>test menu 1</li>
                        <li>test menu 2</li>
                        <li>test menu 3</li>
                        <li>test menu 4</li>
                    </ul>
                </div>

            </div>





        </div>
    );
}

export default Navbar;