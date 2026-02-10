import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInfoCircle,
    faCogs,
    faPhoneAlt,
    faCalendarPlus
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../Styles/InfoCards.css";

const InfoCards = () => {
    const cards = [
        {
            icon: faInfoCircle,
            title: "About Us",
            desc: "Learn about our mission to empower businesses through cutting-edge digital solutions and dedicated expertise.",
            link: "/about",
            color: "#1A8EFD"
        },
        {
            icon: faCogs,
            title: "Our Services",
            desc: "From web development to SEO and bulk messaging, discover how we support your digital growth journey.",
            link: "/services/social-media-marketing",
            color: "#FF8C00"
        },
        {
            icon: faPhoneAlt,
            title: "Contact Us",
            desc: "Have questions? Reach out to our expert team for guidance and support regarding our digital services.",
            link: "/contact",
            color: "#1A8EFD"
        },
        {
            icon: faCalendarPlus,
            title: "Get Consultation",
            desc: "Be proactive about your business growth. Request a free consultation online and take the first step towards success.",
            link: "/quotation",
            color: "#FF8C00"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="info-cards-section">
            <motion.div
                className="info-cards-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className="info-card"
                        variants={itemVariants}
                        whileHover={{ y: -10 }}
                    >
                        <div className="info-card-icon" style={{ backgroundColor: card.color }}>
                            <FontAwesomeIcon icon={card.icon} />
                        </div>
                        <h3 className="info-card-title">{card.title}</h3>
                        <p className="info-card-desc">{card.desc}</p>
                        <Link to={card.link} className="info-card-btn">
                            View More
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default InfoCards;
