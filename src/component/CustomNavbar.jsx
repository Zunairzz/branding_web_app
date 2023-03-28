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
import "../styles/CustomNavbar.css";

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

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="navbar navbar-expand-md navbar-dark px-4">
                <NavbarBrand to="/">
                </NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink id="link" to="/">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink id="link1" to="/about">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink id="link2" to="/service">
                                Brands
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle id="link3" nav caret>
                                More
                            </DropdownToggle>
                            <DropdownMenu end id="NavBarMenu">
                                <DropdownItem id="drop-down1">
                                    <i
                                        className="bi bi-person-lines-fill"
                                        style={{marginRight: 7}}
                                    ></i>{" "}
                                    Contact us
                                </DropdownItem>

                                <DropdownItem id="drop-down2">
                                    <i className="bi bi-facebook" style={{marginRight: 7}}></i>{" "}
                                    Facebook
                                </DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem id="drop-down3">
                                    <i className="bi bi-youtube" style={{marginRight: 7}}></i>
                                    Youtube
                                </DropdownItem>
                                <DropdownItem id="drop-down4">
                                    <i className="bi bi-instagram" style={{marginRight: 7}}></i>
                                    Instagram
                                </DropdownItem>
                                <DropdownItem id="drop-down5">
                                    <i className="bi bi-linkedin" style={{marginRight: 7}}></i>
                                    LinkedIn
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    {/*<Nav navbar>*/}
                    {/*    <NavItem>*/}
                    {/*        <NavLink id="link4" to="/login">*/}
                    {/*            Login*/}
                    {/*        </NavLink>*/}
                    {/*    </NavItem>*/}
                    {/*    <NavItem>*/}
                    {/*        <NavLink id="link5" to="/signup">*/}
                    {/*            Sign Up*/}
                    {/*        </NavLink>*/}
                    {/*    </NavItem>*/}
                    {/*</Nav>*/}
                </Collapse>
            </Navbar>
        </div>
    )
}