// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuBar from './Components/MenuBar';
import Home from './Components/Home';
import Jokes from './Components/Jokes';
import Page2 from './Components/Page2';

function App() {
  return (
<>
<MenuBar />
<BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Jokes" element={<Jokes />} />
          <Route path="/player2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>

</>

  );
}

export default App;
