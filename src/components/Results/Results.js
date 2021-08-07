import React from 'react';
import './Results.css';
import Element from './Element/Element';





function Results(props) {  
   
    return (
        
        <div className="results">
           {
               
               props.arr?.map((e)=>(
                   <Element key={e.id} {...e} index/>
               ))
           }
        </div>
    )
}

export default Results
