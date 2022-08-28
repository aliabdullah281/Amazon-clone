import { formHelperTextClasses } from '@mui/material';
import React from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import Login from './Login'
import Payment from './Payment'
 import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="app">
          <Switch>   
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/checkout'>
                <Header />
                <Checkout />
              </Route>
              <Route path='/payment'>
                <Header/>
                <Payment/>
              </Route>
              <Route path='/'>
                <Header/>
                <Home/>
              </Route>   
          </Switch> 
        </div>
    </Router>
  );
}

export default App;
