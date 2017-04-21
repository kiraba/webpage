import React, { Component } from 'react';
import './App.css';
import './App.js';
import $ from 'jquery';
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
               <ol className="carousel-indicators">
                 <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                 <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                 <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                 <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
               </ol>
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
{/*               <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                 <span className="sr-only"></span>
               </a>
               <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
                 <span className="sr-only"></span>
               </a>*/}
             </div>
        <p className="email"> cca.king@gmail.com | 618-204-7627</p>
      </div>
    )
  }
}