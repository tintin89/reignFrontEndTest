import React from 'react'
import '../App.css';
import Results from '../components/Results/Results';
import Footer from '../components/Footer/Footer';
import {useSelector} from 'react-redux';  

const mapState = (myStateApp)=>({
    posts:myStateApp.posts
})



function Home() {
    const {posts} = useSelector(mapState);
    return (   
        <>
        <main>               
         <Results arr={posts}/>    
      </main>
      
        </>
       
    )
}

export default Home
