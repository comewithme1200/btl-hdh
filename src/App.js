import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './components/Home/Home';
import Fcfs from './pages/Fcfs/Fcfs'
import Sjn from './pages/Sjn/Sjn'

import Lru from './pages/Lru/Lru'
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact> 
             <Home/>
          </Route>
          <Route path="/fcfs" >
             {
               ({match,location}) => <Fcfs match={match} location={location}/>
             }
          </Route>
          <Route path="/sjn">
          {
               ({match,location}) => <Sjn match={match} location={location}/>
          }
          </Route>
         
          <Route path="/lru">
            
             {
               ({match,location}) => <Lru match={match} location={location}/>
          }
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
