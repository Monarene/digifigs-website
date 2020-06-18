import React, { Component } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

import "../css/navigator.css";

// const navSlide = () => {
//   const burger = document.querySelector(".ham-burger");
//   const navs = document.querySelector(".nav-links");
//   const navLinks = document.querySelectorAll(".nav-links li");

//   navs.classList.toggle("nav-active");
//   navLinks.forEach((link, index) => {
//     if (link.style.animation) {
//       link.style.animation = "";
//     } else {
//       link.style.animation = `navLinkFade 0.5s ease forwards ${
//         index / 7 + 0.5
//       }s`;
//     }
//   });
//   burger.classList.toggle("toggle");
// };

const Nav = () => {
  const [navOpened, setNavOpened] = React.useState(false);
  const handleBurgerClick = () => {
    setNavOpened(!navOpened);
  };

  return (
    <React.Fragment>
      <nav
        style={{
          position: "fixed",
          width: "100%",
          top: "0",
          backgroundColor: "white",
          zIndex: "1",
        }}
      >
        <div className="logo">
          {" "}
          <img src={logo} alt="nav logo" />
        </div>
        <ul className={navOpened ? "nav-links nav-active" : "nav-links"}>
          <Link to="/">
            <li
              style={
                navOpened
                  ? {
                      animation: `navLinkFade 0.5s ease forwards ${
                        1 / 7 + 0.1
                      }s`,
                    }
                  : {}
              }
            >
              Home
            </li>
          </Link>
          <Link to="/about">
            <li
              style={
                navOpened
                  ? {
                      animation: `navLinkFade 0.5s ease forwards ${
                        2 / 7 + 0.1
                      }s`,
                    }
                  : {}
              }
            >
              About Us
            </li>
          </Link>
          <Link to="/casestudies">
            <li
              style={
                navOpened
                  ? {
                      animation: `navLinkFade 0.5s ease forwards ${
                        3 / 7 + 0.1
                      }s`,
                    }
                  : {}
              }
            >
              Case Studies
            </li>
          </Link>
          <Link>
            <li
              style={
                navOpened
                  ? {
                      animation: `navLinkFade 0.5s ease forwards ${
                        4 / 7 + 0.1
                      }s`,
                    }
                  : {}
              }
              className="dropdown"
            >
              Services
              <div className="dropdown-content">
                <Link>Content Marketing</Link>
                <Link>Search Engine Marketing</Link>
                <Link>Content Marketing</Link>
                <Link>Social Media Marketing</Link>
                <Link>Email Marketing</Link>
                <Link>Search Engine Optimization</Link>
                <Link>Web development</Link>
                <Link>Mobile App development</Link>
                <Link>Game Search Ads</Link>
                <Link>Facebook and Instagram Ads</Link>
                <Link>Product Branding & Packaging</Link>
              </div>
            </li>
          </Link>
          <Link to="/contact">
            <li
              style={
                navOpened
                  ? {
                      animation: `navLinkFade 0.5s ease forwards ${
                        5 / 7 + 0.1
                      }s`,
                    }
                  : {}
              }
            >
              Contact
            </li>
          </Link>
        </ul>
        <div className="ham-burger" onClick={handleBurgerClick}>
          <div className={navOpened ? "toggle-line1" : "line"}></div>
          <div className={navOpened ? "toggle-line2" : "line"}></div>
          <div className={navOpened ? "toggle-line3" : "line"}></div>
        </div>
        <button>Get Started</button>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
