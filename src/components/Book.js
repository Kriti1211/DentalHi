import React, { useState } from 'react';
import '../Styles/Book.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

const Book = () => {
    

    const [newsletterEmail, setNewsletterEmail] = useState('');

    const handleNewsletterChange = (e) => {
        setNewsletterEmail(e.target.value);
    };

    

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription submission
        console.log("Subscribed with email:", newsletterEmail);
        // Reset newsletter email field
        setNewsletterEmail('');
    };

    return (
        <div className="background-container">
            <h1>BOOK YOUR VISIT TODAY</h1>
            <div className="button-group">
                <Link to="/book-appointment" className="nav-link" target="_blank" rel="noreferrer">
                    <button className="book-now-button">BOOK NOW</button>
                </Link>
            </div>
            <div className="background-image"></div>
            <div className="content">
                

                <h2>Subscribe to our Newsletter</h2>
                <p>Stay updated with our latest news and offers by  <br></br>
                   subscribing to our newsletter! Receive exclusive  <br></br>
                   content and special promotions directly to your inbox.</p>
                <form onSubmit={handleNewsletterSubmit}>
                <div className="form-group">
               
                <input 
                     type="email" 
                     id="newsletterEmail" 
                     name="newsletterEmail" 
                     value={newsletterEmail} 
                     onChange={handleNewsletterChange} 
                     required 
                     placeholder="Enter your email" // Placeholder added here
                 />
                <button type="submit">SUBSCRIBE</button>
            </div>

                   
                </form>
                <div className="visit">
                    <img src="/assets/dentalvisit.jpeg" alt="Visit"></img>
                    
                    <p>Experience seamless access to our services on-the-go.<br/>
                         Download our app now for convenience at your fingertips!</p>
                </div>
                <div className='download-images'>
                   
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/apple.jpeg" alt="App store" />
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/android.jpeg" alt="Google play store" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Book;
