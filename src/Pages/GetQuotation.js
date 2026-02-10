import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SEO from "../Components/SEO";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faCheck, faRocket, faCode, faChartLine } from "@fortawesome/free-solid-svg-icons";
import "../Styles/GetQuotation.css";

function GetQuotation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // integrated with backend or email service here
    alert("Thank you for your request! We will get back to you soon.");
  };

  return (
    <div className="quotation-page">
      <SEO
        title="Get a Free Quotation | GSTAT MOBILE SOLUTIONS"
        description="Request a free quote for your digital marketing, web development, or mobile app project."
        type="website"
      />
      <Navbar />

      <div className="quotation-section">
        <div className="quotation-container">
          <div className="quotation-card">

            {/* Left Side: Info & Visuals */}
            <div className="quotation-info">
              <h2 className="quotation-title">Let's Build Something Great Together</h2>
              <p className="quotation-subtitle">
                Ready to take your business to the next level? Fill out the form and our team will get back to you with a personalized strategy and quote within 24 hours.
              </p>

              <ul className="quotation-features">
                <li>
                  <div className="feature-icon"><FontAwesomeIcon icon={faRocket} /></div>
                  <span>Expert Digital Strategies</span>
                </li>
                <li>
                  <div className="feature-icon"><FontAwesomeIcon icon={faCode} /></div>
                  <span>Custom Web & App Development</span>
                </li>
                <li>
                  <div className="feature-icon"><FontAwesomeIcon icon={faChartLine} /></div>
                  <span>Data-Driven Marketing Results</span>
                </li>
                <li>
                  <div className="feature-icon"><FontAwesomeIcon icon={faCheck} /></div>
                  <span>Support & Maintenance</span>
                </li>
              </ul>
            </div>

            {/* Right Side: Form */}
            <div className="quotation-form-wrapper">
              <h3 className="quotation-form-title">Request a Quote</h3>
              <form className="quotation-form" onSubmit={handleSubmit}>

                <div className="form-group-half">
                  <label className="quotation-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="quotation-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group-half">
                  <label className="quotation-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    className="quotation-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group-half">
                  <label className="quotation-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="quotation-input"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234 800 000 0000"
                  />
                </div>

                <div className="form-group-half">
                  <label className="quotation-label">Service Needed *</label>
                  <select
                    name="service"
                    className="quotation-select"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a Service</option>
                    <option value="Social Media Marketing">Social Media Marketing</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Bulk SMS">Bulk SMS Marketing</option>
                    <option value="Voice SMS">Voice SMS</option>
                    <option value="Email Marketing">Email Marketing</option>
                    <option value="SEM">Search Engine Marketing (SEM)</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group-full">
                  <label className="quotation-label">Project Details *</label>
                  <textarea
                    name="message"
                    className="quotation-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project goals, timeline, and budget..."
                  ></textarea>
                </div>

                <button type="submit" className="quotation-submit-btn">
                  <FontAwesomeIcon icon={faPaperPlane} /> Send Request
                </button>

              </form>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default GetQuotation;
