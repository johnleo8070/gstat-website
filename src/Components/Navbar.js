import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/gstat-logo.jpg";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          <img src={logo} alt="GSTAT MOBILE SOLUTIONS" className="navbar-logo" />
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <NavLink to="/" className="navbar-links">
            Home
          </NavLink>
        </li>
        <li>
          <div className="navbar-links" style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "5px" }}>
            Our Services <FontAwesomeIcon icon={faChevronDown} size="xs" />
          </div>
          <div className="dropdown-menu">
            <div className="dropdown-item"><Link to="/services/social-media-marketing">Social Media Marketing</Link></div>
            <div className="dropdown-item"><Link to="/services/website-development">Website Development</Link></div>
            <div className="dropdown-item"><Link to="/services/mobile-app-development">Mobile App Development</Link></div>
            <div className="dropdown-item"><Link to="/services/bulk-sms">SMS Marketing</Link></div>
            <div className="dropdown-item"><Link to="/services/voice-sms">Voice SMS</Link></div>
            <div className="dropdown-item"><Link to="/services/email-marketing">Email Marketing</Link></div>
            <div className="dropdown-item"><Link to="/services/sem">Search Engine Marketing</Link></div>
          </div>
        </li>
        <li>
          <NavLink to="/about" className="navbar-links">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="navbar-links">
            Contact Us
          </NavLink>
        </li>
      </ul>

      <Link to="/quotation" className="navbar-btn-link">
        <button
          className="navbar-btn"
          type="button"
        >
          GET QUOTATION
        </button>
      </Link>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <NavLink onClick={openNav} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <div onClick={toggleDropdown} style={{ cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
              Our Services <FontAwesomeIcon icon={faChevronDown} size="xs" />
            </div>
            <div className={`mobile-dropdown ${dropdownOpen ? "open" : ""}`}>
              <NavLink onClick={openNav} to="/services/social-media-marketing">Social Media Marketing</NavLink>
              <NavLink onClick={openNav} to="/services/website-development">Website Development</NavLink>
              <NavLink onClick={openNav} to="/services/mobile-app-development">Mobile App Development</NavLink>
              <NavLink onClick={openNav} to="/services/bulk-sms">SMS Marketing</NavLink>
              <NavLink onClick={openNav} to="/services/voice-sms">Voice SMS</NavLink>
              <NavLink onClick={openNav} to="/services/email-marketing">Email Marketing</NavLink>
              <NavLink onClick={openNav} to="/services/sem">SEM</NavLink>
            </div>
          </li>
          <li>
            <NavLink onClick={openNav} to="/about">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink onClick={openNav} to="/contact">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink onClick={openNav} to="/quotation">
              Get Quotation
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
