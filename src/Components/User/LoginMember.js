import React,{Component} from "react";
import App from "../../App"
import axios from "axios";
import "./LoginMember.css";
import RegisterMember from "./RegisterMember";
import coinIcon from "./coin-image.png";

const url="http://localhost:2222/currency-exchange/login";
class LoginMember extends Component{
    customer={
        customer_id:"",
        customer_email:"",
        customer_name:"",
        customer_password:"",
    }
    constructor(props){
        super(props);
        this.state={
            formValue:{
                emailId:"",
                password:""
            },
            formErrorMessage:{
                emailId:"",
                password:""
            },
            formValid:{
                emailId:false,
                password:false,
                buttonActive:false
            },
            errorMessage:"",
            successMessage:"",
            isLoggedIn:false,
            gotoSignup:false,
            show:true,
            showNav:true,
        };
    }
    handleSubmit=event=>{
        event.preventDefault();
        this.loginMember();
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
                if(value===""){
                    formValidationErrors.password="Field Required";
                    formValid.password=false;
                }
                else{
                    formValidationErrors.password="";
                    formValid.password=true;
                }
                break;
        
            default:
                break;
        }
        formValid.buttonActive=formValid.emailId && formValid.password;
        this.setState({
            formErrorMessage: formValidationErrors,
            formValid: formValid,
            successMessage:"",
            errorMessage:""
        });
    }
    loginMember=()=>{
        this.setState({
            successMessage:"",
            errorMessage:""
        })
        const postData={
            customer_email:this.state.formValue.emailId,
            customer_password:this.state.formValue.password,
        }
        axios.post(url,postData)
            .then(response=>{
                    this.customer.customer_email=response.data.customer_email;
                    this.customer.customer_name=response.data.customer_name;
                    this.customer.customer_id=response.data.customer_id;
                    this.customer.customer_password=response.data.customer_password;
                    this.setState({
                        errorMessage:"",
                        isLoggedIn:true,
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
    reg=()=>{
        this.setState({show:false,gotoSignup:true})
    }
    render(){
        if(this.state.isLoggedIn==true)
        {
            return <App customerDetails={this.customer}/>
        }
        else if(this.state.show==true)
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
                <br></br><br></br>

            <div className="row">
                <div className="col-md-4 offset-md-4 c1">
                    <br></br><br></br>
                    <div className="card" style={{background:"none",border:"none"}}>
                        <div className="card-header text-center text-light" style={{background:"none",border:"none"}}>
                            <h1><i class="fas fa-sign-in-alt"></i>&nbsp;LOGIN</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <div className="form-group">
                                        <input style={{ borderRadius: "8px"}} placeholder="Email Id" type="email" name="emailId" className="form-control" onChange={this.handleChange} />
                                        <span style={{fontSize:"15px"}} name="emailIdError" className="text-warning">{this.state.formErrorMessage.emailId}</span>
                                    </div>
                                    <div className="form-group">
                                        <input style={{ borderRadius: "8px"}} placeholder="Password" type="password" name="password" className="form-control" onChange={this.handleChange} />
                                        <span style={{fontSize:"15px"}} name="passwordError" className="text-warning">{this.state.formErrorMessage.password}</span>
                                    </div>
                                    <br></br>
                                    <div className="form-group">
                                        <button type="submit" name="login" className="btn btn-primary col-6 offset-3" disabled={!this.state.formValid.buttonActive}>
                                        <i class="fas fa-sign-in-alt"></i>&nbsp;Login</button>                                    
                                    </div>
                                </div>
                            </form>
                        </div>
                        <span name="errorMessage" className="text-warning text-center">{this.state.errorMessage}</span>
                        <span name="successMessage" className="text-light text-center">{this.state.successMessage}</span>
                        <br></br>
                        <div className="card-footer text-center text-light" style={{background:"none",border:"none"}}>
                        New user?<button className="signup" onClick={this.reg}>signup here</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
        }
        else if(this.state.gotoSignup==true)
        return <RegisterMember/>
    }
}

export default LoginMember;
