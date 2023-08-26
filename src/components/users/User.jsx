import React from 'react'
import {NavLink} from 'react-router-dom'
import { useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { FaGithub, FaStar, FaUsers} from 'react-icons/fa6'
import { FaBuildingUser } from 'react-icons/fa6'
import { FaLocationDot } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa6'
import { FaLink } from 'react-icons/fa6'
import Repo from './Repo'

function User() {
  const {user,fetchuser,loading,repos,fetchrepos} = useContext(GithubContext)
  const params = useParams();
  const username = params.login
  useEffect(()=>{
   fetchuser(username);
   fetchrepos(username);
  },[])
  console.log(user)
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
      <div className='self-start w-full border-b border-slate-500' style={{backgroundColor:'#010409'}}>
        <div className="flex text-xs h-10">
          <label className="btn btn-circle swap swap-rotate border-none h-10" style={{backgroundColor:'#010409'}}>
            <input type="checkbox" style={{borderColor:'#010409'}}/>
            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
          </label>
          <FaGithub className='my-4 text-3xl relative -top-2'/>
          <a href={`${html_url}`} className='self-center	relative mx-4 font-semibold top-1'>{login}</a>
        </div>
        <div className='my-4 mx-20 flex text-xs font-semibold gap-10'>
          <NavLink to='#' style={isActive => ({color: isActive ? "green" : "blue"})}>Overview</NavLink>
          <NavLink to={`https://github.com/${login}?tab=repositories`}>Repositories({public_repos})</NavLink>
          <NavLink to={`https://github.com/${login}?tab=stars`} className='flex items-center gap-1 text-yellow-300'>
            <FaStar/>Stars({public_gists})
          </NavLink>
        </div>
      </div>
      <div className='grid' style={{gridTemplateColumns:'3fr 7fr',backgroundColor:'#0D1117'}}>
        <div className=' ml-32 my-10'>
        <div className="avatar">
          <div className="w-full rounded-full">
            <img src={`${avatar_url}`} alt='no avatar'/>
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
          <div className="text-sm mb-2">Popular repositories</div>
          <div className='grid grid-cols-2 gap-4'>
            {repos.map((repo)=><Repo key={repo.id} repo={repo}/>)}
          </div>
        </div>
      </div>  
    </div>
  )
}

export default User
