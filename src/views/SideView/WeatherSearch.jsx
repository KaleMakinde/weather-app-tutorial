import React from 'react';
import Close from '../../assets/svgs/close';
// import Search from '../../assets/svgs/search';
import './sideview.styles.css';
import Button from '../../components/Button/Button';
import { InputSearch} from '../../components/Input/input.styled';


const WeatherSearch = () => {
  return (
    <div className='bg-[#1E213A] min-h-screen w-[475px]'>

      <div className='search-container'>
        <div className="search-container__close-btn"> <Close /></div>
        
        
        <InputSearch type="text" placeholder="search location"/>
        
        
        
        <Button color='blue' width={"86px"} className='test' placeholder="search">Search</Button>
      </div>
    </div>
  )
}

export default WeatherSearch;
