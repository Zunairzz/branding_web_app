import navbarData from "./navbarData";
import NavbarItem from "./NavbarItem";
import classnames from "classnames";

const Navbar = ({visible}) => (
    <nav
        className={classnames("navbar", {
            "navbar--hidden": !visible
        })}
    >
        <a href="/" style={{textDecoration: "none"}}>
            <h3 style={{color: "#323330"}}>GHOSH</h3>
        </a>
        <div>
            {navbarData.map(({link, label}) => (
                <NavbarItem link={link} label={label} classNames={[]}/>
            ))}
        </div>
    </nav>
);

export default Navbar;