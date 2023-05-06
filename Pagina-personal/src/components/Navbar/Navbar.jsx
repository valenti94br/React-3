
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">Home</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item mx-2">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/other" className="nav-link">Other</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
