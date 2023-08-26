import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import {FaTerminal} from 'react-icons/fa'
import GithubContext from '../../context/github/GithubContext'
import Loading from '../layout/Loading'
import Usercard from '../users/Usercard'

function UserSearch() {
  const [text,setText] = useState('')
  const{users,loading,searchusers,clearusers} = useContext(GithubContext)
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(text.length === 0) alert('enter atleast one character')
    else searchusers({text})
    setText('')
  }
  const handleChange = (e)=>{
    setText(e.target.value);''
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className='flex'>
      <div className="join m-auto">
        <input onChange={handleChange} value={text} style={{width:"30vw"}} className="input input-bordered join-item" placeholder="Search"/>
        <button type='submit' className="btn join-item rounded-r">
          <FaTerminal/>
        </button>
        {users.length !==0 && <button onClick={clearusers} className="btn btn-md btn-ghost">clear</button>}
      </div>
    </div>
    </form>
    <div>
      {loading?<Loading/>:<div className='m-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center'>
        {users.map((user)=><h3 key={user.id}><Usercard user={user}></Usercard></h3>)}
        </div>}
    </div>
    </>
  )
}

export default UserSearch
