import React,{useState} from 'react';
import './Element.css';
import favEmpty from '../../../assets/iconmonstr-favorite-2.svg';
import favfull  from '../../../assets/iconmonstr-favorite-3.svg';
import clock from '../../../assets/iconmonstr-time-2.svg';

function Element(props) {
    const [fav,setFav] = useState(false);

    
    
    return (
        <div  className="element">
           <div className="info">
                <div className="timeInfo">
                 <img src={clock}/>
                 <span>{props.created}</span>
                </div>
               <h3>{props.title}</h3>
           </div>
           <div onClick={()=>setFav(prevState=>!prevState)} className="favs">
           <img  src={fav ? favfull : favEmpty}/>
           </div>
        </div>
    )
}

export default Element
