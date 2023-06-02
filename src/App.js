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
          <Route path="/frontendfun" element={<Home />}/>
          <Route path="/frontendfun/*" element={<NotFound />} />
          <Route path="/frontendfun/home" element={<Home />} />
          <Route path="/frontendfun/Jokes" element={<Jokes />} />
          <Route path="/frontendfun/Reader" element={<Reader />} />
        </Routes>
      </BrowserRouter>

</>

  );
}

export default App;
