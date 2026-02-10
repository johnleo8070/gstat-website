import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import SEO from "../../Components/SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMobileScreenButton, faRocket, faCode, faCompassDrafting,
    faShieldHalved, faBell, faDatabase,
    faCartShopping, faBuildingUser, faArrowRight, faCircleCheck,
    faLayerGroup, faUsers, faHeadset
} from "@fortawesome/free-solid-svg-icons";
import ServiceHero from "../../Components/ServiceHero";
import bannerImg from "../../Assets/mobile_app_banner.png";
import introImg from "../../Assets/mobile_development_intro.png";
import "../../Styles/Info.css";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

function MobileAppDevelopment() {
    return (
        <div className="service-page">
            <SEO
                title="Mobile App Development Company in Nigeria | Android & iOS Apps"
                description="GSTAT MOBILE SOLUTIONS builds high-performance Android and iOS mobile apps tailored to your business needs. Scalable, secure, and user-friendly app development services."
                type="website"
            />
            <Navbar />

            <ServiceHero
                title="Mobile App Development"
                subtitle="Transforming ideas into powerful digital experiences"
                backgroundImage={bannerImg}
            />

            <div className="info-section">
                <div className="section-container">
                    {/* 1. Intro Section */}
                    <div className="info-split-section">
                        <motion.div
                            className="info-split-text"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 style={{ fontSize: '2.5rem', color: '#0d4275', lineHeight: '1.2' }}>Professional Mobile App Development Solutions</h2>
                            <p>
                                At GSTAT MOBILE SOLUTIONS, we design and develop innovative mobile applications that help businesses improve customer engagement, streamline operations, and increase revenue.
                            </p>
                            <p>
                                Our team specializes in building scalable, secure, and feature-rich mobile apps for startups, SMEs, and large enterprises across various industries.
                            </p>
                            <p>
                                Whether you need an eCommerce app, on-demand service app, fintech solution, or corporate mobile platform — we bring your ideas to life.
                            </p>
                        </motion.div>
                        <motion.div
                            className="info-split-image"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <img src={introImg} alt="Mobile App Development Illustration" />
                        </motion.div>
                    </div>

                    {/* 2. Our Mobile App Development Services */}
                    <div className="info-sub-section">
                        <h2 className="info-sub-section-title">Our Development Services</h2>
                        <motion.div
                            className="info-cards-content"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {[
                                {
                                    icon: faMobileScreenButton,
                                    title: "1. Android Development",
                                    desc: "High-performance applications optimized for the world's most popular OS.",
                                    details: ["Custom UI/UX design", "Play Store deployment", "API & Cloud integration", "Performance tuning"]
                                },
                                {
                                    icon: faMobileScreenButton,
                                    title: "2. iOS Development",
                                    desc: "Sleek, secure, and scalable apps for the premium Apple ecosystem.",
                                    details: ["Swift & SwiftUI experts", "App Store submission", "Security-first approach", "Native user experience"]
                                },
                                {
                                    icon: faLayerGroup,
                                    title: "3. Cross-Platform",
                                    desc: "Development that runs seamlessly on both Android and iOS.",
                                    details: ["Flutter & React Native", "Single codebase efficiency", "Cost-effective scaling", "Unified brand experience"]
                                },
                                {
                                    icon: faBuildingUser,
                                    title: "4. Enterprise Solutions",
                                    desc: "Custom mobile platforms for internal operations and team management.",
                                    details: ["CRM & Inventory apps", "Staff management tools", "Booking systems", "Data visualization"]
                                },
                                {
                                    icon: faCartShopping,
                                    title: "5. eCommerce Apps",
                                    desc: "Turn your store into a mobile sales powerhouse with secure payments.",
                                    details: ["Payment gateways", "Order tracking systems", "Push marketing", "User accounts"]
                                }
                            ].map((service, index) => (
                                <motion.div key={index} variants={itemVariants} className="info-cards">
                                    <div className="info-card-icon-wrapper">
                                        <FontAwesomeIcon icon={service.icon} className="info-fa-icon" />
                                    </div>
                                    <h4 className="info-card-title">{service.title}</h4>
                                    <p className="info-card-description">{service.desc}</p>
                                    <ul className="feature-details-list">
                                        {service.details.map((detail, dIndex) => (
                                            <li key={dIndex}><FontAwesomeIcon icon={faCircleCheck} /> {detail}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* 3. App Features & Technologies */}
                    <div className="info-split-section split-with-divider" style={{ backgroundColor: '#fcfdfe', borderRadius: '30px', padding: '60px' }}>
                        <div className="info-split-text">
                            <h2 style={{ fontSize: '1.8rem', borderBottom: '2px solid #FF8C00', display: 'inline-block', marginBottom: '30px', paddingBottom: '10px' }}>Key App Features</h2>
                            <ul className="info-check-list">
                                <li><FontAwesomeIcon icon={faMobileScreenButton} /> User-friendly interface</li>
                                <li><FontAwesomeIcon icon={faRocket} /> Fast loading speed</li>
                                <li><FontAwesomeIcon icon={faShieldHalved} /> Secure encryption</li>
                                <li><FontAwesomeIcon icon={faBell} /> Push notifications</li>
                                <li><FontAwesomeIcon icon={faCode} /> API integrations</li>
                                <li><FontAwesomeIcon icon={faDatabase} /> Cloud database</li>
                            </ul>
                        </div>
                        <div className="info-split-text">
                            <h2 style={{ fontSize: '1.8rem', borderBottom: '2px solid #FF8C00', display: 'inline-block', marginBottom: '30px', paddingBottom: '10px' }}>Our Tech Stack</h2>
                            <div className="industries-grid">
                                <div className="industry-item">Flutter</div>
                                <div className="industry-item">React Native</div>
                                <div className="industry-item">Swift / Kotlin</div>
                                <div className="industry-item">Firebase</div>
                                <div className="industry-item">Node.js / AWS</div>
                                <div className="industry-item">SQL / MongoDB</div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Process & Why Us */}
                    <div className="info-sub-section">
                        <div className="info-split-section">
                            <div className="info-split-text">
                                <h2 style={{ fontSize: '2rem' }}>Our Development Process</h2>
                                <div className="info-check-list" style={{ gridTemplateColumns: '1fr' }}>
                                    {[
                                        "1. Consultation & Strategy",
                                        "2. UI/UX Design",
                                        "3. App Development",
                                        "4. Testing & QA",
                                        "5. Deployment",
                                        "6. Maintenance & Support"
                                    ].map((step, sIndex) => (
                                        <li key={sIndex} style={{ padding: '15px' }}>
                                            <span style={{ color: '#FF8C00', fontWeight: 'bold' }}>{sIndex + 1}.</span> {step.split('. ')[1]}
                                        </li>
                                    ))}
                                </div>
                            </div>
                            <div className="info-split-text" style={{ background: '#0d4275', color: 'white', padding: '40px', borderRadius: '25px' }}>
                                <h2 style={{ color: 'white', fontSize: '2rem' }}>Why Choose GSTAT?</h2>
                                <p style={{ color: 'rgba(255,255,255,0.8)' }}>We build digital experiences that drive growth.</p>
                                <ul className="info-check-list" style={{ gridTemplateColumns: '1fr', background: 'transparent' }}>
                                    <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faUsers} /> Experienced developers</li>
                                    <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faRocket} /> Fast on-time delivery</li>
                                    <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faCompassDrafting} /> Modern technologies</li>
                                    <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faHeadset} /> Post-launch support</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 5. Final CTA */}
                    <motion.div
                        className="info-cta-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2>Have an App Idea? Let’s Build It Together.</h2>
                        <p>Contact GSTAT MOBILE SOLUTIONS today to develop a powerful mobile app that elevates your business.</p>
                        <Link to="/quotation" className="info-cta-btn">
                            Get Started Now <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '10px' }} />
                        </Link>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MobileAppDevelopment;
