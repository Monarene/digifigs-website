//importing the
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  NavLink,
  Button
} from "reactstrap";
import logo from "../assets/images/logo.png";
import "../css/nav.css";

const NavComponent = props => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar light>
        <NavItem>
          <Button
            className="btn-default mt-3"
            style={{ backgroundColor: "#39F" }}
          >
            Get Started
          </Button>
        </NavItem>
        <NavbarBrand href="/">
          <img src={logo} alt="logos" className="mt-3" />
        </NavbarBrand>
        <NavbarToggler
          onClick={toggleNavbar}
          style={{ color: "#39f" }}
          className="mr-4 mt-3"
        />
        <Collapse isOpen={!collapsed} navbar>
          <NavItem>
            <NavLink href="">About</NavLink>
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavComponent;
