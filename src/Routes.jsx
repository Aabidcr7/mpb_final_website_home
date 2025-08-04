import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components



import HomePage from './pages/Home/index';
import About from './pages/About';
import GetStarted from './pages/GetStarted';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ContactUs from './pages/ContactUs';
import FundingResources from './pages/blogs';
import SuccessfullyRaiseaSeed from './pages/blogs/SuccessfullyRaiseaSeed';
import VentureCapitalGuidePage from './pages/blogs/VentureCapitalGuidePage';
import TheRightWaytoRaisePage from './pages/blogs/TheRightWaytoRaise';
import ValueaStartup from './pages/blogs/ValueaStartup';
import SuccessfulFundraising from './pages/blogs/SuccessfulFundraising';
import Foundersseevaluation from './pages/blogs/Foundersseevaluation';
import TheEconomics from './pages/blogs/TheEconomics';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/contact-us" element={<ContactUs />} />
         <Route path="/founders-insights" element={<FundingResources />} />
         <Route path="/founders-insights/a-step-by-step-guide-to-raising-venture-capital" element={<VentureCapitalGuidePage />} />
      <Route path="/founders-insights/the-right-way-to-raise-funds-for-your-startup" element={<TheRightWaytoRaisePage />} />
        <Route path="/founders-insights/how-to-successfully-raise-a-seed-round-for-your-startup" element={<SuccessfullyRaiseaSeed />} />
        <Route path="/founders-insights/how-to-value-a-startup-9-proven-methods" element={<ValueaStartup />} />
         <Route path="/founders-insights/a-step-by-step-guide-to-successful-fundraising" element={<SuccessfulFundraising />} />
            <Route path="/founders-insights/how-vcs-and-founders-see-valuation-differently" element={<Foundersseevaluation />} />
                <Route path="/founders-insights/the-economics-of-term-sheets" element={<TheEconomics />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;