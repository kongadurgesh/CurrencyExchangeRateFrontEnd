import { Link, Route, Switch, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from "react";
import UpdatePassword from "./Components/User/UpdatePassword";
import Profile from "./Components/User/Profile";
import EditMember from "./Components/User/EditMember";
import "bootstrap/dist/css/bootstrap.css";
import coinIcon from "./assets/coin-image.png";
import CurrentCurrencyValues from "./Components/CurrentCurrencyValues";
import ChartAndTable from "./Components/ChartAndTable"
import Calculator from "./Components/Calculator";
import SiteMap from "./Components/Sitemap"
import Chatbot from "./Components/chatbot/chatbot"

class App extends Component{
 logOut=()=>{
  document.getElementById("out").style.display="block";
 }
  render(){
    var profileUrl="/profile/"+this.props.customerDetails.customer_id;
    var passwordUrl="/updatepassword/"+this.props.customerDetails.customer_id;
    var editProfileUrl="/editprofile/"+this.props.customerDetails.customer_id;
    var SiteMapUrl="/Sitemap/"+this.props.customerDetails.customer_id;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light navbar-sm bg-light">
          <div className="container-fluid">
          <Link to ="/ExchangeRates">
            <span className="navbar-brand"><img style={{width:"20px",height:"20px"}} src={coinIcon}></img>&nbsp;<b>Currency<span style={{color:"#00CED1"}}>Analysis</span></b></span>
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
                
                <li>
                  <Link style={{fontSize:"15px"}}  className="nav-link text-dark px-3" to={"/Calculator/"+1}>
                  <i class="fa fa-calculator" style={{fontSize:"15px"}}></i>&nbsp;Calculator
                  </Link>
                </li>
                <li>
                  <Link style={{fontSize:"15px"}} className="nav-link text-dark px-3" to="/ExchangeRates">
                  <i class="fa fa-refresh"></i>&nbsp;ExchangeRates
                  </Link>
                </li>
                <li>
                  <Link style={{fontSize:"15px"}}  className="nav-link  text-dark px-3" to={"/Charts/allcharts"}>
                  <i class="fa fa-line-chart"></i>&nbsp;Charts
                  </Link>
                </li>
                <li>
                  <Link style={{fontSize:"15px"}}  className="nav-link  text-dark px-3" to={SiteMapUrl}>
                  <i class="fa fa-sitemap" style={{fontSize:"13px"}}></i>&nbsp;Sitemap
                  </Link>
                </li>
                <li className="dropdown text-dark px-3" style={{top:"3px"}}>
                  <a style={{width:"inherit",fontSize:"15px"}} href="" className="dropdown-toggle text-dark" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-user" style={{fontSize:"16px"}}></i>&nbsp;{this.props.customerDetails.customer_email}<span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu" style={{width:"100%"}}>
                      <li className="dropDownStyle">
                        <Link className="nav-link hv" to={profileUrl}>
                        <i class="fa fa-address-card"></i>&nbsp;Profile
                        </Link>
                      </li>
                      <li className="dropDownStyle">
                        <Link className="nav-link hv" to={editProfileUrl}>
                        <i class="fa fa-edit"></i>&nbsp;Edit Details
                        </Link>
                      </li>
                      <li className="dropDownStyle">
                        <Link className="nav-link hv" to={passwordUrl}>
                        <i class="fa fa-key"></i>&nbsp;Update Password
                        </Link>
                      </li>
                      
                      <li className="dropDownStyle">
                        <a className="nav-link hv" onClick={this.logOut}>
                        <i class="fas fa-sign-out-alt"></i>&nbsp;Logout
                        </a>
                      </li>
                    </ul>
                </li>
          </ul>
          </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={CurrentCurrencyValues}></Route>
          <Route exact path="/ExchangeRates" component={CurrentCurrencyValues}></Route>
          <Route exact path="/Calculator/:lcal" component={Calculator}></Route>
          <Route exact path="/Sitemap/:customerId" component={SiteMap}></Route>

          <Route exact path="/Charts/:show" component={ChartAndTable}/>
          <Route exact path="/editprofile/:customerId" component={EditMember}></Route>
          <Route exact path="/updatepassword/:customerId" component={UpdatePassword}></Route>
          <Route exact path="/profile/:customerId" component={Profile}></Route>
      </Switch>

      <div id="out" className="card" style={{display:"none",position:"absolute",left:"20%",top:"35%",overflow:"visible",width:"60%"}}>
          <div className="card-header">
            <img style={{width:"20px",height:"20px"}} src={coinIcon}></img>
            &nbsp;
            <b>Currency
              <span style={{color:"#00CED1",fontSize:"17px"}}>Analysis</span>
            </b>
          </div>
          <div className="card-body">
          <form className="form-row col-md-12">
            <div className="form-group col-md-12 text-center">
              <h5>Do you want to logout ?</h5>
            </div>
          </form>
          <form className="form-row col-md-12">
            <div className="form-group col-md-2 offset-md-4">
              <button type="button" onClick={()=>{window.location.href="/";document.getElementById("out").style.display="none";}} className="btn btn-block btn-sm btn-primary">Yes</button>
            </div>
            <div className="form-group col-md-2">
              <button type="button" onClick={()=>{document.getElementById("out").style.display="none";}} className="btn btn-block btn-sm btn-primary">No</button>
            </div>
          </form>
          </div>
        </div>
                    <br></br>
                    <br></br>
        <Chatbot id={this.props.customerDetails.customer_id} cname={this.props.customerDetails.customer_name} />
      </div>
      
    );
  }
}

export default App;
