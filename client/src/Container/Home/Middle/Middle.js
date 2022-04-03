import React from "react";
import "./Middle.css";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService"

function Middle() {
  return (
      <div className="text-container-parent">
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

            ]}

            /></span>
          </h1>
          <div className="p-parent">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Vivamus massa mauris, blandit id magna sed</p>
          </div>
          <div className="buttons">
            <button 
            onClick={() => ScrollService.scrollHandler.scrollToCalculate()}
            className="btn">Calculate</button>
            <button 
            onClick={() => ScrollService.scrollHandler.scrollToContactUs}
            className="btn">Contact Us</button>
          </div> 
          </div>
                 
      </div>
  );
}

export default Middle;
