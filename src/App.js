// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExperienceWrapper from "./ExperienceWrapper";
import GenWavOS from "./OS";
import EPK from "./EPK";

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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExperienceWrapper />} />
        <Route path="/OS" element={<GenWavOSComponent />} />
        <Route path="/EPK" element={<EPKComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
