import React from 'react';

import './highlight.styles.css'

const ForecastCard = ({day, temp, Image}) => {
    return (

        <div className='box-card'>
            <h1 className='box-text'>{day}</h1>
            <img
                className='box-image'
                src={Image} alt="ModSleetSwrsDay" />
            <h3 className='box-temp'>
                <p className='box-temp-num1'>{temp.celts}</p>
                <p className='box-temp-num2'>{temp.f} </p>

            </h3>
        </div>

    )
}

export default ForecastCard;
