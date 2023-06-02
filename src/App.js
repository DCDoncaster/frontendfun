// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuBar from './Components/MenuBar';
import Home from './Components/Home';
import Jokes from './Components/Jokes';
import Reader from './Components/Reader';
import NotFound from './Components/NotFound';


function App() {
  return (
<>
<MenuBar />
<BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<NotFound />} />
          <Route path="/frontendfun" element={<Reader />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Jokes" element={<Jokes />} />
          <Route path="/Reader" element={<Reader />} />
        </Routes>
      </BrowserRouter>

</>

  );
}

export default App;
