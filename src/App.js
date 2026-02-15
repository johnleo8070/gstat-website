import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsOfService from "./Components/TermsOfService";
import Chatbot from "./Components/Chatbot";
import GoUp from "./Components/GoUp";
import SocialMediaMarketing from "./Pages/Services/SocialMediaMarketing";
import WebsiteDevelopment from "./Pages/Services/WebsiteDevelopment";
import MobileAppDevelopment from "./Pages/Services/MobileAppDevelopment";
import BulkSMS from "./Pages/Services/BulkSMS";
import VoiceSMS from "./Pages/Services/VoiceSMS";
import EmailMarketing from "./Pages/Services/EmailMarketing";
import SEM from "./Pages/Services/SEM";
import GetQuotation from "./Pages/GetQuotation";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quotation" element={<GetQuotation />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/services/bulk-sms" element={<BulkSMS />} />
          <Route path="/services/voice-sms" element={<VoiceSMS />} />
          <Route path="/services/email-marketing" element={<EmailMarketing />} />
          <Route path="/services/sem" element={<SEM />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Chatbot />
        <GoUp />
      </Router>
    </div>
  );
}

export default App;

