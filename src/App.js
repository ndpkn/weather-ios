import Slider from "react-slick";
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Moscow from './pages/moscow/Moscow';
import Rostov from './pages/rostov/Rostov';
import Dubai from "./pages/dubai/Dubai";

function App() {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="App">
        <Slider {...settings}>
          <Rostov cityName = "Rostov-on-Don"/>
          <Moscow cityName = "Moscow"/>
          <Dubai cityName = "Dubai"/>
        </Slider>
    </div>
  );
}

export default App;
