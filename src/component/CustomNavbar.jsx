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
import {Link} from "react-router-dom";

export const CustomNavbar = () => {
    const [show, setShow] = useState(true);
    const controlNavbar = () => {
        if (window.screenY > 0) {
            setShow(false);
        } else {
            setShow(true);
        }
    }
    // new useEffect:
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        return () => window.removeEventListener('scroll', controlNavbar);

    }, []);


    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Navbar className="navbar navbar-expand-md navbar-dark px-4">
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
                </Collapse>
            </Navbar>
        </div>
    )
}