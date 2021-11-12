import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ApricotTree from './pages/ApricotTree';
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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/caretreeintroduce" element={<CaretreeIntroduce />} />
          <Route path="/datavisualization/chart" element={<Chart />} />
          <Route path="/datavisualization/linegraph" element={<LineGraph />} />
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
          <Route
            exact
            path="/datavisualization/doughnut"
            element={<Doughnut />}
          />
          <Route path="/datavisualization" element={<DataVisualization />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
