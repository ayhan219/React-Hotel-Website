import React, { useState } from "react";
import "./Navbar.css";
import { GiBeachBag } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { MdSensorDoor } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <GiBeachBag />
        <h4>Beach Club</h4>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <a href="/"><FaHome /> Home</a>
        <a href="/rooms"><MdSensorDoor /> Rooms</a>
        <a href="/about"><MdDescription /> About</a>
        <a href="/contact"><FaPhoneAlt /> Contact Us</a>
      </div>
      <div className="navbar-right">
        <a href="/"><FaHome /> Home</a>
        <a href="/rooms"><MdSensorDoor /> Rooms</a>
        <a href="/about"><MdDescription /> About</a>
        <a href="/contact"><FaPhoneAlt /> Contact Us</a>
      </div>
    </div>
  );
};

export default Navbar;
