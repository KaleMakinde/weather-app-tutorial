import React, { useState } from 'react'
import CurrentWeather from './CurrentWeather'
import WeatherSearch from './WeatherSearch'

const SideView = () => {

  const [isSearch, setIsSearch] = useState(true)
  
  return (

    <div>

      {isSearch ? <CurrentWeather /> : <WeatherSearch />}

      {/* {isSearch && <WeatherSearch />}
      {!isSearch && <CurrentWeather />} */}


    </div>
  )
}

export default SideView
