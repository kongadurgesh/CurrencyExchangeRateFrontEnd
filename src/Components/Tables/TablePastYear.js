import React, { Component } from "react"
import axios from "axios"
import './TablePastYear.css'
class TablePastYear extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            xdate: [],
            fromCurrency:"",
            toCurrency:"",
            difference:[],
            direction:[]
        }
    }

    componentDidMount() {

        var data = [];
        var xdata = [];
        var date = new Date()
            var tdy=new Date();
            tdy.setDate(tdy.getDate()+1);
			date.setDate(tdy.getDate()-365);
            
            var fromDate="";
            var toDate="";
            if(date.getMonth()+1<10){
                if(date.getDate()+1<10){
                    fromDate = date.getFullYear() + '-0' + (date.getMonth() + 1) + '-0' + date.getDate();
                }
                else{
                    fromDate = date.getFullYear() + '-0' + (date.getMonth() + 1) + '-' + date.getDate();
                }
            }
            if(tdy.getMonth()+1<10){
                if(tdy.getDate()+1<10){
                    toDate=toDate=tdy.getFullYear()+'-0'+(tdy.getMonth()+1)+'-0'+tdy.getDate();
                }
                else{
                    toDate=tdy.getFullYear()+'-0'+(tdy.getMonth()+1)+'-'+tdy.getDate();
                }
            }
            console.log(fromDate)
            console.log(toDate)
			var url="https://api.exchangerate.host/timeseries?start_date="+fromDate+"&end_date="+toDate+"&base="+this.props.fromCurrency+"&symbols="+this.props.toCurrency;
			axios.get(url)
				.then(response => {
					var jsonArray=JSON.parse(JSON.stringify(response.data.rates));
					xdata=Object.keys(jsonArray);
					Object.entries(Object.values(jsonArray)).forEach(([key,value])=>{
						Object.entries(Object.values(value)).forEach(([key1,value1])=>{
							data.push(value1);
						})
					});
					this.setState({data:data,xdata:xdata,fromCurrency:this.props.fromCurrency,toCurrency:this.props.toCurrency});
                    this.calculateDifferences(this.state.data);
                })
				.catch(err => {
					console.log("oppps", err);
				});
           

        
    }
    calculateDifferences=(data)=>{
        var difference=[];
        var direction=[];
        difference.push(0);
        direction.push(true);
        for (let index = 1; index < data.length; index++) {
            difference.push((data[index]-data[index-1]).toFixed(5));
            if(difference[index]<0){
                direction.push(false);
            }
            else{
                direction.push(true);
            }
        }
        this.setState({
            difference: difference,
            direction: direction
        });
    }
    generateTable() {
        var rowArr = [];
        console.log(this.state.data)
        console.log(this.state.xdata)
        for (let i = this.state.data.length - 1; i >= 0; i--) {
            var row = (
                <tr>
                    <td style={{backgroundColor:"rgb(56,123,225)"}} className="text-light"><b>{this.state.xdata[i]}</b></td>
                    <td style={{backgroundColor:"rgb(224,247,250)"}} className="text-dark"><b>{this.state.data[i]}</b></td>
                    {this.state.direction[i] && 
                     <td style={{backgroundColor:"rgb(224,247,250)"}} className="text-success"><b>+{this.state.difference[i]}</b></td>  
                    }
                    {!this.state.direction[i] &&
                    <td style={{backgroundColor:"rgb(224,247,250)"}} className="text-danger"><b>{this.state.difference[i]}</b></td>
                    }
                </tr>

            )
            rowArr.push(row);
        }

        return (
            <table className="table table-bordered text-dark" >
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>ExchangeRate</th>
                        <th>Increase/Decrease by</th>
                    </tr>

                </thead>
                <tbody>
                    {rowArr}
                </tbody>
            </table>)
    }

    render() {
        var tdy=new Date().toLocaleString();
        return (
        <div>
            <br></br><br></br>
                <div className="card">
					<div className="card-header text-center">
						<b>{this.props.fromCurrency}&nbsp; to &nbsp;{this.props.toCurrency} Last Year Chart</b> 
						<b className="offset-3"><span style={{fontSize:"35px",padding:"5px"}} className="text-success">.</span>&nbsp;1{this.props.fromCurrency}&nbsp; = &nbsp;{this.state.data[this.state.data.length-1]} {this.props.toCurrency} {tdy}</b>
					</div>
					<div className="card-body tableScroll">
                        {(this.state.fromCurrency!=this.props.fromCurrency||this.state.toCurrency!=this.props.toCurrency)?this.componentDidMount():""}
                        {this.generateTable()}
                    </div>
                </div>
        </div>

        )
    }
};

export default TablePastYear
