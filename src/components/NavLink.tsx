interface NavLinkProps {
    text: string;
}

const NavLink = ({ text }: NavLinkProps) => {
    return (
        <li>
            <a href="" className="text-white font-extralight cursor-pointer transition-colors duration-200 ease-in-out hover:text-indigo-600">
                {text}
            </a>
        </li>
    );
}

export default NavLink;