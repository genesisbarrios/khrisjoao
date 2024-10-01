// App.js
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ExperienceWrapper from "./ExperienceWrapper";
import GenWavOS from "./OS";
import EPK from "./EPK";
import GENESIS from "./GENESIS";
import DALEMAMI from "./DALEMAMI";
import NEW from "./NEW";
import Header from "./Header"; // Import Header component

import Footer from "./Footer"; // Import Header component

const App = () => {
  const GenWavOSComponent = () => {
    return (
      <GenWavOS />
    );
  };

  const EPKComponent = () => {
    return (
      <EPK />
    );
  };

  const GENESISComponent = () => {
    return (
      <GENESIS />
    );
  };

  const DALEMAMIComponent = () => {
    return (
      <DALEMAMI />
    );
  };

  const NEWComponent = () => {
    return (
      <NEW />
    );
  };

  const ShopRedirect = () => { // Define component for /SHOP route
    window.location.href = "https://enigma-labs.printify.me/products"; // Redirect to external URL
    return null; // Since we're redirecting, return null
  };
  
  
  return (
    <BrowserRouter>
      <div>
        {/* Include Header + Footer component */}
        <Routes>
          <Route path="/" element={<><Header /><ExperienceWrapper /></>} />
          <Route path="/OS" element={<><Header /><GenWavOSComponent /><Footer /></>} />
          <Route path="/NEW" element={<><Header /><NEWComponent /><Footer /></>} />
          <Route path="/GENESIS" element={<><Header /><GENESISComponent /><Footer /></>} />
          <Route path="/DALEMAMI" element={<><Header /><DALEMAMIComponent  /><Footer /></>} />
          <Route path="/EPK" element={<><Header /><EPKComponent /><Footer /></>} />
          <Route path="/SHOP" element={<ShopRedirect />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
};

export default App;
