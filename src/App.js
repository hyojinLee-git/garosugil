import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CaretreeIntroduce from './pages/CaretreeIntroduce';
import DataVisualization from './pages/DataVisualization';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/caretreeintroduce" element={<CaretreeIntroduce />} />
          <Route path="/datavisualization" element={<DataVisualization />} />
        </Routes>
      </Router>
      hi
      {/* <CaretreeIntroduce />
      <DataVisualization /> */}
    </div>
  );
}

export default App;
