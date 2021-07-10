import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
const url = "http://localhost:2222/currency-exchange/update/"
const url1 = "http://localhost:2222/currency-exchange/"
class UpdatePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            successMessage: "",
            errorMessage: "",
            confirm: "",
            new: "",
            newError: "",
            confirmError: "",
            buttonActive: false,
            validNew: false,
            validConfirm: false,
            profile: {

            },
            updatePassword: false,
            oldPassword: "",
            updatePasswordError: ""

        }
    }
    componentDidMount() {
        axios
            .get(url1 + this.props.match.params.customerId)
            .then(response => {
                this.setState({ profile: response.data })
            })
            .catch(err => {
                console.log("oops" + err)

            })
    }
    handleSubmit = event => {

        event.preventDefault()
        console.log("buttonClicked")
        const postData = {
            customer_password: this.state.confirm
        }

        axios
            .put(url + this.props.match.params.customerId, postData)
            .then(response => {
                console.log(response)
                this.setState({ successMessage: response.data, errorMessage: "" })
                alert(response.data + " Redirecting to Home Page")
            })
            .catch(err => {
                if (err.response) {
                    this.setState({ errorMessage: err.response.data.message, successMessage: "" })
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
        var { newError, confirmError, validConfirm, validNew, updatePasswordError, updatePassword, oldPassword } = this.state;
        switch (name) {
            case "oldPassword":
                if (value === "") {
                    updatePasswordError = "Field Required";
                    updatePassword = false;
                }
                else if (value != this.state.profile.customer_password) {
                    updatePassword = false;
                    updatePasswordError = "Invalid Password";

                }
                else if (value === this.state.profile.customer_password) {
                    updatePassword = true;
                    updatePasswordError = "";
                }
                break
            case "new":
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

                if (value === "") {
                    newError = "Please Enter New Password"
                    validNew = false;
                }
                else if (!value.match(passwordRegex)) {
                    newError = "Password should be atleast 8 characters length, atleat one digit, atleast one special character, atleast one caps and small alphabet";
                    validNew = false;
                }
                else if (value === this.state.profile.customer_password) {
                    newError = "New Password cant be Old Password"
                    validNew = false;
                }
                else {
                    newError = ""
                    validNew = true;
                }
                break
            case "confirm":
                if (this.state.new === "") {
                    confirmError = "Please fill the new password first and then confirm"
                    validConfirm = false
                }
                else if (value === "") {
                    confirmError = "Please Confirm the Password"
                    validConfirm = false
                }
                else if (value != this.state.new) {
                    confirmError = "Password Mismatch"
                    validConfirm = false
                }
                else {
                    confirmError = ""
                    validConfirm = true
                }
                break
            default:
                break
        }
        var buttonActive = validConfirm && validNew
        this.setState({ 
            updatePassword: updatePassword, 
            updatePasswordError: updatePasswordError, 
            newError: newError, 
            confirmError: confirmError, 
            validNew: validNew,
            validConfirm: validConfirm, 
            buttonActive: buttonActive 
        })

    }
    render() {
        var { updatePassword } = this.state
        var head=""
        if(this.state.updatePassword==true)
        head="UPDATE PASSWORD"
        else
        head="OLD PASSWORD"
        return (
            <div> <br /><br /><br /><br />
                <div className="row">
                    <div className="col-md-8 offset-md-2 card" >
                        <div className="card-header text-center text-dark" style={{marginLeft:"-16px",marginRight:"-16px",marginTop:"-1px",width:"103.5%"}}><h4><i class="fa fa-key"></i>&nbsp;{head}</h4></div>
                        {
                            !updatePassword &&
                            <div className="form-group">

                                <br />
                                <input  placeholder="enter old password to update" style={{ borderRadius: "20px"}} value={this.state.oldPassword} type="password" onChange={this.handleChange} name="oldPassword" className="form-control" />
                                <br />
                                <span style={{fontSize:"15px"}} className="text-danger">{this.state.updatePasswordError}</span>

                            </div>
                        }

                        {
                            updatePassword &&
                            
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>
                                    
                                        <div className="form-group">
                                           <br />
                                            <input placeholder="New password" style={{ borderRadius: "20px"}} value={this.state.new} type="password" onChange={this.handleChange} name="new" className="form-control" />
                                            <br />
                                            <span style={{fontSize:"15px"}} className="text-danger">{this.state.newError}</span>
                                        </div>
                                        <div className="form-group">

                                            <input placeholder="Confirm password" style={{ borderRadius: "20px"}} type="password" value={this.state.confirm} onChange={this.handleChange} name="confirm" className="form-control" />
                                            <br />
                                            <span style={{fontSize:"15px"}} className="text-danger">{this.state.confirmError}</span>
                                        </div>
                                        <div className="form-group">
                                            <button style={{ borderRadius: "20px"}} type="submit" className="btn btn-block btn-primary" disabled={!this.state.buttonActive}>Update </button>
                                        </div>
                                        <br />
                                        <span style={{fontSize:"15px"}} className="text-success">{this.state.successMessage}</span>
                                        <span style={{fontSize:"15px"}}  className="text-danger">{this.state.errorMessage}</span>
                                        {
                                            this.state.successMessage != "" ? <Redirect link="/ExchangeRates" /> : ""
                                        }
                                    </form>
                                </div>
                            
                        }
                        <div className="card-footer text-center text-dark" style={{marginLeft:"-16px",marginRight:"-16px",width:"103.5%"}}></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default UpdatePassword;