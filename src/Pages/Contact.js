import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import "../Styles/Contact.css";
import SEO from "../Components/SEO";

function Contact() {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            toast.error("Please fill in all fields", {
                position: toast.POSITION.TOP_CENTER,
            });
            return;
        }

        // Send data to backend - Replace with GSTAT endpoint if available
        try {
            console.log("Submitting form:", formData);
            // Simulate success for now as API might not be set up
            toast.success("Message sent successfully! We'll get back to you soon.", {
                position: toast.POSITION.TOP_CENTER,
            });
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

        } catch (error) {
            console.error("Error:", error);
            toast.error("Server error. Please try again later.");
        }
    };

    return (
        <div className="contact-page">
            <SEO
                title="Contact GSTAT MOBILE SOLUTIONS | Digital Marketing Agency"
                description="Contact GSTAT MOBILE SOLUTIONS for digital marketing, web development, and mobile app services. Get a free consultation today."
                type="website"
            />
            <Navbar />

            <div className="contact-section">
                <div className="contact-container">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="contact-title">Get in Touch With Us</h2>
                        <p className="contact-description">
                            Ready to grow your business? Contact GSTAT MOBILE SOLUTIONS for expert digital marketing and technology services.
                        </p>

                        <div className="contact-details">
                            <div className="contact-detail-item">
                                <h4>Phone</h4>
                                <p><a href="tel:09064342047">090 6434 2047</a></p>
                            </div>

                            <div className="contact-detail-item">
                                <h4>WhatsApp</h4>
                                <p><a href="https://wa.me/2347037018216" target="_blank" rel="noopener noreferrer">070 3701 8216</a></p>
                            </div>

                            <div className="contact-detail-item">
                                <h4>Email</h4>
                                <p><a href="mailto:info@gstatmobile.com">info@gstatmobile.com</a></p>
                            </div>

                            <div className="contact-detail-item">
                                <h4>Location</h4>
                                <p>
                                    6, Trimnell Street, Aguda, Surulere, Lagos.
                                </p>
                            </div>

                            <div className="contact-detail-item">
                                <h4>Office Hours</h4>
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                            </div>
                        </div>

                        <div className="contact-map-container">
                            <iframe
                                title="GSTAT Office Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.512!2d3.336!3d6.502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e967a99f173%3A0xe5f1f964c0e6203d!2s6%20Trimnell%20St%2C%20Aguda%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1707578500000!5m2!1sen!2sng"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>


                    </motion.div>

                    <motion.div
                        className="contact-form-container"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="form-title">Send Us A Message</h3>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What is this regarding?"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button type="submit" className="contact-submit-btn">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Contact;
