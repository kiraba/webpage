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
      <div id="homephotos">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
           <div className="carousel-item active">
             <img className="d-block img-fluid" src="munichstuff.JPG" alt="First slide"></img>
           </div>
           <div className="carousel-item">
             <img className="d-block img-fluid" src="mumbaibeach.JPG" alt="Second slide"></img>
           </div>
           <div className="carousel-item">
             <img className="d-block img-fluid" src="soalpchurchwaterfall.JPG" alt="Third slide"></img>
           </div>
           <div className="carousel-item">
             <img className="d-block img-fluid" src="yellowstone.JPG" alt="Fourth slide"></img>
           </div>
          </div>
        </div>
        <p className="email"> cca.king@gmail.com | 406-879-9232</p>
      </div>
    );
  }
}
