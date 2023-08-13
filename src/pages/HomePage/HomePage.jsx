import SideView from '../../views/SideView';
import HighlightWeather from '../../views/HighlightWeather/HighlightWeather';
import './Home.style.css'


const HomePage = () => {
  return (
    <div className="homePage">
      <SideView />
      <HighlightWeather />
    </div>
  )
}

export default HomePage
