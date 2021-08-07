import * as actionTypes from './actionTypes';



const initialState = {
  posts:[],

};


const myStateApp = (state=initialState,action)=>{
    switch (action.type) {

      case actionTypes.UPDATE_POSTS:
      return {
        ...state,
        posts:action.payload
      }

       default:
            return state
    }
}

export default myStateApp;