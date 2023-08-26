import React from 'react'
import {FaGithub} from 'react-icons/fa'
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='footer footer-center p-5 bg-gray-700 text-primary-content'>
      <FaGithub className='text-5xl'/>
      <p>Copyright &copy;{year}All rights reserved</p>
    </footer>
  )
}

export default Footer
