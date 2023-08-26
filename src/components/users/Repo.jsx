import React from 'react'
import { FaCodeFork, FaRegStar } from 'react-icons/fa6'

function Repo({repo}) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
    visibility,
  } = repo
  console.log(repo)
  return (
    <div className='border border-slate-500 rounded-md text-xs p-4 flex flex-col justify-between' style={{color:"#7D8590"}}>
      <div className='flex justify-between overflow-hidden flex-wrap	'>
        <a href={`${html_url}`} className='text-blue-500'>{name}</a>
        <div className='border border-slate-500 rounded-full px-1' style={{fontSize:'10px'}}>{visibility}</div>
      </div>
      <div className='my-2' style={{fontSize:'13px'}}>{description}</div>
      <div className='flex gap-2 items-center'>
        <FaRegStar/>
        <div className='mr-5'>{stargazers_count}</div>
        <FaCodeFork/>
        <div>{forks}</div>
      </div>
    </div>
  )
}

export default Repo
