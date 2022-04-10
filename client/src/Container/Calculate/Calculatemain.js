import React, { useState } from "react";
import "./Calculatemain.css";
import {companyName, carModel, vehicleclass, cylinders, transmission, fueltype} from "./CalculateData";


// Calculate main function for both dropdown and text field
export function Calculatemain(props) {
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
    {/* textfield with the label here */}
      <div className="textfield">
        {props.label ? (
          <div className="form__group">
            <input
              type="text"
              className="form__input"
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

// Calculate main function only for dropdown 
export function Calculatemain2(props) {
  const [selected, setSelected] = useState(true);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
    <div className="dropdown-main">
          <label className="dropdown-label">{props.name}</label>
          <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
            {selected}
            <span className="down-arrow fas fa-caret-down"></span>
          </div>
          {isActive && (
            <div className="dropdown-content">
              {carModel.map((option) => (
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
    </div>
  );
}
export function Calculatemain3(props) {
  const [selected, setSelected] = useState(true);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
    <div className="dropdown-main">
          <label className="dropdown-label">{props.name}</label>
          <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
            {selected}
            <span className="down-arrow fas fa-caret-down"></span>
          </div>
          {isActive && (
            <div className="dropdown-content">
              {vehicleclass.map((option) => (
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
    </div>
  );
}
export function Calculatemain4(props) {
  const [selected, setSelected] = useState(true);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
    <div className="dropdown-main">
          <label className="dropdown-label">{props.name}</label>
          <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
            {selected}
            <span className="down-arrow fas fa-caret-down"></span>
          </div>
          {isActive && (
            <div className="dropdown-content">
              {cylinders.map((option) => (
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
    </div>
  );
}


export function Calculatemain5(props) {
  const [selected, setSelected] = useState(true);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
    <div className="dropdown-main">
          <label className="dropdown-label">{props.name}</label>
          <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
            {selected}
            <span className="down-arrow fas fa-caret-down"></span>
          </div>
          {isActive && (
            <div className="dropdown-content">
              {transmission.map((option) => (
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
    </div>
  );
}
export function Calculatemain6(props) {
  const [selected, setSelected] = useState(true);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
    <div className="dropdown-main">
          <label className="dropdown-label">{props.name}</label>
          <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
            {selected}
            <span className="down-arrow fas fa-caret-down"></span>
          </div>
          {isActive && (
            <div className="dropdown-content">
              {fueltype.map((option) => (
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
    </div>
  );
}

// export default Calculatemain;
// export Calculatemain2

export default Calculatemain;

