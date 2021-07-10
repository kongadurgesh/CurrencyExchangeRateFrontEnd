import React, { Component } from "react"
import ReactApexChart from "react-apexcharts"
import axios from "axios"

class PastMonth extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: [],
			xdate: [],
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
					height: 350,
					type: 'area',
					zoom: {
						enabled: false
					}
				},
				markers:{
					size:0,
				},
				dataLabels: {
					enabled: false
				},
				stroke: {
					curve: 'smooth',
					width:2,
				},
				title: {
					text: 'Currency Exchange Rates',
					align: 'left'
				},
				// grid: {
				// 	row: {
				// 		colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
				// 		opacity: 0.5
				// 	},
				// },
				xaxis: {
					categories: this.state.xdata,
					width:4,
					axisBorder:{
						color:'grey'
					},
					axisTicks:{
						color:'grey'
					}
				}
			},


		};


		
		return (
			<div>
				<br></br><br></br>
            
						<div className="card">
							<div className="card-header text-center">
								<b>{this.props.fromCurrency}&nbsp; to &nbsp;{this.props.toCurrency} Last Week Chart</b> 
								<b className="offset-3"><span style={{fontSize:"35px",padding:"5px"}} className="text-success">.</span>&nbsp;1{this.props.fromCurrency}&nbsp; = &nbsp;{this.state.data[this.state.data.length-1]} {this.props.toCurrency} {tdy}</b>
							</div>
							<div className="card-body">
								{(this.state.fromCurrency!=this.props.fromCurrency||this.state.toCurrency!=this.props.toCurrency)?this.componentDidMount():""}
								<ReactApexChart options={options1.options} series={options1.series} type="area" height={360} />
							</div>
						</div>
			</div>
		);

	}

}
export default PastMonth;