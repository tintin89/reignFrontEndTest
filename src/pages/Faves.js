import React from 'react'
import Results from '../components/Results/Results';
import {useEffect,useState} from 'react';  
import {useSelector} from 'react-redux';  


const mapState = (myStateApp)=>({
    favorites:myStateApp.favorites
})

function Faves() {
  const {favorites} = useSelector(mapState);
  const [favs,setFavs]=useState([]);


  useEffect(() => {    
    setFavs(favorites);
  },[favorites])
  
    return (
       <Results arr={favs}/>
    )
}

export default Faves
