import React from 'react';
import "../Styles/BackgroundSection.css";
import { Link } from 'react-router-dom';
const BackgroundSection = () => {
  return (
    <div>
    <section className="background-section">
      <div className="background-content">
        <h1>Life is short, smile while you <br></br>
          still have teeth</h1>
        <p>Dental and oral health is an essential part<br>
        </br> of your overall health and well-being</p>
        <div className="button-group">
        <Link to="/book-appointment" className="nav-link">
            <button className="book-appointment-button">BOOK APPOINTMENT</button>
          </Link>
          <Link to="/handson-booking" className="nav-link">
            <button className="hands-on-booking-button">BOOK A HANDSON</button>
          </Link>
        </div>
      </div>
    </section>
    <div className="about-heading">
        <h2>Welcome to Dental HiFi</h2>
        <p>It is important that oral hygiene be carried out on a regular basis to enable prevention
          of dental diseases
        </p>
      </div>
    </div>
  );
}

export default BackgroundSection;
