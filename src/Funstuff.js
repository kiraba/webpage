import React, { Component } from 'react';
import './App.css';
import './App.js';
import $ from 'jquery';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
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
          <a className="title" href="https://lightinthe.tumblr.com" target="_blank"><img src="tumblr.png" className="icon" alt="responsive"/></a>
          <a className="title" href="https://theoatmeal.com" target="_blank"><img src="theoatmeal.jpg" className="icon" alt="responsive"/></a>
          <a className="title" href="https://www.instagram.com/hijaiom/?hl=en" target="_blank"><img src="insta.png" className="icon" alt="responsive"/></a>
          </p>
        </div>
        <ListGroup>
          <a href="#" className="title">
            Summer and Fall 2017 To Dos
          </a>
          <ListGroupItem href="http://www.runnersedgemt.com/events/eleven-miles-to-paradise-trail-race/" target="_blank" className="list-group-item list-group-item-action">11 Miles To Paridise - May 21st -- Injured :(</ListGroupItem>
          <ListGroupItem href="http://runchallis.com/" target="_blank" className="list-group-item list-group-item-action">River of No Return 50k - June 17th --- Injured :(</ListGroupItem>
          <ListGroupItem href="https://www.seeley50.com/" target="_blank" className="list-group-item list-group-item-action">Seeley Lake 50K - July 14th - Finished!  5th Overall, 2nd Women's Time: 5:38:10</ListGroupItem>
          <ListGroupItem href="http://runtherut.com/" target="_blank" className="list-group-item list-group-item-action">The Rut Mountain Runs 28K - September 2nd</ListGroupItem>
          <ListGroupItem href="http://snakeriveradventures.com/historic-sheep-creek-ranch/" target="_blank" className="list-group-item list-group-item-action">Raft the Snake and officiate a wedding! June 23rd - July 1st -- Done!</ListGroupItem>
          <ListGroupItem href="http://www.ercsv.org/" target="_blank" className="list-group-item list-group-item-action">Two week outdoor job near Sun Valley, Idaho!  July 15th - 30th</ListGroupItem>
          <ListGroupItem href="http://redantspantsmusicfestival.com/" target="_blank" className="list-group-item list-group-item-action">Red Ants Pants Festival July 27th-30th</ListGroupItem>
        </ListGroup>
        <p> I tend to take summer seriously...shhhh</p>
      </div>
    )
  }
}
