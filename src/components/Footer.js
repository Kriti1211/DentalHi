import React from 'react';
import '../Styles/Footer.css'; // Import your CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
            <div className="footer-column">
                    <h3>DENTAL HIFI</h3>
                    <ul>
                        <li><a href="/book-appointment" target="_blank" rel="noreferrer">BOOK AN APPOINTMENT</a></li>
                        <li><a href="/handson-booking" target="_blank" rel="noreferrer">BOOK HANDSON</a></li>
                        <li><a href="https://maps.google.com/?q=Kharghar, Navi Mumbai" target="_blank" rel="noopener noreferrer" className="nav-link">Kharghar, Navi Mumbai</a></li>
                        <li><a href="tel:+919653392272">9653392272</a></li>
                        <div className='social-images'>
                       <a href="https://www.linkedin.com/company/dentalhifi/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/linkedin.jpeg" alt="Linkedin" /></a>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/instagram.jpeg" alt="Instagram" /></a>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/fb.jpeg" alt="Facebook" /></a>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/twitter.jpeg" alt="Twitter" /></a>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/whatsapp.jpeg" alt="Whatsapp" /></a>
                        </div>
                        
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>HOME PAGE</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about" target="_blank" rel="noreferrer">About</a></li>
                        <li><a href="/services" target="_blank" rel="noreferrer">Services</a></li>
                        <li><a href="/team" target="_blank" rel="noreferrer">Dentists Team</a></li>
                        <li><a href="/testimonials" target="_blank" rel="noreferrer">Testimonials</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>FOLLOW US</h3>
                    <ul>
                        <li><a href="https://www.linkedin.com/company/dentalhifi/"
                        target="_blank" rel="noreferrer">LinkedIn</a></li>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Twitter</a></li>
                        <li><a href="/">Instagram</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>PRODUCTS</h3>
                    <ul>
                        <li><a href="/products" target="_blank" rel="noreferrer">Floss</a></li>
                        <li><a href="/products" target="_blank" rel="noreferrer">Mouth Wash</a></li>
                        <li><a href="/products" target="_blank" rel="noreferrer">Dispenser</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>EDUCATION</h3>
                    <ul>
                        <li><a href="/blog" target="_blank" rel="noreferrer">Blog</a></li>
                        <li><a href="/video" target="_blank" rel="noreferrer">Videos</a></li>
                        <li><a href="/equipment" target="_blank" rel="noreferrer">Equipment</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>CONTACT US</h3>
                    <ul>
                        <li><a href="/apply-for-job" target="_blank" rel="noreferrer">Apply for job</a></li>
                        <li><a href="/feedback" target="_blank" rel="noreferrer">Feedback</a></li>
                        <li><a href="/inquiries" target="_blank" rel="noreferrer">Inquiries</a></li>
                        <li><a href="/medicines" target="_blank" rel="noreferrer">Medicines</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    <a href="/terms-of-use">Terms of Use</a> | 
                    <a href="/privacy-policy"> Privacy Policy</a> | 
                    Copyrights &copy; 2024 Dental HiFi. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
