// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExperienceWrapper from "./ExperienceWrapper";
import GenWavOS from "./OS";
import EPK from "./EPK";
import GENESIS from "./GENESIS";
import Header from "./Header"; // Import Header component

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


  return (
    <BrowserRouter>
      <div>
        <Header /> {/* Include Header component */}
        <Routes>
          <Route path="/" element={<ExperienceWrapper />} />
          <Route path="/GENESIS" element={<GENESISComponent />} />
          <Route path="/SHOP" element={<Navigate to="https://genwav.bandcamp.com/" />} />
          <Route path="/OS" element={<GenWavOSComponent />} />
          <Route path="/EPK" element={<EPKComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
