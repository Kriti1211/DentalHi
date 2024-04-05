import React, { useState } from 'react';
import "../Styles/Review.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
const ReviewSection = () => {
  // State variables to store name and review
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission logic, such as sending the review to a backend server
    console.log('Name:', name);
    console.log('Review:', review);
    // Clear the form after submission
    setName('');
    setReview('');
  };

  return (
    <div className='review-section'>
      <Navbar/>
    <div className="back-image">
    <Link to="/" className="home-link">Home</Link>
      <div className="container">
        <h2>Share your thoughts! We'd love to hear about your experience with our services.</h2>
        {/* Form for entering name and review */}
        <form onSubmit={handleSubmit} className="review-form">
        <div>
      <label htmlFor="name"></label>
        <input
         type="text"
         id="name"
         placeholder="Enter your name"
         value={name}
         onChange={(e) => setName(e.target.value)}
         required
         />
      </div>
      <div>
          <label htmlFor="review"></label>
            <textarea
              
              id="review"
              placeholder="Write your review here"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ReviewSection;
