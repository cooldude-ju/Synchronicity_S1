

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import About from './components/About';
import Future from './components/Future';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path='/about' element={<About />} />
        <Route path='/future' element={<Future />} />
      </Routes>
  );
}

export default App;