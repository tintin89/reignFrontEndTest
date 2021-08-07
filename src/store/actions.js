import * as actionTypes from './actionTypes';
import axios from 'axios';


export const updatePost=(data)=>{
    return {
        type:actionTypes.UPDATE_POSTS,
        payload:data
    }
}




export const fetchPosts=(query,page)=>{
    return dispatch=>{
       axios.get(` https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${page}`)
       .then(response=>{
          console.log(response.data);
          const temp = response.data.hits.filter(e=>{
            if(e.author!==null&&e.story_title!==null&&e.story_url!==null&&e.created_at!==null){
                return e;
            }else return false
          }).map(e=>(                                 
                   {
                    author:e.author,
                    title:e.story_title,
                    url:e.story_url,
                    created:e.created_at,                    
                    }            
       ));         
          dispatch(updatePost(temp));
       })
       .catch(error=>{
           console.log(error);
       })
    }
}