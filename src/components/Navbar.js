import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import logoIcon from "../assets/VO.png";
import logoSekolah from "../assets/ananda.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="">
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
              <a href="./Rules">Rules</a>
            </li>

            <li>
              <a href="./AboutUs">About Us</a>
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
