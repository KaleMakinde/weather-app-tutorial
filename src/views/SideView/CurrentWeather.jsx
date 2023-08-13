import React from 'react'
import GPS from '../../assets/svgs/SvgPack'
import Shower from '../../assets/weather-app-master/Shower.png'
import Finder from '../../assets/svgs/finder'
import './sideview.styles.css';
import Button from '../../components/Button/Button';


const CurrentWeather = () => {


  return (
    <div className='current-weather'>
      <div className='current-weather__header'>
        <Button color='grey' width={"161px"}> Search for places</Button>
        <GPS />
      </div>
      <div className='current-weather__contents'>
        <div className='current-weather__contents-img'>
          <img
            src={Shower} alt="" />
        </div>
        <div className='current-weather__contents-text'>
          <h1>
            <span className='temperature'>15</span>
            <span className='unit'>°C</span>
          </h1>
        </div>
        <div className='current-weather__contents-desc'>
          <h1>Shower</h1>
        </div>
        <div className='current-weather__contents-date'>
          <p> Today. Fri, 5 Jun</p>
        </div>

        <div className='current-weather__contents-location'>
          <Finder />
          <p>Helsinki</p>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
