import React from 'react';
import '../Styles/Footer.css'; // Import your CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
            <div className="footer-column">
                    <h3>DENTAL HIFI</h3>
                    <ul>
                        <li><img src="/assets/schedule.jpeg" alt="Location Icon" className="location-icon" /><a href="/book-appointment" target="_blank" rel="noreferrer">BOOK AN APPOINTMENT</a></li>
                        <li><img src="/assets/schedule.jpeg" alt="Location Icon" className="location-icon" /><a href="/handson-booking" target="_blank" rel="noreferrer">BOOK HANDSON</a></li>
                        <li><img src="/assets/loc.png" alt="Location Icon" className="location-icon" /><a href="https://maps.google.com/?q=Kharghar, Navi Mumbai" target="_blank" rel="noopener noreferrer" className="nav-link">Kharghar, Navi Mumbai</a></li>
                        <li><img src="/assets/call.png" alt="Phone Icon" className='location-icon'/><a href="tel:+919653392272">9653392272</a></li>
                        <li><img src="/assets/email.png" alt="Email Icon" className='location-icon'/><a href="mailto:dentalhifi@gmail.com">dentalhifi@gmail.com</a></li>
                        <div className='social-images'>
                       <a href="https://www.linkedin.com/company/dentalhifi/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/linkedin.jpeg" alt="Linkedin" /></a>

                        <a href="https://www.instagram.com/dentalhifi?igsh=MTQybzc1ZWN2aHhjYQ==" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/instagram.jpeg" alt="Instagram" /></a>

                        <a href="https://x.com/DentalHiFi?t=2d77Cn3GXb5qBoVPBmEjxA&s=08" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/twitter.jpeg" alt="Twitter" /></a>

                        <a href="https://youtube.com/@DentalHiFi?si=hW8eCMco-qlGSyDL" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/youtube.jpeg" alt="Facebook" /></a>
                        
                        <a href="https://wa.me/+919653392272" 
                         // or use
                        // https://wa.me/+91 96533 92272
                        target="_blank" rel="noopener noreferrer">
                        <img src="/assets/whatsapp.jpeg" alt="Whatsapp" /></a>

                        <a href="https://www.facebook.com/profile.php?id=61557913763652"
                        target="_blank" rel="noreferrer">
                        <img src="/assets/fb.jpeg" alt="Facebook" /></a>
                        </div>
                        
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>QUICK LINKS</h3>
                    <ul>
                        
                        <li><a href="/about" target="_blank" rel="noreferrer">About Us</a></li>
                        <li><a href="/services" target="_blank" rel="noreferrer">Services</a></li>
                        <li><a href="/team" target="_blank" rel="noreferrer">Team</a></li>
                        <li><a href="/testimonials" target="_blank" rel="noreferrer">Testimonials</a></li>
                        <li><a href="/ecommerce" target="_blank" rel="noreferrer">E-Commerce</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>EDUCATION</h3>
                    <ul>
                        <li><a href="/videos" target="_blank" rel="noreferrer">Videos</a></li>
                        <li><a href="/equipments" target="_blank" rel="noreferrer">Equipments</a></li>
                  
                        
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>CONTACT US</h3>
                    <ul>
                        <li><a href="/apply-for-job" target="_blank" rel="noreferrer">Apply for jobs</a></li>
                        <li><a href="/feedback" target="_blank" rel="noreferrer">Feedback</a></li>
                        <li><a href="/inquiries" target="_blank" rel="noreferrer">Blog</a></li>
                        
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
