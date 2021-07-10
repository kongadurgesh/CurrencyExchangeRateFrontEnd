import React, { Component } from "react";

import RegisterMember from "./Components/User/RegisterMember";
import LoginMember from "./Components/User/LoginMember";
import './Home.css';
import axios from "axios"
import coinIcon from "./assets/coin-image.png";
class Home extends Component {
    constructor() {
        super();
        this.state = {
            showChat: true,
            showLogin: false,
            showRegister: false,
            showDiv: true,
            showNav: true,
            showButtons: true,
            Date:"",
            DateTo:"INR",
            DateFrom:"USD",
            ExchangeRateDate:"",
            DateErr:"",
            hitApi:false,
            hitLiveApi:true,
            liveExchange:"USD",
            currencies:[],
            data:[],
            base:"USD",
            amount: "",
            convertTo: "INR",
            result: ""
        };
        this.hideComponent = this.hideComponent.bind(this);
    }
    handleSelect = e => {
        this.setState(
          {
            [e.target.name]: e.target.value,
            result: null
          },
          this.calculate
        );
    };
    handleInput = e => {
        this.setState(
          {
            amount: e.target.value,
            result: null,

          },
          this.calculate
        );
    };
    calculate = () => {
        const amount = this.state.amount;
        if (amount === isNaN)
        {
          return;
        }
        else
        {

          axios.get("https://api.exchangerate.host/latest?base="+this.state.base)
            .then(response => {
                var jsonArray=JSON.parse(JSON.stringify(response.data.rates));
                var names=Object.keys(jsonArray);
                var values=Object.values(jsonArray);
                const results = (response.data.rates[this.state.convertTo] * amount).toFixed(4);
                this.setState({result:results});

            })

        }
    };
    handleSwap = e => {
        const base = this.state.base;
        const convertTo = this.state.convertTo;
        e.preventDefault();
        this.setState(
          {
            convertTo: base,
            base: convertTo,
            result: null
          },
          this.calculate
        );
    };

    handleChangeDate=event=>{
        console.log(event.target.value + "HIII")
        var name = event.target.name;
        var val = event.target.value;
        this.setState({ [name]: val })
        this.validateDate(name, val)
    }
    validateDate = (name, val) => {
        var { DateErr } = this.state
        switch (name) {
            case "Date":
                if (new window.Date(val) > new window.Date()) {
                    DateErr = "Cant display rates for future dates"
                    this.setState({ DateErr: DateErr, hitApi: false, ExchangeRateDate: "" })
                    //DateButton = false
                }
                else if (val === "") {
                    DateErr = "Date cant be empty"
                    this.setState({ DateErr: DateErr, ExchangeRateDate: "" })
                    //DateButton = false
                }
                else {
                    DateErr = ""
                    this.setState({ hitApi: true, DateErr: DateErr })

                }
                break;
            case "DateTo":
                this.setState({ hitApi: true })
                break;
            case "DateFrom":
                this.setState({ hitApi: true })
                break;



        }


    }
    FutureExchangeRate = () => {
        var { Date, DateFrom, DateTo} = this.state
        console.log(Date)
        axios
            .get("https://api.exchangerate.host/" + Date + "?base=" + DateFrom + "&symbols=" + DateTo)
            .then(response => {

                this.setState({ ExchangeRateDate: Object.values(response.data.rates)[0], hitApi: false })
            })
            .catch(err => {
                console.log("oops" + err)
            })

            console.log(this.state.ExchangeRateDate)

    }


    hideComponent(name) {
        console.log(name);
        switch (name) {
            case "showLogin":
                this.setState({ showLogin: true, showNav: false, showRegister: false, showDiv: false, showButtons: false });
                break;
            case "showRegister":
                this.setState({ showRegister: true, showNav: false, showLogin: false, showDiv: false, showButtons: false });
                break;
            case "showDiv":
                this.setState({ showDiv: true, showNav: true, showLogin: false, showRegister: false, showButtons: false });
                break;
            default:
                break;
        }

    }
    showEr = () => {
        document.getElementById("1").style.display = "block";
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "none";
        document.getElementById("bt1").style.background = "white";
        document.getElementById("bt2").style.background = "rgb(225,246,255)";
        document.getElementById("bt3").style.background = "rgb(225,246,255)";
    }
    showCal = () => {
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "block";
        document.getElementById("3").style.display = "none";
        document.getElementById("bt1").style.background = "rgb(225,246,255)";
        document.getElementById("bt2").style.background = "white";
        document.getElementById("bt3").style.background = "rgb(225,246,255)";
    }
    showCd = () => {
        document.getElementById("1").style.display = "none"
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "block";
        document.getElementById("bt1").style.background = "rgb(225,246,255)";
        document.getElementById("bt2").style.background = "rgb(225,246,255)";
        document.getElementById("bt3").style.background = "white";
    }
    handleLive = event => {

        console.log("IN HANDLE")
        var name = event.target.name;
        var val = event.target.value;
        this.setState({ [name]: val, hitLiveApi: true })
    }
    liveExchangeRates = () => {

        //console.log("IN COMPONENT")
        axios.get("https://api.exchangerate.host/latest?base=" + this.state.liveExchange + "&symbols=USD,EUR,INR,GBP,KWD,BHD,JOD,CHF,AUD,NZD")
            .then(
                response => {
                    var jsonArray = JSON.parse(JSON.stringify(response.data.rates));
                    var names = Object.keys(jsonArray);
                    var values = Object.values(jsonArray);
                    this.setState({ currencies: names, data: values, hitLiveApi: false });
                }
            )
            .catch(err => {
                console.log(err);
            })
        // this.setState({hitLiveApi:false})
    }
    generateTable = () => {

        var rowArr = [];
        var rowCur = (
            <tr className="bg-success text-light">
                {this.state.currencies.map((name) => { return <td key={name}><b>{name}</b></td> })}
            </tr>
        )
        rowArr.push(rowCur);
        var rowVal = (
            <tr>
                {this.state.data.map((value) => { return <td key={value}><b>{value}</b></td> })}
            </tr>
        )
        rowArr.push(rowVal);
        return (
            <table className="table table-striped text-dark" id="results">
                {rowArr}
            </table>
        )
    }
    render() {

        const { base, amount, convertTo, result, } = this.state;
        // window.location.reload(false)
        window.onbeforeunload = (event) => {
            const e = event || window.event;
            // Cancel the event
            e.preventDefault();
            if (e) {
                e.returnValue = ''; // Legacy method for cross browser support
            }
            return ''; // Legacy method for cross browser support
        };

        return (
            <div>
                {this.state.showNav &&
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a href="">
                            <span className="navbar-brand"><img style={{ width: "20px", height: "20px" }} src={coinIcon}></img>&nbsp;<b>Currency<span style={{ color: "#00CED1" }}>Analysis</span></b></span>
                        </a>
                    </nav>
                }
                {this.state.showDiv &&
                    <div className="row" style={{ marginTop: "90px" }}>
                        <div className="col-10 offset-1">
                            <div className="card no-gutters">
                                <div className="col-12 btn-group">
                                    <button id="bt1" onClick={this.showEr} className="col-4 btn btn-lg"><i style={{fontSize:"17px"}} class="fa fa-refresh"></i>&nbsp;Exchange Rates</button>
                                    <button id="bt2" onClick={this.showCal} className="col-4 btn btn-lg"><i style={{fontSize:"17px"}} class="fa fa-calculator"></i>&nbsp;Calculator</button>
                                    <button id="bt3" onClick={this.showCd} className="col-4 btn btn-lg"><i style={{fontSize:"17px"}} class="fas fa-calendar-alt"></i>&nbsp;Conversion Rates by Date</button>
                                </div>
                                <div className="col-12">
                                    <div id="1" className="card er" style={{ border: "none" }}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label><b>Base</b></label>
                                                <select onChange={this.handleLive} name="liveExchange" className="form-control">
                                                    <option key={"USD"} value="USD">USD</option>
                                                    <option key={"INR"} value="INR">INR</option>
                                                    <option key={"AUD"} value="AUD">AUD</option>
                                                    <option key={"GBP"} value="GBP">GBP</option>
                                                    <option key={"EUR"} value="EUR">EUR</option>
                                                </select>
                                                {this.state.hitLiveApi === true ? this.liveExchangeRates() : ""}
                                                <br />
                                                <div className="tableHome  table-responsive">
                                                    {this.generateTable()}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                    
                                </div>
                                <div id="2" className="card cal" style={{ border: "none", overflow: "auto" }}>
                                  <br></br>
                                    <form className="form-row col-md-12">
                                        <div className="form-group col-md-4 offset-md-1">
                                        <label htmlFor="base" className="lab"><b>From</b></label>
                                        <select name="base" value={base} onChange={this.handleSelect} className="form-control form-control-md">
                                            <option value="USD">USD</option>
                                            <option value="INR">INR</option>
                                            <option value="AUD">AUD</option>
                                            <option value="GBP">GBP</option>
                                            <option value="EUR">EUR</option>
                                        </select>
                                        </div>
                                        <div className="form-group col-md-6">
                                        <label htmlFor="amText" className="lab"><b>Amount</b></label>
                                        <input placeholder="enter amount" name="amText" type="number" value={amount} onChange={this.handleInput} className="form-control  form-control-md"/>
                                        </div>
                                    </form>

                                    <form className="form-row col-md-12">
                                        <div className="form-group col-md-4 offset-md-1 text-center">
                                        <br></br>
                                        <button style={{letterSpacing:"2px"}} type="button" onClick={this.handleSwap} className="swap rounded-circle">
                                            &#x2191;&#x2193;
                                        </button>
                                        </div>
                                    </form>

                                    <form className="form-row col-md-12">
                                        <div className="form-group col-md-4 offset-md-1">
                                        <label htmlFor="convertTo" className="lab"><b>To</b></label>
                                        <select name="convertTo" value={convertTo} onChange={this.handleSelect} className="form-control form-control-md">
                                            <option value="INR">INR</option>
                                            <option value="USD">USD</option>
                                            <option value="AUD">AUD</option>
                                            <option value="GBP">GBP</option>
                                            <option value="EUR">EUR</option>
                                        </select>
                                        </div>
                                        <div className="form-group col-md-6">
                                        <label htmlFor="exchangeAmount" className="lab"><b>Exchange Amount</b></label>
                                        <input name="exchangeAmount" disabled={true} value={amount === ""? "0": result === null? "Calculating...": result}
                                                className="form-control form-control-md"
                                        />
                                        </div>
                                    </form>
                                    <form className="form-row col-md-12">
                                        <div className="form-group col-md-4 offset-md-1">
                                        <br></br>
                                        <h5 style={{color:"grey"}}>
                                        {amount} {base} is equevalent to
                                        </h5>
                                        <h2 className="text-dark">
                                            {amount === ""
                                            ? "0"
                                            : result === null
                                            ? "Calculating..."
                                            : result}{" "}
                                            <span style={{color:"grey",fontSize:"32px"}}>{convertTo}</span>
                                        </h2>
                                        </div>
                                    </form>
  
                                </div>
                                <div id="3" className="cd" style={{ border: "none", overflow: "auto" }}>
                                    <br></br>
                                    <form className="form-row col-md-12">
                                        <div className="form-group col-md-10 offset-md-1">
                                            <label htmlFor="Date" className="lab"><b>Date</b></label>
                                            <input type="date" onChange={this.handleChangeDate} name="Date" className="dat form-control form-control-md"></input>
                                            <span className="text-danger">{this.state.DateErr}</span>
                                        </div>
                                    </form>
                                    <form className="form-row col-md-12">
                                        <div className="form-group col-md-5 offset-md-1">
                                            <label htmlFor="DateFrom" className="lab"><b>From</b></label>
                                            <select onChange={this.handleChangeDate} name="DateFrom" className="form-control form-control-md from">
                                                <option key={"USD"} value="USD">USD</option>
                                                <option key={"INR"} value="INR">INR</option>
                                                <option key={"AUD"} value="AUD">AUD</option>
                                                <option key={"GBP"} value="GBP">GBP</option>
                                                <option key={"EUR"} value="EUR">EUR</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-5">
                                            <label htmlFor="DateTo" className="lab"><b>To</b></label>
                                            <select onChange={this.handleChangeDate} name="DateTo" className="form-control form-control-md to">
                                                <option key={"INR"}>INR</option>
                                                <option key={"USD"}>USD</option>
                                                <option key={"AUD"}>AUD</option>
                                                <option key={"GBP"}>GBP</option>
                                                <option key={"EUR"}>EUR</option>
                                            </select>
                                        </div>
                                    </form>
                                    {this.state.hitApi == true && this.state.DateErr == "" ? this.FutureExchangeRate() : ""}
                                    <form className="form-row col-md-12">
                                        <div className="form-group col-md-4 offset-md-4 text-center">
                                            <span style={{ color: "grey" }}>
                                                <b> {this.state.DateFrom} = <span className="text-dark">
                                                    {this.state.ExchangeRateDate}</span> {this.state.DateTo}
                                                </b>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>}
                {this.state.showLogin && <LoginMember />}
                {this.state.showRegister && <RegisterMember />}
                {this.state.showButtons &&
                    <div className="row" style={{ marginTop: "50px" }}>
                        <div className="col-md-2 offset-md-4">
                            <a style={{ textDecoration: "none", color: "white", width: "inherit" }}><button class="button1" onClick={() => this.hideComponent("showLogin")}>
                            <i class="fas fa-sign-in-alt"></i>&nbsp;LOGIN</button></a>
                        </div>
                        <span className="text-dark">|</span>
                        <div className="col-md-2">
                            <a style={{ textDecoration: "none", color: "white", width: "inherit" }}><button class="button2" onClick={() => this.hideComponent("showRegister")}>
                            <i class="fas fa-user-plus"></i>&nbsp;SIGN UP</button></a>
                        </div>
                    </div>
                }
                <br></br><br></br>
            </div>
        );
    }
}
export default Home;
