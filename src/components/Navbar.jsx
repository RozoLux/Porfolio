import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-container"> 
          <a href="/" className="nav-logo">Portfolio</a>
          <ul className="nav-menu">           
            <li className="nav-item">
              <Link to="/about" className="nav-links">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-links">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links">Contact</Link>
            </li>
          </ul>
        </div>        
      </nav>
    );
  };

export default Navbar;