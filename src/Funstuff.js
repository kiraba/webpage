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
          <a className="title" href="https://lightinthe.tumblr.com"><img src="tumblr.png" className="icon" alt="responsive"/>tumblr</a>
          <a className="title" href="https://theoatmeal.com"><img src="theoatmeal.jpg" className="icon" alt="responsive"/>The Oatmeal</a>
          <a className="title" href="https://www.instagram.com/hijaiom/?hl=en"><img src="insta.png" className="icon" alt="responsive"/>Instagram</a>
          </p>
        </div>
        <div className="list-group">
          <a href="#" className="title">
            Summer and Fall 2017 To Dos
          </a>
          <a href="http://www.runnersedgemt.com/events/eleven-miles-to-paradise-trail-race/" className="list-group-item list-group-item-action">11 Miles To Paridise - May 21st -- Injured :(</a>
          <a href="http://runchallis.com/" className="list-group-item list-group-item-action">River of No Return 50k - June 17th --- Injured :(</a>
          <a href="https://www.seeley50.com/" className="list-group-item list-group-item-action">Seeley Lake 50K - July 14th - Finished!  5th Overall, 2nd Women's       Time: 5:38:10</a>
          <a href="http://runtherut.com/" className="list-group-item list-group-item-action">The Rut Mountain Runs 28K - September 2nd</a>
          <a href="http://snakeriveradventures.com/historic-sheep-creek-ranch/" className="list-group-item list-group-item-action">Raft the Snake and officiate a wedding! June 23rd - July 1st -- Done!</a>
          <a href="#" className="list-group-item list-group-item-action">Two week outdoor job near Sun Valley, Idaho!  July 15th - 30th</a>
        </div>
        <p> I tend to take summer seriously...</p>
      </div>
    )
  }
}
