import React from 'react'
import { useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import Loading from '../layout/Loading'
import {FaT, FaUsers} from 'react-icons/fa6'
import { FaBuildingUser } from 'react-icons/fa6'
import { FaLocationDot } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa6'
import { FaLink } from 'react-icons/fa6'


function User() {
  const {user,fetchuser,loading} = useContext(GithubContext)
  const params = useParams();
  const username = params.login
  useEffect(()=>{
   fetchuser(username);
  },[])
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    company,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user

  return (
    <div className='flex flex-col h-full' style={{color:'#e6edf6'}}>
      <div className='self-start w-full' style={{height:'10vh',backgroundColor:'#010409'}}></div>
      <div className='grid' style={{gridTemplateColumns:'3fr 7fr',backgroundColor:'#0D1117'}}>
        <div className=' ml-32 my-10'>
        <div className="avatar">
          <div className="w-full rounded-full">
            <img src={`${avatar_url}`} />
          </div>
        </div>
        <div className="mt-5 text-xl font-bold leading-4">{name}</div>
        <div className="text-md mb-3 font-light">{login}</div>
        <div className='flex gap-2'>
          <button className="btn btn-ghost w-24 border-slate-400 h-8 min-h-0">Follow</button>
          <button className="btn px-2 py-0 border-slate-400 h-8 min-h-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 " fill="none" viewBox="0 0 24 24" stroke="#E75480"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            Sponsor
          </button>
        </div>
        <div className=" mt-6 text-sm">{bio}</div>
        <div className='my-4 flex'>
          <FaUsers/>
          <div className="mx-1 font-bold text-xs">{followers/1000}k</div>
          <div className="text-xs">followers</div>
          <div className="mx-1 font-bold text-xs">{following}</div>
          <div className="text-xs">following</div>
        </div>
        <div className='text-xs'>
          <div className='flex gap-1'>
            <FaBuildingUser className='my-auto'/>{company}
          </div>
          <div className='flex gap-1'>
            <FaLocationDot className='my-auto'/>{location}
          </div>
          <div className='flex gap-1'>
            <FaLink className='my-auto'/>{blog}
          </div>
          <div className='flex gap-1'>
            <FaTwitter className='my-auto'/>{twitter_username}
          </div>
        </div>
        </div>

        <div className='mt-10 ml-6 mr-32'>
          <div className="text-sm">Popular repositories</div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='border border-slate-500 rounded-md'>a</div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default User
