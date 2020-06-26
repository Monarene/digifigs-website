//importing the
import React from "react";
import logo from "../assets/images/logo.png";
import { a } from "react-router-dom";
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
                <a href="/">
                  <a class="nav-a" href="/">
                    Home
                  </a>
                </a>
              </li>
              <li class="nav-item">
                <a href="/about-us">
                  <a class="nav-a" href="/about-us">
                    About Us
                  </a>
                </a>
              </li>
              <li class="nav-item">
                <a href="/casestudies">
                  <a class="nav-a" href="/casestudies">
                    Case Studies
                  </a>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-a dropdown-toggle"
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
                  <a class="dropdown-item" href="/services/content-marketing">
                    Content Marketing
                  </a>

                  <a class="dropdown-item" href="/services/se-marketing">
                    Search Engine Marketing
                  </a>

                  <a class="dropdown-item" href="/services/sm-marketing">
                    Social Media Marketing
                  </a>

                  <a class="dropdown-item" href="/services/email-marketing">
                    Email Marketing
                  </a>

                  <div class="dropdown-divider"></div>

                  <a class="dropdown-item" href="/services/seo">
                    Search Engine Optimization
                  </a>

                  <a class="dropdown-item" href="/services/web-development">
                    Web Development
                  </a>

                  <a class="dropdown-item" href="/services/app-development">
                    Mobile App Development
                  </a>

                  <div class="dropdown-divider"></div>

                  <a class="dropdown-item" href="/services/google-search-ads">
                    Google Search Ads
                  </a>

                  <a
                    class="dropdown-item"
                    href="/services/facebook-instagram-ads"
                  >
                    Facebook &amp; Instagram Ads
                  </a>

                  <div class="dropdown-divider"></div>

                  <a
                    class="dropdown-item"
                    href="/services/branding-and-packaging"
                  >
                    Product Branding &amp; Packaging
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a href="/contact-us">
                  <a class="nav-a" href="/contact-us">
                    Contact Us
                  </a>
                </a>
              </li>
            </ul>
          </div>{" "}
          {/* end navbar-collapse */}
          <div>
            <a href="/contact-us">
              <button
                class="btn btn-primary my-2 my-sm-0 get-started-lg"
                type="button"
                style={{ textAlign: "center" }}
              >
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
