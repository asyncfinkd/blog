import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useToggle } from "lib/use-toggle";

const Header: React.FC = () => {
  const [showHeader, setShowHeader] = useToggle();
  const [dropDownActive, setDropDownActive] = useToggle();
  return (
    <>
      <header id="header" className="header fixed-top header-scrolled">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <NavLink to="/" className="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <span>FlexStart</span>
          </NavLink>

          <nav
            id="navbar"
            className={`navbar ${showHeader && "navbar-mobile"}`}
          >
            <ul>
              <li>
                <a href="/" className="nav-link scrollto">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/partners">
                  Partners
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#team">
                  Team
                </a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li className="dropdown">
                <a
                  href="#1"
                  onClick={() => {
                    setDropDownActive();
                  }}
                >
                  <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul className={`${dropDownActive && "dropdown-active"}`}>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="/contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="getstarted scrollto" href="#about">
                  Get Started
                </a>
              </li>
            </ul>
            <i
              className={`bi mobile-nav-toggle ${
                showHeader ? "bi-x" : "bi-list"
              }`}
              onClick={() => setShowHeader()}
            ></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
