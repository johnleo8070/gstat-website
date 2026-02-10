import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import SEO from "../../Components/SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope, faRobot, faNewspaper, faFilter,
    faPenNib, faChartPie, faArrowsSpin, faAddressBook,
    faCheckCircle, faArrowRight, faBolt, faMicrochip,
    faShieldHalved, faGear, faEarthAfrica, faHeadset, faLayerGroup
} from "@fortawesome/free-solid-svg-icons";
import ServiceHero from "../../Components/ServiceHero";
import bannerImg from "../../Assets/email_marketing_banner.png";
import introImg from "../../Assets/email_marketing_intro_v2.png";
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

function EmailMarketing() {
    return (
        <div className="service-page">
            <SEO
                title="Email Marketing Services in Nigeria | Bulk & Automated Campaigns"
                description="GSTAT MOBILE SOLUTIONS offers targeted email marketing services including bulk email, automation, newsletters, and lead nurturing campaigns that drive conversions."
                type="website"
            />
            <Navbar />

            <ServiceHero
                title="Email Marketing"
                subtitle="Strategic and conversion-focused email campaigns"
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
                            <h2 style={{ fontSize: '2.5rem', color: '#0d4275', lineHeight: '1.2' }}>Powerful Email Marketing That Converts</h2>
                            <p>
                                Email marketing remains one of the highest ROI digital marketing channels. At GSTAT MOBILE SOLUTIONS, we help businesses communicate directly with their customers through strategic, personalized, and conversion-focused email campaigns.
                            </p>
                            <p>
                                Whether you want to promote products, nurture leads, or retain customers, our email marketing solutions deliver measurable results.
                            </p>
                            <Link to="/quotation" className="text-appointment-btn" style={{ display: 'inline-block', textDecoration: 'none', background: '#FF8C00', color: 'white', padding: '12px 30px', borderRadius: '50px', fontWeight: 'bold', marginTop: '10px' }}>
                                Get Started
                            </Link>
                        </motion.div>
                        <motion.div
                            className="info-split-image"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <img src={introImg} alt="Email Marketing on Mobile and Laptop" />
                        </motion.div>
                    </div>

                    {/* 2. Our Email Marketing Services */}
                    <div className="info-sub-section">
                        <h2 className="info-sub-section-title">Our Email Marketing Services</h2>
                        <motion.div
                            className="info-cards-content"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {[
                                {
                                    icon: faEnvelope,
                                    title: "1. Bulk Email Campaigns",
                                    desc: "Reach thousands of customers instantly with professionally designed broadcasts.",
                                    details: ["Promotions & Sales Offers", "Spam-compliant campaigns", "High delivery rates", "Detailed analytics"]
                                },
                                {
                                    icon: faRobot,
                                    title: "2. Email Automation",
                                    desc: "Nurture leads and drive conversions on autopilot with automated sequences.",
                                    details: ["Welcome email series", "Abandoned cart emails", "Follow-up campaigns", "Behavioral triggers"]
                                },
                                {
                                    icon: faNewspaper,
                                    title: "3. Newsletter Marketing",
                                    desc: "Stay connected with your audience through regular, engaging newsletters.",
                                    details: ["Company updates", "Industry tips & insights", "Product highlights", "Trust building"]
                                },
                                {
                                    icon: faFilter,
                                    title: "4. Lead Nurturing",
                                    desc: "Email funnels that guide prospects from awareness to final purchase.",
                                    details: ["Audience segmentation", "Personalized messaging", "Growth planning", "Conversion tracking"]
                                },
                                {
                                    icon: faPenNib,
                                    title: "5. Template Design",
                                    desc: "Visually appealing, mobile-responsive templates aligned with your brand.",
                                    details: ["Custom layouts", "CTA optimization", "Mobile responsiveness", "Brand identity"]
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

                    {/* 3. Platforms & Unique Features */}
                    <div className="info-sub-section" style={{ background: '#fcfdfe', borderRadius: '40px', padding: '60px 30px' }}>
                        <h2 className="info-sub-section-title">Platforms & Tools We Use</h2>
                        <div className="industries-grid" style={{ marginBottom: '60px' }}>
                            <div className="industry-item"><FontAwesomeIcon icon={faBolt} /> Mailchimp</div>
                            <div className="industry-item"><FontAwesomeIcon icon={faArrowsSpin} /> Sendinblue</div>
                            <div className="industry-item"><FontAwesomeIcon icon={faFilter} /> GetResponse</div>
                            <div className="industry-item"><FontAwesomeIcon icon={faMicrochip} /> HubSpot</div>
                            <div className="industry-item"><FontAwesomeIcon icon={faLayerGroup} /> Zoho Campaigns</div>
                            <div className="industry-item"><FontAwesomeIcon icon={faGear} /> Custom SMTP</div>
                        </div>

                        <h2 className="info-sub-section-title">Unique Service Features</h2>
                        <div className="info-cards-content">
                            {[
                                { icon: faEarthAfrica, title: "All-in-one Service", desc: "Design, create and send marketing campaigns via E-mail, Viber and SMS from a single platform." },
                                { icon: faPenNib, title: "Easy to Use", desc: "Build custom templates with our Drag & Drop editor or professional HTML coding." },
                                { icon: faAddressBook, title: "Detailed Targeting", desc: "Automated list management to protect your brand reputation and reach the right inbox." },
                                { icon: faChartPie, title: "Detailed Statistics", desc: "Historical and real-time data on devices, trends, and geolocation of your readers." }
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
                            <h2 style={{ fontSize: '2rem' }}>Our Email Marketing Process</h2>
                            <ul className="info-check-list" style={{ gridTemplateColumns: '1fr' }}>
                                <li><strong>1. Analysis:</strong> Audience & goal evaluation</li>
                                <li><strong>2. Segmentation:</strong> Smart email list categorization</li>
                                <li><strong>3. Strategy:</strong> Blueprint for campaign success</li>
                                <li><strong>4. Design:</strong> Mobile-responsive template creation</li>
                                <li><strong>5. Launch:</strong> Scheduled campaign activation</li>
                                <li><strong>6. Track:</strong> Performance tracking & optimization</li>
                            </ul>
                        </div>
                        <div className="info-split-text" style={{ background: '#0d4275', color: 'white', padding: '40px', borderRadius: '25px' }}>
                            <h2 style={{ color: 'white', fontSize: '2rem' }}>Why Choose GSTAT?</h2>
                            <ul className="info-check-list" style={{ gridTemplateColumns: '1fr', background: 'transparent' }}>
                                <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faEnvelope} /> Experienced Marketers</li>
                                <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faChartPie} /> Conversion-focused</li>
                                <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faRobot} /> Advanced Automation</li>
                                <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faBolt} /> Affordable Plans</li>
                                <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faHeadset} /> Detailed Reports</li>
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
                        <h2>Start Converting Leads Through Email Today</h2>
                        <p>Partner with GSTAT MOBILE SOLUTIONS for result-driven email marketing campaigns that grow your business. We help you send the right message to the right audience.</p>
                        <Link to="/quotation" className="info-cta-btn">
                            Launch Your First Campaign <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '10px' }} />
                        </Link>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default EmailMarketing;
