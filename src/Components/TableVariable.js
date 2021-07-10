import React from "react"
import axios from "axios"
import { Component } from "react"

class TableVariable extends Component{
	constructor(){
		super();
		this.state={
			data:[],
			xdata:[],
			fromCurrency:"",
            toCurrency:"",
            difference:[],
            direction:[]
		}
	}
	componentDidMount(){
		var data=[];
		var xdata=[];
		var fromDate=this.props.fromDate;
		var toDate=this.props.toDate;
		console.log(this.state);
		console.log(this.props);
		console.log(fromDate+" "+toDate);
		/*if(fromDate.getMonth()+1<10){
			if(fromDate.getDate()+1<10){
				fromDate = fromDate.getFullYear() + '-0' + (fromDate.getMonth() + 1) + '-0' + fromDate.getDate();
			}
			else{
				fromDate = fromDate.getFullYear() + '-0' + (fromDate.getMonth() + 1) + '-' + fromDate.getDate();
			}
		}
		if(toDate.getMonth()+1<10){
			if(toDate.getDate()+1<10){
				toDate=toDate=toDate.getFullYear()+'-0'+(toDate.getMonth()+1)+'-0'+toDate.getDate();
			}
			else{
				toDate=toDate.getFullYear()+'-0'+(toDate.getMonth()+1)+'-'+toDate.getDate();
			}
		}*/
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
		var tempFromDatearray=this.props.fromDate.split("-");
		const fromDate=new Date(tempFromDatearray[0],tempFromDatearray[1],tempFromDatearray[2]);
		var tempToDatearray=this.props.toDate.split("-");
		const toDate=new Date(tempToDatearray[0],tempToDatearray[1],tempToDatearray[2]);
		const diffTime=Math.abs(toDate-fromDate);
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        for (let i = diffDays; i >= 0; i--) {
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
	render(){
		return(
			<div>
            <br></br><br></br>
                <div className="card">
					<div className="card-header text-center">
						<b>{this.props.fromCurrency}&nbsp; to &nbsp;{this.props.toCurrency} Last Year Chart</b> 
						<b className="offset-3"><span style={{fontSize:"35px",padding:"5px"}} className="text-success">.</span>&nbsp;1{this.props.fromCurrency}&nbsp; = &nbsp;{this.state.data[this.state.data.length-1]} {this.props.toCurrency} {this.props.fromDate} to {this.props.toDate}</b>
					</div>
					<div className="card-body tableScroll">
                        {(this.state.fromCurrency!=this.props.fromCurrency||this.state.toCurrency!=this.props.toCurrency)?this.componentDidMount():""}
                        {this.generateTable()}
                    </div>
                </div>
        	</div>
		)
	}
}
export default TableVariable