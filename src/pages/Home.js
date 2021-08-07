import React from 'react'
import '../App.css';
import Results from '../components/Results/Results';
import {useSelector} from 'react-redux';  
import Dropdown from '../components/Dropdown/Dropdown';

const mapState = (myStateApp)=>({
    posts:myStateApp.posts
})



function Home() {
    const {posts} = useSelector(mapState);
    return (   
        <>
        <Dropdown/>
        <main>               
         <Results arr={posts}/>    
      </main>
      
        </>
       
    )
}

export default Home
