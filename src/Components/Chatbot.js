import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faComments,
    faXmark,
    faPaperPlane,
    faCircleDot,
    faHeadset,
    faUser,
    faPhone,
    faEnvelope,
    faLocationDot,
    faClock
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "../Scripts/faqData";
import { useNavigate } from "react-router-dom";
import "../Styles/Chatbot.css";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi! I'm FALVO 🤖, your GSTAT assistant. How can I help you grow your business today?",
            sender: "bot",
            timestamp: new Date()
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const navigate = useNavigate();

    // Flatten all FAQs for easier searching
    const allFaqs = faqData.flatMap(category => category.questions);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = {
            id: messages.length + 1,
            text: inputValue,
            sender: "user",
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        const userQuery = inputValue.toLowerCase().trim();
        setInputValue("");

        // Simulate typing
        setIsTyping(true);
        setTimeout(() => {
            generateResponse(userQuery);
        }, 1000);
    };

    const generateResponse = (query) => {
        setIsTyping(false);
        let botResponse = "";

        // Clean query: remove punctuation and extra spaces
        const cleanQuery = query.replace(/[^\w\s]/gi, '').toLowerCase().trim();
        const queryWords = cleanQuery.split(/\s+/);

        // Greetings check
        const greetings = ["hi", "hello", "good morning", "good afternoon", "good evening", "hey", "hola", "hi there", "greetings"];
        const isGreeting = greetings.some(greet => cleanQuery === greet || cleanQuery.startsWith(greet + " "));

        if (isGreeting) {
            botResponse = (
                <div className="bot-welcome-msg">
                    <p>Welcome! Thank you for contacting GSTAT MOBILE SOLUTIONS.</p>
                    <p>We are here to help you dominate your industry online with expert digital marketing, web development, and mobile app solutions.</p>
                    <div className="bot-booking-info">
                        <strong>To get started or make inquiries, you can:</strong>
                        <ol>
                            <li><strong>Get a Free Quote</strong> by using the quotation button on our website.</li>
                            <li><strong>Contact us directly:</strong>
                                <br /> <FontAwesomeIcon icon={faPhone} /> Phone: 090 6434 2047
                                <br /> <FontAwesomeIcon icon={faEnvelope} /> Email: info@gstatmobile.com
                            </li>
                        </ol>
                        <p><FontAwesomeIcon icon={faLocationDot} /> <strong>Location:</strong> 6, Trimnell Street, Aguda, Surulere, Lagos.</p>
                        <p><FontAwesomeIcon icon={faClock} /> <strong>Office Hours:</strong> Mon-Fri, 9:00 AM - 6:00 PM</p>
                    </div>
                    <p>We aim to respond to messages quickly during business hours. For immediate assistance, please call us or message our WhatsApp.</p>
                    <p>Best regards,<br />The GSTAT Team</p>
                    <button className="bot-action-btn" onClick={() => { setIsOpen(false); navigate("/quotation"); }}>
                        Get A Free Quote
                    </button>
                </div>
            );
        } else if (queryWords.includes("phone") || queryWords.includes("call") || queryWords.includes("number") || (queryWords.includes("contact") && !queryWords.includes("form")) || queryWords.includes("whatsapp")) {
            botResponse = (
                <div className="bot-contact-item">
                    <p><strong>Phone Number:</strong><br />090 6434 2047</p>
                    <p><strong>WhatsApp:</strong><br />070 3701 8216</p>
                    <p><strong>Email:</strong><br />info@gstatmobile.com</p>
                    <button className="bot-action-btn" onClick={() => { setIsOpen(false); navigate("/contact"); }}>
                        Go to Contact Page
                    </button>
                </div>
            );
        } else if (queryWords.includes("location") || queryWords.includes("address") || queryWords.includes("where") || queryWords.includes("find") || queryWords.includes("office") || queryWords.includes("lagos") || queryWords.includes("surulere")) {
            botResponse = (
                <div className="bot-contact-item">
                    <p><strong>Head Office:</strong><br />6, Trimnell Street, Aguda, Surulere, Lagos, Nigeria.</p>
                    <button className="bot-action-btn" onClick={() => { setIsOpen(false); navigate("/contact"); }}>
                        View on Map / Contact Page
                    </button>
                </div>
            );
        } else if (queryWords.includes("email") || queryWords.includes("mail")) {
            botResponse = (
                <div className="bot-contact-item">
                    <p><strong>Email:</strong><br />info@gstatmobile.com</p>
                    <p><strong>Phone Number:</strong><br />090 6434 2047</p>
                    <button className="bot-action-btn" onClick={() => { setIsOpen(false); navigate("/contact"); }}>
                        Message Us Directly
                    </button>
                </div>
            );
        } else if (queryWords.includes("quote") || queryWords.includes("quotation") || queryWords.includes("price") || queryWords.includes("cost") || queryWords.includes("how much")) {
            botResponse = (
                <div className="bot-welcome-msg">
                    <p>Getting a free quote from GSTAT is easy!</p>
                    <p>Simply fill out our short quotation form with your project details, and our experts will get back to you with a customized plan and affordable pricing.</p>
                    <button className="bot-action-btn" onClick={() => { setIsOpen(false); navigate("/quotation"); }}>
                        Get Your Free Quote Now
                    </button>
                </div>
            );
        } else {
            // Keyword-based priority matching
            const keywordMap = [
                { keywords: ["service", "offer", "marketing", "website", "app", "sms"], faqIndex: 0 },
                { keywords: ["growth", "help", "how", "business", "benefit"], faqIndex: 1 },
                { keywords: ["consultation", "free", "advice", "start", "new"], faqIndex: 2 },
                { keywords: ["why", "choose", "gstat", "best", "leading"], faqIndex: 3 },
                { keywords: ["website", "app", "design", "build", "mobile", "ios", "android"], faqIndex: 4 },
                { keywords: ["how", "long", "time", "project", "weeks"], faqIndex: 5 },
                { keywords: ["seo", "responsive", "rank", "google", "mobile-friendly"], faqIndex: 6 },
                { keywords: ["bulk", "sms", "marketing", "send", "messages"], faqIndex: 7 },
                { keywords: ["voice", "sms", "audio", "calls", "pre-recorded"], faqIndex: 8 },
                { keywords: ["integrate", "all-in-one", "multi-channel", "viber", "email"], faqIndex: 9 },
                { keywords: ["social", "media", "facebook", "instagram", "tiktok", "manage"], faqIndex: 10 },
                { keywords: ["sem", "ads", "google", "paid", "conversion", "ppc"], faqIndex: 11 },
                { keywords: ["results", "how", "long", "time", "immediate"], faqIndex: 12 },
                { keywords: ["cost", "price", "budget", "affordable", "quote"], faqIndex: 13 },
                { keywords: ["report", "analytics", "tracking", "roi", "data"], faqIndex: 14 }
            ];

            // 1. Try keyword map first for higher accuracy on intent
            let bestMatch = null;
            let highestCount = 0;

            for (const item of keywordMap) {
                const matchCount = item.keywords.filter(kw => queryWords.includes(kw)).length;
                if (matchCount > highestCount) {
                    highestCount = matchCount;
                    bestMatch = allFaqs[item.faqIndex];
                }
            }

            // 2. Fallback to basic word intersection if no keyword map hit
            if (!bestMatch) {
                for (const faq of allFaqs) {
                    const faqClean = faq.question.replace(/[^\w\s]/gi, '').toLowerCase();
                    const faqWords = faqClean.split(/\s+/);
                    const intersection = queryWords.filter(word => faqWords.includes(word));

                    if (intersection.length >= 2) { // At least 2 words must match
                        bestMatch = faq;
                        break;
                    }
                }
            }

            if (bestMatch) {
                botResponse = bestMatch.answer;
            } else {
                botResponse = "Apologies, I am not sure about that. Please contact our support team at 090 6434 2047 or info@gstatmobile.com for more information.";
            }
        }

        const botMessage = {
            id: messages.length + 2,
            text: botResponse,
            sender: "bot",
            timestamp: new Date()
        };

        setMessages(prev => [...prev, botMessage]);
    };

    const handleSuggestionClick = (question) => {
        setInputValue("");
        const userMessage = {
            id: messages.length + 1,
            text: question,
            sender: "user",
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMessage]);
        setIsTyping(true);
        setTimeout(() => {
            generateResponse(question.toLowerCase());
        }, 1000);
    };

    const suggestions = [
        "What services do you offer?",
        "How do I get a free quote?",
        "Do you build mobile apps?",
        "Where is your office located?"
    ];

    return (
        <>
            {/* Chat Trigger Button */}
            <motion.div
                className="chatbot-trigger"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="trigger-badge">1</div>
                <FontAwesomeIcon icon={isOpen ? faXmark : faComments} />
            </motion.div>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="chatbot-window"
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                        {/* Header */}
                        <div className="chat-header">
                            <div className="chat-bot-info">
                                <div className="bot-avatar">
                                    <FontAwesomeIcon icon={faHeadset} />
                                    <span className="online-indicator"></span>
                                </div>
                                <div className="bot-name-status">
                                    <h4>GSTAT Support</h4>
                                    <span>Online | FALVO 🤖</span>
                                </div>
                            </div>
                            <button className="chat-close-btn" onClick={() => setIsOpen(false)}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="chat-messages-container">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`message-wrapper ${msg.sender}`}>
                                    <div className="message-avatar">
                                        <FontAwesomeIcon icon={msg.sender === "bot" ? faHeadset : faUser} />
                                    </div>
                                    <div className="message-content">
                                        <div className="message-text">{msg.text}</div>
                                        <span className="message-time">
                                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="message-wrapper bot">
                                    <div className="message-avatar">
                                        <FontAwesomeIcon icon={faHeadset} />
                                    </div>
                                    <div className="typing-indicator">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggestions Area */}
                        <div className="chat-suggestions">
                            <div className="suggestions-scroll">
                                {suggestions.map((q, i) => (
                                    <button
                                        key={i}
                                        className="suggestion-tag"
                                        onClick={() => handleSuggestionClick(q)}
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Input Area */}
                        <form className="chat-input-area" onSubmit={handleSendMessage}>
                            <input
                                type="text"
                                placeholder="Write your message here..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <button type="submit" className="chat-send-btn" disabled={!inputValue.trim()}>
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </form>
                        <div className="chat-footer">
                            Powered by GSTAT MOBILE SOLUTIONS
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
