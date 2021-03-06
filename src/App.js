import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import Faves from './pages/Faves';
import {useDispatch,useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchPosts} from './store/actions';


const mapState=(myStateApp)=>({
  query:myStateApp.query,
  page:myStateApp.page
})




function App() {
  const {query,page} = useSelector(mapState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(query.tag,page));
  },[query,page,dispatch])

  return (
    <div className="App">
       <BrowserRouter>
      <NavBar/>
      <Switch>
      <Route path="/faves" render={()=>(           
            <Faves/>                    
          )}/> 
      <Route path="/" render={()=>(           
            <Home/>                    
          )}/> 
      </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;
