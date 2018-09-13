import React, { Component } from 'react';
import './App.css';
import './App.js';
import { BrowserRouter as Router } from 'react-router-dom';

export default class Resume extends Component{
  render() {
    return (
      <div>
        <img className="img-fluid" src="./Glacier.JPG" alt="img"/>
          <p className= "email">
            cca.king@gmail.com | 406-879-9232
          </p>
        <hr/>

      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="row-fluid">
            <div className="span1 horizontal">
              <div className="experience">
                <h1>Natural Sciences & Education Experience</h1>
                <p>Over 5 years of seasonal experience teaching science,
                  English and leadership skills inside and outside of classrooms around the world.</p>
              </div>
              <div className="row-fluid">
                <div className="span1">
                  <h2>Field Advisor</h2>
                  <p>January - May 2018<br/>Winterline Global Skills Program,
                  Thailand, India, Europe and Boston</p>
                </div>
                <div className="span1">
                  <h2>Environmental Educator</h2>
                  <p>July 2017<br/>Environmental Resource Center,
                  Sun Valley, Idaho</p>
                </div>
                <div className="span1">
                  <h2>Park Ranger</h2>
                  <p>June - August 2015<br/>National Park Service,
                    Death Valley National Park, California</p>
                </div>
                <div className="span1">
                  <h2>Wilderness Invasive Species Monitor</h2>
                  <p>April - November 2014<br/>Great Burn Study Group,
                    Nez Pierce National Forest, Idaho</p>
                </div>
                <div className="span1">
                  <h2>Environmental Educator</h2>
                  <p>August 2012 – June 2013 <br/>Appalachian Mountain Club, New Hampshire</p>
                </div>
                <div className="span1">
                <h2>Environmental Education Fellow</h2>
                <p>January - April 2012 <br/>United States Fish and Wildlife Service,
                  Fergus Falls, Minnesota</p>
                </div>
                <div className="span1">
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
          <div className="span1 horizontal">
            <div className="experience">
              <h1>Hospitality & Sales Experience</h1>
                <p>Technical, leadership, decision-making and communication skills,
                  as well as an understanding of logistical operations developed from
                  over 10 years of working in tourism, hospitality and sales.</p>
            </div>
            <div className="row-fluid">
              <div className="span1">
                <h2>Server</h2>
                     <p>December 2016-Present<br/>
                        Lochsa Lodge Resort, Powell, Idaho</p>
              </div>
              <div className="span1">
                <h2>Assistant Manager</h2>
                     <p>October 2014 – December 2016<br/>
                        Modory Home Furnishings, Missoula, Montana</p>
              </div>
              <div className="span1">
                <h2>Guest Services Agent</h2>
                <p>November 2013 – June 2015<br/>
                   Doubletree by Hilton, Missoula, Montana</p>
              </div>
              <div className="span1">
               <h2>Sales Associate</h2>
                   <p>May 2001 – September 2013<br/>
                      King's Furniture Store, Olney, Illinois</p>
              </div>
              <div className="span1">
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
              <div className="span1 horizontal">
                <div className="experience">
                  <h1>Volunteer Work, Leadership Training and Certifications</h1>
                </div>
                <div className="row-fluid">
                  <div className="span1">
                    <h2>YWCA Missoula</h2>
                    <p>Group Programs Facilitator<br/>February 2016 - December 2016 </p>
                  </div>
                  <div className="span1">
                    <h2>Flagship Program Lowell School</h2>
                    <p> After School Instructor <br/>January 2015 - December 2015</p>
                  </div>
                  <div className="span1">
                    <h2>National Outdoor Leadership School<br/>Waddington Range Mountaineering</h2>
                    <p>July 2009<br/>Persevered with my team through 25,000 feet of elevation change
                      <br/>over 65 miles of travel through thick brush, steep snow, ice and
                        rocky terrain for 30 days</p>
                  </div>
                  <div className="span1">
                    <h2>Certifications</h2>
                    <p>Wilderness First Responder, Montana Master Naturalist,
                      <br/>PADI Open Water Diver, Leave No Trace Trainer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="education">
          <h1>Education</h1>
            <div>
            <p>
              <h2>Montana Code School</h2>
                <p>February - April 2015<br/></p>
                  <p>Full-time, immersion course in full-stack web developent
                  Agile Methods, Github, JavaScript, React Native, SQL, MERN Stack, Bootstrap, CSS/Sass/Scss, HTML</p>
                  Group Project Links:<br/>
                  <a className="project" target="_blank" href="https://fun-d.herokuapp.com/">
                    fun-d - A Social Media Fundraising Website and Android/IOS App
                    </a><br/>
                  <a className="project" target="_blank" href="https://quiet-cliffs-16529.herokuapp.com/Login">
                  Bowwow Buddies - Tinder for Dogs
                  </a>
                </p>
            </div>
        <div>
            <h2>University of Illinois at Urbana-Champaign</h2>
            <p>Graduated in December of 2009 <br/>Bachelor's in Earth Systems</p>
        </div>
        <div className="joblogos">
          <p>
            <a className="github" target="_blank" href="https://github.com/kiraba">
              <img src="./github.png" className="icon" alt="responsive"/></a>
            <a className="codepen" target="_blank" href="https://codepen.io/kiraba/">
              <img src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png"
                className="icon" alt="responsive"/></a>
          </p>
        </div>
      </div>
      </div>
    );
  }
}
