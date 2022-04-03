import React from "react";
import "./Middle.css";
import Typical from "react-typical";

function Middle() {
  return (
      <div>
        <div className="text-container">
          <h1 className="heading">
            Machine Learning{" "}
            <span>
            <Typical className="carbon-text"
            
            loop={Infinity}
            steps={[
              "Carbon Footprint Generator",
              1000,
              "It uses Ml",
              1000,
              "Works Always",
              1000,

            ]}

            /></span>
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
