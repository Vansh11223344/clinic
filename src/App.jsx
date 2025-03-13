import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from './components/Index';
import DrProfile from './components/DrProfile';
import DrCherryProfile from './components/DrCherryProfile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/drprofile" element={<DrProfile />} />
        <Route path="/drcherryprofile" element={<DrCherryProfile />} />
      </Routes>
    </Router>
  );
}

export default App;