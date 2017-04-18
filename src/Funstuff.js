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
              <img className="d-block img-fluid" src="https://lh3.googleusercontent.com/oOwBPBHRAAmhL7fpQfmwhcC6l1d8kuDBOLIyfJ1mEH2UL_TnCDQfP9HfBraOtqfkCMo2e60ZpNtJwyQ9eUQMzE5X-livgL-wfdq5rOjvnBes4XfIfAjJrxBM-efEUM4BZtcz84TirEGL52ltD4esu-0wE0LAGw6DtMxiIo0JR0Z6RcHMhsVKrO6gRkGTpN87JmJGA5rH9R5EqoSqWwtchrFtGwnEMtMz_IrVNVM_mNFzesPKWdcIeVxo_PZhJEAygNCK34y1P0ZeS5ldnd_8W7A6rBD_YdSBWtyzh2sLLriYKIWRKPcSMwId5eXKGAJuEexcaB7X1gCJUWujBKbOHg0-kChUsVFB-W_bDQO2RywAxOLA0ihxrwMYifB-W_6Xtz_j-QLbHXOWamEtC1Ph2J_qhsLGGrKacyNQ0iRz8knwEZTQY8LMMt4Co5pFMx9-pX7lqz07u4zdCnU8SlGKsB91S7kITKMJW8O0ivKgrUEjeBICemLLyUiEXMFZ8prEf5fdGRNNjmylLFU9FrwQxOdm5U_GGCMS5-GjAMfxf_rwpCp9avnP5uCzVRHBB3DPf_tF8ZVMxzkzFsWCTYD0P8kePsIaM8bq1tBh3MptloPhtY33omvE=w1222-h324-no"  alt="First slide"></img>
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