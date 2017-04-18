import React, { Component } from 'react';
import './App.css';
import './App.js';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Home extends Component{

  render(){ // the various routes to come in
    return (
      <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img className="d-block img-fluid" src="denalikidz.jpg"  alt="First slide"></img>
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src="gettotheCHOPPA.jpg" alt="Second slide"></img>
            </div>
          </div>
        <div>
          <p className="links">
          <img src="tumblr.png" className="icon"/><br/><a className="funsite" href="https://lightinthe.tumblr.com">My Tumblr</a><br/>
          <img src="theoatmeal.jpg" className="icon"/><br/><a className="funsite" href="https://theoatmeal.com">The Oatmeal</a>
          </p>
        </div>
        <div className="list-group">
          <a href="#" className="list-group-title">
            Summer and Fall 2017 To Dos
          </a>
          <a href="http://www.runnersedgemt.com/events/eleven-miles-to-paradise-trail-race/" className="list-group-item list-group-item-action">11 Miles To Paridise - May 21st</a>
          <a href="http://runchallis.com/" className="list-group-item list-group-item-action">River of No Return 50k Race - June 17th</a>
          <a href="http://runtherut.com/" className="list-group-item list-group-item-action">The Rut Mountain Runs 28K - September</a>
          <a href="#" className="list-group-item list-group-item-action disabled">Raft the Snake!</a>
        </div>
      </div>
    </div>
    )
  }
}