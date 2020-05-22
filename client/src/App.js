import React from 'react';
import logo from './cybear.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from "./pages/Home"
import { Temp } from "./pages/Temp"


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Temp />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch >
      </Router>
    </div>
  );
}

export default App;
