import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home'; // Import other components/pages as needed
import Review from './components/Review';
function App() {
  return (
    <Router>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/review" element={<Review/>} />
    </Routes>
  </Router>
  );
}

export default App;

