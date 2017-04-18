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
              <img className="d-block img-fluid" src="Lolo.jpg" alt="Responsive"/>
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src="prairie.png" alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src="Waddington.jpg" alt="Third slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src="mardigras.png" alt="Fourth slide"/>
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