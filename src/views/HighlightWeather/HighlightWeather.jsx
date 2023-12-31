
import ModSleetSwrsDay from '../../assets/weather-app-master/ModSleetSwrsDay.png';
import PartCloudRainThunderDay from '../../assets/weather-app-master/PartCloudRainThunderDay.png';
import LightCloud from '../../assets/weather-app-master/LightCloud.png';
import ModRain from '../../assets/weather-app-master/LightCloud.png';
import './highlight.styles.css'

import Navigation from '../../assets/svgs/navigation';
import ForecastCard from './ForecastCard';


const HighlightWeather = () => {
    return (
        <div className='HighlightWeather'>
            <div className='forecast-card'>
                <ForecastCard
                    day={'Tomorrow'}
                    temp={{ celts: '16°C', f: '11°C' }}
                    Image={ModSleetSwrsDay}
                />
                <ForecastCard
                    day={'Sun, 7 Jun'}
                    temp={{ celts: '16°C', f: '18°C' }}
                    Image={ModSleetSwrsDay} />

                <ForecastCard
                    day={'Mon, 8 Jun'}
                    temp={{ celts: '16°C', f: '11°C' }}
                    Image={PartCloudRainThunderDay} />

                <ForecastCard
                    day={'Tue, 9 Jun'}
                    temp={{ celts: '16°C', f: '10°C' }}
                    Image={LightCloud} />

                <ForecastCard
                    day={'Wed, 10 Jun'}
                    temp={{ celts: '16°C', f: '12°C' }}
                    Image={ModRain} />


            </div>

            <div className='weatherHighlight'>
                <div className='weatherHighlighttext'>
                    <h1 className='highlightText'>
                        Today's Hightlights
                    </h1>
                </div>

                <div className='HighlightCard'>

                    <div className='HighlightCard1'>

                        <h1 className='card-text'>Wind status</h1>
                        <p className='card-desc'>7<span className='card-desc-temp'>mph</span></p>
                        <h3 className='card-section'>
                            <p className='card-nav'><Navigation /></p>
                            <p className='card-nav-text'>WSW</p>
                        </h3>
                    </div>

                    <div className='HighlightCard2'>

                        <h1 className='card-text'>Humidity</h1>

                        <p className='card-desc'>84<span className='card-desc-temp'>%</span></p>

                        <div className='wrapper'>

                            <div className='card-wrap-num'>
                                <p className='card-text-num'>0</p>
                                <p className='card-text-num1'>50</p>
                                <p className='card-text-num2'>100</p>
                            </div>

                            <div className='rectangle'></div>
                            <div className='rectangle1'></div>
                            <p className='card-text-num3'>%</p>

                        </div>

                    </div>

                    <div className='HighlightCard3'>
                        <h1 className='card-text'>Visibility</h1>
                        <p className='card-desc1'>6,4 <span className='card-desc-temp'>miles</span></p>
                    </div>


                    <div className='HighlightCard4'>

                        <h1 className='card-text'>Air Pressure</h1>
                        <p className='card-desc1'>998 <span className='card-desc-temp'>mb</span></p>
                    </div>

                </div>

                <div className='hightlight-info'>
                    <h1 className='info-text'>created by Kale Makinde - devChallenges.io</h1>
                </div>

            </div>


        </div>
    )
}

export default HighlightWeather;
