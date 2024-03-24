import React, { useState } from 'react';
import '../Styles/Book.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';
const Book = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to backend
        console.log(formData);
        // Reset form fields
        setFormData({
            name: '',
            email: '',
            phone: ''
        });
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
            <div className="content"><br/><br/>
                <h2>CONTACT OUR TEAM</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">NAME : </label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">EMAIL :  </label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">PHONE :</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Book;
