import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import HomeContent from "../Components/HomeContent";
import Footer from "../Components/Footer";
import SEO from "../Components/SEO";

function Home() {
  return (
    <div className="home-section">
      <SEO
        title="GSTAT MOBILE SOLUTIONS | Digital Marketing, Web & Mobile App Services in Nigeria"
        description="Grow your business online with GSTAT MOBILE SOLUTIONS. We provide social media marketing, website development, mobile apps, SMS marketing, voice SMS, email marketing, and SEM services tailored for Nigerian businesses."
        type="website"
      />
      <Navbar />
      <Hero />
      <HomeContent />
      <Footer />
    </div>
  );
}

export default Home;

