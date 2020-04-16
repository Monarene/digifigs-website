//importing the
import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import "../css/nav.css";

const Header = () => {
  // const [collapsed, setCollapsed] = useState(true);
  // const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-light nav-wrapper">
        <button
          class="navbar-toggler mb"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/">
          <img src={logo} alt="logo" />
        </a>
        <button
          class="navbar-toggler tb"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <Link to="/about">
                <a class="nav-link" href="/about">
                  About Us
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Case Studies
              </a>
            </li>
            <li class="nav-item">
              <Link to="/services">
                <a class="nav-link" href="#">
                  Services
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact">
                <a class="nav-link" href="/contact">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0 get-started-lg">
            <a href="#get-started">
              <button class="btn btn-primary my-2 my-sm-0" type="button">
                Get Started
              </button>
            </a>
          </form>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
