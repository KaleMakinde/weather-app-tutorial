import React from 'react'
import GPS from '../../assets/svgs/SvgPack'
import Shower from '../../assets/weather-app-master/Shower.png'
import Finder from '../../assets/svgs/finder'
import './sideview.styles.css'

const CurrentWeather = () => {
  return (
    <div className='bg-[#1E213A] min-h-screen' >
      <div className='flex justify-between py-6 px-2.5 items-start w-96'>
        <button className='bg-[#6E707A] py-1.5 px-4 text-base'>
          Search for Places
        </button>
        <GPS/>
      </div>

      <div className='contents'>


      <div className='box-shower-image'>
          <img 
          className='shower-image'
          src={Shower} alt="" />
        </div>

        <div className='contents-text'>
        <h1 className='contents-text-num'>
        <span className='temperature'>15</span>
         <span className='unit'>°C</span>
         </h1>
          </div>

        <div className='contents-desc'><h1>Shower</h1></div>

        <div className='contents-date'><p> Today. Fri, 5 Jun</p></div>

        <div className='contents-finder'>
        <Finder/>
        <p className='content-finder-name'>Helsinki</p>
        </div>


      </div>
         
        
    </div>
  )
}

export default CurrentWeather
