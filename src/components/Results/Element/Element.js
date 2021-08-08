import React,{useState} from 'react';
import './Element.css';
import favEmpty from '../../../assets/iconmonstr-favorite-2.svg';
import favfull  from '../../../assets/iconmonstr-favorite-3.svg';
import clock from '../../../assets/iconmonstr-time-2.svg';
import { isFavorite } from '../../../utility';
import {useDispatch,useSelector} from 'react-redux';
import {updateFavorites} from '../../../store/actions';
import moment from 'moment';

const mapState = (myStateApp)=>({
    favorites:myStateApp.favorites
})

function Element({title,id,created,author}) {   
    const {favorites} = useSelector(mapState);
    const dispatch = useDispatch();
    const [fav,setFav] = useState(localStorage.getItem("favorites") ? isFavorite(id) : false);

    const handleFavorite = ()=>{        
        const favTemp = favorites;
        if(!fav){
            setFav(true);            
            favTemp.push({title,id,created,author})
            localStorage.setItem("favorites",JSON.stringify(favTemp));
            dispatch(updateFavorites(favTemp));
        }else{
            setFav(false);
            localStorage.setItem("favorites",JSON.stringify(favTemp.filter(e=>e.id!==id)));
            const filterFav = favTemp.filter(e=>e.id!==id);
            dispatch(updateFavorites(filterFav));         
        }
        
        
    }
    
    
    return (
        <div  className="element">
           <div className="info">
                <div className="timeInfo">
                 <img alt="clock" src={clock}/>
                 <span>{created+" by "+author}</span>
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
