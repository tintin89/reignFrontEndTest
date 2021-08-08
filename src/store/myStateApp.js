import * as actionTypes from './actionTypes';



const initialState = {
  posts:[],
  favorites:localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [],
  query:sessionStorage.getItem("query") ? JSON.parse(sessionStorage.getItem("query")) : {tag:"Select your news",img:""},
  page:0,
  scrolling:false,
  loading:false
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

      case actionTypes.UPDATE_PAGE:
        return {
          ...state,
          page:state.page+1,
          scrolling:true
        }  

      case actionTypes.UPDATE_LOADING:
        return {
          ...state,
          loading:action.payload
        }

       default:
            return state
    }
}

export default myStateApp;