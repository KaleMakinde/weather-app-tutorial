import React from 'react'
import SideView from '../views/SideView';
import HighlightWeather from '../views/HighlightWeather/HighlightWeather';
import './Home.style.css'


const HomePage = () => {
  return (
    <div className="HomePage">
      <SideView/>
      <HighlightWeather />
    </div>
  )
}

export default HomePage
