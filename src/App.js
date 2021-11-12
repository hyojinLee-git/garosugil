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

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Link to="/apricottree">apricottree</Link>
        <br />
        <Link to="/ginkgo">ginkgo</Link>
        <br />
        <Link to="/kingcherry">kingcherry</Link>
        <br />
        <Link to="/pinetree">pinetree</Link>
        <br />
        <Link to="/poplartree">poplartree</Link>
        <br />
        <Link to="/zelkova">zelkova</Link>
        <br />
        <Link to="/datavisualization/doughnut">doughnut</Link>
        <br />
        <Link to="/datavisualization">datavisualization</Link>
        <br /> */}
        <Routes>
          <Route path="/caretreeintroduce" element={<CaretreeIntroduce />} />
          <Route path="/datavisualization" element={<DataVisualization />} />
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
