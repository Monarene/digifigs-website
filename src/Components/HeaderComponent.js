//importing the
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";
import logo from "../assets/images/logo.png";
import "../css/nav.css";

const NavComponent = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar light>
        <NavbarBrand href="/">
          <img src={logo} alt="logos" className="mt-3" />
        </NavbarBrand>
        <NavbarToggler
          onClick={toggleNavbar}
          className="mr-4 mt-3 "
        />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem className="nav-link">
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact-us" className="nav-link">
                Contact Us
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="/our-services" className="nav-link">
                Discover Our services
              </NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavComponent;
