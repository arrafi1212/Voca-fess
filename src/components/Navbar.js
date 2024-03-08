import React, { useState } from "react";
import "../Navbar.css";
import logoIcon from "../VO.png";
import { Link } from "react-router-dom";
import logoSekolah from "../ananda.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="logo-link">
            <img src={logoSekolah} alt="Logo Icon" className="logo-icon" />
          </a>
          <button
            className={`navbar-toggle ${isOpen ? "open" : ""}`}
            onClick={toggleNavbar}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Rules</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
          <a href="/" className="logo-link1">
            <img src={logoIcon} alt="Logo Icon" className="logo-icon1" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
