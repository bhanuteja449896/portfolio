import './App.css';

import Home from './components/Home';
import About from './components/About';
import TechIKnow from './components/TechIKnow';
import Coding from './components/Coding'

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <TechIKnow/>
      <Coding/>
    </div>
  );
}

export default App;