import React, { Component } from "react";
import './CurrentCurrencyValues.css';
import axios from 'axios';
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
class CurrentCurrencyValues extends Component{
    cur="USD";
    dat=new Date();
    constructor(){
      super();
      this.state={
          countries:[],
          currencies:[],
          data:[],
          ldata:[],
          counter:60,
      };
    }
    componentDidMount=()=>{
      setTimeout(()=>{
        this.setState({counter:this.state.counter-1})
        if(this.state.counter<0)
        {
          this.setState({counter:60})
          this.getCurrencyValue();
        }
        if(this.state.counter==60)
        {
          this.updateDate();
        }
        this.componentDidMount();
      },1000);
    }
    updateDate=()=>{
      this.dat=new Date();
    }
    getCountries=(names)=>{
      
    let result=[];
    for (let index = 0; index < names.length; index++) {
      result.push(codeToCountry[names[index]]);
    }
    return result;
  }
  getCountry=(code)=>{
    return codeToCountry[code];
  }
    getCurrencyValue=()=>{
     axios.get("https://api.exchangerate.host/latest?base="+this.cur)
     .then(
       response=>{
        var jsonArray=JSON.parse(JSON.stringify(response.data.rates));
         var names=Object.keys(jsonArray);
         var values=Object.values(jsonArray);
         this.setState({currencies:names,data:values});
         this.setState({countries:this.getCountries(names)})
       }
     )
     var tdy=new Date();
     var ldy=new Date();
     ldy.setDate(tdy.getDate()-1);
     axios.get("https://api.exchangerate.host/"+ldy.getFullYear()+"-"+(ldy.getMonth()+1)+"-"+ldy.getDate()+"?base="+this.cur)
     .then(
       response=>{
        var jsonArray=JSON.parse(JSON.stringify(response.data.rates));
         var previousValues=Object.values(jsonArray);
         this.setState({ldata:previousValues});
       }
     )
    }
    componentWillMount=()=>{
      console.log("hi")
      this.getCurrencyValue();
    }
    handleChange=()=>{
      this.cur=document.getElementById("curValue").value;
      this.getCurrencyValue();
    }
    generateTable(){
      var rowArr = [];
      var frow=(
        <tr className="bg-primary text-light">
          <td><b>{this.cur}</b></td>
          <td></td>
          <td><b>1</b></td>
          <td></td>
        </tr>
      )
      rowArr.push(frow);
      for(let i=this.state.data.length-1;i>=0;i--){
        if(this.state.currencies[i]!=this.cur)
        {
          var inc=this.state.data[i]-this.state.ldata[i];
          inc=(inc/this.state.ldata[i])*100;
          var pos=true;
          if(inc<0)
          pos=false;
          var row =  (
              <tr>
                  <td style={{color:"black"}} style={{width:"25%"}}><b>{this.state.countries[i]}</b></td>
                  <td style={{color:"black"}}><b>{this.state.currencies[i]}</b></td>
                  <td style={{color:"black"}}><b>{this.state.data[i]}</b></td>
                  {pos && <td style={{color:"green"}}><b>+{inc.toFixed(3)}%</b></td>}
                  {!pos && <td style={{color:"red"}}><b>{inc.toFixed(3)}%</b></td>}
              </tr>
          )
          rowArr.push(row);
        }
      }
      return(
        <table className="table table-borderless text-dark" id="results">
                      <thead>
                        <th><i class="fas fa-flag"></i>&nbsp;&nbsp;Country</th>
                        <th><i class="fas fa-money-bill"></i>&nbsp;&nbsp;Currency</th>
                        <th><i class="fas fa-coins"></i>&nbsp;&nbsp;Amount</th>
                        <th><i class="fas fa-percentage"></i>&nbsp;&nbsp;Change(<span className="text-primary"><small><b>24h</b></small></span>)</th>
                      </thead>
                      <tbody>
                        {rowArr}
                      </tbody>
        </table>
      )
    }
    render (){
        return(
          <div>
            <div className="col-md-10 offset-md-1" style={{marginTop:"40px"}} >
                <div className="card bg">
                  <div className="card-header text-center bg-primary text-light" style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}>
                  <h2 style={{wordSpacing:"10px",letterSpacing:"3px",fontFamily:"monospace"}}>LIVE EXCHANGE RATES</h2>
                  </div>
                  <div className="card-body tableScroll">
                    <form className="form-row col-md-12">
                      <div className="form-group col-md-10">
                        <label htmlFor="listOfCurrencies"><h5 className="text-dark">Base</h5></label>
                        <select id="curValue" className="sel form-control form-control-md" name="listOfCurrencies">
                            <option value="USD">USD-United States of America</option>
                            {this.state.currencies.map(nm=>{if(nm!='USD')return <option key={nm} value={nm}>{nm}-{this.getCountry(nm)}</option>})}
                            
                        </select>
                      </div>
                      <div className="form-group col-md-2">
                        <br/><br/>
                        <button type="button" className="btn btn-block btn-md btn-primary go" onClick={this.handleChange}>
                          GO
                        </button>
                      </div>
                      <div className="form-group col-md-12">
                        {this.generateTable()}
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-center"> 
                    <label className="timer text-center">{this.state.counter}</label>
                    &nbsp;&nbsp;Last updated&nbsp;<span><small>{this.dat.toLocaleString()}</small></span>
                  </div>
                </div>
            </div>
          </div>
        )
    }
}
     
export default CurrentCurrencyValues;
