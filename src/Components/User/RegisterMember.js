import React,{Component} from "react";
import './RegisterMember.css';
import axios from "axios";
import LoginMember from "./LoginMember";
import coinIcon from "./coin-image.png";

const url="http://localhost:2222/currency-exchange/customer";

class RegisterMember extends Component{
    constructor(props){
        super(props);
        this.state={
            formValue:{
                memberName: "",
                emailId:"",
                password:"",
                confirmPassword:""
            },
            formErrorMessage:{
                memberName:"",
                emailId:"",
                password:"",
                confirmPassword:""
            },
            formValid:{
                memberName:false,
                emailId:false,
                password:false,
                confirmPassword:false,
                buttonActive:false
            },
            successMessage:"",
            errorMessage:"",
            isRegistered:false,
            show:true,
            gotoLogin:false,
            showNav:true
        };
    }
    
    handleSumbit=event=>{
        event.preventDefault();
        this.registerMember();
    }

    handleChange=event=>{
        const target=event.target;
        const value=target.value;

        const name=target.name;
        const {formValue}=this.state;
        this.setState({
            formValue:{...formValue,[name]:value}
        });
        this.validateField(name,value);
    }
    validateField=(fieldName,value)=>{
        let formValidationErrors=this.state.formErrorMessage;
        let formValid=this.state.formValid;

        switch (fieldName) {
            case "memberName":
                const memberRegex = /^[A-Z][a-z]{2,} [A-Z][a-z]{2,}$/;
                if(value===""){
                    formValidationErrors.memberName="Field Required";
                    formValid.memberName=false;
                }
                else if(!value.match(memberRegex)){
                    formValidationErrors.memberName="Please enter valid name";
                    formValid.memberName=false;
                }
                else{
                    formValidationErrors.memberName="";
                    formValid.memberName=true;
                }
                break;
            case "emailId":
                const emailRegex=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(value===""){
                    formValidationErrors.emailId="Field Required";
                    formValid.emailId=false;
                }
                else if(!value.match(emailRegex)){
                    formValidationErrors.emailId="Enter a Valid Email Address";
                    formValid.emailId=false;
                }
                else{
                    formValidationErrors.emailId="";
                    formValid.emailId=true;
                }
                break;
            case "password":
                const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                if(value===""){
                    formValidationErrors.password="Field Required";
                    formValid.password=false;
                }
                else if(!value.match(passwordRegex)){
                    formValidationErrors.password="Password requirements: >8 characters, >=1 letter, >=1 number, >=1 special characters";
                    formValid.password=false;
                }
                else{
                    formValidationErrors.password="";
                    formValid.password=true;
                }
                break;
            case "confirmPassword":
                let password=this.state.formValue.password;
                if(value===""){
                    formValidationErrors.confirmPassword="Field Required";
                    formValid.confirmPassword=false;
                }
                else if(!(value===password)){
                    formValidationErrors.confirmPassword="Passwords do not match";
                    formValid.confirmPassword=false;
                }
                else{
                    formValidationErrors.confirmPassword="";
                    formValid.confirmPassword=true;
                }
                break;
            default:
                break;
        }
        formValid.buttonActive=formValid.memberName && formValid.emailId && formValid.password && formValid.confirmPassword;
        this.setState({
            formErrorMessage: formValidationErrors,
            formValid: formValid,
            successMessage:"",
            errorMessage:"",
        });
    }
    registerMember=()=>{
        this.setState({
            successMessage:"",
            errorMessage:""
        });
        const postData={
            customer_email:this.state.formValue.emailId,
            customer_password:this.state.formValue.password,
            customer_name:this.state.formValue.memberName,
        }
        axios.post(url,postData)
            .then(response=>{
                this.setState({
                    successMessage:response.data,
                    errorMessage:"",
                    isRegistered:true,
                    showNav:false

                })
            })
            .catch(error=>{
                if(error.response){
                    this.setState({
                        errorMessage:error.response.data.errorMessage,
                        successMessage:""
                    })
                }
                else{
                    this.setState({
                        errorMessage:"Please run the backend",
                        successMessage:""
                    })
                }
            })
    }
    login=()=>{
        this.setState({show:false,gotoLogin:true})
    }
    render(){
        if(this.state.isRegistered)
        {
            alert("Successfully registered, please login to continue !");

            return <LoginMember></LoginMember>
        } 
        else if(this.state.show)
        {
        return(

            <div>
                { this.state.showNav &&
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a href="">
                         <span className="navbar-brand"><img style={{width:"20px",height:"20px"}} src={coinIcon}></img>&nbsp;<b>Currency<span style={{color:"#00CED1"}}>Analysis</span></b></span>
                    </a>
                </nav>
                }

            
            <div className="row r1">
                
                <div className="col-md-4 offset-md-4 c1">
                    <br></br>
                    <div className="card" style={{background:"none",border:"none"}}>
                        <div className="card-header text-light text-center"style={{background:"none",border:"none"}}>
                            <h1><i class="fas fa-user-plus"></i>&nbsp;SIGN UP</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.handleSumbit}>
                                <div className="form-group">
                                    <input style={{ borderRadius: "8px"}} placeholder="Name" type="text" name="memberName" className="form-control" onChange={this.handleChange} />
                                    <span style={{fontSize:"15px"}} name="memberNameError" className="text-warning">{this.state.formErrorMessage.memberName}</span>
                                </div>
                                <div className="form-group">
                                    <input style={{ borderRadius: "8px"}} placeholder="Email Id" type="email" name="emailId" className="form-control" onChange={this.handleChange} />
                                    <span style={{fontSize:"15px"}} name="emailIdError" className="text-warning">{this.state.formErrorMessage.emailId}</span>
                                </div>
                                <div className="form-group">
                                    <input style={{ borderRadius: "8px"}} placeholder="Password" type="password" name="password" className="form-control" onChange={this.handleChange} />
                                    <span style={{fontSize:"15px"}} name="passwordError" className="text-warning">{this.state.formErrorMessage.password}</span>
                                </div>
                                <div className="form-group">
                                    <input style={{ borderRadius: "8px"}} placeholder="confirm password" type="password" name="confirmPassword" className="form-control" onChange={this.handleChange} />
                                    <span style={{fontSize:"15px"}} name="confirmPasswordError" className="text-warning">{this.state.formErrorMessage.confirmPassword}</span>
                                </div>
                                <br></br>
                                <div className="form-group col-6 offset-3">
                                    <button style={{borderRadius:"8px"}} type="submit" name="register" className="btn btn-block btn-primary" disabled={!this.state.formValid.buttonActive}>
                                    <i class="fas fa-sign-in-alt"></i>&nbsp;SIGN UP</button>
                                </div>
                            </form>
                        </div>
                        <span name="errorMessage" className="text-warning text-center">{this.state.errorMessage}</span>
                        <span name="successMessage" className="text-light text-center">{this.state.successMessage}</span>
                        <div className="card-footer text-center text-light" style={{background:"none",border:"none"}}>
                        Already have an account?<button className="login" onClick={this.login}>login here</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
        }
        else if(this.state.gotoLogin==true)
        return <LoginMember/>
    }
}

export default RegisterMember;