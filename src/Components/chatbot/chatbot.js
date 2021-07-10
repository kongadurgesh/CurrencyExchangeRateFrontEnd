

import React, { Component } from 'react';
import SimpleForm from './SimpleForm';
import './chatbot.css';
import hicon from './puzzel-bot-icon.png'


class Chatbot extends Component{
  constructor(props){
    super(props);
    this.state={
      showChat:false,
    }
  }
  startChat=()=>{
    this.setState({showChat:true});
  }
  hideChat=()=>{
    this.setState({showChat:false});
  }
  render(){
    return (
      <div>
        <div className = "bot">
          <div style ={{display: this.state.showChat ? "" : "none"}}>
            <SimpleForm name={this.props.cname} id={this.props.id}></SimpleForm>
          </div>      
          {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
          <div>
            {!this.state.showChat 
              ? <img src={hicon} className="img-fluid rounded-circle chatButtonOpen" onClick={this.startChat}/>
              : <button className="chatButtonClose" onClick={this.hideChat}>close chat </button>}
          </div>
        </div>      
      </div>
    )
  }
}
export default Chatbot;
