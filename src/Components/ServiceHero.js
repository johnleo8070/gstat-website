import React from 'react';
import { motion } from 'framer-motion';
import '../Styles/ServiceHero.css';

const ServiceHero = ({ title, subtitle, backgroundImage }) => {
    return (
        <section
            className="service-hero-banner"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="service-hero-overlay"></div>
            <div className="service-hero-content">
                <motion.h1
                    className="service-hero-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {title}
                </motion.h1>
                <motion.div
                    className="service-hero-underline"
                    initial={{ width: 0 }}
                    animate={{ width: '80px' }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                />
                <motion.p
                    className="service-hero-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {subtitle}
                </motion.p>
            </div>
        </section>
    );
};

export default ServiceHero;
