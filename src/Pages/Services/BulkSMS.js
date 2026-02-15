import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import SEO from "../../Components/SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShieldHalved, faIdCard, faCalendarCheck,
    faPaperPlane, faGaugeHigh, faCircleCheck, faBolt,
    faChartLine, faMicrochip, faHeadset, faRocket,
    faBuildingColumns, faGraduationCap, faMosque, faHospital,
    faCartShopping, faBullhorn, faUsers, faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import ServiceHero from "../../Components/ServiceHero";
import bannerImg from "../../Assets/bulk_sms_banner.png";
import introImg from "../../Assets/sms_illustration.jpg";
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

function BulkSMS() {
    return (
        <div className="service-page">
            <SEO
                title="SMS Marketing Services in Nigeria | GSTAT MOBILE SOLUTIONS"
                description="Reach customers instantly with GSTAT MOBILE SOLUTIONS SMS Marketing services. Fast delivery, affordable rates, promotional and transactional SMS solutions for businesses."
                type="website"
            />
            <Navbar />

            <ServiceHero
                title="SMS Marketing"
                subtitle="High-speed digital communication at your fingertips"
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
                            <h2>Powerful SMS Marketing That Delivers Instantly</h2>
                            <p>
                                SMS marketing remains one of the fastest and most effective communication channels for businesses. With open rates above 90%, text messaging ensures your promotions, alerts, and updates are seen almost immediately.
                            </p>
                            <p>
                                At GSTAT MOBILE SOLUTIONS, we provide reliable, scalable, and cost-effective SMS marketing solutions that help businesses communicate directly with their customers in real time.
                            </p>
                            <p>
                                Whether you’re running promotions, sending reminders, or broadcasting announcements — our SMS platform guarantees speed, reach, and results.
                            </p>
                        </motion.div>
                        <motion.div
                            className="info-split-image"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <img src={introImg} alt="SMS Marketing Illustration" />
                        </motion.div>
                    </div>

                    {/* 2. Our SMS Marketing Services */}
                    <div className="info-sub-section">
                        <h2 className="info-sub-section-title">Our SMS Marketing Services</h2>
                        <motion.div
                            className="info-cards-content"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {[
                                {
                                    icon: faBullhorn,
                                    title: "1. Promotional SMS Marketing",
                                    desc: "Promote your products and special offers to thousands of customers instantly.",
                                    details: ["Sales promotions", "Product launches", "Event marketing", "Brand awareness"]
                                },
                                {
                                    icon: faPaperPlane,
                                    title: "2. Transactional SMS",
                                    desc: "Send automated alerts to keep customers informed about their activities.",
                                    details: ["Payment confirmations", "Order updates", "Appointment reminders", "Delivery notifications"]
                                },
                                {
                                    icon: faShieldHalved,
                                    title: "3. OTP & Verification",
                                    desc: "Secure One-Time Password messaging for apps and website authentication.",
                                    details: ["Secure authentication", "Instant delivery", "API integration", "High reliability"]
                                },
                                {
                                    icon: faIdCard,
                                    title: "4. Customized Sender ID",
                                    desc: "Send messages using your business name enhancing brand credibility.",
                                    details: ["Personalized sender", "Brand recognition", "Professional look", "Higher trust"]
                                },
                                {
                                    icon: faCalendarCheck,
                                    title: "5. Campaign Scheduling",
                                    desc: "Plan campaigns ahead and schedule messages for optimal delivery times.",
                                    details: ["Time-zone sync", "Bulk scheduling", "Recurring alerts", "Campaign analytics"]
                                },
                                {
                                    icon: faArrowRight,
                                    title: "6. Get Quotation",
                                    desc: "Ready to launch your project? Get a detailed quote specialized for your business.",
                                    details: ["Flexible pricing", "Fast turnaround", "Expert support", "Free consultation"],
                                    isActive: true,
                                    link: "/quotation"
                                }
                            ].map((service, index) => (
                                service.isActive ? (
                                    <Link key={index} to={service.link} style={{ textDecoration: 'none', display: 'block' }}>
                                        <motion.div variants={itemVariants} className="info-cards active">
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
                                            <div className="card-cta-btn">
                                                Get A Quote <FontAwesomeIcon icon={faArrowRight} />
                                            </div>
                                        </motion.div>
                                    </Link>
                                ) : (
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
                                )
                            ))}
                        </motion.div>
                    </div>

                    {/* 3. Key Platform Features & Industries Served */}
                    <div className="info-split-section split-with-divider" style={{ backgroundColor: '#fcfdfe', borderRadius: '30px', padding: '60px' }}>
                        <div className="info-split-text">
                            <h2 style={{ fontSize: '1.8rem', borderBottom: '2px solid #FF8C00', display: 'inline-block', marginBottom: '30px', paddingBottom: '10px' }}>Key Platform Features</h2>
                            <ul className="info-check-list">
                                <li><FontAwesomeIcon icon={faBolt} /> Fast message delivery</li>
                                <li><FontAwesomeIcon icon={faGaugeHigh} /> High success rate</li>
                                <li><FontAwesomeIcon icon={faCircleCheck} /> Affordable rates</li>
                                <li><FontAwesomeIcon icon={faChartLine} /> Real-time reports</li>
                                <li><FontAwesomeIcon icon={faUsers} /> List management</li>
                                <li><FontAwesomeIcon icon={faMicrochip} /> API integration</li>
                            </ul>
                        </div>
                        <div className="info-split-text">
                            <h2 style={{ fontSize: '1.8rem', borderBottom: '2px solid #FF8C00', display: 'inline-block', marginBottom: '30px', paddingBottom: '10px' }}>Industries We Serve</h2>
                            <div className="industries-grid">
                                <div className="industry-item"><FontAwesomeIcon icon={faBuildingColumns} /> Banks & Fintech</div>
                                <div className="industry-item"><FontAwesomeIcon icon={faGraduationCap} /> Schools</div>
                                <div className="industry-item"><FontAwesomeIcon icon={faMosque} /> Religious Bodies</div>
                                <div className="industry-item"><FontAwesomeIcon icon={faHospital} /> Hospitals</div>
                                <div className="industry-item"><FontAwesomeIcon icon={faCartShopping} /> eCommerce</div>
                                <div className="industry-item"><FontAwesomeIcon icon={faBullhorn} /> Political Campaigns</div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Benefits & Process */}
                    <div className="info-sub-section">
                        <div className="info-split-section">
                            <div className="info-split-text">
                                <h2 style={{ fontSize: '2rem' }}>Our SMS Marketing Process</h2>
                                <div className="info-check-list" style={{ gridTemplateColumns: '1fr' }}>
                                    {[
                                        "1. Campaign consultation",
                                        "2. Contact database upload",
                                        "3. Message content creation",
                                        "4. Sender ID setup",
                                        "5. Campaign launch",
                                        "6. Delivery reporting & analytics"
                                    ].map((step, sIndex) => (
                                        <li key={sIndex} style={{ padding: '15px' }}>
                                            <span style={{ color: '#FF8C00', fontWeight: 'bold' }}>{sIndex + 1}.</span> {step.split('. ')[1]}
                                        </li>
                                    ))}
                                </div>
                            </div>
                            <div className="info-split-text" style={{ background: '#0d4275', color: 'white', padding: '40px', borderRadius: '25px' }}>
                                <h2 style={{ color: 'white', fontSize: '2rem' }}>Why Choose Us?</h2>
                                <p style={{ color: 'rgba(255,255,255,0.8)' }}>We make business communication simple, fast, and effective.</p>
                                <ul className="info-check-list" style={{ gridTemplateColumns: '1fr', background: 'transparent' }}>
                                    <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}><FontAwesomeIcon icon={faRocket} /> Reliable SMS gateway</li>
                                    <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}><FontAwesomeIcon icon={faBolt} /> Fast delivery infra</li>
                                    <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}><FontAwesomeIcon icon={faCircleCheck} /> Competitive pricing</li>
                                    <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}><FontAwesomeIcon icon={faHeadset} /> Dedicated support</li>
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
                        <h2>Start Reaching Customers Instantly</h2>
                        <p>Launch your SMS marketing campaign today with GSTAT MOBILE SOLUTIONS.</p>
                        <p style={{ marginTop: '-20px', marginBottom: '30px', opacity: 0.7 }}>Contact us now for SMS marketing pricing and setup.</p>
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

export default BulkSMS;

