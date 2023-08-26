import React from 'react'
import {Link} from 'react-router-dom'

function Notfound({location}) {
  return (
    <div className='h-full w-full m-0 flex items-center justify-end'>
      <img src={`${location.origin}/img/not-found2.jpg`} className='object-contain h-full w-full opacity-50'/>
      <div className='absolute z-1 ' style={{marginRight:'20vw'}}>
      <Link to='/' className='btn glass text-3xl p-2'>Back to Home</Link>
      </div>
    </div>
  )
}

export default Notfound
