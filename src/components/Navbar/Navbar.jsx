import React, { useState } from 'react';
import logo from '../../assets/teeflex-logo.png';
import './Navbar.css';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Teeflex Fitness Logo" />
          <span>TEEFLEX GYM & FITNESS CENTER</span>
        </div>
        <div className="hamburger" onClick={toggleSidebar}>
          ☰
        </div>
        <ul className={`navbar-menu ${isSidebarOpen ? 'active' : ''}`}>
  <li onClick={closeSidebar}><a href="#home">HOME</a></li>
  <li onClick={closeSidebar}><a href="#program">PROGRAM</a></li>
  <li onClick={closeSidebar}><a href="#membership">MEMBERSHIP</a></li>
  <li onClick={closeSidebar}><a href="#about">ABOUT</a></li>
  <li onClick={closeSidebar}><a href="#trainers">TRAINERS</a></li>
  <li onClick={closeSidebar}><a href="#contact">CONTACT</a></li>
</ul>
      </div>
    </nav>
  );
}

export default Navbar;
