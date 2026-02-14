import React from "react";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import FAQSection from "../Components/FAQSection";

import Footer from "../Components/Footer";
import SEO from "../Components/SEO";

function AboutUs() {
    return (
        <div className="about-page">
            <SEO
                title="About GSTAT MOBILE SOLUTIONS | Leading Digital Agency in Nigeria"
                description="Learn about GSTAT MOBILE SOLUTIONS, a premier digital marketing and technology agency in Lagos, Nigeria. We provide expert web design, mobile apps, and marketing strategies."
                type="website"
            />
            <Navbar />
            <About />
            <FAQSection />

            <Footer />
        </div>
    );
}

export default AboutUs;
