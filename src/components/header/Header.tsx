import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useToggle } from "../../lib/use-toggle";

const Header: React.FC = () => {
  const [showHeader, setShowHeader] = useToggle();
  const [dropDownActive, setDropDownActive] = useToggle();
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.scrollY > 100) {
      document.getElementById("header")?.classList.add("header-scrolled");
    } else {
      document.getElementById("header")?.classList.remove("header-scrolled");
    }
  }, [window]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <header id="header" className="header fixed-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <span>FlexStart</span>
          </Link>

          <nav
            id="navbar"
            className={`navbar ${showHeader && "navbar-mobile"}`}
          >
            <ul>
              <li>
                <Link to="/" className="nav-link scrollto active">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/about">
                  About
                </Link>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Services
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
                <a className="nav-link scrollto" href="#contact">
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
