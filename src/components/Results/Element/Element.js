import React,{useState} from 'react';
import './Element.css';
import favEmpty from '../../../assets/iconmonstr-favorite-2.svg';
import favfull  from '../../../assets/iconmonstr-favorite-3.svg';
import clock from '../../../assets/iconmonstr-time-2.svg';


import { isFavorite } from '../../../utility';

function Element(props) {
   
    const [fav,setFav] = useState(localStorage.getItem("favorites") ? isFavorite(props.title) : false);

    const handleFavorite = ()=>{
        setFav(prevState=>!prevState);        
        const temp = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [];
        if(!fav){
            temp.push(props.title);
            localStorage.setItem("favorites",JSON.stringify(temp));
        }else{
            localStorage.setItem("favorites",JSON.stringify(temp.filter(e=>e!==props.title && e)));
        }
        
        
    }
    
    
    return (
        <div  className="element">
           <div className="info">
                <div className="timeInfo">
                 <img alt="clock" src={clock}/>
                 <span>{props.created}</span>
                </div>
               <h3>{props.title}</h3>
           </div>
           <div onClick={()=>handleFavorite()} className="favs">
           <img alt="title"  src={fav ? favfull : favEmpty}/>
           </div>
        </div>
    )
}

export default Element
