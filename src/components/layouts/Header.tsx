import { Menu } from "lucide-react";
import NavLink from "@/components/NavLink"
import DefaultButton from "@/components/DefaultButton"

const Header = () => {
    return(
        <header className="w-full py-6 px-48 bg-slate-900 max-md:px-12">
            <nav className="flex justify-between items-center ">
                <h1 className="text-white text-3xl font-bold">Brainwave.io</h1>
                    <ul className="flex items-center gap-12 max-md:hidden">
                        <NavLink text="Demos" />
                        <NavLink text="Pages" />
                        <NavLink text="Support" />
                        <NavLink text="Contact" />
                        <li><DefaultButton /></li>
                    </ul>
                    <button className="hidden text-2xl text-white max-md:block"><Menu /></button>
            </nav>
        </header>
    )
}

export default Header;