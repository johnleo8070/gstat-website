import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faqData } from '../Scripts/faqData';
import '../Styles/FAQSection.css';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="faq-container">
                <div className="content-section-title">
                    <h2>Frequently Asked Questions (FAQs) – GSTAT MOBILE SOLUTIONS</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                            <button className="faq-question" onClick={() => toggleAccordion(index)}>
                                <span>{index + 1}. {item.question}</span>
                                <FontAwesomeIcon icon={activeIndex === index ? faMinus : faPlus} className="faq-icon" />
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        className="faq-answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="answer-content">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* CTA Box matching user guideline image */}
                <motion.div
                    className="faq-cta-box"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="faq-cta-content">
                        <h3>Ready to Scale Your Business Growth?</h3>
                        <p>Our digital experts are ready to build a data-driven strategy tailored to your specific needs. Let's start your digital success story today.</p>

                        <ul className="faq-cta-list">
                            <li><span>›</span> Book a Free Digital Consultation</li>
                            <li><span>›</span> Get a Custom Quote for Your Project</li>
                            <li><span>›</span> Start Your Campaign with GSTAT Today</li>
                        </ul>

                        <Link to="/quotation" className="faq-cta-btn">
                            <FontAwesomeIcon icon={faCalendarCheck} /> Get Quotation
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;
