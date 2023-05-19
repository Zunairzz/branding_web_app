import {
    Collapse, DropdownItem, DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";
import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Rotate as Hamburger} from 'hamburger-react'
import "../styles/CustomNavbar.css";
import {Link, useNavigate} from "react-router-dom";
import {isLoggedIn, LogOut} from "../service/UserService";

export const CustomNavbar = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(true);
    const [login, setLogin] = useState(false);
    const controlNavbar = () => {
        if (window.screenY > 0) {
            setShow(false);
        } else {
            setShow(true);
        }
    }
    // new useEffect:
    useEffect(() => {
        setLogin(isLoggedIn());
        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, []);

    function doLogout() {
        LogOut();
    }


    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Navbar className="navbar navbar-expand-md navbar-dark px-4 mb-5">
                <NavbarBrand to="/">
                </NavbarBrand>
                {/*<NavbarToggler onClick={toggle}/>*/}
                <div className="hamburger-icon">
                    <Hamburger toggled={isOpen} toggle={setIsOpen} direction={"right"} color={"white"}
                               easing={"ease-out"} duration={0.5} size={22} rounded/>
                </div>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink>
                                <Link id="link" to="/">Home</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link id="link1" to="/about">About</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link id="link2" to="/brands">Brands</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link id="link3" to="/contact-us">Contact Us</Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    {!login && (
                        <Nav>
                            <NavItem>
                                <NavLink>
                                    <Link id="link3" to="/admin/login">Login</Link>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    )
                    }
                    {login && (
                        <Nav>
                            <NavItem>
                                <NavLink>
                                    <Link id="link3" to="" onClick={() => doLogout()}>Logout</Link>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    )
                    }
                </Collapse>
            </Navbar>
        </div>
    )
}