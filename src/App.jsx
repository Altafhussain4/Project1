import React from 'react'
import Sidebar from './component/Sidebar'
import Home from './component/Home'
import About from './component/About'
import Photos from './component/Photos'
import Contact from './component/Contact'
import { Routes, Route } from 'react-router-dom';
function App() {


  return (
    <>
    <div className='bg-black h-full'>
    {/* <Sidebar/>
    <Home/>
    <About/>
    <Photos/> */}
    <Sidebar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/photos" element={<Photos/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </div>

    
    </>
  )
}

export default App
