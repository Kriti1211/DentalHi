import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import "../Styles/Navbar.css";

const Navbar = () => {
  
  return (
    <nav className="navbar">
     
      <div className="navbar-contact-info">
      <span className="nav-item">
        <img src="/assets/loc.png" alt="Location Icon" className="location-icon" />
            <Link to="https://maps.google.com/?q=Kharghar, Navi Mumbai" target="_blank" rel="noopener noreferrer" className="nav-link">Kharghar, Navi Mumbai</Link>
        </span>


        <span className="nav-item">
        <img src="/assets/call.png" alt="Phone Icon" className='location-icon'/> 
            <a href="tel:+919653392272" className="nav-link">
                
                9653392272
            </a>
        </span>

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
