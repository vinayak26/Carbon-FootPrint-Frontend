import React from 'react'
import "./Header.css"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function Header() {
  return (
    <div>
        <nav className='nav-bar'>
          <p className='title'>Team Name</p>
          <ul className='nav-links'>
            <li>Home</li>
            <li>Calculate</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
            <FontAwesomeIcon className='header-bars' icon={faBars}/>
        </nav>
    </div>
  )
}

export default Header