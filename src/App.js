import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import Error from './pages/Error'
//Navbar
import Navbar from './components/Navbar'
//Modal and Sidebar
import Details from './components/Details'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
          <Details />
          <Sidebar />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
