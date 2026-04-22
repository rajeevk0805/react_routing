import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex  items-center justify-start gap-10 px-20 bg-white border-b-2 border-gray-400 shadow-md py-4 fixed top-0 left-0 right-0 z-10 '>
      <h1 className='font-bold text-black text-2xl'><span className='text-yellow-300 text-3xl font-bold'>K</span>odNest</h1>
      <div>
        <ul className='flex gap-10 text-black text-md font-bold'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/practice">Practice</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar