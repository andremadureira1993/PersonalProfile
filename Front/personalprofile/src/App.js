import React from 'react'
import Jobs from './components/Jobs';
import Home from './components/Home';
import Personal from './components/Personal';
import NotFound from './components/NotFound'
import Skills from './components/Skills'
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
