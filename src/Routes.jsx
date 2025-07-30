import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components


import HomePage from './pages/Home/index';
import About from './pages/About';
import GetStarted from './pages/GetStarted';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;