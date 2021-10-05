import React from 'react'
import Navigation from './components/Navigation';
// import MoviesRows from './components/MoviesRows';
// import Banner from './components/Banner';
import './App.css';
// import urls from './allurls';
import MidPage from './Pages/MidPage';
import Home from './Pages/Home';
import {Route,Switch} from "react-router-dom"
import Authentication from './Pages/Auth';


function App() {
  return (
    <div className="App">
   
     <Switch>
       <Route path="/" exact >
         <Home/>


       </Route>
       <Route path="/mid">
     <Navigation/>  
     <MidPage />
     </Route>
     <Route path="/auth">
       <Authentication/>

     </Route>
     </Switch>

    </div>
  );
}

export default App;
