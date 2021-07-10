import React, { Component } from "react"
import axios from "axios";
const url = "http://localhost:2222/currency-exchange/"
export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: {

            },
        }
    }
    componentDidMount() {
        console.log("HII" + this.state.profile)

        axios
            .get(url + this.props.match.params.customerId)
            .then(response => {
                console.log(response.data);
                this.setState({ profile: response.data })

            })
            .catch(err => {
                console.log("OOpps", err);
            })

    }
    render() {
        return (
            <div>
                <br />
                <br />
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        
                        <br/>
                        <div className="card">
                            <div style={{background:"rgb(225,246,255)"}} className="card-header"><b><i class="fa fa-address-card"></i>&nbsp;PROFILE</b>
                            </div>
                            <div className="card-body table-responsive">
                                <table className="table table-bordered table-light">
                                <tbody>
                                    <tr>
                                        <th>ID</th>
                                        <td>{this.state.profile.customer_id}</td>
                                    </tr>
                                    <tr>
                                        <th>Name</th>
                                        <td>{this.state.profile.customer_name}</td>
                                    </tr>
                                    <tr>
                                        <th>Email Id</th>
                                        <td>{this.state.profile.customer_email}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}