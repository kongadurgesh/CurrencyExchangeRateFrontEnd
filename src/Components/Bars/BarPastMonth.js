import React, { Component } from "react"
import ReactApexChart from "react-apexcharts"
import axios from "axios"

class BarPastMonth extends Component {

	constructor() {
		super()
		this.state = {
			data: [],
			xdata: [],
			fromCurrency:"",
			toCurrency:"",
		}

	}
	componentDidMount() {

		var data = [];
		var xdata = [];
		var date = new Date()
			var tdy=new Date();
			date.setDate(tdy.getDate()-30);
			
			var fromDate="";
            var toDate="";
            if((date.getMonth()+1)<10)
			{
                fromDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-0' + date.getDate();
                toDate=tdy.getFullYear()+'-'+(tdy.getMonth()+1)+'-0'+tdy.getDate();
            }
            else{
                fromDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
                toDate=tdy.getFullYear()+'-'+(tdy.getMonth()+1)+'-'+tdy.getDate();
			}
			
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
				})
				.catch(err => {
					console.log("oppps", err);
				});
	}

	render() {

		var tdy=new Date().toLocaleString();
		const options1 = {

			series: [{
				name: "ExchangeRates",
				data:this.state.data
			}],
			
			options: {
				chart: {
					type: 'bar',
					zoom: {
						enabled: false
					}
                },
                plotOptions:{
                    bar:{
                        borderRadius:4,
                        horizontal:true,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
				title: {
					text: 'Currency Exchange Rates',
					align: 'left'
				},
				xaxis: {
					categories: this.state.xdata,
					labels:{
						show:false,
						rotate:270,
						maxHeight:120,
					},
					width:4,
					axisBorder:{
                        color:'grey',
                        offsetX:-2,
					},
					axisTicks:{
						color:'grey'
                    },
                    min:Math.min(...this.state.data),
                    max:Math.max(...this.state.data),
				}
			},


		};



		return (
			<div>
				<br></br>
				<br></br>
						<div className="card">
							<div className="card-header text-center">
								<b>{this.props.fromCurrency}&nbsp; to &nbsp;{this.props.toCurrency} Last Month Chart</b> 
								<b className="offset-2"><span style={{fontSize:"35px",padding:"5px"}} className="text-success">.</span>&nbsp;1{this.props.fromCurrency}&nbsp; = &nbsp;{this.state.data[this.state.data.length-1]} {this.props.toCurrency} {tdy}</b>
							</div>
							<div className="card-body" style={{overflow:"scroll",height:"380px"}}>
								{(this.state.fromCurrency!=this.props.fromCurrency||this.state.toCurrency!=this.props.toCurrency)?this.componentDidMount():""}
								<ReactApexChart options={options1.options} series={options1.series} type="bar" height="1500px"/>
							</div>
						</div>
			</div>
		);

	}

}
export default BarPastMonth;
