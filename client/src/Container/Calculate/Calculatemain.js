import React, { useState } from "react";
import "./Calculatemain.css";
import companyName from "./CalculateData";

function Calculatemain(props) {
  const [selected, setSelected] = useState(true);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      {props.name ? (
        <div className="dropdown-main">
          <label className="dropdown-label">{props.name}</label>
          <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
            {selected}
            <span className="down-arrow fas fa-caret-down"></span>
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
      ) : (
        <div></div>
      )}

      <div className="textfield">
        {props.label ? (
          <div class="form__group">
            <input
              type="text"
              class="form__input"
              id="name"
              placeholder={props.label}
              required=""
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Calculatemain;
