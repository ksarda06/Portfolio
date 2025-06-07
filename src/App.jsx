import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Herosection from '../Components/Herosection'
import About from '../Components/About'
import Experience from '../Components/Experience'
import Portfolio from '../Components/Portfolio'
import Technolgies from '../Components/Technolgies'
import Achievement from '../Components/Achievement'
import Contactme from '../Components/Contactme'
//import Hero_Section from './Components/Hero_Section'
function App() {
  return (
    <>
     <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1c] to-[#1a0a00] text-white font-sans">
      <Herosection></Herosection>
      <About></About>
      <Achievement></Achievement>
      <Portfolio></Portfolio>
      <Technolgies></Technolgies>
      <Experience></Experience>
      <Contactme></Contactme>
     </div>
    </>
  )
}

export default App
