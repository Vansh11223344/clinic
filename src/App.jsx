import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from './components/Index';
import DrProfile from './components/DrProfile';
import DrCherryProfile from './components/DrCherryProfile';
import ContactForm from './components/ContactForm';
import TreatmentGallery from './components/TreatmentGallery';
import AestheticTreatmentGallery from './components/AestheticTreatmentGallery';
import IPLTreatmentGallery from './components/IPLTreatmentGallery';
import LaserTreatmentGallery from './components/LaserTreatmentGallery';
import STDTreatmentGallery from './components/STDTreatmentGallery';
import VitiligoTreatmentGallery from './components/VitiligoTreatmentGallery';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/drprofile" element={<DrProfile />} />
        <Route path="/drcherryprofile" element={<DrCherryProfile />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/treatmentgallery" element={<TreatmentGallery />} />
        <Route path="/IPLTreatmentGallery" element={<IPLTreatmentGallery />} />
        <Route path="/LaserTreatmentGallery" element={<LaserTreatmentGallery />} />
         <Route path="/STDTreatmentGallery" element={<STDTreatmentGallery />} />
        <Route path="/VitiligoTreatmentGallery" element={<VitiligoTreatmentGallery />} />
        <Route path="/AestheticTreatmentGallery" element={<AestheticTreatmentGallery />} />
      </Routes>
    </Router>
  );
}

export default App;