import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/AboutSection.css";

const AboutSection = () => {
    return (
      <section className="about-section">
        <div className="mission">
          <img src="/assets/our-mission.jpeg" alt="Our Mission" className="about-image" />
          <div>
            <h2>Our Mission</h2>
            <p>Aware people on oral health so as to help in early diagnosis and treatment of diseases at
              intial stages thus to limit the further complications
            </p>
          </div>
          <img src="/assets/mission.jpeg" alt="Icon" className="mission-image" />
        </div>
        <div className="vision">
          <img src="/assets/our-vision.jpeg" alt="Our Vision" className="about-image" />
          <div>
            <h2>Our Vision</h2>
            <p>Provide the highest quality dental care as an outstanding hospital chain through exceptional
              services to our community
            </p>
          </div>
          <img src="/assets/vision.jpeg" alt="Icon" className="vision-image" />
        </div>
        <div className="center-button">
          <Link to="/about" className="learn-more-button">MORE ABOUT US</Link>
          <h4>Featured In</h4>
        </div>
        <div className="additional-image">
          <a href="https://firsthealth.com/" target="_blank" rel="noreferrer">
            <img src="/assets/firstimage.png" alt="First" className="additional-image" />
          </a>
          <a href="https://www.providence.org/" target="_blank" rel="noreferrer">
            <img src="/assets/providence.jpg" alt="Providence" className="additional-image" />
          </a>
          <a href="https://www.cardinalhealth.com/" target="_blank" rel="noreferrer">
            <img src="/assets/cardinal.jpg" alt="cardinal" className="additional-image" />
          </a>
          <a href="https://www.emblemhealth.com/" target="_blank" rel="noreferrer">
            <img src="/assets/Emblem.jpeg" alt="Emblem" className="additional-image" />
          </a>
          
        </div>
        
      </section>
      
    );
}

export default AboutSection;

