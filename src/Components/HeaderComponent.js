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
  Button,
} from "reactstrap";
import logo from "../assets/images/new_logo.png";
import "../css/nav.css";

//TODO implement breadcrumbs
//TODO implement where all the form is taking the data to
//TODO Resize all the images with squoosh
const NavComponent = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand href="/">
          <img src={logo} alt="logos" className="mt-3" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-4 mt-3 " />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="mr-auto">
            <NavItem className="nav-link">
              <NavLink href="/about" className="nav-text">
                Home
              </NavLink>
            </NavItem>
            <NavItem className="nav-link">
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem className="nav-link">
              <NavLink href="/about">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact-us" className="nav-link">
                Contact Us
              </NavLink>
            </NavItem>
            <NavItem
              style={{
                paddingLeft: "60%",
                position: "relative",
                bottom: "5px",
              }}
            >
              <NavLink className="nav-link">
                <Button
                  color="primary"
                  style={{
                    height: "47px",
                    width: "204px",
                  }}
                >
                  Get started
                </Button>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavComponent;
