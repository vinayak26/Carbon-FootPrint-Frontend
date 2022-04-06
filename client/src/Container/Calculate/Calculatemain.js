import React, { useState } from "react";
import "./Calculatemain.css";
import companyName from "./CalculateData";

function Calculatemain(props) {
  const [selected, setSelected] = useState(true);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <label>{props.name}</label>
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {companyName.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-items"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


export default Calculatemain;