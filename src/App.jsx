import React from 'react'  
import {BrowserRouter,Route ,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Project from './component/Home/Project'
import Contact from './pages/Contact'
// import { useRef } from 'react'
// import About from './pages/About'



function App() {
  return (
    <div>
      <Routes>
      
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Project' element={<Project/>} />
        <Route path='/contact' element={<Contact/>} />



      
      </Routes>
    </div>
  )
}

export default App
