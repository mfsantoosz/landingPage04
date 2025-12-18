import { Menu, X } from "lucide-react";
import NavLink from "@/components/NavLink"
import DefaultButton from "@/components/DefaultButton"
import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <header className="w-full py-6 px-48 bg-slate-900 max-lg:px-12">
            <nav className="flex justify-between items-center ">
                <h1 className="text-white text-3xl font-bold max-lg:text-2xl max-lg:z-50">Brainwave.io</h1>
                    <ul className="flex items-center gap-12 max-lg:hidden">
                        <NavLink text="Demos" />
                        <NavLink text="Pages" />
                        <NavLink text="Support" />
                        <NavLink text="Contact" />
                        <li><DefaultButton /></li>
                    </ul>
                <button className="hidden max-lg:block max-lg:z-50" onClick={() => {setMenuOpen(!menuOpen)}}>{menuOpen ? <X color="white" size={28} /> : <Menu color="white" size={28} />}</button>
            </nav>

            {menuOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-slate-900  flex flex-col justify-center items-center gap-20  ">
                    <ul className="flex flex-col gap-8 text-5xl">
                        <NavLink text="Demos" />
                        <NavLink text="Pages" />
                        <NavLink text="Support" />
                        <NavLink text="Contact" />
                        <li><DefaultButton /></li>
                    </ul>
                </div>
            )}        </header>
    )
}

export default Header;