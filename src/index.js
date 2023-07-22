import "./styles.css";
import Experience from "./Experience.js";
import GenWavOS from "./GenWavOS";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useState } from "react";

const experience = new Experience(document.querySelector(".experience-canvas"));


const App = () => {
          
    
      const ExperienceComponent = () => {
        return (
         <Experience/>
        );
      }
    
      const GenWavOSComponent = () => {
        return (
         <GenWavOS/>
        );
      }
    
      return (
          <Routes>
            <Route path="/" element={ExperienceComponent()}></Route>
            <Route path="/GenWavOS" element={GenWavOSComponent()}></Route>
          </Routes>
      );
    };
    
    export default App;
    
    
    