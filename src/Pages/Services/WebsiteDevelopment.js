import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import SEO from "../../Components/SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDesktop, faStore, faCode, faFileLines,
    faRotate, faCheckCircle, faRocket, faSearch,
    faShieldHalved, faGear, faChartBar, faUserCheck,
    faArrowRight, faCompassDrafting, faHeadset, faBolt,
    faGlobe, faFileCode, faBrush
} from "@fortawesome/free-solid-svg-icons";
// Removed missing brands package import to fix build error
import ServiceHero from "../../Components/ServiceHero";
import bannerImg from "../../Assets/hero-home.png"; // Fallback as previous generation failed
import introImg from "../../Assets/website_development_intro.png";
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

function WebsiteDevelopment() {
    return (
        <div className="service-page">
            <SEO
                title="Website Development Company in Nigeria | Professional Web Design Services"
                description="GSTAT MOBILE SOLUTIONS offers responsive, SEO-optimized website development services. We design business, eCommerce, and custom websites that drive traffic and sales."
                type="website"
            />
            <Navbar />

            <ServiceHero
                title="Website Development"
                subtitle="Responsive and conversion-focused digital storefronts"
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
                            <h2 style={{ fontSize: '2.5rem', color: '#0d4275', lineHeight: '1.2' }}>Professional Website Development Solutions</h2>
                            <p>
                                At GSTAT MOBILE SOLUTIONS, we build powerful, user-friendly, and conversion-focused websites tailored to your business goals.
                            </p>
                            <p>
                                Your website is your digital storefront — and we ensure it reflects your brand, engages visitors, and converts them into paying customers.
                            </p>
                            <p>
                                From startups to established brands, we provide scalable web solutions that enhance online visibility and business growth.
                            </p>
                        </motion.div>
                        <motion.div
                            className="info-split-image"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <img src={introImg} alt="Website Development Illustration" />
                        </motion.div>
                    </div>

                    {/* 2. Our Web Development Services */}
                    <div className="info-sub-section">
                        <h2 className="info-sub-section-title">Our Web Development Services</h2>
                        <motion.div
                            className="info-cards-content"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {[
                                {
                                    icon: faDesktop,
                                    title: "1. Business & Corporate",
                                    desc: "Professional corporate websites that showcase your brand and credibility.",
                                    details: ["Company profile pages", "Service pages", "Contact inquiry forms", "Live chat integration"]
                                },
                                {
                                    icon: faStore,
                                    title: "2. eCommerce Development",
                                    desc: "High-converting online stores that enable seamless selling and payments.",
                                    details: ["Product management", "Secure gateways", "Shopping cart system", "Order tracking"]
                                },
                                {
                                    icon: faCode,
                                    title: "3. Custom Development",
                                    desc: "Fully customized websites tailored to your specific business needs.",
                                    details: ["Booking platforms", "Real estate sites", "Educational portals", "Membership sites"]
                                },
                                {
                                    icon: faFileLines,
                                    title: "4. Landing Page Design",
                                    desc: "High-converting pages for ads, promotions, and lead generation.",
                                    details: ["Optimized for conversions", "Fast loading speed", "Clear call-to-actions", "A/B testing ready"]
                                },
                                {
                                    icon: faRotate,
                                    title: "5. Website Redesign",
                                    desc: "Transform your existing site into a modern, high-performing asset.",
                                    details: ["UI/UX redesign", "Speed optimization", "SEO restructuring", "Mobile optimization"]
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
                                            <li key={dIndex}><FontAwesomeIcon icon={faCheckCircle} /> {detail}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* 3. Key Features & Technologies */}
                    <div className="info-split-section split-with-divider" style={{ backgroundColor: '#fcfdfe', borderRadius: '30px', padding: '60px' }}>
                        <div className="info-split-text">
                            <h2 style={{ fontSize: '1.8rem', borderBottom: '2px solid #FF8C00', display: 'inline-block', marginBottom: '30px', paddingBottom: '10px' }}>Key Website Features</h2>
                            <ul className="info-check-list">
                                <li><FontAwesomeIcon icon={faRotate} /> Mobile-responsive design</li>
                                <li><FontAwesomeIcon icon={faSearch} /> SEO-friendly structure</li>
                                <li><FontAwesomeIcon icon={faRocket} /> Fast loading speed</li>
                                <li><FontAwesomeIcon icon={faShieldHalved} /> SSL security implementation</li>
                                <li><FontAwesomeIcon icon={faGear} /> User-friendly CMS</li>
                                <li><FontAwesomeIcon icon={faChartBar} /> Analytics & tracking</li>
                            </ul>
                        </div>
                        <div className="info-split-text">
                            <h2 style={{ fontSize: '1.8rem', borderBottom: '2px solid #FF8C00', display: 'inline-block', marginBottom: '30px', paddingBottom: '10px' }}>Technologies We Use</h2>
                            <div className="industries-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '15px' }}>
                                <div className="industry-item"><FontAwesomeIcon icon={faGlobe} /> WordPress</div>
                                <div className="industry-item"><FontAwesomeIcon icon={faCode} /> React</div>
                                <div className="industry-item"><FontAwesomeIcon icon={faStore} /> Shopify</div>
                                <div className="industry-item"><FontAwesomeIcon icon={faFileCode} /> PHP</div>
                                <div className="industry-item"><FontAwesomeIcon icon={faCode} /> HTML5/CSS3</div>
                                <div className="industry-item"><FontAwesomeIcon icon={faCode} /> JavaScript</div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Process & Why Us */}
                    <div className="info-sub-section">
                        <div className="info-split-section">
                            <div className="info-split-text">
                                <h2 style={{ fontSize: '2rem' }}>Our Web Development Process</h2>
                                <div className="info-check-list" style={{ gridTemplateColumns: '1fr' }}>
                                    {[
                                        "1. Consultation & Planning",
                                        "2. UI/UX Design",
                                        "3. Website Development",
                                        "4. Content Integration",
                                        "5. Testing & Optimization",
                                        "6. Launch & Maintenance"
                                    ].map((step, sIndex) => (
                                        <li key={sIndex} style={{ padding: '15px' }}>
                                            <span style={{ color: '#FF8C00', fontWeight: 'bold' }}>{sIndex + 1}.</span> {step.split('. ')[1]}
                                        </li>
                                    ))}
                                </div>
                            </div>
                            <div className="info-split-text" style={{ background: '#0d4275', color: 'white', padding: '40px', borderRadius: '25px' }}>
                                <h2 style={{ color: 'white', fontSize: '2rem' }}>Why Choose GSTAT?</h2>
                                <p style={{ color: 'rgba(255,255,255,0.8)' }}>We don’t just build websites — we create revenue-generating digital platforms.</p>
                                <ul className="info-check-list" style={{ gridTemplateColumns: '1fr', background: 'transparent' }}>
                                    <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faUserCheck} /> Experienced web developers</li>
                                    <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faBolt} /> Affordable pricing packages</li>
                                    <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faCompassDrafting} /> SEO-optimized builds</li>
                                    <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faRocket} /> Fast turnaround time</li>
                                    <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faHeadset} /> Ongoing technical support</li>
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
                        <h2>Ready to Build a Powerful Online Presence?</h2>
                        <p>Partner with GSTAT MOBILE SOLUTIONS for professional website development that delivers real business results.</p>
                        <Link to="/quotation" className="info-cta-btn">
                            Get A Free Consultation <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '10px' }} />
                        </Link>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default WebsiteDevelopment;
