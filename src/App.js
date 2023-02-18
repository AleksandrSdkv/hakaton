
import './App.css';
import GuideBase from './components/GuideBase/GuideBase';
import { Routes, Route } from 'react-router-dom';
import RoadMap from './components/RoadMap/RoadMap';


function App() {


  return (

    <Routes>
      <Route path="/" element={<GuideBase />} />
      <Route path="/map" element={<RoadMap />} />
    </Routes>

  );
}

export default App;
