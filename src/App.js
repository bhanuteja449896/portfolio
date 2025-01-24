import './App.css';

import Home from './components/Home';
import About from './components/About';
import TechIKnow from './components/TechIKnow';
import Coding from './components/Coding';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Qrcode from "./components/Qrcode";

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <TechIKnow/>
      <Coding/>
      <Resume/>
      <Portfolio/>
      <Qrcode/>
    </div>
  );
}

export default App;