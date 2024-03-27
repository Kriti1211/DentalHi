import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import "../Styles/Navbar.css";

const Navbar = () => {
  
  return (
    <nav className="navbar">
     
      <div className="navbar-contact-info">
      <span className="nav-item">
        <img src="/assets/loc2.jpeg" alt="Location Icon" className="location-icon" />
            <Link to="https://maps.google.com/?q=Kharghar, Navi Mumbai" target="_blank" rel="noopener noreferrer" className="nav-link">Kharghar, Navi Mumbai</Link>
        </span>


        <span className="nav-item">
            <a href="tel:+919653392272" className="nav-link">
                <img src="/assets/call2.jpeg" alt="Phone Icon" className='location-icon'/> 
                9653392272
            </a>
        </span>

      </div>
      <div className="navbar-brand">
      <img src="/assets/Di2.jpeg" alt="Company Icon" className='location-icon'/> 
        <Link to="/" className="navbar-logo"> Dental HiFi</Link>
      </div>
      <div className="navbar-search">
        <Link to="/search" className="nav-link">
     {/* Move the search icon before the text */}
          <img src="/assets/search.jpeg" alt="Search Icon" className='search-icon'/>
          <i className="fas fa-search"></i> 
    {/* Image for the search icon */}
        </Link>
      </div>

      <div className="navbar-login">
        <Link to="/login" className="nav-link" target="_blank" rel="noreferrer">
    <button className="login-button">Log In / Sign Up</button>
        </Link>
</div>

    </nav>
  );
}

export default Navbar;
