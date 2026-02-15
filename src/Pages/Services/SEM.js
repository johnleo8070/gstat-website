import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import SEO from "../../Components/SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass, faBullhorn, faKey, faPenNib,
    faWindowRestore, faChartLine, faEye, faBolt,
    faCrosshairs, faHandHoldingDollar, faArrowUpRightDots,
    faCheckCircle, faArrowRight, faCogs
} from "@fortawesome/free-solid-svg-icons";
import ServiceHero from "../../Components/ServiceHero";
import bannerImg from "../../Assets/sem_banner.png";
import introImg from "../../Assets/sem_intro_v2.png";
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

function SEM() {
    return (
        <div className="service-page">
            <SEO
                title="Search Engine Marketing Services in Nigeria | Google Ads Experts"
                description="Drive instant traffic, leads, and sales with GSTAT MOBILE SOLUTIONS’ Search Engine Marketing services. We manage Google Ads, PPC campaigns, and paid search strategies that deliver ROI."
                type="website"
            />
            <Navbar />

            <ServiceHero
                title="Search Engine Marketing (SEM)"
                subtitle="Dominate search results and drive immediate growth"
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
                            <h2 style={{ fontSize: '2.5rem', color: '#0d4275', lineHeight: '1.2' }}>Result-Driven Search Engine Marketing Solutions</h2>
                            <p>
                                At GSTAT MOBILE SOLUTIONS, we help businesses appear at the top of search engine results through strategic paid advertising.
                            </p>
                            <p>
                                Our Search Engine Marketing (SEM) services are designed to generate immediate visibility, qualified leads, and measurable revenue growth using data-driven Pay-Per-Click (PPC) campaigns.
                            </p>
                            <p>
                                Whether you want more website traffic, product sales, or service inquiries — we create high-converting ad campaigns that deliver results fast.
                            </p>
                            <Link to="/quotation" className="text-appointment-btn" style={{ display: 'inline-block', textDecoration: 'none', background: '#FF8C00', color: 'white', padding: '12px 30px', borderRadius: '50px', fontWeight: 'bold', marginTop: '10px' }}>
                                Get A Free Consultation
                            </Link>
                        </motion.div>
                        <motion.div
                            className="info-split-image"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <img src={introImg} alt="Search Engine Marketing Infographic" />
                        </motion.div>
                    </div>

                    {/* 2. What is SEM & Services */}
                    <div className="info-sub-section">
                        <div className="info-split-section" style={{ background: '#f8fbff', padding: '40px', borderRadius: '25px', marginBottom: '60px' }}>
                            <div className="info-split-text" style={{ flex: '1' }}>
                                <h3 style={{ color: '#FF8C00', fontSize: '1.5rem', marginBottom: '15px' }}>What is Search Engine Marketing?</h3>
                                <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                                    Search Engine Marketing (SEM) is a digital advertising strategy that promotes your business through paid ads on search engines like Google and Bing. These ads appear above organic search results, ensuring your business gets <strong>maximum visibility</strong> when customers search for your products or services.
                                </p>
                            </div>
                        </div>

                        <h2 className="info-sub-section-title">Our SEM Services</h2>
                        <motion.div
                            className="info-cards-content"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {[
                                {
                                    icon: faMagnifyingGlass,
                                    title: "1. Google Ads Management",
                                    desc: "Expertly managed campaigns across the entire Google network.",
                                    details: ["Search & Display Ads", "Shopping & Video Ads", "App Promotion Ads", "Continuous Optimization"]
                                },
                                {
                                    icon: faHandHoldingDollar,
                                    title: "2. PPC Advertising",
                                    desc: "Ensuring every click counts by targeting high-intent customers.",
                                    details: ["Instant Traffic", "Budget Control", "Measurable ROI", "Precision Targeting"]
                                },
                                {
                                    icon: faKey,
                                    title: "3. Keyword Research",
                                    desc: "Targeting the most profitable and relevant search terms.",
                                    details: ["High-volume targeting", "Buyer-intent focus", "Competitor analysis", "Negative keyword setup"]
                                },
                                {
                                    icon: faPenNib,
                                    title: "4. Ad Copywriting",
                                    desc: "Compelling headlines and descriptions that drive clicks.",
                                    details: ["CTR Optimization", "Offer-driven messaging", "Clear Call-to-Actions", "A/B Testing Ready"]
                                },
                                {
                                    icon: faWindowRestore,
                                    title: "5. Landing Page Optimization",
                                    desc: "Maximizing conversions once a visitor lands on your site.",
                                    details: ["Speed Enhancement", "Conversion Tracking", "Mobile Responsiveness", "Strategic Layout"]
                                },
                                {
                                    icon: faChartLine,
                                    title: "6. Campaign Monitoring",
                                    desc: "Data-driven optimization for the best possible return.",
                                    details: ["CTR & CPC Tracking", "Cost Per Acquisition", "Conversion Rate Analysis", "ROAS Monitoring"]
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
                                                    <li key={dIndex}><FontAwesomeIcon icon={faCheckCircle} /> {detail}</li>
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
                                                <li key={dIndex}><FontAwesomeIcon icon={faCheckCircle} /> {detail}</li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )
                            ))}
                        </motion.div>
                    </div>

                    {/* 3. Platforms & SEM Features */}
                    <div className="info-sub-section" style={{ background: '#fcfdfe', borderRadius: '40px', padding: '60px 30px' }}>
                        <h2 className="info-sub-section-title">Platforms We Advertise On</h2>
                        <div className="industries-grid" style={{ marginBottom: '60px' }}>
                            <div className="industry-item"><FontAwesomeIcon icon={faMagnifyingGlass} /> Google Ads</div>
                            <div className="industry-item"><FontAwesomeIcon icon={faBullhorn} /> YouTube Ads</div>
                            <div className="industry-item"><FontAwesomeIcon icon={faEye} /> Google Display</div>
                            <div className="industry-item"><FontAwesomeIcon icon={faBolt} /> Google Shopping</div>
                            <div className="industry-item"><FontAwesomeIcon icon={faMagnifyingGlass} /> Bing Ads</div>
                        </div>

                        <h2 className="info-sub-section-title">Unique SEM Features</h2>
                        <div className="info-cards-content">
                            {[
                                { icon: faEye, title: "Brand Awareness", desc: "Even without clicks, users notice your top-ranked brand headlines." },
                                { icon: faBolt, title: "Instant Results", desc: "Appear at the top of search pages almost immediately after launch." },
                                { icon: faCrosshairs, title: "Precision Targeting", desc: "Target by location, interest, language, and behavioral data." },
                                { icon: faHandHoldingDollar, title: "Pay Per Action", desc: "Cost-effective model where you only pay when someone interacts." },
                                { icon: faChartLine, title: "Data-Driven Decisions", desc: "Comprehensive analytics to smarter ad spending and better results." },
                                { icon: faArrowUpRightDots, title: "Better Lead Gen", desc: "Reach users actively searching for your specific solutions." }
                            ].map((feature, fIndex) => (
                                <div key={fIndex} className="info-card" style={{ padding: '25px', background: 'white' }}>
                                    <div className="info-card-icon-wrapper" style={{ marginBottom: '15px' }}>
                                        <FontAwesomeIcon icon={feature.icon} className="info-fa-icon" style={{ fontSize: '1.5rem' }} />
                                    </div>
                                    <h4 className="info-card-title">{feature.title}</h4>
                                    <p className="info-card-description">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 4. Process & Why Choose Us */}
                    <div className="info-split-section" style={{ marginTop: '60px' }}>
                        <div className="info-split-text">
                            <h2 style={{ fontSize: '2rem' }}>Our SEM Process</h2>
                            <ul className="info-check-list" style={{ gridTemplateColumns: '1fr' }}>
                                <li><strong>1. Analysis:</strong> Business & competitor deep-dive</li>
                                <li><strong>2. Research:</strong> High-intent keyword discovery</li>
                                <li><strong>3. Setup:</strong> Optimized campaign configuration</li>
                                <li><strong>4. Creation:</strong> Compelling ad & creative design</li>
                                <li><strong>5. Launch:</strong> Professional account monitoring</li>
                                <li><strong>6. Report:</strong> Ongoing optimization & ROI tracking</li>
                            </ul>
                        </div>
                        <div className="info-split-text" style={{ background: '#0d4275', color: 'white', padding: '40px', borderRadius: '25px' }}>
                            <h2 style={{ color: 'white', fontSize: '2rem' }}>Why Choose GSTAT?</h2>
                            <ul className="info-check-list" style={{ gridTemplateColumns: '1fr', background: 'transparent' }}>
                                <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faMagnifyingGlass} /> Certified Google Specialists</li>
                                <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faChartLine} /> ROI-Focused Campaigns</li>
                                <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faCrosshairs} /> Advanced Keyword Targeting</li>
                                <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faCogs} /> Transparent Reporting</li>
                                <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faBolt} /> Affordable PPC Management</li>
                            </ul>
                        </div>
                    </div>

                    {/* 5. Final CTA */}
                    <motion.div
                        className="info-cta-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ marginTop: '80px' }}
                    >
                        <h2>Ready to Get Customers from Google?</h2>
                        <p>Let GSTAT MOBILE SOLUTIONS create high-performing SEM campaigns that drive traffic, leads, and sales. We don't just run ads — we generate measurable growth.</p>
                        <Link to="/quotation" className="info-cta-btn" style={{ textDecoration: 'none' }}>
                            Get Your Free SEM Consultation <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '10px' }} />
                        </Link>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SEM;
