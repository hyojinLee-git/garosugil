import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CaretreeIntroduce from './pages/CaretreeIntroduce';
import DataVisualization from './pages/DataVisualization';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/caretreeintroduce">introduce</Link>
        <br />
        <Link to="/datavisualization">datavisualization</Link>
        <Routes>
          <Route path="/caretreeintroduce" element={<CaretreeIntroduce />} />
          <Route path="/datavisualization" element={<DataVisualization />} />
        </Routes>
      </Router>
      {/* <CaretreeIntroduce />
      <DataVisualization /> */}
    </div>
  );
}

export default App;
