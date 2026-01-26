import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './Pages/Navbar/Navbar'
import Footer from './Pages/Footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'

function App() {
 

  return (
    <>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />

    </Routes>


    <Footer/>
    
    </>
  )
}

export default App
