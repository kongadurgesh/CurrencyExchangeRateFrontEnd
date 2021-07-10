import React, { Component } from 'react';
import {ThemeProvider} from "styled-components";
import ChatBot from 'react-simple-chatbot';
import { Link } from "react-router-dom";
import bicon from './virtual-assistant-icon-14.jpg';
import Five from './Five.js';
class SimpleForm extends Component {
    
    render() {
      const theme={
        background:"white",
        fontFamily:"monospace",
        headerBgColor:"#007bff",
        headerFontColor:"#fff",
        headerFontSize:"15px",
        botBubbleColor:"#007bff",
        botFontColor:"#fff",
        userBubbleColor:"#fff",
        userFontColor:"#4a4a4a",
      };
      return (
      <ThemeProvider
          theme={theme}
          >
        <ChatBot
          botAvatar={bicon}
          steps={[
            {
              id:"s1",
              message:"Hi "+this.props.name+", I'm here to help you",
              trigger:'1'
            },
            {
              id: '1',
              options: [
                { value: 'Account', label: 'Manage my account', trigger: 'Account' },
                { value: 'faq', label: "FAQ's - Frequently Asked Questions", trigger: 'faq' },
              ],
            },
            {
              id:"Account",
              options:[
                {value:"View",label:"View my Profile",trigger:"view"},
                {value:"Edit",label:"How to edit my details?",trigger:"edit"},
                {value:"password",label:"How can I change my password",trigger:"password"},
                {value:"menu",label:"Go back to menu",trigger:"1"},
              ]
            },
            {
              id:"backToAccount",
              options:[
                {value:"backToAccount",label:"Back",trigger:"Account"}
              ],
            },
            {
              id:"view",
              asMessage:true,
              component:(
                <div><p>Goto top right corner of the navigation bar and click on your email.
                   Then click on <Link style={{color:"rgb(0,0,0)"}} to={"/profile/"+this.props.id}>profile</Link> in the drop down.</p></div>
              ),
              trigger:"backToAccount"
            },
            {
              id:"edit",
              asMessage:true,
              component:(
                <div><p>Goto top right corner of the navigation bar and click on your email.
                   Then click on <Link style={{color:"rgb(0,0,0)"}} to={"/editprofile/"+this.props.id}>edit</Link> details in the drop down.</p></div>
              ),
              trigger:"backToAccount"
            },
            {
              id:"password",
              asMessage:true,
              component:(
                <div><p>Goto top right corner of the navigation bar and click on your email.
                   Then click on <Link style={{color:"rgb(0,0,0)"}} to={"/updatepassword/"+this.props.id}>change password</Link> in the drop down.</p></div>
              ),
              trigger:"backToAccount"
            },
            {
              id:"faq",
              options:[
                {value:"ExchangeRates",label:"Related to Exchange Rates",trigger:"rates"},
                {value:"Charts",label:"Charts related queries",trigger:"charts"},
                {value:"ExchangeCalculator",label:"Calculating Exchange amount",trigger:"calculator"},
                {value:"site",label:"Site Navigations",trigger:"navigations"},
                {value:"menu",label:"Go back to menu",trigger:"1"},
              ]
            },
            {
              id:"rates",
              options:[
                {value:"isLive",label:"Do the site provide live exchange rates?",trigger:"isLive"},
                {value:"topFive",label:"Know 5 currencies with highest exchange rate for USD?",trigger:"top5"},
                {value:"botFive",label:"Know 5 currencies with lowest exchange rate for USD?",trigger:"bot5"},
                {value:"back",label:"back",trigger:"faq"},
              ],
            },
            {
              id:"top5",
              asMessage:true,
              component:<Five get="0"/>,
              trigger:"rates",
            },
            {
              id:"bot5",
              asMessage:true,
              component:<Five get="1"/>,
              trigger:"rates",
            },
            {
              id:"isLive",
              asMessage:true,
              component:(
                <div><p>Yes, the site provides Live exchange rates for currencies across the world. Rates get updated for every 60s.</p></div>
              ),
              trigger:"rates",
            },
            {
              id:"charts",
              options:[
                {value:"Line",label:"What does line chart represent?",trigger:"line"},
                {value:"Bar",label:"What does bar chart represent?",trigger:"bar"},
                {value:"back",label:"back",trigger:"faq"},
              ],
            },
            {
              id:"line",
              asMessage:true,
              component:(
                <div><p>Line Chart is a graphical representation of historical exchange rates between two currencies.It connects a series of data points with a continuous line.
                  Line Charts are available for past week, month, and year data(Exchange rates).
                  </p></div>
              ),
              trigger:"charts",
            },
            {
              id:"bar",
              asMessage:true,
              component:(
                <div><p>Bar Chart represents historical exchange rates between two currencies in rectangular bars.
                   It is available for past week, month, and year data(Exchange rates).
                  </p></div>
              ),
              trigger:"charts",
            },
            {
              id:"calculator",
              options:[
                {value:"LiveCal",label:"What does live calculator do?",trigger:"livecal"},
                {value:"HistCal",label:"What is the difference between live and historical calculator?",trigger:"histcal"},
                {value:"back",label:"back",trigger:"faq"},
              ],
            },
            {
              id:"livecal",
              asMessage:true,
              component:(
                <div><p>Live Calculator calculates exchange amount between any two selected currencies.
                  <Link style={{color:"rgb(0,0,0)"}} to={"/Calculator/"+1}>click here</Link> to navigate to Live calculator
                  </p></div>
              ),
              trigger:"calculator",
            },
            {
              id:"histcal",
              asMessage:true,
              component:(
                <div><p>Historical Calculator calculates exchange amount between any two selected currencies for past rates.
                  To calculate exchange amount you are required to select a particular date which cannot be a future date.
                  <Link style={{color:"rgb(0,0,0)"}} to={"/Calculator/"+0}>click here</Link> to navigate to historical calculator
                  </p></div>
              ),
              trigger:"calculator",
            },
            {
              id:"navigations",
              asMessage:true,
              component:(
                <div><p>Goto navbar and click on sitemap to understand flow through pages or <Link style={{color:"rgb(0,0,0)"}} to={"/Sitemap/"+this.props.id}>click here</Link>
                  </p></div>
              ),
              trigger:"backTofaq"
            },
            {
              id:"backTofaq",
              options:[
                {value:"back",label:"back",trigger:"faq"},
              ],
            },
            {
              id: 'age',
              user: true,
              validator: (value) => {
                if (isNaN(value)) {
                  return 'value must be a number';
                } else if (value < 0) {
                  return 'value must be positive';
                } else if (value > 120) {
                  return `${value}? Come on!`;
                }
  
                return true;
              },
            },           
          ]}
        />
      </ThemeProvider>
      );
    }
  }
  
  export default SimpleForm;