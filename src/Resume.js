import React, { Component } from 'react';
import './App.css';
import './App.js';
import { BrowserRouter as Router } from 'react-router-dom';

export default class Resume extends Component{

  render() {
    return (
      <div>
        <img className="img-fluid" src="./Glacier.JPG" alt="img"/>

        <div className="intro">
          <p className= "email"> cca.king@gmail.com | 628-204-7627
          <a className="linkedin" href="https://www.linkedin.com/in/ccaking/">
            <img src="./linkedin.png" className="icon" alt="responsive"/></a></p>
          <p>I'm currently seeking opportunities to grow as an implementation
            consultant/liason or junior full-stack web developer. </p> <hr/>
          <h2>My current developer skillset includes:</h2><br/>
            <p>Agile Methods, Github, JavaScript, React Native, SQL, MERN Stack,
              Bootstrap, CSS/Sass/Scss, HTML</p><br/>
            <p className="project">Project Links:<br/>
            <a className="fun-d" href="https://fun-d.herokuapp.com/">
              fun-d - A Social Media Fundraising Website and App for Non-Profits</a><br/>
            <a className="bowwow" href="https://quiet-cliffs-16529.herokuapp.com/Login">
              Bowwow Buddies - a Tinder for Dogs</a>
            </p>
        </div>
      <div className="education">
        <h1>Education</h1>
        <div>
            <h2>Montana Code School</h2>
            <p>February - April 2015<br/>
                    Three month, full-time, immersion course in full-stack web developent</p>
        </div>
        <div>
            <h2>University of Illinois at Urbana-Champaign</h2>
            <p>Graduated in December of 2009 <br/>Bachelor's in Earth Systems</p>
        </div>
      </div>
      <div className="navbar navbar-inverse navbar-fixed-top">
       <div className="container-fluid">
        <div className="row-fluid">
          <div className="span12 horizontal">
            <div className="experience">
              <h1>Hospitality & Sales Experience</h1>
                <p>Technical, leadership, decision-making and communication skills,
                  as well as an understanding of logistical operations developed from
                  over 10 years of working in tourism, hospitality and sales.</p>
            </div>
            <div className="row-fluid">
              <div className="span4">
                <h2>Server</h2>
                     <p>December 2016-Present<br/>
                        Lochsa Lodge Resort, Powell, Idaho</p>
              </div>
              <div className="span4">
                <h2>Assistant Manager</h2>
                     <p>October 2014 – December 2016<br/>
                        Modory Home Furnishings, Missoula, Montana</p>
              </div>
              <div className="span4">
                <h2>Guest Services Agent</h2>
                <p>November 2013 – June 2015<br/>
                   Doubletree by Hilton, Missoula, Montana</p>
              </div>
              <div className="span4">
               <h2>Sales Associate</h2>
                   <p>May 2001 – September 2013<br/>
                      King's Furniture Store, Olney, Illinois</p>
              </div>
              <div className="span4">
               <h2>Guest Management Intern/Trainee</h2>
                   <p>April - July 2011<br/>
                      Elephant Hills Luxury Tented Resort, Khao Sok, Thailand</p>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="row-fluid">
            <div className="span12 horizontal">
              <div className="experience">
                <h1>Natural Sciences & Education Experience</h1>
                <p>Over 5 years of seasonal experience teaching science,
                  English and leadership skills inside and outside the classroom.</p>
              </div>
              <div className="row-fluid">
                <div className="span4">
                  <h2>Park Ranger</h2>
                  <p>June - August 2015<br/>Death Valley National Park, California</p>
                </div>
                <div className="span4">
                  <h2>Wilderness Invasive Species Monitor</h2>
                  <p>April - November 2014<br/>Great Burn Study Group,
                    Nez Pierce National Forest, Idaho</p>
                </div>
                <div className="span4">
                  <h2>Environmental Educator</h2>
                  <p>August 2012 – June 2013 <br/>Appalachian Mountain Club, New Hampshire</p>
                </div>
                <div className="span4">
                <h2>Environmental Education Fellow</h2>
                <p>January - April 2012 <br/>United States Fish and Wildlife Service,
                  Fergus Falls, Minnesota</p>
                </div>
                <div className="span4">
                <h2>English Teacher</h2>
                <p>October 2010 - October 2011 <br/>Buayai School, Nakhon Ratchisima, Thailand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="row-fluid">
              <div className="span12 horizontal">
                <div className="experience">
                  <h1>Volunteer Work, Leadership Training and Certifications</h1>
                </div>
                <div className="row-fluid">
                  <div className="span4">
                    <h2>YWCA Missoula</h2>
                    <p>Group Programs Facilitator<br/>February 2016 - December 2016 </p>
                  </div>
                  <div className="span4">
                    <h2>Flagship Program Lowell School</h2>
                    <p> After School Instructor <br/>January 2015 - December 2015</p>
                  </div>
                  <div className="span4">
                    <h2>National Outdoor Leadership School - Waddington Range Mountaineering</h2>
                    <p>Persevered with my team through 25,000 feet of elevation change
                      <br/>over 65 miles of travel through thick brush, steep snow, ice and
                        rocky terrain for 30 days
                        <br/>July 2009</p>
                  </div>
                  <div className="span4">
                    <h2>Certifications</h2>
                    <p>Wilderness First Responder, Montana Master Naturalist,
                      PADI Open Water Diver, Leave No Trace Trainer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
