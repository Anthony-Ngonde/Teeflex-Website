import React from 'react';
import logo from '../../assets/teeflex-logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Teeflex Fitness Logo" />
          <span>TEEFLEX GYM</span>
        </div>
        <ul className="navbar-menu">
          <li><a href="#home">HOME</a></li>
          <li><a href="#program">PROGRAM</a></li>
          <li><a href="#membership">MEMBERSHIP</a></li>
          <li><a href="#trainers">TRAINERS</a></li>
          <li><a href="#about">ABOUT US</a></li>
          <li><a href="#contact">CONTACT US</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;