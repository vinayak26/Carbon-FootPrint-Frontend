import React from "react";
import "./Middle.css";

function Middle() {
  return (
      <div className="bg-image">
        <div className="text-container">
          <h1 className="heading">
            Machine Learning{" "}
            <span className="carbon-text">Carbon Footprint Generator</span>
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Vivamus massa mauris, blandit id magna sed</p>
          </div>
          <div className="buttons">
            <button className="btn">Calculate</button>
            <button className="btn">Contact Us</button>
          </div>        
      </div>
  );
}

export default Middle;
