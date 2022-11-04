import { NavLink } from "react-router-dom";

const navLinks = ['Home', 'Popular', 'Battle'];

const Nav = () => {
    return (
        <ul className="nav">
            {navLinks.map((navLink, index) => {
                return (
                    <li key={index}>
                        <NavLink 
                            to={navLink === 'Home' ? '/' : navLink.toLowerCase()} 
                            end
                        >
                            {navLink}
                        </NavLink>
                    </li>
                )
            })}
        </ul>
    );
}

export default Nav;