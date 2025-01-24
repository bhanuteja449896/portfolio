import React from 'react';
import './css/Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container"> {/* Added container class here */}
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" id="profile">
            {/* SVG content */}
          </svg>
          <div className="name">Bhanu Teja</div>
        </div>
        <div className="links">
          <li><a href="#Home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
