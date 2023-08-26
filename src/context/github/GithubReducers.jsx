export default function GithubReducer(state,action){
  switch(action.type){
    case 'GET_USERS':
      return{
        ...state,users:action.payload,loading:false
      }
      break;
    case 'SET_LOADING':
      return{
        ...state,loading:true
      }
      break;
    case 'GET_USER':
      return {
        ...state,user:action.payload,loading:false
      }
      break
    case 'CLEAR_USERS':
      return{
        ...state,users:[]
      }
      break
  }
}