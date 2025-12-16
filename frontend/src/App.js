import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import CardsSection from "./components/CardsSection";
// import TestimonialsSection from "./components/TestimonialsSection";
import Features from "./components/Features";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

// Import page components
import VirtualCard from "./pages/VirtualCard";
import PhysicalCard from "./pages/PhysicalCard";
import MultiCurrencyWallet from "./pages/MultiCurrencyWallet";
import P2PTransfer from "./pages/P2PTransfer";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Partners from "./pages/Partners";
import Blog from "./pages/Blog";
import HelpCenter from "./pages/HelpCenter";
import APIDocs from "./pages/APIDocs";
import Community from "./pages/Community";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Compliance from "./pages/Compliance";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <CardsSection />
      {/* <TestimonialsSection /> */}
      <Features />
      <Stats />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Product Pages */}
          <Route path="/virtual-card" element={<VirtualCard />} />
          <Route path="/physical-card" element={<PhysicalCard />} />
          <Route path="/multi-currency-wallet" element={<MultiCurrencyWallet />} />
          <Route path="/p2p-transfer" element={<P2PTransfer />} />
          
          {/* Company Pages */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/partners" element={<Partners />} />
          
          {/* Resources Pages */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/api-docs" element={<APIDocs />} />
          <Route path="/community" element={<Community />} />
          
          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/compliance" element={<Compliance />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
