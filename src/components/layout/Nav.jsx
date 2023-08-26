import React from 'react'
import {NavLink} from 'react-router-dom'
import {FaGithub} from 'react-icons/fa'
function Nav() {
  return (
    <nav className='opacity-80 z-10 navbar sticky top-0 left-0 shawdow-lg flex bg-neutral text-neutral-content '>
      <div className='container mx-auto px-10'>
        <FaGithub className='text-2xl'/>
        <NavLink className='text-xl px-3 font-bold' to='/'>Github Finder</NavLink>
      </div>
      <div className='flex-1 justify-end'>
        <NavLink to='/' className='btn btn-ghost'>Home</NavLink>
        <NavLink to='/about' className='btn btn-ghost'>About</NavLink>
      </div>
    </nav>
  )
}

export default Nav
