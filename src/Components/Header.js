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
      <div
        style={{
          position: "fixed",
          width: "100%",
          top: "0",
          backgroundColor: "white",
          zIndex: "1",
        }}
      >
        <div class="navbar navbar-expand-lg navbar-light nav-wrapper">
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
            <img className="logo-header" src={logo} alt="logo" />
          </a>
          <button
            class="navbar-toggler tb"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Togg￼le navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to="/">
                  <a class="nav-link" href="/">
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/about">
                  <a class="nav-link" href="/about">
                    About Us
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/casestudies">
                  <a class="nav-link" href="#">
                    Case Studies
                  </a>
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/services/content-marketing">
                    <a class="dropdown-item" href="/services/content-marketing">
                      Content Marketing
                    </a>
                  </Link>
                  <Link to="/services/se-marketing">
                    <a class="dropdown-item" href="/services/se-marketing">
                      Search Engine Marketing
                    </a>
                  </Link>
                  <Link to="/services/sm-marketing">
                    <a class="dropdown-item" href="/services/sm-marketing">
                      Social Media Marketing
                    </a>
                  </Link>
                  <Link to="/services/email-marketing">
                    <a class="dropdown-item" href="/services/email-marketing">
                      Email Marketing
                    </a>
                  </Link>
                  <div class="dropdown-divider"></div>
                  <Link to="/services/seo">
                    <a class="dropdown-item" href="/services/seo">
                      Search Engine Optimization
                    </a>
                  </Link>
                  <Link to="/services/web-development">
                    <a class="dropdown-item" href="/services/web-development">
                      Web Development
                    </a>
                  </Link>
                  <Link to="/services/app-development">
                    <a class="dropdown-item" href="/services/app-development">
                      Mobile App Development
                    </a>
                  </Link>
                  <div class="dropdown-divider"></div>
                  <Link to="/services/google-search-ads">
                    <a class="dropdown-item" href="/services/google-search-ads">
                      Google Search Ads
                    </a>
                  </Link>
                  <Link to="/services/facebook-instagram-ads">
                    <a
                      class="dropdown-item"
                      href="/services/facebook-instagram-ads"
                    >
                      Facebook & Instagram Ads
                    </a>
                  </Link>
                  <div class="dropdown-divider"></div>
                  <Link to="/services/branding-and-packaging">
                    <a
                      class="dropdown-item"
                      href="/services/branding-and-packaging"
                    >
                      Product Branding & Packaging
                    </a>
                  </Link>
                </div>
              </li>
              <li class="nav-item">
                <Link to="/contact">
                  <a class="nav-link" href="/contact">
                    Contact
                  </a>
                </Link>
              </li>
              <li>
                <a href="#get-started">
                  <button
                    class="btn btn-primary my-2 my-sm-0 get-started-lg header-button"
                    type="button"
                  >
                    Get Started
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
