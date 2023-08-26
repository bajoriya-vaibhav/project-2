import { useReducer } from "react";
import { createContext} from "react";
import GithubReducer from "./GithubReducers";

const GithubContext = createContext()

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GIHUB_TOKEN;

export const GithubProvider = ({children})=>{
  const initialState = {
    users:[],
    user:{},
    repos:[],
    loading:false
  }
  const [state,dispatch] = useReducer(GithubReducer,initialState)

  const setLoading = ()=>{
    dispatch({type:'SET_LOADING'})
  }
  const searchusers = async ({text})=>{
    setLoading();
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    const params = new URLSearchParams({
      q: text
    })
    const response =await fetch(`${import.meta.env.VITE_GITHUB_URL}/search/users?${params}`,{
    })
    const {items} = await response.json();
    dispatch({
      type:'GET_USERS',
      payload:items
    })
  }
  const fetchuser = async (login)=>{
    setLoading();
    const response =await fetch(`${import.meta.env.VITE_GITHUB_URL}/users/${login}`
    )
    if(response.status === 404) {window.location = '/notfound'}
    const data = await response.json();
    dispatch({
      type:'GET_USER',
      payload:data
    })
  }
  const fetchrepos = async (login)=>{
    setLoading();
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    // const params = new URLSearchParams({
    //   sort:'created',
    //   per_page:6,
    // })
    const response =await fetch(`${import.meta.env.VITE_GITHUB_URL}/users/${login}/repos?q=sort=stars&order=desc&per_page=6`,{
    }
    )
    const data = await response.json();
    dispatch({
      type:'GET_REPOS',
      payload:data
    })
  }
  const clearusers = () =>{
    dispatch({type:'CLEAR_USERS'})
  }


  return(
    <GithubContext.Provider value={{users:state.users,user:state.user,repos:state.repos,loading:state.loading,searchusers,clearusers,fetchuser,fetchrepos}}>{children}</GithubContext.Provider>
  )
}

export default GithubContext