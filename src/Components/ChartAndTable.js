import React, { Component } from 'react'
import './ChartsAndTables.css'
import Table from "./Table"
import Chart from "./Chart"
import BarChart from "./Bar"
import axios from "axios"
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
class ChartAndTable extends Component {
    constructor(){
        super();
        this.state={
            name:"React",
            showHideTable:false,
            showHideLine:false,
            showHideBar:false,
            fromCurrency:"USD",
            toCurrency:"GBP",
            amount :1,
            currencies:[],
            date:""

        };
        this.hideComponent = this.hideComponent.bind(this);
    }
    componentDidMount=()=> {
        axios
        .get("https://api.exchangerate.host/latest")
        .then(response => {
          const currencyAr = [];
          for (const key in response.data.rates) {
            currencyAr.push(key);
          }
          this.setState({ currencies: currencyAr });
        })
        .catch(err => {
          console.log("oppps", err);
        })
          this.displayChart();
      }
    displayChart=()=>{
        if(this.props.match.params.show=="table")
        this.hideComponent("showHideTable");
        else if(this.props.match.params.show=="line")
        this.hideComponent("showHideLine");
        else if(this.props.match.params.show=="bar")
        this.hideComponent("showHideBar");
    }
    getCountry=(code)=>{
        return codeToCountry[code];
      }
    hideComponent(name){
        switch(name){
            case "showHideTable":
                {
                    document.getElementById("button1").style.background="rgb(56,123,225)";
                    document.getElementById("button1").style.color="white";
                    document.getElementById("button2").style.background="white";
                    document.getElementById("button2").style.color="black";
                    document.getElementById("button3").style.background="white";
                    document.getElementById("button3").style.color="black";
                    this.setState({showHideTable:true,showHideLine:false,showHideBar:false});
                    break;
                }
            case "showHideLine":
                {
                    document.getElementById("button2").style.background="rgb(56,123,225)";
                    document.getElementById("button2").style.color="white";
                    document.getElementById("button1").style.background="white";
                    document.getElementById("button1").style.color="black";
                    document.getElementById("button3").style.background="white";
                    document.getElementById("button3").style.color="black";
                    this.setState({showHideLine:true,showHideTable:false,showHideBar:false});
                    break;
                }
            case "showHideBar":
                {
                    document.getElementById("button3").style.background="rgb(56,123,225)";
                    document.getElementById("button3").style.color="white";
                    document.getElementById("button1").style.background="white";
                    document.getElementById("button1").style.color="black";
                    document.getElementById("button2").style.background="white";
                    document.getElementById("button2").style.color="black";
                    this.setState({showHideBar:true,showHideTable:false,showHideLine:false});
                    break;
                }           
            default:
                break;
        }

    }
    handleChange=event=>{
        var name = event.target.name;
        var value = event.target.value;
        this.setState({[name]:value})
    }

    render(){
        const {showHideBar,showHideLine,showHideTable}=this.state;
        return(
        <div className="col-10 offset-1 bgChart">
            <br/>
        <div className="row card">
            <div className="col-12 card-header bg-primary textDiv text-center text-light  no-gutters" style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}>
                <h2 style={{wordSpacing:"10px",letterSpacing:"3px",fontFamily:"monospace"}}>HISTORICAL EXCHANGE RATES</h2>
            </div>
            <div className="col-12 card-body h-100" style={{backgroundColor:"white",overflow:"auto"}}>
              <form className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="fromCurrency" className="lab"><b>From</b></label>
                    <select className="From form-control form-control-md"
                    name ="fromCurrency"
                    onChange={this.handleChange}
                    value ={this.state.fromCurrency}
                    >
                    {this.state.currencies.map(cur=>(
                        <option key ={cur} value={cur}>{cur}-{this.getCountry(cur)}</option>

                    ))}
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="toCurrency" className="lab"><b>To</b></label>
                    <select className="To form-control form-control-md" 
                    name ="toCurrency"
                    onChange={this.handleChange}
                    value ={this.state.toCurrency}
                    >
                    {this.state.currencies.map(curr=>(
                        <option  key ={curr} value={curr}>{curr}-{this.getCountry(curr)}</option>

                    ))}
                    </select>
                </div>
              </form>
                <br/>
              <form className="form-row">
                <div className="form-group col-md-4">
                    <button type="button" id="button1" className="tab btn-block btn btn-md" onClick={()=>this.hideComponent("showHideTable")}>
                    <i class="fa fa-table"></i>&nbsp;&nbsp;TABLE</button>
                </div>
                <div className="form-group col-md-4">
                    <button type="button" id="button2" className="line btn-block btn btn-md" onClick={()=>this.hideComponent("showHideLine")}>
                    <i class="fa fa-area-chart"></i>&nbsp;&nbsp;LINE CHART</button>      
                </div>
                <div className="form-group col-md-4">
                    <button type="button" id="button3" className="bar btn-block btn btn-md" onClick={()=>this.hideComponent("showHideBar")}>
                    <i class="fa fa-bar-chart"></i>&nbsp;&nbsp;BAR CHART</button>
                </div>
                <div className="form-group col-md-12 text-center">
                    {!showHideLine&&!showHideTable&&!showHideBar&&
                        <span>select table or any chart</span>
                    }
                </div>
              </form>
                    <br></br>
                {showHideTable && <Table fromCurrency={this.state.fromCurrency} toCurrency={this.state.toCurrency}/>}
                {showHideLine && <Chart fromCurrency={this.state.fromCurrency} toCurrency={this.state.toCurrency}/>}
                {showHideBar && <BarChart fromCurrency={this.state.fromCurrency} toCurrency={this.state.toCurrency}/>}
            </div>
        </div>
        <div>
        </div>
        </div>
        )

    }
}
export default ChartAndTable;