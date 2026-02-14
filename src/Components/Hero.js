import React from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp, faCircleCheck, faClock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/contact");
  };

  const handleConsultationClick = () => {
    navigate("/quotation");
  };

  React.useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="hero-full-width">
      <div className="hero-section">
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
            style={{ color: "#FF8C00" }}
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
            GSTAT MOBILE SOLUTIONS is a digital marketing  company in Nigeria, we are dedicated to empowering businesses with cutting-edge digital tools
            and result-driven marketing strategies. Our team of experts specializes in crafting bespoke
            online experiences from high-performance web development and innovative mobile apps to
            data-driven SEO and robust bulk messaging platforms designed to help you achieve
            sustainable growth and digital excellence.
          </motion.p>
          <div className="hero-buttons">
            <motion.button
              className="text-appointment-btn"
              type="button"
              onClick={handleBookAppointmentClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faCalendarCheck} /> Get Started
            </motion.button>
            <motion.button
              className="text-appointment-btn"
              type="button"
              onClick={handleConsultationClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Consultation
            </motion.button>
          </div>
          <motion.div
            className="hero-benefits"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            <div className="benefit-item">
              <FontAwesomeIcon icon={faCircleCheck} className="benefit-icon" style={{ color: '#FF8C00' }} />
              <p style={{ color: '#1A8EFD' }}>Full-service digital marketing & SEO</p>
            </div>

            <div className="benefit-item">
              <FontAwesomeIcon icon={faCircleCheck} className="benefit-icon" style={{ color: '#FF8C00' }} />
              <p style={{ color: '#1A8EFD' }}>Mobile-first web & app development</p>
            </div>

            <div className="benefit-item">
              <FontAwesomeIcon icon={faCircleCheck} className="benefit-icon" style={{ color: '#FF8C00' }} />
              <p style={{ color: '#1A8EFD' }}> SMS marketing, voice & messaging solutions</p>
            </div>

            <div className="benefit-item">
              <FontAwesomeIcon icon={faClock} className="benefit-icon" style={{ color: '#FF8C00' }} />
              <p style={{ color: '#1A8EFD' }}>24/7 dedicated support & consultation</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-section"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </motion.div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div >
  );
}

export default Hero;
