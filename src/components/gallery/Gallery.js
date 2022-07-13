import './gallery.scss'
import { Book, Compare  } from '../../components'


const Gallery = () => {
  return (
    <div className="__gallery-container">
      <div className="__gallery-slider">
       <Compare />
      </div>
      <div className="__gallery-text">
        <h1>Description of Slider</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non officia alias excepturi magnam neque fugiat perspiciatis. Molestias alias ea voluptatem.</p>
      </div>
      <div className="book">
        <Book />
      </div>
   
    </div>
    )
}

export default Gallery