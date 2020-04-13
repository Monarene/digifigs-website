//importing the
import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import "../css/nav.css";

const Header = () => {
  // const [collapsed, setCollapsed] = useState(true);
  // const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-light nav-wrapper">
        <button class="navbar-toggler mb" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/">
          <img src={logo} alt="logo" />
        </a>
        <button class="navbar-toggler tb" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Case Studies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0 get-started-lg">
            <a href="#get-started"><button class="btn btn-primary my-2 my-sm-0" type="button">Get Started</button></a>
          </form>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
