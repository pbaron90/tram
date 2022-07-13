import { Home, About, Gallery, Book, Contact, Slider } from './components';
import './app.scss'

const App = () => {
  return (
    <div className="App">
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="gallery"><Gallery /></div>
      <div id="contact"><Contact /></div>
      <div id="slider"><Slider /></div>
    </div>
  );
}

export default App;