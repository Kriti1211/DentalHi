import React, { useState } from 'react';
import "../Styles/Review.css";

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
    <div>
      <h2>Review Section</h2>
      {/* Form for entering name and review */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="review">Review:</label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewSection;
