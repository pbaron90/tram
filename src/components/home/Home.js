import './home.scss'
import { Book, Navbar } from '../../components'

const Home = () => {
  return (
    <div className="__home-container">
      <div className="__home-intro">
        <h1>Hi Im Tram <br />
            your <br />
            Makeup Artist</h1>
      </div>
      <div className="__home-menu">
        <Navbar />
      </div>
      <Book className="book" />
    </div>
  )
}

export default Home