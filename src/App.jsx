
import './App.css'
import React from 'react';
import Homepage from './Homepage'
import Aboutme from './Aboutme'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {


  return (
    <Router>
     <Routes>
       <Route path="/" element ={<Homepage/>}/>
       <Route path="/about-me" element={<Aboutme/>}/>
       </Routes>
      </Router>
  )
}

export default App
