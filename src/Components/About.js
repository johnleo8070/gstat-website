import React from "react";
import SolutionStep from "./SolutionStep";
import { motion } from "framer-motion";
import AboutImage from "../Assets/hero-about.png";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <motion.div
        className="about-image-content"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <img src={AboutImage} alt="GSTAT Team" className="about-image1" />
      </motion.div>

      <motion.div
        className="about-text-content"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="glass-container">
          <motion.h3
            className="about-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span>About GSTAT MOBILE SOLUTIONS</span>
          </motion.h3>
          <p className="about-description">
            GSTAT MOBILE SOLUTIONS is a full-service digital marketing and technology agency committed to helping businesses build visibility, attract customers, and increase revenue through innovative digital solutions.
            From startups to established enterprises, we provide data-driven marketing strategies, professional web development, mobile app solutions, and bulk communication services that deliver measurable results.
          </p>
          <h1> Digital marketing agency in nigeria</h1>
          <br />
          <h4 className="about-text-title">Our Process</h4>

          <SolutionStep
            title="Consultation & Strategy"
            description="We analyze your business needs and develop a customized digital strategy to achieve your goals."
          />
          <br />

          <SolutionStep
            title="Implementation & Development"
            description="Our expert team designs, builds, and launches your campaigns, websites, or apps with precision."
          />
          <br />

          <SolutionStep
            title="Growth & Optimization"
            description="We continuously monitor performance and optimize for maximum ROI and business growth."
          />
        </div>
      </motion.div>
    </div>
  );
}

export default About;
