
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Reserve from './Components/Reserve/Reserve';
import Carta from './Components/Carta/Carta';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/carta" element={<Carta />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

