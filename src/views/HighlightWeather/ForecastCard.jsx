import React from 'react';
import ModSleetSwrsDay from '../../assets/weather-app-master/ModSleetSwrsDay.png';
import PartCloudRainThunderDay from '../../assets/weather-app-master/PartCloudRainThunderDay.png';
import LightCloud from '../../assets/weather-app-master/LightCloud.png';
import './highlight.styles.css'

const ForecastCard = () => {
    return (

        <div className='box-card'>
            <h1 className='box-text'>Tomorrow</h1>
            <img
                className='box-image'
                src={ModSleetSwrsDay} alt="ModSleetSwrsDay" />
            <h3 className='box-temp'>
                <p className='box-temp-num1'> 16°C</p>
                <p className='box-temp-num2'> 11°C </p>

            </h3>
        </div>

    )
}

export default ForecastCard;
