import { useState } from 'react'
import {  Routes, Route } from "react-router-dom";
import Home from './pages/Home';


// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard';

function App() {
 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
