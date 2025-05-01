import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Use a CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">MODERN THREADS</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Products</Link>
        <Link to="/contact" className="contact-btn">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
