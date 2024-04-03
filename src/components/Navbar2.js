import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import "../Styles/Navbar2.css";

const SecondNavbar = () => {
  return (
    <nav className="second-navbar">
      <img src="/assets/logo.jpeg" alt="Logo" className="navbar-logo" /> {/* Image at the left corner */}
      <div className="second-navbar-nav">
        <Link to="/about" className="second-nav-link" target="_blank" rel="noreferrer">About Us</Link>
        <Link to="/services" className="second-nav-link" target="_blank" rel="noreferrer">Services</Link>
        <Link to="/team" className="second-nav-link" target="_blank" rel="noreferrer">Team</Link>
        <Link to="/testimonials" className="second-nav-link" target="_blank" rel="noreferrer">Testimonials</Link>
      
        <Link to="/review" className="second-nav-link" target="_blank" rel="noreferrer">Review</Link>
        <Link to="/blog" className="second-nav-link" target="_blank" rel="noreferrer">Blog</Link>
      </div>
    </nav>
  );
}

export default SecondNavbar;