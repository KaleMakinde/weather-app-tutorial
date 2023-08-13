import React from 'react';
import Finder from '../../assets/svgs/finder'
import './sideview.styles.css';

const Weathercontent = ({Image, temp, desc, date, location, children}) => {
  return (
    <div className='current-weather__contents'>
        <div className='current-weather__contents-img'>
          <img
            src={Image} alt="" />
        </div>
        <div className='current-weather__contents-text'>
          <h1>
            <span className='temperature'>{temp}</span>
          </h1>
        </div>
        <div className='current-weather__contents-desc'>
          <h1>{desc}</h1>
        </div>
        <div className='current-weather__contents-date'>
          <p>{date}</p>
        </div>

        <div className='current-weather__contents-location'>
          <Finder />
          <p>{location}</p>
        </div>
      </div>
  )
}

export default Weathercontent;
