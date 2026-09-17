import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import PopupForm from './components/PopupForm';
import About from './pages/About';
import ServicesPage from './pages/Services';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import BusinessManagement from './pages/BusinessManagement';
import AccountingAssignment from './pages/AccountingAssignment';
import FinanceAssignment from './pages/FinanceAssignment';
import LawAssignment from './pages/LawAssignment';
import NursingAssignment from './pages/NursingAssignment';
import PsychologyAssignment from './pages/PsychologyAssignment';
import ComputerScienceAssignment from './pages/ComputerScienceAssignment';
import EngineeringAssignment from './pages/EngineeringAssignment';
import EconomicsAssignment from './pages/EconomicsAssignment';
import NotFound from './pages/NotFound';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // open popup on custom event (Order Now clicks)
    const handler = () => {
      setShowPopup(true);
      try { sessionStorage.setItem('popupShown', '1'); } catch (e) {}
    };
    window.addEventListener('openPopup', handler);

    // show popup 5s after load if not shown this session
    const already = sessionStorage.getItem('popupShown');
    const t = setTimeout(() => {
      if (!already) {
        setShowPopup(true);
        try { sessionStorage.setItem('popupShown', '1'); } catch (e) {}
      }
    }, 5000);

    return () => {
      window.removeEventListener('openPopup', handler);
      clearTimeout(t);
    };
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="bg-white">
          <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <TrustBar />
                <Services />
                <WhyUs />
                <Process />
                <Testimonials />
                <FAQ />
                <FinalCTA />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/business-management" element={<BusinessManagement />} />
          <Route path="/accounting-assignments" element={<AccountingAssignment />} />
          <Route path="/law-assignments" element={<LawAssignment />} />
          <Route path="/finance-assignments" element={<FinanceAssignment />} />
          <Route path="/nursing-assignments" element={<NursingAssignment />} />
          <Route path="/psychology-assignments" element={<PsychologyAssignment />} />
          <Route path="/computer-science-assignments" element={<ComputerScienceAssignment />} />
          <Route path="/engineering-assignments" element={<EngineeringAssignment />} />
          <Route path="/economics-assignments" element={<EconomicsAssignment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* Catch all undefined routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <PopupForm show={showPopup} onClose={() => setShowPopup(false)} />
      </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
