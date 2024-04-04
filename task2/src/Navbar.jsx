// import React from 'react';
import './App.css'; // Import CSS file for styling
import logo from "./assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar__links">
        <a href="#">Home</a>
        <a href="#">Jobs</a>
        <a href="#">Companies</a>
        <a href="#">About us</a>
      </div>
      <div className="navbar__buttons">
        <button className='btn1'>Sign Up</button>
        <button className='btn2'>Post a Job</button>
      </div>
    </nav>
  );
};

export default Navbar;
