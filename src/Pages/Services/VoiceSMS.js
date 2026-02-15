import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import SEO from "../../Components/SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMicrophoneLines, faLanguage, faCalendarCheck, faUserCheck,
    faChartPie, faBolt, faCircleCheck, faRocket, faHeadset,
    faCartShopping, faGraduationCap, faHospital, faBuildingColumns,
    faBullhorn, faCalendarDays, faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import ServiceHero from "../../Components/ServiceHero";
import bannerImg from "../../Assets/bulk_sms_banner.png"; // Keeping consistent high-tech banner
import introImg from "../../Assets/voice_sms_intro.jpg";
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

function VoiceSMS() {
    return (
        <div className="service-page">
            <SEO
                title="Voice SMS Marketing Services in Nigeria | GSTAT MOBILE SOLUTIONS"
                description="Deliver automated voice messages to customers with GSTAT MOBILE SOLUTIONS’ Voice SMS platform. Ideal for promotions, announcements, and customer engagement campaigns."
                type="website"
            />
            <Navbar />

            <ServiceHero
                title="Voice SMS"
                subtitle="Personalized automated voice broadcasts with maximum impact"
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
                            <h2 style={{ fontSize: '2.5rem', color: '#0d4275', lineHeight: '1.2' }}>Reach Your Customers Instantly with Voice SMS</h2>
                            <p>
                                Voice SMS is a powerful communication tool that allows you to send pre-recorded voice messages directly to your customers’ phones. Unlike traditional SMS, Voice SMS adds a personal touch, making your message more engaging and effective.
                            </p>
                            <p>
                                At GSTAT MOBILE SOLUTIONS, we provide a reliable and scalable Voice SMS platform for businesses, institutions, political campaigns, and events across Nigeria.
                            </p>
                        </motion.div>
                        <motion.div
                            className="info-split-image"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <img src={introImg} alt="Voice SMS Illustration" />
                        </motion.div>
                    </div>

                    {/* 2. Our Voice SMS Services */}
                    <div className="info-sub-section">
                        <h2 className="info-sub-section-title">Our Voice SMS Services</h2>
                        <motion.div
                            className="info-cards-content"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {[
                                {
                                    icon: faMicrophoneLines,
                                    title: "1. Automated Voice Broadcast",
                                    desc: "Send pre-recorded messages to thousands of recipients instantly.",
                                    details: ["Promotions", "Event notifications", "Important reminders", "Announcements"]
                                },
                                {
                                    icon: faLanguage,
                                    title: "2. Multi-Language Support",
                                    desc: "Deliver messages in local languages to reach your audience effectively.",
                                    details: ["English support", "Yoruba, Igbo, Hausa", "Native dialect recording", "Cultural resonance"]
                                },
                                {
                                    icon: faCalendarCheck,
                                    title: "3. Scheduled Campaigns",
                                    desc: "Plan your campaigns and schedule messages for optimal delivery times.",
                                    details: ["Time-based delivery", "Engagement optimization", "Automated recurring calls", "Holiday scheduling"]
                                },
                                {
                                    icon: faUserCheck,
                                    title: "4. Personalized Messaging",
                                    desc: "Enhance customer connection by personalizing messages with details.",
                                    details: ["Name personalization", "Dynamic variables", "User-specific data", "Higher engagement"]
                                },
                                {
                                    icon: faChartPie,
                                    title: "5. Reports & Analytics",
                                    desc: "Track delivery rates and engagement metrics to measure effectiveness.",
                                    details: ["Call status reports", "Duration analytics", "Delivery success tracking", "Detailed CSV exports"]
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

                    {/* 3. Key Benefits & Industries Served */}
                    <div className="info-split-section split-with-divider" style={{ backgroundColor: '#fcfdfe', borderRadius: '30px', padding: '60px' }}>
                        <div className="info-split-text">
                            <h2 style={{ fontSize: '1.8rem', borderBottom: '2px solid #FF8C00', display: 'inline-block', marginBottom: '30px', paddingBottom: '10px' }}>Key Benefits of Voice SMS</h2>
                            <ul className="info-check-list">
                                <li><FontAwesomeIcon icon={faBolt} /> Higher engagement vs text</li>
                                <li><FontAwesomeIcon icon={faUserCheck} /> Personalized communication</li>
                                <li><FontAwesomeIcon icon={faRocket} /> Fast and reliable delivery</li>
                                <li><FontAwesomeIcon icon={faBullhorn} /> Ideal for marketing & alerts</li>
                                <li><FontAwesomeIcon icon={faCircleCheck} /> Cost-effective campaigns</li>
                                <li><FontAwesomeIcon icon={faMicrophoneLines} /> Personal human touch</li>
                            </ul>
                        </div>
                        <div className="info-split-text">
                            <h2 style={{ fontSize: '1.8rem', borderBottom: '2px solid #FF8C00', display: 'inline-block', marginBottom: '30px', paddingBottom: '10px' }}>Industries We Serve</h2>
                            <div className="industries-grid">
                                <div className="industry-item"><FontAwesomeIcon icon={faCartShopping} /> Retail & eCommerce</div>
                                <div className="industry-item"><FontAwesomeIcon icon={faGraduationCap} /> Schools & Education</div>
                                <div className="industry-item"><FontAwesomeIcon icon={faHospital} /> Hospitals & Clinics</div>
                                <div className="industry-item"><FontAwesomeIcon icon={faBuildingColumns} /> Finance & Fintech</div>
                                <div className="industry-item"><FontAwesomeIcon icon={faBullhorn} /> Political Campaigns</div>
                                <div className="industry-item"><FontAwesomeIcon icon={faCalendarDays} /> Event Organizers</div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Why Choose Us Section */}
                    <div className="info-sub-section">
                        <div className="info-split-section">
                            <div className="info-split-text" style={{ background: '#0d4275', color: 'white', padding: '60px', borderRadius: '25px', flex: '1.5' }}>
                                <h2 style={{ color: 'white', fontSize: '2.2rem', marginBottom: '20px' }}>Why Choose GSTAT MOBILE SOLUTIONS for Voice SMS?</h2>
                                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px' }}>
                                    We help your messages reach the right audience, at the right time, with maximum impact.
                                </p>
                                <ul className="info-check-list" style={{ gridTemplateColumns: 'repeat(2, 1fr)', background: 'transparent' }}>
                                    <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faRocket} /> Scalable voice platform</li>
                                    <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faLanguage} /> Multi-language support</li>
                                    <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faCircleCheck} /> Affordable pricing</li>
                                    <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faCalendarCheck} /> Advanced scheduling</li>
                                    <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faChartPie} /> Real-time analytics</li>
                                    <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faHeadset} /> Expert support staff</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 5. Final CTA */}
                    <motion.div
                        className="info-cta-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Start Engaging Your Customers with Voice SMS Today!</h2>
                        <p>Partner with GSTAT MOBILE SOLUTIONS to launch professional, automated voice messaging campaigns that drive results.</p>
                        <p style={{ marginTop: '-20px', marginBottom: '30px', opacity: 0.7 }}>Contact us now to set up your first campaign and experience the difference.</p>
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

export default VoiceSMS;

