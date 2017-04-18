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




// class FourOhFour extends Component {
//   render(){
//     return <h1>Page not found. Please report to /Login and comply.</h1>
//   }
// }
//<Route path='*' component={FourOhFour}/>

export default class App extends Component{
  render(){ // the various routes to come in
    return (
      <Router className='page'>
      <div>
        <nav className="navbar fixed-top navbar-toggleable-md navbar-light">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="./Home">Rebecca A. King</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/Home">Home</Link>
              <Link className="nav-item nav-link" to="/Resume">Resume</Link>
              <Link className="nav-item nav-link" to ="/Funstuff">Fun Stuff</Link>
            </div>
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
