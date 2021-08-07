import React,{useState} from 'react';
import './Dropdown.css';
import react from '../../assets/react.png'
import angular from '../../assets/angular.png';
import vue from '../../assets/vue.png';



const options = [{tag:"Angular",img:angular},{tag:"Reactjs",img:react},{tag:"Vuejs",img:vue}];

function Dropdown() {
    const [show,setShow] = useState(false);
    const [selected,setSelected] = useState({tag:"Select your news",img:""});



    const handleSetShow = () =>{
        setShow(prevState=>!prevState)
    }

    return (
        <div className="dropdown__container">
            <div onClick={()=>handleSetShow()} className="dropdown">
                <div className="dropdown__selected">
                {selected.img!=="" && <img alt={selected.tag} src={selected.img}/>}
                <span>{selected.tag}</span>
                </div>
                <div className="downArrow"></div>
            </div>
            <ul style={{display:show ? "flex" : "none"}} className="dropdownList">
              {
                  options.map((e,index)=>
                 selected.tag!==e.tag && <li onClick={()=>{
                      setSelected(e);
                      return handleSetShow();
                  }} key={index}>
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
