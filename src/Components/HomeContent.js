import React from "react";
import InfoCards from "./InfoCards";
import Reviews from "./Reviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShareNodes,
    faLaptopCode,
    faMobileScreen,
    faCommentSms,
    faMicrophone,
    faEnvelopeOpenText,
    faMagnifyingGlassChart,
    faLightbulb,
    faChartLine,
    faFlagCheckered,
    faUserCheck,
    faHandHoldingDollar,
    faCogs,
    faBolt,
    faHeadset,
    faArrowRight,
    faComments,
    faPalette,
    faCode,
    faChartPie
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../Styles/HomeContent.css";

function HomeContent() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div className="home-content-container">
            {/* 1. About Snapshot */}
            <section className="highlights-section" style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#f9f9f9' }}>
                <div className="content-section-title">
                    <h2>Welcome to GSTAT MOBILE SOLUTIONS</h2>
                    <div className="title-underline"></div>
                </div>
                <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '18px', lineHeight: '1.6', color: '#555' }}>
                    GSTAT MOBILE SOLUTIONS is a full-service digital marketing and technology agency committed to helping businesses build visibility, attract customers, and increase revenue through innovative digital solutions.
                    From startups to established enterprises, we provide data-driven marketing strategies, professional web development, mobile app solutions, and bulk communication services that deliver measurable results.
                </p>
            </section>

            <InfoCards />

            {/* 2. Core Services */}
            <section className="services-section">
                <div className="content-section-title">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Our Core Services
                    </motion.h2>
                    <div className="title-underline"></div>
                </div>

                <motion.div
                    className="home-services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {[
                        { icon: faShareNodes, title: "Social Media Marketing", desc: "Grow your brand presence and engage your audience across all platforms.", link: "/services/social-media-marketing" },
                        { icon: faLaptopCode, title: "Website Development", desc: "Responsive, SEO-optimized websites that convert visitors into customers.", link: "/services/website-development" },
                        { icon: faMobileScreen, title: "Mobile App Development", desc: "Powerful Android or iOS mobile applications with seamless user experience.", link: "/services/mobile-app-development" },
                        { icon: faCommentSms, title: " SMS Marketing", desc: "Reach thousands instantly with fast, reliable, and affordable SMS campaigns.", link: "/services/bulk-sms" },
                        { icon: faMicrophone, title: "Voice SMS", desc: "Automated voice messages for campaigns, announcements, and engagement.", link: "/services/voice-sms" },
                        { icon: faEnvelopeOpenText, title: "Email Marketing", desc: "Nurture leads and retain customers through personalized email campaigns.", link: "/services/email-marketing" },
                        { icon: faMagnifyingGlassChart, title: "Search Engine Marketing", desc: "Drive instant traffic and conversions with Google Ads and PPC.", link: "/services/sem" },
                    ].map((service, index) => (
                        <motion.div variants={itemVariants} className="service-item" key={index}>
                            <Link to={service.link} className="home-service-card">
                                <FontAwesomeIcon icon={service.icon} className="home-service-icon" />
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <div className="home-service-read-more">
                                    Read More <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* 3. Why Choose Us */}
            <section className="why-choose-modern-section">
                <div className="content-section-title">
                    <h2>Why Choose GSTAT MOBILE SOLUTIONS</h2>
                    <p className="section-subtitle">Delivering excellence through innovation and dedication</p>
                    <div className="title-underline"></div>
                </div>

                <motion.div
                    className="why-choose-modern-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {[
                        { icon: faChartLine, title: "Result Oriented", desc: "Data-driven strategies that ensure measurable growth and high ROI." },
                        { icon: faUserCheck, title: "Expert Team", desc: "A dedicated team of digital specialists with years of industry experience." },
                        { icon: faHandHoldingDollar, title: "Affordability", desc: "Premium digital solutions tailored to fit your business budget." },
                        { icon: faCogs, title: "Modern Tools", desc: "Leveraging the latest technology and platforms for peak performance." },
                        { icon: faBolt, title: "Fast Delivery", desc: "Efficient project management ensuring quick and reliable turnaround." },
                        { icon: faHeadset, title: "24/7 Support", desc: "Rounding the clock assistance to keep your business running smoothly." },
                    ].map((item, index) => (
                        <motion.div variants={itemVariants} className="why-card-modern" key={index}>
                            <div className="why-icon-wrapper">
                                <FontAwesomeIcon icon={item.icon} />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* 4. Our Process */}
            <section className="process-section">
                <div className="content-section-title">
                    <h2>Our Process</h2>
                    <p className="section-subtitle">A proven path to your digital success</p>
                    <div className="title-underline"></div>
                </div>

                <div className="modern-process-grid">
                    {[
                        { icon: faComments, title: "Analysis", desc: "Detailed consultation & business analysis." },
                        { icon: faLightbulb, title: "Strategy", desc: "Crafting a bespoke digital growth roadmap." },
                        { icon: faPalette, title: "Design", desc: "User-centric design & campaign setup." },
                        { icon: faCode, title: "Implementation", desc: "Executing high-performance solutions." },
                        { icon: faChartPie, title: "Optimization", desc: "Continuous monitoring & refinement." },
                        { icon: faFlagCheckered, title: "Growth", desc: "Scaling and reporting measurable wins." }
                    ].map((step, index) => (
                        <motion.div
                            key={index}
                            className="modern-process-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="process-number">0{index + 1}</div>
                            <div className="process-icon-box">
                                <FontAwesomeIcon icon={step.icon} />
                            </div>
                            <h4>{step.title}</h4>
                            <p>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 5. Industries Served - Infinite Marquee */}
            <section className="industries-marquee-section">
                <div className="content-section-title">
                    <h2>Industries We Serve</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="marquee-container">
                    <div className="marquee-content">
                        {[
                            "Retail & eCommerce", "Healthcare & Clinics", "Education & Schools",
                            "Real Estate", "Finance & Fintech", "Religious Organizations",
                            "SMEs & Startups", "Legal Services", "Logistics & Transport",
                            "Hospitality & Tourism"
                        ].map((industry, index) => (
                            <div key={index} className="industry-badge">
                                {industry}
                            </div>
                        ))}
                        {/* Duplicate for infinite effect */}
                        {[
                            "Retail & eCommerce", "Healthcare & Clinics", "Education & Schools",
                            "Real Estate", "Finance & Fintech", "Religious Organizations",
                            "SMEs & Startups", "Legal Services", "Logistics & Transport",
                            "Hospitality & Tourism"
                        ].map((industry, index) => (
                            <div key={`dup-${index}`} className="industry-badge">
                                {industry}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Testimonials Section */}
            <Reviews />

            {/* 7. Call to Action Section */}
            <section className="home-cta-section">
                <div className="home-cta-content">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Ready to Dominate Your Industry Online?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Partner with GSTAT MOBILE SOLUTIONS today and unlock the full growth potential of your business. Let's build your digital success story together.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link to="/quotation" className="home-cta-btn">
                            Get Your Free Quote Now
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default HomeContent;
