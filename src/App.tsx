import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </BrowserRouter>
  )
}

export default App;

