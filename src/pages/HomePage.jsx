import React from 'react'
import CurrentWeather from '../views/CurrentWeather/CurrentWeather';
import HighlightWeather from '../views/HighlightWeather/HighlightWeather';

const HomePage = () => {
  return (
    <div>
      <CurrentWeather/>
      <HighlightWeather/>
    </div>
  )
}

export default HomePage
