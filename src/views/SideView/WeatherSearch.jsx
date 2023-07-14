import React from 'react';
import Close from '../../assets/svgs/close';
import Search from '../../assets/svgs/search';
import './sideview.styles.css';

const WeatherSearch = () => {
  return (
    <div className='bg-[#1E213A] min-h-screen'>

      <div className='search-container'>
        <div className="close-btn"> <Close /></div>
        
        <form className="search-role">
            <div className="search-btn"><Search /></div>

                <input
                type="search"
                className="query-details"
                 placeholder="search location"
                 
                 />
        </form>

       
        
        <button className='btn-search'>Search</button>
        
      </div>
    </div>
  )
}

export default WeatherSearch;
