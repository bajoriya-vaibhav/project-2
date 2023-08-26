import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Usercard({user:{login,avatar_url}}) {
  return (
    <div className='card card-side shadow-xl compact bg-base-100'>
      <div className="flex-row items-center space-x-5 card-body">
      <div className="avatar">
        <div className="w-16 h-16 rounded-full ring ring-neutral-content ring-offset-base-100 ring-offset-2">
          <img src={`${avatar_url}`} />
        </div>
      </div>
      <div>
        <h2 className='card-title'>{login}</h2>
        <Link to={`/user/${login}`} >View Profile</Link>
      </div>
      </div>
    </div>
  )
}

export default Usercard
