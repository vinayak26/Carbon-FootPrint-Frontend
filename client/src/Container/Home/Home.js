import React from 'react'
import Header from './Header/Header'
import Middle from './Middle/Middle'

import "./Home.css"

function Home() {
  return (
    <div className='home-container'>
        <Header/>
        <Middle/>
    </div>
  )
}

export default Home