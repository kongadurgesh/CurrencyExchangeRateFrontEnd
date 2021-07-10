import React, { Component } from 'react';
import axios from 'axios';
const url = "http://localhost:2222/currency-exchange/editprofile/"
class EditMember extends Component {
    constructor() {
        super();
        this.state={
            successmessage:"",
            errormessage:"",
            newName:"",
            newEmailId:"",
            newNameError:"",
            newEmailIdError:"",
            newNameValid:false,
            newEmailIdValid: false,
            buttonActive: false,
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const postData = {
            customer_email:this.state.newEmailId,
            customer_name:this.state.newName
        }
        axios
            .put(url + this.props.match.params.customerId, postData)
            .then(response => {
                console.log(response)
                this.setState({ successMessage: response.data, errorMessage: "" })
            })
            .catch(err => {
                if (err.response) {
                    this.setState({ errorMessage: err.response.data.errorMessage, successMessage: "" })
                }
                else {
                    this.setState({ errorMessage: "Internal Server Error", successMessage: "" })
                }
            })
    }
    handleChange = event => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({ [name]: value })
        this.validate(name, value)
    }
    validate = (name, value) => {
        var {newNameValid,newNameError,newEmailIdValid,newEmailIdError}=this.state;
        switch (name) {
            case "newName":
                const memberRegex = /^[A-Z][a-z]{2,} [A-Z][a-z]{2,}$/;
                if(value===""){
                    newNameError="Field Required";
                    newNameValid=false;
                }
                else if(!value.match(memberRegex)){
                    newNameError="Please enter valid name";
                    newNameValid=false;
                }
                else{
                    newNameError="";
                    newNameValid=true;
                }
                break;
            case "newEmailId":
            const emailRegex=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(value==""){
                    newEmailIdError="Field Required";
                    newEmailIdValid=false;
                }
                else if(!value.match(emailRegex)){
                    newEmailIdError="Enter a Valid Email Address";
                    newEmailIdValid=false;
                }
                else{
                    newEmailIdError="";
                    newEmailIdValid=true;
                }
                break;
            default:
                break
        }
        console.log(this.state);
        console.log(value);
        var buttonActive= newNameValid && newEmailIdValid;
        this.setState({ 
            newNameError: newNameError,
            newEmailIdError: newEmailIdError,
            newNameValid: newNameValid,
            newEmailIdValid: newEmailIdValid,
            buttonActive: buttonActive,
            successMessage:"",
            errorMessage:""
        })

    }
    render() {
        return (
            <div className="row r1">
                <div className="col-md-4 offset-md-4 c1">
                    <br></br>
                    <div className="card" style={{background:"none",border:"none"}}>
                        <div className="card-header text-light text-center"style={{background:"none",border:"none"}}>
                            <h3><i class="fa fa-edit"></i>&nbsp;EDIT DETAILS</h3>
                        </div>
                        <div className="card-body">
                                <div className="form-group">
                                    <input onChange={this.handleChange} style={{ borderRadius: "8px"}} placeholder="Enter new Name" type="text" name="newName" value={this.state.newName} className="form-control" onChange={this.handleChange} />
                                    <span style={{fontSize:"15px"}} name="newNameError" className="text-warning">{this.state.newNameError}</span>
                                </div>
                                <div className="form-group">
                                    <input onChange={this.handleChange} style={{ borderRadius: "8px"}} placeholder="Enter new Email Id" type="email" name="newEmailId" value={this.state.newEmailId} className="form-control" onChange={this.handleChange} />
                                    <span style={{fontSize:"15px"}} name="newEmailIdError" className="text-warning">{this.state.newEmailIdError}</span>
                                </div>
                                <br></br>
                                <div className="form-group col-6 offset-3">
                                    <button onClick={this.handleSubmit} style={{borderRadius:"8px"}} type="submit" name="" className="btn btn-block btn-primary" disabled={!this.state.buttonActive}>CHANGE</button>
                                </div>
                        </div>
                        <span name="errorMessage" className="text-warning text-center">{this.state.errorMessage}</span>
                        <span name="successMessage" className="text-light text-center">{this.state.successMessage}</span>
                        <div className="card-footer text-center text-light" style={{background:"none",border:"none"}}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default EditMember;