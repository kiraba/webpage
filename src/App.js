import React, { Component } from 'react';
import Resume from './Resume';
import Funstuff from './Funstuff';
import Home from './Home'
import $ from 'jquery';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class App extends Component{
  render(){ // the various routes to come in
    $('.navbar-nav>li>Link').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    return (
      <Router className='page'>
      <div>
        <nav className="navbar fixed-top navbar-toggleable-md navbar-light">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="./Home">Rebecca A. King</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li><a className="nav-item nav-link" href="/Home">Home</a></li>
              <li><a className="nav-item nav-link" href="/Resume">Resume</a></li>
              <li><a className="nav-item nav-link" href="/Funstuff">Fun Stuff</a></li>
            </ul>
            </div>
        </nav>
        
          <div>
            <Route path='/Home' component={Home}/>
            <Route path='/Resume' component={Resume}/>
            <Route path='/Funstuff' component={Funstuff}/>
          </div>
          </div>
        </Router>
      
    )
  }
}
