import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScroolService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import {
  Calculatemain,
  Calculatemain2,
  Calculatemain3,
  Calculatemain4,
  Calculatemain5,
  Calculatemain6,
} from "./Calculatemain";
import "./Calculatemain.css";

export default function Calculate(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScroolService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [selected, setSelected] = useState("");

  return (
    <div className="calculate-container screen-container" id={props.id || ""}>
      <div className="calculate-parent">
        <ScreenHeading title={"Calculate"} subHeading={"Input Your Values"} />
      </div>
      <div className="calculate-main-row-1">
        <Calculatemain
          selected={selected}
          setSelected={setSelected}
          name="Company"
        />

        <Calculatemain2
          selected={selected}
          setSelected={setSelected}
          name="models"
        />
        <Calculatemain3
          selected={selected}
          setSelected={setSelected}
          name="Vehicle Class"
        />
        <Calculatemain
          selected={selected}
          setSelected={setSelected}
          label="Engine Size"
        />
      </div>
      <div className="calculate-main-row-2">
        <Calculatemain4
          selected={selected}
          setSelected={setSelected}
          name="Cylinders"
        />
        <Calculatemain5
          selected={selected}
          setSelected={setSelected}
          name="Transmissions"
        />
        <Calculatemain6
          selected={selected}
          setSelected={setSelected}
          name="Fuel Type"
        />
        <Calculatemain
          selected={selected}
          setSelected={setSelected}
          label="Fuel Consumption City"
        />
      </div>
      <div className="calculate-main-row-3">
        <Calculatemain
          selected={selected}
          setSelected={setSelected}
          label="Fuel Consumption Hwy"
        />
        <Calculatemain
          selected={selected}
          setSelected={setSelected}
          label="Fuel Consumption General"
        />
      </div>
    </div>
  );
}
