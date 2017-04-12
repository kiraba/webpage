// import React, { Component } from 'react';
// import './App.css';
// import './App.js';
// import $ from 'jquery';
// import {BrowserRouter as Router} from 'react-router-dom'

// export default class Message extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//         message: ""
//         };
//     }
//     componentDidMount(){
//         console.log('message good', this.props)
//     }

//     textSet(event) {
//     this.setState({message: event.target.value});
//     }
//     keyPress(event){
//     if(event.key === 'Enter'){
//       this.submitMessage()
//     }
// }

//     submitMessage(){
//         $.ajax({
//             method: 'POST', 
//             url: '../api/message',
//             contentType: 'application/json',
//             data: JSON.stringify({
//                 message: this.props.message // require a token becuase we tell this route to requireLogin, this ajax call needs authorization
//               })
//         })
//           .done((result) => {
//             this.setState({message: ''})//after it submits a message, it clears out the text inbox and lets that message RIP! 
//             this.recieveMessage() //recieves messages after submits info
//         }) 
//       }


//     render(){
//     	return (
//     		<div className="mx-auto">
//     		<form ref="MessageForm" className="messageform">
//     			<div className="container-fluid">
//                       <div className="form-group">
//                         <label>Send a message:</label>
//                         <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
//                      </div>
//                      <div className="form-group">
//                          <label>Upload a document</label>
//                          <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
//                         </div><br/>
//                             <div className="alert alert-warning alert-dismissible fade show" role="alert">
//                                 <button type="button" className="close" data-dismiss="alert" aria-label="Close">
//                                 <span aria-hidden="true">&times;</span>
//                                 </button>
//                                 <strong>Thanks!</strong> I check my messages often and will get back to you soon!  In the meantime, feel free to click around my always-changing website.
//                             </div> 
//                         <button href="#" type="submit" className="btn btn-primary">Submit</button>
//                 </div>     
//             </form>

//     		</div>
//     	)
// 	}
// }