import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CaretreeIntroduce from './pages/CaretreeIntroduce';
import DataVisualization from './pages/DataVisualization';
import Ginkgo from './pages/Ginkgo';
import KingCherry from './pages/KingCherry';
import PineTree from './pages/PineTree';
import PoplarTree from './pages/PoplarTree';
import Zelkova from './pages/Zelkova';
import Doughnut from './pages/Doughnut';
import Chart from './pages/Chart';
import LineGraph from './pages/LineGraph';
import './App.css';
import Map from './pages/Map';
import loadable from '@loadable/component';
import Form from './pages/Form';
import MostTree from './pages/MostTree';
//import ApricotTree from './pages/ApricotTree';

const ApricotTree = loadable(() => import('./pages/ApricotTree'));

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/map" element={<Map />} />
          <Route path="/caretreeintroduce" element={<CaretreeIntroduce />} />
          <Route path="/datavisualization/chart" element={<Chart />} />
          <Route path="/datavisualization/mosttree" element={<MostTree />} />
          <Route path="/datavisualization/linegraph" element={<LineGraph />} />
          <Route path="/datavisualization/doughnut" element={<Doughnut />} />
          {/* 살구나무 */}
          <Route path="/apricottree" element={<ApricotTree />} />
          {/* 은행나무 */}
          <Route path="/ginkgo" element={<Ginkgo />} />
          {/* 왕벚나무 */}
          <Route path="/kingcherry" element={<KingCherry />} />
          {/* 소나무 */}
          <Route path="/pinetree" element={<PineTree />} />
          {/* 이팝나무 */}
          <Route path="/poplartree" element={<PoplarTree />} />
          {/* 느티나무 */}
          <Route path="/zelkova" element={<Zelkova />} />

          <Route path="/datavisualization" element={<DataVisualization />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
