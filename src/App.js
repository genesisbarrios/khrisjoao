// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExperienceWrapper from "./ExperienceWrapper";
import GenWavOS from "./OS";

const App = () => {
  const GenWavOSComponent = () => {
    return (
      <GenWavOS />
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExperienceWrapper />} />
        <Route path="/OS" element={<GenWavOSComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
