import React, { Component } from 'react';
import axios from "axios";
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
class Five extends Component{
    constructor(){
        super();
        this.state={
            topFive:[],
            botFive:[]
        }
    }
    componentDidMount=()=>{
      var tFive=[];
      var bFive=[];
      axios.get("https://api.exchangerate.host/latest?base=USD")
      .then(
        response=>{
          var jsonArray=JSON.parse(JSON.stringify(response.data.rates));
          var array=[];
          for(var a in jsonArray)
          array.push([a,jsonArray[a]]);
          array.sort(function(a,b){return a[1]-b[1]});
          array.map((e)=>{bFive.push(e[0])});
          array.reverse();
          array.map((e)=>{tFive.push(e[0])});
          console.log(tFive[0]);
          this.setState({topFive:tFive,botFive:bFive});
        }
      )
    } 
    render(){

      if(this.props.get==0)
      return(
        <div className="row">
        <div className="col-12">
            <h6>{this.state.topFive[0]}-{codeToCountry[this.state.topFive[0]]}</h6>
            <h6>{this.state.topFive[1]}-{codeToCountry[this.state.topFive[1]]}</h6>
            <h6>{this.state.topFive[2]}-{codeToCountry[this.state.topFive[2]]}</h6>
            <h6>{this.state.topFive[3]}-{codeToCountry[this.state.topFive[3]]}</h6>
            <h6>{this.state.topFive[4]}-{codeToCountry[this.state.topFive[4]]}</h6>
        </div>
        </div>
      )
      else if(this.props.get==1)
      return(
        <div className="row">
        <div className="col-12">
            <h6>{this.state.botFive[0]}-{codeToCountry[this.state.botFive[0]]}</h6>
            <h6>{this.state.botFive[1]}-{codeToCountry[this.state.botFive[1]]}</h6>
            <h6>{this.state.botFive[2]}-{codeToCountry[this.state.botFive[2]]}</h6>
            <h6>{this.state.botFive[3]}-{codeToCountry[this.state.botFive[3]]}</h6>
            <h6>{this.state.botFive[4]}-{codeToCountry[this.state.botFive[4]]}</h6>
        </div>
        </div>
      )
    }
}
export default Five;