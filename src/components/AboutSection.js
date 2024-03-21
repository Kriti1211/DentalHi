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
          <img src="/assets/mission.jpeg" alt="Mission Icon" className="mission-image" />
        </div>
        <div className="vision">
          <img src="/assets/our-vision.jpeg" alt="Our Vision" className="about-image" />
          <div>
            <h2>Our Vision</h2>
            <p>Provide the highest quality dental care as an outstanding hospital chain through exceptional
              services to our community
            </p>
          </div>
          <img src="/assets/vision.jpeg" alt="Vision Icon" className="vision-image" />
        </div>
        <div className="center-button">
          <Link to="/about" className="learn-more-button">MORE ABOUT US</Link>
        </div>
      </section>
    );
}

export default AboutSection;
