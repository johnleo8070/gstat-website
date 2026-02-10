import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faArrowRight,
  faCheckCircle,
  faGlobe,
  faMobileAlt,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HeroImage from "../Assets/hero-home.png";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/services/social-media-marketing");
  };

  const handleConsultationClick = () => {
    navigate("/quotation");
  };

  return (
    <div className="hero-full-width-container">
      <div className="hero-section homepage-hero">
        <motion.div
          className="text-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-headline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            🚀 GSTAT MOBILE SOLUTIONS
          </motion.p>
          <motion.h2
            className="text-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Digital Marketing Solutions That Drive Real Business Growth
          </motion.h2>
          <motion.p
            className="text-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            At GSTAT MOBILE SOLUTIONS, we are dedicated to empowering businesses with cutting-edge digital tools
            and result-driven marketing strategies. Our team of experts specializes in crafting bespoke
            online experiences—from high-performance web development and innovative mobile apps to
            data-driven SEO and robust bulk messaging platforms—designed to help you achieve
            sustainable growth and digital excellence.
          </motion.p>

          <div className="hero-buttons">
            <motion.button
              className="text-appointment-btn"
              type="button"
              onClick={handleGetStartedClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started <FontAwesomeIcon icon={faRocket} />
            </motion.button>
            <motion.button
              className="text-appointment-btn border-btn"
              type="button"
              onClick={handleConsultationClick}
              whileHover={{ scale: 1.05, backgroundColor: '#1E8FFD', color: 'white' }}
              whileTap={{ scale: 0.95 }}
            >
              Request Consultation <FontAwesomeIcon icon={faArrowRight} />
            </motion.button>
          </div>

          <motion.div
            className="hero-highlights"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="highlight-item">
              <FontAwesomeIcon icon={faCheckCircle} className="highlight-icon" />
              <span>Full-Service Digital Marketing & SEO</span>
            </div>
            <div className="highlight-item">
              <FontAwesomeIcon icon={faCheckCircle} className="highlight-icon" />
              <span>Expert Web & Mobile App Development</span>
            </div>
            <div className="highlight-item">
              <FontAwesomeIcon icon={faCheckCircle} className="highlight-icon" />
              <span>Bulk SMS & Voice Messaging Solutions</span>
            </div>
            <div className="highlight-item">
              <FontAwesomeIcon icon={faCheckCircle} className="highlight-icon" />
              <span>24/7 Dedicated Support & Consultation</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-wrapper">
            <img src={HeroImage} alt="GSTAT Digital Solutions" className="hero-image1" />

            {/* Floating Elements */}
            <motion.div
              className="floating-card stat-card-1"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="stat-icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
              <div className="stat-info">
                <h4>500+</h4>
                <p>Happy Clients</p>
              </div>
            </motion.div>

            <motion.div
              className="floating-card stat-card-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="stat-icon secondary"><FontAwesomeIcon icon={faChartLine} /></div>
              <div className="stat-info">
                <h4>98%</h4>
                <p>Success Rate</p>
              </div>
            </motion.div>

            {/* Decorative Icons */}
            <motion.div className="decor-icon icon-globe" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
              <FontAwesomeIcon icon={faGlobe} />
            </motion.div>
            <motion.div className="decor-icon icon-mobile" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              <FontAwesomeIcon icon={faMobileAlt} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
