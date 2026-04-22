import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Courses from './components/Courses'
import Practice from './components/Practice'

const App = () => {
  return (
    <div className='min-h-screen '>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/practice' element={<Practice />} />
    </Routes>
    </div>
  )
}

export default App