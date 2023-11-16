
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import { MainContent } from './components/MainContent';
import { BossSlider } from './components/BossSlider';
function App() {
  return (
    <div>
    <Navbar />
    <Hero />
    <MainContent />
    <BossSlider />
    </div>
  );
}

export default App;
