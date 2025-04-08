// App.js
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ExperienceWrapper from "./ExperienceWrapper";
import Home from "./Home";
import EPK from "./EPK";
import GENESIS from "./GENESIS";
import DALEMAMI from "./DALEMAMI";
import Header from "./Header"; // Import Header component
import LOSIGNORO from "./LOSIGNORO";
import RELEASES from './RELEASES';
import TEXTINME from './3am';
import PROBLEMAS from './PROBLEMAS';
import LLAMAGEMELA from './LLAMAGEMELA';
import ONEDAY from './oneday';
import Footer from "./Footer"; // Import Header component

const App = () => {
  const HomeComponent = () => {
    return (
      <Home />
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

  const LOSIGNOROComponent = () => {
    return (
      <LOSIGNORO />
    );
  };

  const RELEASESComponent = () => {
    return (
      <RELEASES />
    );
  };

  const TEXTINMEComponent = () => {
    return (
      <TEXTINME />
    );
  };
  const PROBLEMASComponent = () => {
    return (
      <PROBLEMAS />
    );
  }
  const LLAMAGEMELAComponent = () => {
    return (
      <LLAMAGEMELA />
    );
  }
  const ONEDAYComponent = () => {
    return (
      <ONEDAY />
    );
  }

  const ShopRedirect = () => { // Define component for /SHOP route
    window.location.href = "https://enigma-labs.printify.me/products"; // Redirect to external URL
    return null; // Since we're redirecting, return null
  };
  
  
  return (
    <BrowserRouter>
      <div>
        {/* Include Header + Footer component */}
        <Routes>
          {/* <Route path="/" element={<><Header /><ExperienceWrapper /></>} /> */}
          <Route path="/" element={<><Header /><HomeComponent /><Footer /></>} />
          <Route path="/Home" element={<><Header /><HomeComponent /><Footer /></>} />
          <Route path="/RELEASES" element={<><Header /><RELEASESComponent/><Footer /></>} />
          <Route path="/LOSIGNORO" element={<><Header /><LOSIGNOROComponent  /><Footer /></>} />
          <Route path="/3am" element={<><Header /><TEXTINMEComponent  /><Footer /></>} />
          <Route path="/GENESIS" element={<><Header /><GENESISComponent /><Footer /></>} />
          <Route path="/DALEMAMI" element={<><Header /><DALEMAMIComponent  /><Footer /></>} />
          <Route path="/PROBLEMAS" element={<><Header /><PROBLEMASComponent  /><Footer /></>} />
          <Route path="/LLAMAGEMELA" element={<><Header /><LLAMAGEMELAComponent  /><Footer /></>} />
          <Route path="/ONEDAY" element={<><Header /><ONEDAYComponent  /><Footer /></>} />
          <Route path="/EPK" element={<><Header /><EPKComponent /><Footer /></>} />
          <Route path="/SHOP" element={<ShopRedirect />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
};

export default App;
