import React, { useState, useEffect } from 'react'
import Jobs from './Jobs';
import Home from './Home';
import Personal from './Personal';
import NotFound from './NotFound'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Navbar';

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/professional'>
          <Jobs />
        </Route>
        <Route path='/personal'>
          <Personal />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
