
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import { MainContent } from './components/MainContent';
import { Slider } from './components/Slider';
function App() {
  return (
    <div>
    <Navbar />
    <Hero />
    <MainContent />
    <Slider />
    </div>
  );
}

export default App;
