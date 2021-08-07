import * as actionTypes from './actionTypes';
import axios from 'axios';
import { isFavorite } from '../utility';


export const updatePost=(data)=>{
    return {
        type:actionTypes.UPDATE_POSTS,
        payload:data
    }
}

export const updateFavorites=(data)=>{
    return {
        type:actionTypes.UPDATE_FAVS,
        payload:data
    }
}

export const updateQuery = (query)=>{
    return {
        type:actionTypes.UPDATE_QUERY,
        payload:query
    }
}




export const fetchPosts=(query,page)=>{
    return dispatch=>{
     if(query!=="Select your news"){
         
        axios.get(` https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${page}`)
        .then(response=>{
         
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
                     id:e.objectID                  
                     }            
        ));         
           dispatch(updatePost(temp));
           dispatch(updateFavorites(temp.filter(e=>isFavorite(e.id) && e)));
           
        })
        .catch(error=>{
            console.log(error);
        })
     }
    }
}