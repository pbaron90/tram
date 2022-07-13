import './slider.scss'
import Carousel from 'better-react-carousel';
import Compare from '../compare/Compare';


const Slider = () => {

  return (
    <div className='carousel-container'>
      <div className="carousel">
        <Carousel autoplay={3000} cols={4} rows={1} gap={25} loop={true} >
      <Carousel.Item>
        <Compare />
      </Carousel.Item>
      <Carousel.Item>
        <Compare />
      </Carousel.Item>
      <Carousel.Item>
        <Compare />
      </Carousel.Item>
      <Carousel.Item>
      <Compare />
      </Carousel.Item>
    </Carousel>
      </div>
    </div>

  )
}

export default Slider