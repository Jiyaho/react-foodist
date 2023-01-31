import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';

function App() {
  return (
    // <Router basename={process.env.PUBLIC_URL}>
    <Router>
      <Routes>
        <Route path="/react-foodist" element={<Home />} />
        <Route path="/react-foodist/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App;

