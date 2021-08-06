import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import Faves from './pages/Faves';





function App() {


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
