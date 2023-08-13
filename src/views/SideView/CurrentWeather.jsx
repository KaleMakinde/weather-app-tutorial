import React from 'react'
import GPS from '../../assets/svgs/SvgPack'
import Shower from '../../assets/weather-app-master/Shower.png'
import './sideview.styles.css';
import Button from '../../components/Button/Button';
import Weathercontent from './Weathercontent';


const CurrentWeather = () => {


  return (
    <div className='current-weather'>
      <div className='current-weather__header'>
        <Button color='grey' width={"161px"}> Search for places</Button>
        <GPS />
      </div>
      <Weathercontent
      Image={Shower}
      temp={'15°C'}
      desc={'Shower'}
      location={'Helsinki'}
      
      
      />
    </div>
  )
}

export default CurrentWeather
