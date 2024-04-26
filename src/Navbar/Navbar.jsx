import React from 'react';
import './Navbar.css';
import logo from './Covid19.svg'; // Assuming you have a logo file

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <h1 className="navbar-heading">COVID-19 TRACKER DASHBOARD</h1>
    </nav>
  );
};

export default Navbar;
