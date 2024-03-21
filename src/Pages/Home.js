import React from "react";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import BackgroundSection from "../components/BackgroundSection";
import AboutSection from "../components/AboutSection";
function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Navbar2/>
      <BackgroundSection/>
      <AboutSection/>
    </div>
  );
}

export default Home;