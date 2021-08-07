import * as actionTypes from './actionTypes';



const initialState = {
  posts:[],
  favorites:[],
  query:sessionStorage.getItem("query") ? JSON.parse(sessionStorage.getItem("query")) : {tag:"Select your news",img:""}

};


const myStateApp = (state=initialState,action)=>{
    switch (action.type) {

      case actionTypes.UPDATE_POSTS:
      return {
        ...state,
        posts:action.payload
      }
      case actionTypes.UPDATE_FAVS:
        return {
          ...state,
          favorites:action.payload
        }

      case actionTypes.UPDATE_QUERY:
        return {
          ...state,
          query:action.payload
        }  

       default:
            return state
    }
}

export default myStateApp;