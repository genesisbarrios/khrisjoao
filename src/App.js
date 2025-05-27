// App.js
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./Home";
import Header from "./Header"; // Import Header component
import Footer from "./Footer"; // Import Header component

const App = () => {
  const HomeComponent = () => {
    return (
      <Home />
    );
  };
  
  return (
    <BrowserRouter>
      <div>
        {/* Include Header + Footer component */}
        <Routes>
          <Route path="/" element={<><HomeComponent /></>} />
          <Route path="/Home" element={<><HomeComponent /></>} />
           {/* <Route path="/Photography" element={<><PhotographyComponent /></>} />
           <Route path="/Videography" element={<><VideographyComponent /></>} />
            <Route path="/About" element={<><AboutComponent /></>} />
            <Route path="/Contact" element={<><ContactComponent /></>} /> */}
        </Routes>
        
      </div>
    </BrowserRouter>
  );
};

export default App;
