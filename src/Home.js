import React, { Component } from 'react';
import './App.css';
import './App.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Home extends Component {
  render(){
    return(
      <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img className="d-block img-fluid" src="http://www.rebecca-king.com/uploads/2/1/4/6/21461784/7368421_orig.jpg" alt="Responsive"/>
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src="http://www.rebecca-king.com/uploads/2/1/4/6/21461784/6782988_orig.jpg" alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/166223_10100302780522220_7092911_n.jpg?oh=d0b51012fe85e9000e009c6b2152d730&oe=59955468" alt="Third slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src="http://www.rebecca-king.com/uploads/2/1/4/6/21461784/3946015_orig.jpg" alt="Fourth slide"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <p className="email"> cca.king@gmail.com<br/>618-204-7627</p>
      </div>
    )
  }
}