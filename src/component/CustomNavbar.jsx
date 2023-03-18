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
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';

export const CustomNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar fixed className="navbar navbar-expand-md navbar-dark px-4">
                <NavbarBrand to="/">
                </NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to="/about">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/service">
                                Services
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
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
                    <Nav navbar>
                        <NavItem>
                            <NavLink to="/login">
                                Login
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/signup">
                                Sign Up
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}