import React,{useState} from 'react';
import './Element.css';
import favEmpty from '../../../assets/iconmonstr-favorite-2.svg';
import favfull  from '../../../assets/iconmonstr-favorite-3.svg';
import clock from '../../../assets/iconmonstr-time-2.svg';
import { isFavorite } from '../../../utility';
import {useDispatch,useSelector} from 'react-redux';
import {updateFavorites} from '../../../store/actions';

const mapState = (myStateApp)=>({
    favorites:myStateApp.favorites
})

function Element({title,id,created,author}) {   
    const {favorites} = useSelector(mapState);
    const dispatch = useDispatch();
    const [fav,setFav] = useState(localStorage.getItem("favorites") ? isFavorite(id) : false);

    const handleFavorite = ()=>{
              
        const temp = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [];
        const favTemp = favorites;
        if(!fav){
            setFav(true);
            temp.push(id);
            favTemp.push({title,id,created,author})
            localStorage.setItem("favorites",JSON.stringify(temp));
            dispatch(updateFavorites(favTemp));
        }else{
            setFav(false);
            localStorage.setItem("favorites",JSON.stringify(temp.filter(e=>e!==id && e)));
            const filterFav = favTemp.filter(e=>e.id!==id)
            dispatch(updateFavorites(filterFav));
         
        }
        
        
    }
    
    
    return (
        <div  className="element">
           <div className="info">
                <div className="timeInfo">
                 <img alt="clock" src={clock}/>
                 <span>{created}</span>
                </div>
               <h3>{title}</h3>
           </div>
           <div onClick={()=>handleFavorite()} className="favs">
           <img alt="title"  src={fav ? favfull : favEmpty}/>
           </div>
        </div>
    )
}

export default Element
