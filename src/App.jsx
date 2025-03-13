import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from './components/Index';
import DrProfile from './components/DrProfile';
import DrCherryProfile from './components/DrCherryProfile';
import ContactForm from './components/ContactForm';
import TreatmentGallery from './components/TreatmentGallery';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/drprofile" element={<DrProfile />} />
        <Route path="/drcherryprofile" element={<DrCherryProfile />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/TreatmentGallery" element={<TreatmentGallery />} />
      </Routes>
    </Router>
  );
}

export default App;