import React, {useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScroolService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Calculatemain from "./Calculatemain";

export default function Calculate(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScroolService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [selected, setSelected] = useState("");


  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"Calculate"} subHeading={"Input Your Values"} />
      </div>
      <Calculatemain selected={selected} setSelected={setSelected}
      name= "Company"
      />
      <Calculatemain selected={selected} setSelected={setSelected}
      name="models"
      />
      <Calculatemain selected={selected} setSelected={setSelected}
      name="engine type"
      />
    </div>
  );
}

