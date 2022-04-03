import React, {useEffect} from 'react'
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading"
import ScroolService from "../../utilities/ScrollService"
import Animations from '../../utilities/Animations'

export default function Calculate(props) {
  let fadeInScreenHandler = (screen)=>{
    if(screen.fadeScreen !== props.id)
    return
    Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription = ScroolService.currentScreenFadeIn.subscribe(fadeInScreenHandler)
  return (
    <div className='about-me-container screen-container' id={props.id || ""}>
      <div className='about-me-parent'>
        <ScreenHeading title={"Calculate"} subHeading={"Input Your Values"}/>
      </div>

    </div>
  )
}
