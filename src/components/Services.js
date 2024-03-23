import React from 'react';
import '../Styles/Services.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';
const Services = () => {
    return (
        <div className="services-container">
            <h1>We provide quality services</h1>
            <p>Visiting the dentist regularly will help keep the rest of your body healthy.</p>
            <br/>
            <div className="services-cards">
                {/* First Card */}
                <div className="service-card">
                <h3>DENTISTRY</h3>
                    <img src="/assets/service1.jpeg" alt="Service 1" />
                    <div className="service-content">
                        
                        <p>Tooth decay is a cavity in your tooth caused by bacterial infection.
                            Due to poor oral hygiene, the bacteria can infect your tooth enamel.
                        </p>
                        <a href="/service1" target="_blank" rel="noreferrer" className="service-link">Learn More</a>
                    </div>
                </div>
                {/* Second Card */}
                <div className="service-card">
                <h3>THERAPIYA</h3>
                    <img src="/assets/service2.jpeg" alt="Service 2" />
                    <div className="service-content">
                        
                        <p>Our dental therapists are trained to take X-rays, provide
                            hygiene services.
                        </p>
                        <br/><br/>
                        <a href="/service2" target="_blank" rel="noreferrer" className="service-link">Learn More</a>
                    </div>
                </div>
                {/* Third Card */}
                <div className="service-card">
                <h3>TOOTH DECAY</h3>
                    <img src="/assets/service3.jpeg" alt="Service 3" />
                    <div className="service-content">
                        
                        <p>We provide all treatment that effects your teeth and gums.
                            Also replacement of teeth.
                        </p>
                        <br/><br/>
                        <a href="/service3" target="_blank" rel="noreferrer" className="service-link">Learn More</a>
                    </div>
                </div>
            </div>
            <div className="center-button">
          <Link to="/all_services" className="learn-more-button" target="_blank" rel="noreferrer">VIEW ALL SERVICES</Link>
          
        </div>

        </div>
        
    );
}

export default Services;
