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
                        <p>Tooth decay is a cavity in your tooth caused by bacterial infection. Due to poor oral hygiene, the bacteria can infect your tooth enamel.</p>
                        <a href="/service1" target="_blank" rel="noreferrer" className="service-link">Learn More</a>
                    </div>
                </div>
                {/* Second Card */}
                <div className="service-card">
                    <h3>THERAPIYA</h3>
                    <img src="/assets/service2.jpeg" alt="Service 2" />
                    <div className="service-content">
                        <p>Our dental therapists are trained to take X-rays, provide hygiene services.</p>
                        <a href="/service2" target="_blank" rel="noreferrer" className="service-link">Learn More</a>
                    </div>
                </div>
                {/* Third Card */}
                <div className="service-card">
                    <h3>TOOTH DECAY</h3>
                    <img src="/assets/service3.jpeg" alt="Service 3" />
                    <div className="service-content">
                        <p>We provide all treatments that affect your teeth and gums. Also, replacement of teeth.</p>
                        <a href="/service3" target="_blank" rel="noreferrer" className="service-link">Learn More</a>
                    </div>
                </div>
            </div>
            <div className="center-button">
                <Link to="/all_services" className="learn-more-button" target="_blank" rel="noreferrer">VIEW ALL SERVICES</Link>
            </div>
            <br/><br/><br/>
            <h1>Stay updated with our news</h1>
            <p>Dentists are doctors who specialize in oral health. We have the most professional and highly skilled dentists.</p>
            <br/><br/>
            <div className="news-section">
                <div className="news-card">
                    
                    <img src="/assets/news1.jpeg" alt="News 1" />
                    <div className="news-content">
                        <h3>What is best for whitening teeth?</h3>
                        <p>Whitening or "tooth bleaching", is the most common
                            cosmetic dental procedure
                        </p>
                        <a href="/news1" target="_blank" rel="noreferrer" className="news-link">Read More</a>
                    </div>
                </div>
                <div className="news-card">

                    <img src="/assets/news2.jpeg" alt="News 2" />
                    <div className="news-content">
                        <h3>Why you should visit a dentist?</h3>
                        <p>PREVENT PLAQUE: Plaque is a sticky deposit 
                            that clings your...</p>
                        <a href="/news2" target="_blank" rel="noreferrer" className="news-link">Read More</a>
                    </div>
                </div>
            </div><br/>
            <div className="center-button">
                <Link to="/all_articles" className="learn-more-button" target="_blank" rel="noreferrer">VIEW ALL ARTICLES</Link>
            </div><br/><br/>
            <div className="review-section">
            
                <div className="review-content">
                    <h1>Loved by thousands of people</h1>
                    <p>
                        To see a smile makeover can accomplish, take a look at our dentistry before 
                        and after photos.
                    </p>
                </div>
                <div className="review-images">
                    <img src="/assets/review1.jpeg" alt="Review 1" />
                    <img src="/assets/review2.jpeg" alt="Review 2" />
                    <img src="/assets/review3.jpeg" alt="Review 3" />
                    
                </div>
                <p>Before and after treatment<br/><br/><br/>
                Our clinic has been loved by thousands of people across the world.
                    Hear what they have to say.
                </p>
            </div>
               
        </div>
    );
}

export default Services;
