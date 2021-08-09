import React,{useRef,useCallback} from 'react';
import './Results.css';
import Element from './Element/Element';
import {updatePage} from '../../store/actions';
import {useHistory} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import Loader from '../Loader/Loader';

const mapState=(myStateApp)=>({

    loading:myStateApp.loading
})


function Results(props) {

  const {loading} = useSelector(mapState);    
  const dispatch = useDispatch();
  const history = useHistory();
  const observer = useRef();
  
  const lastElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      
      if (entries[0].isIntersecting) {
        dispatch(updatePage());      
      }
    })
    if (node) observer.current.observe(node)
  },[dispatch,loading])
   
    return (
        <>
        <div className="results">
           {
               
               props.arr?.map((e,index)=>{
                   if(index===props.arr.length-1 && history.location.pathname==="/"){
                       return <Element refProp={lastElementRef} key={e.id+index} {...e}/>
                   }
                   else return <Element key={e.id+index} {...e}/>

               })               
           }
          
        </div>
         {loading && <Loader/>}
         </>
    )
}

export default Results
