import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home';
import Moon from './components/Destination/Moon'
import Titan from './components/Destination/Titan';
import Mars from './components/Destination/Mars';
import Europa from './components/Destination/Europa'
import Commander from './components/Crew/Commander';
import MissionEspecialist from './components/Crew/MissionEspecialist';
import Pilot from './components/Crew/Pilot';
import Engineer from './components/Crew/FlightEngineer';
import Vehicle from './components/Technology/LaunchVehicle'
import Spaceport from './components/Technology/Spaceport';
import Capsule from './components/Technology/Capsule';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/destination' element={<Moon />} />
          <Route path='/destination/mars' element={<Mars />} />
          <Route path='/destination/europa' element={<Europa />} />
          <Route path='/destination/titan' element={<Titan />} />
          <Route path='/crew' element={<Commander />} />
          <Route path='/crew/mark' element={<MissionEspecialist />} />
          <Route path='/crew/victor' element={<Pilot />} />
          <Route path='/crew/anousheh' element={<Engineer />} />
          <Route path='/technology' element={<Vehicle />} />
          <Route path='/technology/spaceport' element={<Spaceport />} />
          <Route path='/technology/space-capsule' element={<Capsule />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
