import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProfileSelection from './pages/ProfileSelection';
import ProfilesDisplay from './pages/ProfilesDisplay';
import ExpandedProfile from './pages/ExpandedProfile';
import UnavailablePage from './pages/UnavailablePage';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile-selection" element={<ProfileSelection />} />
          <Route path="/profiles" element={<ProfilesDisplay />} />
          <Route path="/profile/:id" element={<ExpandedProfile />} />
          <Route path="/unavailable" element={<UnavailablePage />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;