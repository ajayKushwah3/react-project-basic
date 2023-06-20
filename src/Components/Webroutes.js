import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Allemployee from './Pages/Allemployee'
import Ourwork from './Pages/Ourwork'
import Works from './Pages/Works'
import {Route, Routes } from 'react-router-dom';
const Webroutes = () => {
 
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/allemployee" element={<Allemployee />}></Route>
        <Route path="/ourwork" element={<Ourwork />}></Route>
        <Route path="/work" element={<Works />}></Route>
    </Routes>
         
    </>
  )
}

export default Webroutes
