import React, { useEffect, useRef } from "react";
import Experience from "./Experience"; // Import the original Experience class

const ExperienceWrapper = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Instantiate the Experience class when the component mounts
    const experience = new Experience(canvasRef.current);

    // Clean up the Experience instance when the component unmounts
    return () => {
      // Perform any cleanup needed for the Three.js scene here
      // For example, disposing of event listeners, textures, etc.
    };
  }, []);

  return (
    <div>
        <div class="preloader">
      <div class="preloader-wrapper">
        <div class="loading">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
    </div>

      {/* Make sure to include the canvas element with the provided ref */}
      <canvas className="experience-canvas" ref={canvasRef} />
    </div>
  );
};

export default ExperienceWrapper;
