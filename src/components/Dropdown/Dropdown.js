import React,{useState,useEffect} from 'react';
import './Dropdown.css';
import react from '../../assets/react.png'
import angular from '../../assets/angular.png';
import vue from '../../assets/vue.png';
import { useSelector,useDispatch} from 'react-redux';
import {updateQuery} from '../../store/actions';

const mapState = (myStateApp) =>({
   query:myStateApp.query
})


const options = [{tag:"Angular",img:angular},{tag:"Reactjs",img:react},{tag:"Vuejs",img:vue}];

function Dropdown() {
    const dispatch = useDispatch();
    const {query} = useSelector(mapState);
    const [show,setShow] = useState(false);
    const [selected,setSelected] = useState({tag:"Select your news",img:""});


    useEffect(() => {       
       setSelected(query);
    }, [query])


    const handleSetShow = () =>{
        setShow(prevState=>!prevState)
    }

    const handleFilter = (e) =>{        
            setSelected(e);
            sessionStorage.setItem("query",JSON.stringify(e));
            dispatch(updateQuery(e));
            return handleSetShow();
      }

    return (
        <div className="dropdown__container">
            <div onClick={()=>handleSetShow()} className="dropdown">
                <div className="dropdown__selected">
                {selected?.img!=="" && <img alt={selected?.tag} src={selected?.img}/>}
                <span>{selected?.tag}</span>
                </div>
                <div className={`Arrow ${show && "upArrow"}`}></div>
            </div>
            <ul style={{display:show ? "flex" : "none"}} className="dropdownList">
              {
                  options.map((e,index)=>
                 selected?.tag!==e.tag && <li onClick={()=>handleFilter(e)} key={index}>
                   <img alt={e.tag} src={e.img}/>
                   <span>{e.tag}</span>
                  </li>
                  )
              }               
            </ul>
        </div>
    )
}

export default Dropdown
