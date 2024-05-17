import { useState, useEffect } from "react";
import "./header.css";
import "./mediaquery.css";

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const toggleNav = () => {
    setNavActive(!navActive);
  };
  const closeMenu = () => {
    setNavActive(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };
    const header = document.querySelector("[data-header]");
    const handleScroll = () => {
      if (window.scrollY > 100) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="header" data-header>
      <div className="container" >
        <a href="/#" className="logo">
        <p style={{ color: "white", fontWeight: "bold", fontSize: "19px" }}>Dereva wangu</p>
          <img
            src="./assets/images/dark.png"
            width="74"
            height="24"
            alt="Adexhome"
            className="logo-dark"
          />
          
        </a>
        <nav
          className={`navbar ${navActive ? "active" : "navbar.active"}`}
          data-navbar onClick={closeMenu}
        >
          <div className="navbar-top">
            <a href="/#" className="logo">
            <p style={{ color: "white", fontWeight: "bold", fontSize: "19px" }}>Dereva wangu</p>

            </a>
            <button
              onClick={closeMenu}
              className="nav-close-btn"
              aria-label="close menu"
              data-nav-toggler
            >
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>
          <ul className="navbar-list" onClick={closeMenu}>
            <li>
              <a href="/#" className="navbar-link">
                Overview
              </a>
            </li>
            <li>
              <a href="/#" className="navbar-link">
                How it works
              </a>
            </li>
            <li>
              <a href="/#" className="navbar-link">
                FAQs
              </a>
            </li>
            <li>
              <a href="/#" className="navbar-link">
                Login
              </a>
            </li>
           
          </ul>
          <div className="wrapper">
            <a href="mailto:info@email.com" className="contact-link">
              info@email.com
            </a>
            <a href="tel:001234567890" className="contact-link">
              254 (077) 456 78 90
            </a>
          </div>
          <ul className="social-list">
            <li>
              <a href="/#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="/#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="/#" className="social-link">
                <ion-icon name="logo-dribbble"></ion-icon>
              </a>
            </li>
            <li>
              <a href="/#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a href="/#" className="social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>
          </ul>
        </nav>
        <a href="/#" className="btn btn-primary">
          Apply to Drive
        </a>
        <button
          className={`nav-open-btn ${navActive ? "active" : ""}`}
          onClick={toggleNav}
        >
          <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
        </button>
        <div
          className={`overlay ${navActive ? "active" : "overlay.active"}`}
          data-nav-toggler
          data-overlay
        ></div>
      </div>
    </header>
  );
};
export default Header;
