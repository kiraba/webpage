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
      <div className="carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
              <div className="item active">
              </div>
              <div className="item">
              </div>
              <div className="item">
              </div>
          </div>
      </div>
        <div>
          <p className="links">
          <a className="title" href="https://lightinthe.tumblr.com"><img src="tumblr.png" className="icon" alt="responsive"/></a><br/>
          <a className="title" href="https://theoatmeal.com"><img src="theoatmeal.jpg" className="icon" alt="responsive"/></a>
          <a className="title" href="https://www.instagram.com/hijaiom/?hl=en"><img src="insta.png" className="icon" alt="responsive"/></a>
          </p>
        </div>
        <div className="list-group">
          <a href="#" className="title">
            Summer and Fall 2017 To Dos
          </a>
          <a href="http://www.runnersedgemt.com/events/eleven-miles-to-paradise-trail-race/" className="list-group-item list-group-item-action">11 Miles To Paridise - May 21st</a>
          <a href="http://runchallis.com/" className="list-group-item list-group-item-action">River of No Return 50k Race - June 17th</a>
          <a href="http://runtherut.com/" className="list-group-item list-group-item-action">The Rut Mountain Runs 28K - September</a>
          <a href="#" className="list-group-item list-group-item-action disabled">Raft the Snake!</a>
        </div>
      </div>
    )
  }
}