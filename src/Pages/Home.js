import React from "react";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import BackgroundSection from "../components/BackgroundSection";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import Book from "../components/Book";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Navbar2/>
      <BackgroundSection/>
      <AboutSection/>
      <Services/>
      <Book/>
      <Footer/>
    </div>
  );
}

export default Home;