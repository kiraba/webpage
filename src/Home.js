import React, { Component } from 'react';
import './App.css';
import './App.js';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
           <div className="carousel-item active">
             <img className="d-block img-fluid" src="Lolo.JPG" alt="First slide"></img>
           </div>
           <div className="carousel-item">
             <img className="d-block img-fluid" src="prairie.png" alt="Second slide"></img>
           </div>
           <div className="carousel-item">
             <img className="d-block img-fluid" src="mardigras.png" alt="Third slide"></img>
           </div>
           <div className="carousel-item">
             <img className="d-block img-fluid" src="Waddington.JPG" alt="Fourth slide"></img>
           </div>
          </div>
        </div>
        <p className="email"> cca.king@gmail.com | 618-204-7627</p>
      </div>
    );
  }
}
