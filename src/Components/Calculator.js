import React, { Component } from "react";
import axios from "axios";
import "./Calculator.css"
var codeToCountry = {
  "AED" : "United Arab Emirates",
  "AFN" : "Afghanistan",
  "ALL" : "Albania",
  "AMD" : "Armenia",
  "ANG" : "Netherlands Antilles",
  "AOA" : "Angola",
  "ARS" : "Argentina",
  "AUD" : "Australia", 
  "AWG" : "Aruba",
  "AZN" : "Azerbaijan",
  "BAM" : "Bosnia and Herzegovina",
  "BBD" : "Barbados",
  "BDT" : "Bangladesh",
  "BGN" : "Bulgaria",
  "BHD" : "Bahrain",
  "BIF" : "Burundi",
  "BMD" : "Bermuda",
  "BND" : "Brunei",
  "BOB" : "Bolivia",
  "BRL" : "Brazil",
  "BSD" : "Bahamas",
  "BTC" : "Bitcoin",
  "BTN" : "Bhutan",
  "BWP" : "Botswana",
  "BZD" : "Belize",
  "CAD" : "Canada",
  "CDF" : "Democratic Republic of Congo",
  "CHF" : "Switzerland",
  "CLF" : "Chile",
  "CLP" : "Chile",
  "CNH" : "China(Excluding Hong Kong)",
  "CNY" : "Mainland China",
  "COP" : "Colombia",
  "CRC" : "Costa Rica",
  "CUP" : "Cuba",
  "CVE" : "Cape Verde",
  "CZK" : "Czech Republic",
  "DJF" : "Djibouti",
  "DKK" : "Denmark, Faroe Islands, Greenland",
  "DOP" : "Dominican Republic",
  "DZD" : "Algeria",
  "EGP" : "Egypt",
  "ERN" : "Eritrea",
  "ETB" : "Ethiopia",
  "EUR" : "European Union",
  "FJD" : "Fiji",
  "FKP" : "Falkland Islands",
  "GBP" : "United Kingdom",
  "GEL" : "Georgia",
  "GHS" : "Ghana",
  "GIP" : "Gibraltar",
  "GMD" : "Gambia",
  "GNF" : "Guinea",
  "GTQ" : "Guatemala",
  "GYD" : "Guyana",
  "HKD" : "Hong Kong Special Administrative Region",
  "HNL" : "Honduras",
  "HRK" : "Croatia",
  "HTG" : "Haiti",
  "HUF" : "Hungary",
  "IDR" : "Indonesia",
  "ILS" : "Israel",
  "IMP" : "Isle of Man",
  "INR" : "India, Bhutan",
  "IQD" : "Iraq",
  "IRR" : "Iran",
  "ISK" : "Iceland",
  "JEP" : "Jersey",
  "JMD" : "Jamaica",
  "JOD" : "Jordan",
  "JPY" : "Japan",
  "KES" : "Kenya",
  "KGS" : "Kyrgyzstan",
  "KHR" : "Cambodia",
  "KMF" : "Comoros",
  "KPW" : "North Korea",
  "KRW" : "South Korea",
  "KWD" : "Kuwait",
  "KYD" : "Cayman Islands",
  "KZT" : "Kazakhstan",
  "LAK" : "Laos",
  "LBP" : "Lebanon",
  "LKR" : "Sri Lanka",
  "LRD" : "Liberia",
  "LSL" : "Lesotho",
  "LYD" : "Libya",
  "MAD" : "Morocco",
  "MDL" : "Moldova",
  "MGA" : "Madagascar",
  "MKD" : "Macedonia",
  "MMK" : "Myanmar",
  "MNT" : "Mongolia",
  "MOP" : "Macau Special Administrative Region",
  "MRO" : "Mauritania",
  "MRU" : "Mauritania",
  "MUR" : "Mauritius",
  "MVR" : "Maldives",
  "MWK" : "Malawi",
  "MXN" : "Mexico",
  "MYR" : "Malaysia",
  "MZN" : "Mozambique",
  "NAD" : "Namibia",
  "NGN" : "Nigeria",
  "NIO" : "Nicaragua",
  "NOK" : "Norway",
  "NPR" : "Nepal",
  "NZD" : "New Zealand",
  "OMR" : "Oman",
  "PAB" : "Panama",
  "PEN" : "Peru",
  "PGK" : "Papua New Guinea",
  "PHP" : "Philippines",
  "PKR" : "Pakistan",
  "PLN" : "Poland",
  "PYG" : "Paraguay",
  "QAR" : "Qatar",
  "RON" : "Romania",
  "RSD" : "Serbia",
  "RUB" : "Russia",
  "RWF" : "Rwanda",
  "SAR" : "Saudi Arabia",
  "SBD" : "Solomon Islands",
  "SCR" : "Seychelles",
  "SDG" : "Sudan",
  "SEK" : "Sweden",
  "SGD" : "Singapore",
  "SHP" : "Saint Helena",
  "SLL" : "Sierra Leone",
  "SOS" : "Somalia",
  "SRD" : "Suriname",
  "STD" : "São Tomé and Príncipe",
  "STN" : "São Tomé and Príncipe",
  "SVC" : "El Salvador",
  "SYP" : "Syria",
  "SZL" : "Swaziland",
  "THB" : "Thailand",
  "TJS" : "Tajikistan",
  "TMT" : "Turkmenistan",
  "TMM" : "Turkmenistan",
  "TND" : "Tunisia",
  "TOP" : "Tonga",
  "TRY" : "Turkey",
  "TTD" : "Trinidad and Tobago",
  "TWD" : "Taiwan",
  "TZS" : "Tanzania",
  "UAH" : "Ukraine",
  "UGX" : "Uganda",
  "USD" : "United States of America",
  "UYU" : "Uruguay",
  "UZS" : "Uzbekistan",
  "VES" : "Venezuela",
  "VND" : "Vietnam",
  "VUV" : "Vanuatu",
  "WST" : "Samoa",
  "XAF" : "Cameroon, Congo",
  "XAG" : "Silver Ounce",
  "XAU" : "Gold Ounce",
  "XCD" : "West Indies Nations",
  "XDR" : "International Monetary Fund",
  "XOF" : "Mali, Niger, Senegal",
  "XPD" : "Palladium Ounce",
  "XPF" : "French Polynesia",
  "XPT" : "Platinum Ounce",
  "YER" : "Yemen",
  "ZAR" : "South Africa",
  "ZMW" : "Zambia",
  "ZWL" : "Zimbabwe",
  "SSP" : "Republic of South Sudan",
  "BYN" : "Belarus",
  "GGP" : "Guernsey",
  "CUC" : "Cuba"
};
class Calculator extends Component{
    constructor() {
        super();
        this.state = {
           histfromCurrency:'USD',
           histtoCurrency:'EUR',
           histamount:'',
           histdate:"",
           histvalue:"",
           histcurAm:"",
           histcurDate:"",
           histcurfromCurrency:"",
           histcurtoCurrency:"",
           histswapvalue:"",
           DateErr:"",
           isDateErr:true,
           dis:false,
           curArray:[],
           currencies:[],
            data:[],
            base:"USD",
            amount: "",
            convertTo: "INR",
            result: ""
        };
    }
    getCountry=(code)=>{
      return codeToCountry[code];
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
        if (amount === isNaN) {
          return;
        } else {
          axios.get("https://api.exchangerate.host/latest?base="+this.state.base)
            .then(response => {
                var jsonArray=JSON.parse(JSON.stringify(response.data.rates));
                var names=Object.keys(jsonArray);
                var values=Object.values(jsonArray);
                const results = (response.data.rates[this.state.convertTo] * amount).toFixed(4);
                this.setState({data:values,result:results});

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
    componentDidMount=()=>{
        axios.get("https://api.exchangerate.host/latest")
        .then(
            response=>{
                this.setState({curArray:Object.keys(response.data.rates)})
            }
        )
        .catch(
            err=>{
                console.log(err);
            }
        )
        if(this.props.match.params.lcal==0)
        {
          document.getElementById("calName").innerText="HISTORICAL CALCULATOR"
          document.getElementById("togchange").checked=true;
          this.showHCal();
        }
        else if(this.props.match.params.lcal==1)
        {
          document.getElementById("calName").innerText="LIVE CALCULATOR"
          document.getElementById("togchange").checked=false;
          this.showLCal();
        }
    }
    valid=()=>{
      var DateErr="";
      var dval=document.getElementById("date1").value;
      if(new window.Date(dval)>new window.Date()){
        DateErr = "Cant display rates for future dates"
        this.setState({DateErr:DateErr,isDateErr:true})
        return false
      }
      else if(dval===""){
        DateErr = "Date cant be empty"
        this.setState({DateErr:DateErr,isDateErr:true})
        return false
      }
      else{
         DateErr=""
        this.setState({DateErr:"",isDateErr:false})
        return true
      }
    }
    histconvert=()=>{
      if(this.valid())
      {
        this.state.histswapvalue="";
        axios.get("https://api.exchangerate.host/convert?from="+this.state.histfromCurrency+"&to="+this.state.histtoCurrency+"&date="+this.state.histdate+"&amount="+this.state.histamount)
        .then(
            response=>{
               this.setState({dis:true,histcurDate:this.state.histdate,histvalue:response.data.result,histcurAm:this.state.histamount,histcurfromCurrency:this.state.histfromCurrency,histcurtoCurrency:this.state.histtoCurrency})
            }
        )
        .catch(
            err=>{
                console.log(err)
            }
        )
        this.histSwapConvert();
      }
    }
    histSwapConvert=()=>{
        
      axios.get("https://api.exchangerate.host/convert?from="+this.state.histtoCurrency+"&to="+this.state.histfromCurrency+"&date="+this.state.histdate+"&amount="+this.state.histamount)
      .then(
          response=>{
             this.setState({histswapvalue:response.data.result})
          }
      )
      .catch(
          err=>{
              console.log(err)
          }
      )
  }
    showLCal=()=>{
        document.getElementById("div1").style.display="block";
        document.getElementById("div2").style.display="none";
    }
    showHCal=()=>{
        document.getElementById("div1").style.display="none";
        document.getElementById("div2").style.display="block";
    }
    handle=event=>{
        var name = event.target.name;
        var val = event.target.value;
        this.setState({[name]:val,histvalue:"",histswapvalue:"",dis:false})
        if(name="histdate")
        this.valid(); 
        //console.log(this.state.fromCurrency,this.state.toCurrency,this.state.date)
    }
    showLH=()=>{
      if(document.getElementById("togchange").checked)
      {
        document.getElementById("calName").innerText="HISTORICAL CALCULATOR"
        this.showHCal();
      }
      else
      {
        this.showLCal();
        document.getElementById("calName").innerText="LIVE CALCULATOR"
      }
    }
    swapCur=()=>{
        var f=document.getElementById("first1").value;
        document.getElementById("first1").value=document.getElementById("second2").value;
        document.getElementById("second2").value=f;
        var tempFrom=this.state.histfromCurrency;
        var tempValue=this.state.histvalue;
        var tempCurFrom=this.state.histcurfromCurrency;
        this.setState({histfromCurrency:this.state.histtoCurrency,histtoCurrency:tempFrom,histcurfromCurrency:this.state.histcurtoCurrency,histcurtoCurrency:tempCurFrom,histswapvalue:tempValue,histvalue:this.state.histswapvalue})
    }
    render() {
        const { curArray, base, amount, convertTo, result,  } = this.state;
        return(
        <div className="col-md-10 offset-md-1">
        <br/>
            <div className="card  calBg no-gutters">
            <div className="card-header text-center bg-primary text-light" style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}>
              <h2 id="calName" style={{wordSpacing:"10px",letterSpacing:"3px",fontFamily:"monospace"}}>LIVE CALCULATOR</h2>
            </div>
            <div className="col-md-10 offset-md-1 card-body h-100" style={{backgroundColor:"white",height:"500px",overflow:"auto"}}>
                <div className="col-md-12">
                  <form className="form-row">
                    <div className="form-group col-md-10 offset-md-1">
                      <label htmlFor="tog" style={{fontSize:"20px"}} className="lab"><b><i class="fa fa-history"></i>&nbsp;&nbsp;Historical Calculator &nbsp;</b></label>
                      <label name="tog" className="switch">
                          <input id="togchange" type="checkbox" onChange={this.showLH}/>
                          <span className="slider round"></span>
                      </label>
                    </div>
                  </form>
                </div>
                <div className="col-md-12 h-100" id="div1" style={{overflow:"auto"}}>
                  <form className="form-row">
                    <div className="form-group col-md-4 offset-md-1">
                      <label htmlFor="base" className="lab"><b>From</b></label>
                      <select name="base" value={base} onChange={this.handleSelect} className="form-control form-control-md">
                        <option value="USD">USD-United States of America</option>
                        {curArray.map(nm=>{if(nm!='USD')return <option key={nm} value={nm}>{nm}-{this.getCountry(nm)}</option>})}
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="amText" className="lab"><b>Amount</b></label>
                      <input placeholder="enter amount" name="amText" type="number" value={amount} onChange={this.handleInput} className="form-control  form-control-md"/>
                    </div>
                  </form>

                  <form className="form-row">
                    <div className="form-group col-md-4 offset-md-1 text-center">
                      <br></br>
                      <button style={{letterSpacing:"2px"}} type="button" onClick={this.handleSwap} className="swap rounded-circle">
                          &#x2191;&#x2193;
                      </button>
                    </div>
                  </form>

                  <form className="form-row">
                    <div className="form-group col-md-4 offset-md-1">
                      <label htmlFor="convertTo" className="lab"><b>To</b></label>
                      <select name="convertTo" value={convertTo} onChange={this.handleSelect} className="form-control form-control-md">
                        <option value="INR">INR-India</option>
                        {curArray.map(nm=>{if(nm!='INR')return <option key={nm} value={nm}>{nm}-{this.getCountry(nm)}</option>})}
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="exchangeAmount" className="lab"><b>Exchange Amount</b></label>
                      <input name="exchangeAmount" disabled={true} value={amount === ""? "0": result === null? "Calculating...": result}
                            className="form-control form-control-md"
                      />
                    </div>
                  </form>
                  <form className="form-row">
                    <div className="form-group col-md-11 offset-md-1">
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
                
                <div className="col-md-12 h-100" id="div2" style={{overflow:"auto"}}>
                    <br></br>
                    <form className="form-row">
                      <div className="form-group col-md-5">  
                        <label htmlFor="histfromCurrency" className="lab"><b>From</b></label>
                        <select id="first1" name="histfromCurrency" className="fCur form-control" onChange={this.handle}>
                          <option value="USD">USD-United States of America</option>
                          {this.state.curArray.map((c)=>{
                              if(c!='USD')
                              return <option value={c} key={c}>{c}-{this.getCountry(c)}</option>
                          })}
                        </select>
                      </div>
                      <div className="form-group col-md-2 text-center">
                          <br></br>
                        <button name="swapButton" type="button" className="swap rounded-circle" onClick={this.swapCur}><h5>&#x21c4;</h5></button>
                      </div>
                      <div className="form-group col-md-5">
                        <label htmlFor="histtoCurrency" className="lab"><b>To</b></label>
                        <select id="second2" name="histtoCurrency" className="tCur form-control" onChange={this.handle}>
                          <option value="EUR">EUR-European Euro</option>
                          {this.state.curArray.map((c)=>{
                              if(c!='EUR')
                              return <option value={c} key={c}>{c}-{this.getCountry(c)}</option>
                          })}
                        </select>
                      </div>
                    </form>

                    <form className="form-row">
                      <div className="form-group col-md-12">
                        <label htmlFor="histdate" className="lab"><b>Date</b></label>
                        <input id="date1" className="form-control histdat" name="histdate" type="date" onChange={this.handle}></input>
                        <span className="text-danger">{this.state.DateErr}</span>
                      </div>
                    </form>

                    <form className="form-row">
                      <div className="form-group col-md-12">
                        <label htmlFor="histamount" className="lab"><b>Amount</b></label>
                        <input placeholder="default amount 1" className="amt form-control" name="histamount" onChange={this.handle} value={this.state.histamount}></input>
                      </div>
                      <div className="form-group col-md-2 offset-md-5">
                        <button type="button" disabled={this.state.isDateErr} className="btn btn-block btn-primary btn-md" onClick={this.histconvert}>Convert</button>
                      </div>
                    </form>

                    <form className="form-row">
                      <div className="form-group col-md-7">
                        <br></br>
                        {this.state.dis && 
                          <h6 style={{color:"grey"}}>
                            {this.state.histcurAm=="" && !this.state.histvalue=="" && <span>1&nbsp;{this.state.histcurfromCurrency}=</span>}{!this.state.histcurAm=="" && this.state.histcurAm && <span>{this.state.histcurAm}&nbsp;{this.state.histcurfromCurrency}=</span>}
                            <h2 className="text-dark">
                                {this.state.histvalue}
                                <span style={{color:"grey",fontSize:"32px"}}>
                                    &nbsp;
                                    {this.state.histcurtoCurrency}
                                    &nbsp;&nbsp;&nbsp;
                                    {this.state.histcurDate}
                                </span>
                            </h2>
                          </h6>
                        }
                      </div>
                      <div className="form-group col-md-4 offset-md-1 text-right">
                        <br></br><br></br>
                        {this.state.dis &&
                          <span style={{color:"grey"}}>
                            <b>
                              {this.state.histcurAm=="" && !this.state.histvalue=="" && <span>1&nbsp;{this.state.histcurtoCurrency}=</span>}{!this.state.histcurAm=="" && this.state.histcurAm && <span>{this.state.histcurAm}&nbsp;{this.state.histcurtoCurrency}=</span>}
                              <span className="text-dark">{this.state.histswapvalue}</span>
                              &nbsp;
                              {this.state.histcurfromCurrency}
                            </b>
                          </span>
                        }
                      </div>
                    </form>
                </div>
               
            </div>
            </div>
        </div>
        );
    }
}
export default Calculator;