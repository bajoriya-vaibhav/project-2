import React from 'react'
import {Link} from 'react-router-dom'

function About() {
  return (
    <div className="m-10 bg-base-200">
      <div className="p-10 flex bg-neutral items-center justify-center text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Github Finder</h1>
          <p className="py-6">This is the utility-first UI component to find the github accounts with related repos and details</p>
          <Link to='/'>
            <button className="btn btn-neutral">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
