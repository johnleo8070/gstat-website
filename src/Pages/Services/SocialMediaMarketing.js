import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import SEO from "../../Components/SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUsers, faBullhorn, faPalette, faChess,
    faHandshake, faChartLine, faComments, faArrowUpRightDots,
    faCheckCircle, faArrowRight,
    faCogs, faBolt, faFileVideo
} from "@fortawesome/free-solid-svg-icons";
import ServiceHero from "../../Components/ServiceHero";
import bannerImg from "../../Assets/social_media_banner.png";
import introImg from "../../Assets/social_media_marketing_intro.png";
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

function SocialMediaMarketing() {
    return (
        <div className="service-page">
            <SEO
                title="Social Media Marketing Agency in Nigeria | GSTAT MOBILE SOLUTIONS"
                description="Boost your online presence with expert social media marketing services. We manage, grow, and advertise your brand on Facebook, Instagram, TikTok, LinkedIn & more."
                type="website"
            />
            <Navbar />

            <ServiceHero
                title="Social Media Marketing"
                subtitle="Build your brand and engage your audience"
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
                            <h2 style={{ fontSize: '2.5rem', color: '#0d4275', lineHeight: '1.2' }}>Result-Driven Social Media Marketing Solutions</h2>
                            <p>
                                In today’s digital world, social media is one of the most powerful tools for business growth. At GSTAT MOBILE SOLUTIONS, we help brands build strong online visibility, engage their audience, and convert followers into loyal customers.
                            </p>
                            <p>
                                Our social media marketing strategies are data-driven, creative, and tailored to your specific business goals — whether it’s brand awareness, lead generation, or direct sales.
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
                            <img src={introImg} alt="Social Media Marketing Network" />
                        </motion.div>
                    </div>

                    {/* 2. Platforms & Services */}
                    <div className="info-sub-section">
                        <h2 className="info-sub-section-title">Platforms We Manage</h2>
                        <div className="industries-grid" style={{ marginBottom: '60px' }}>
                            <div className="industry-item"><FontAwesomeIcon icon={faArrowUpRightDots} /> Facebook Marketing</div>
                            <div className="industry-item"><FontAwesomeIcon icon={faComments} /> Instagram Marketing</div>
                            <div className="industry-item"><FontAwesomeIcon icon={faBullhorn} /> X (Twitter) Marketing</div>
                            <div className="industry-item"><FontAwesomeIcon icon={faFileVideo} /> TikTok Marketing</div>
                            <div className="industry-item"><FontAwesomeIcon icon={faHandshake} /> LinkedIn Marketing</div>
                            <div className="industry-item"><FontAwesomeIcon icon={faBullhorn} /> YouTube Marketing</div>
                        </div>

                        <h2 className="info-sub-section-title">Our Social Media Services</h2>
                        <motion.div
                            className="info-cards-content"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {[
                                {
                                    icon: faUsers,
                                    title: "1. Account Management",
                                    desc: "Consistent branding and engagement across your business profiles.",
                                    details: ["Profile optimization", "Content calendar planning", "Daily/weekly posting", "Inbox management"]
                                },
                                {
                                    icon: faBullhorn,
                                    title: "2. Social Advertising",
                                    desc: "Targeted paid campaigns that generate leads and sales.",
                                    details: ["Audience targeting", "Retargeting campaigns", "Budget optimization", "Conversion tracking"]
                                },
                                {
                                    icon: faPalette,
                                    title: "3. Content Creation",
                                    desc: "High-quality, engaging visual assets that drive interaction.",
                                    details: ["Graphics & flyers", "Promo videos & reels", "Carousel posts", "Motion designs"]
                                },
                                {
                                    icon: faChess,
                                    title: "4. Strategy Development",
                                    desc: "Customized strategies based on data and industry trends.",
                                    details: ["Competitor analysis", "Hashtag research", "Growth planning", "Targeting strategy"]
                                },
                                {
                                    icon: faHandshake,
                                    title: "5. Brand Collaborations",
                                    desc: "Expanding reach through influencer partnerships.",
                                    details: ["Influencer discovery", "Campaign management", "Credibility building", "Audience expansion"]
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

                    {/* 3. Integration Benefits */}
                    <div className="info-sub-section" style={{ background: '#f8fbff', borderRadius: '40px', padding: '60px 30px' }}>
                        <h2 className="info-sub-section-title">Integration Benefits</h2>
                        <div className="info-cards-content">
                            {[
                                { title: "Personalized Experience", desc: "Right channel, right time, right message." },
                                { title: "Brand Awareness", desc: "Increase visibility and reach a larger audience." },
                                { title: "Engagement", desc: "Foster relationships and customer loyalty." },
                                { title: "Driving Traffic", desc: "Drive traffic to your website to boost sales." },
                                { title: "Content Mastery", desc: "High-quality content tailored to your audience." },
                                { title: "Analytics", desc: "Measuring results to optimize performance." }
                            ].map((benefit, bIndex) => (
                                <div key={bIndex} className="info-card" style={{ padding: '20px', minHeight: 'auto', background: 'white' }}>
                                    <h4 className="info-card-title" style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{benefit.title}</h4>
                                    <p className="info-card-description" style={{ fontSize: '0.95rem' }}>{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 4. Process & Why Choose Us */}
                    <div className="info-split-section" style={{ marginTop: '60px' }}>
                        <div className="info-split-text">
                            <h2 style={{ fontSize: '2rem' }}>Our SMM Process</h2>
                            <ul className="info-check-list" style={{ gridTemplateColumns: '1fr' }}>
                                <li><strong>1. Research:</strong> Business & audience deep-dive</li>
                                <li><strong>2. Strategy:</strong> Blueprint for growth</li>
                                <li><strong>3. Creation:</strong> Engaging content production</li>
                                <li><strong>4. Launch:</strong> Campaign activation</li>
                                <li><strong>5. Monitor:</strong> Real-time tracking</li>
                                <li><strong>6. Report:</strong> Optimization & results</li>
                            </ul>
                        </div>
                        <div className="info-split-text" style={{ background: '#0d4275', color: 'white', padding: '40px', borderRadius: '25px' }}>
                            <h2 style={{ color: 'white', fontSize: '2rem' }}>Why Choose GSTAT?</h2>
                            <ul className="info-check-list" style={{ gridTemplateColumns: '1fr', background: 'transparent' }}>
                                <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faUsers} /> Experienced Managers</li>
                                <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faPalette} /> Creative Designers</li>
                                <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faChartLine} /> Data-driven Ads</li>
                                <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faBolt} /> Affordable Packages</li>
                                <li style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}><FontAwesomeIcon icon={faCogs} /> Detailed Reports</li>
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
                        <h2>Ready to Grow Your Brand on Social Media?</h2>
                        <p>Partner with GSTAT MOBILE SOLUTIONS today and dominate your industry online. We don't just post — we position your brand for digital success.</p>
                        <Link to="/quotation" className="info-cta-btn">
                            Contact Us Now To Get Started <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '10px' }} />
                        </Link>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SocialMediaMarketing;
