import React from 'react'
import Jobs from './Jobs';
import Home from './Home';
import Personal from './Personal';
import NotFound from './NotFound'
import Skills from './NotFound'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/professional' component={Jobs} />
        <Route path='/personal' component={Personal} />
        <Route path='/skills' component={Skills} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
