import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuBar from './Components/MenuBar';
import Home from './Components/Home';
import Knights from './Components/Knights';

function App() {
  return (
<>
<MenuBar />
<BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/player1" element={<Knights />} />
          
        </Routes>
      </BrowserRouter>

</>

  );
}

export default App;
