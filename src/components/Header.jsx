import React, { useState } from "react";
import "../assets/css/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header grey-bg">
  <a href="#" className="logo">
    <span className="primary">Prajapati</span><span className="accent"> Naresh</span>
  </a>

  <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
    <a href="#home" onClick={closeMenu}>Home</a>
    <a href="#about" onClick={closeMenu}>About</a>
    <a href="#projects" onClick={closeMenu}>Projects</a>
    <a href="#contact" onClick={closeMenu}>Contact</a>
  </nav>

  <button className="menu-btn" onClick={toggleMenu}>
    <span className={`line ${menuOpen ? "line1" : ""}`}></span>
    <span className={`line ${menuOpen ? "line2" : ""}`}></span>
    <span className={`line ${menuOpen ? "line3" : ""}`}></span>
  </button>
</header>

  );
};

export default Header;
