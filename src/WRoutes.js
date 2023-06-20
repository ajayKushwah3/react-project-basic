import React from 'react'
import Dashboard from './Components/Dashboard/Dashboard'
import Leaderboards from './Components/Leaderboards/Leaderboards'
import Welcome from './Components/Welcome/Welcome';
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import {Route, Routes } from 'react-router-dom';
const WRoutes = () => {
 
  return (
    <>
    <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/leaderboards" element={<Leaderboards />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/" element={<Welcome />}></Route>
    </Routes>
         
    </>
  )
}

export default WRoutes
