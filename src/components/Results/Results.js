import React from 'react';
import './Results.css';
import {useSelector} from 'react-redux'; 
import Element from './Element/Element';
import { isFavorite } from '../../utility';


const mapState=(myStateApp)=>({
    posts:myStateApp.posts,
   
})

function Results(props) {
    const {posts} = useSelector(mapState);


   
    let arr = props.myFavs ? posts.filter(e=>isFavorite(e.title) && e) : posts;
    return (
        
        <div className="results">
           {
               
               arr.map((e,index)=>(
                   <Element key={index} {...e}/>
               ))
           }
        </div>
    )
}

export default Results
