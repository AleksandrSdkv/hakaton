
import './App.css';
import GuideBase from './components/GuideBase/GuideBase';
import { Routes, Route } from 'react-router-dom';
import RoadMap from './components/RoadMap/RoadMap';
import Test from './components/Test/Test';

function App() {


  return (

    <Routes>
      <Route path="/" element={<GuideBase />} />
      <Route path="/map" element={<RoadMap />} />
      <Route path="/test" element={<Test />} />
    </Routes>

  );
}

export default App;
