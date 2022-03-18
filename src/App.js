import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home'
import Sobre from "./components/Sobre/Sobre";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
      </Routes>
    </div>
  );
}

export default App;
