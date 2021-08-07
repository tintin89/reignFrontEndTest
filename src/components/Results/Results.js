import React,{useEffect} from 'react';
import './Results.css';
import {useSelector} from 'react-redux'; 
import Element from './Element/Element';


const mapState=(myStateApp)=>({
    posts:myStateApp.posts
})

function Results() {
    const {posts} = useSelector(mapState);




    return (
        
        <div className="results">
           {
               
               posts.map((e,index)=>(
                   <Element key={index} {...e}/>
               ))
           }
        </div>
    )
}

export default Results
