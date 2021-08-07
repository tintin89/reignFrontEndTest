import * as actionTypes from './actionTypes';



const initialState = {
  posts:[],
  favorites:[],

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

       default:
            return state
    }
}

export default myStateApp;