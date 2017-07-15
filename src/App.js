import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/products" component={Products}/>
          </div>
        </Router>
      </div>
    );
  }
}


export default App;