import BarPastWeek from "./Bars/BarPastWeek"
import BarPastMonth from "./Bars/BarPastMonth"
import BarPastYear from "./Bars/BarPastYear"
import React, { Component } from 'react'
import './Bar.css';
class BarChart extends Component {

    constructor() {
        super();
        this.state = {
            name: "React",
            showHidePast1Week: true,
            showHidePast1Month: false,
            showHidePast1Year: false,

        };
        this.hideComponent = this.hideComponent.bind(this);
    }
    hideComponent(name) {
        console.log(name);
        switch (name) {
            case "showHidePast1Week":
            {
                document.getElementById("but1").style.background="rgb(56,123,225)";  
                document.getElementById("but2").style.background="white";     
                document.getElementById("but3").style.background="white";
                document.getElementById("but1").style.color="white";     
                document.getElementById("but2").style.color="black";  
                document.getElementById("but3").style.color="black";
                this.setState({ showHidePast1Week: true, showHidePast1Month: false, showHidePast1Year: false });
                break;
            }
            case "showHidePast1Month":
            {
                    document.getElementById("but1").style.background="white";     
                    document.getElementById("but2").style.background="rgb(56,123,225)";  
                    document.getElementById("but3").style.background="white";
                    document.getElementById("but1").style.color="black";     
                    document.getElementById("but2").style.color="white";  
                    document.getElementById("but3").style.color="black";
                    this.setState({ showHidePast1Month: true, showHidePast1Week: false, showHidePast1Year: false });
                    break;
            }
            case "showHidePast1Year":
            {
                    document.getElementById("but1").style.background="white";
                    document.getElementById("but2").style.background="white";       
                    document.getElementById("but3").style.background="rgb(56,123,225)";
                    document.getElementById("but1").style.color="black";     
                    document.getElementById("but2").style.color="black";  
                    document.getElementById("but3").style.color="white";
                    this.setState({ showHidePast1Week: false, showHidePast1Month: false, showHidePast1Year: true });
                    break;
            }
            default:
                break;
        }
    }
    handleChange = event => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({ [name]: value })
    }

    render() {
        const { showHidePast1Month, showHidePast1Week, showHidePast1Year } = this.state;
        return (  
            <div>
            <form className="form-row">    
                <div className="form-group col-md-4">
                    <button type="button" id="but1" className="btn btn-block btn-lg" onClick={() => this.hideComponent("showHidePast1Week")}>
                    <i class="fa fa-bar-chart"></i>&nbsp;&nbsp;BAR CHART 1 WEEK</button>
                </div>
                <div className="form-group col-md-4">
                    <button type="button" id="but2" className="btn btn-block btn-lg" onClick={() => this.hideComponent("showHidePast1Month")}>
                    <i class="fa fa-bar-chart"></i>&nbsp;&nbsp;BAR CHART 1 MONTH</button>
                </div>
                <div className="form-group col-md-4">
                    <button type="button" id="but3" className="btn btn-block btn-lg" onClick={() => this.hideComponent("showHidePast1Year")}>
                    <i class="fa fa-bar-chart"></i>&nbsp;&nbsp;BAR CHART 1 YEAR</button>
                </div>
            </form>
            { showHidePast1Month && <BarPastMonth fromCurrency={this.props.fromCurrency} toCurrency={this.props.toCurrency} /> }

            { showHidePast1Week && <BarPastWeek fromCurrency={this.props.fromCurrency} toCurrency={this.props.toCurrency} /> }

            { showHidePast1Year && <BarPastYear fromCurrency={this.props.fromCurrency} toCurrency={this.props.toCurrency} /> }
            </div>
        );
    }
}
export default BarChart;