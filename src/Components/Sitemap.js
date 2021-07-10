import React,{Component} from 'react'
import book from '../assets/book.gif'
import file from '../assets/file.gif'
import folder from '../assets/folder.gif'
import hline from '../assets/hline.gif'
import tree from '../assets/tree.gif'
import uicon from '../assets/user_icon.png'

import { Link } from "react-router-dom";
class Sitemap extends Component{
    render(){
        return(
            <div className="col-md-10 offset-md-1" style={{marginTop:"5%"}}>
             <div className="card bg">
                <div className="card-header text-center bg-primary text-light" style={{height:"50px",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}>
                  <h4 style={{wordSpacing:"10px",letterSpacing:"3px",fontFamily:"monospace"}}>SITE MAP</h4>
                  </div>
                <div className="card-body" style={{height:"300px",overflow:"auto"}}>
                    <table style={{marginTop:"5%"}}>
                        <tr style={{verticalAlign:"top"}}>
                            <td>
                                <img src={tree}></img>
                                <img src={book}></img>
                                <Link to="/Calculator">Calculator</Link>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                    <img src={tree}></img>
                                    <img src={hline}></img>
                                    <img src={hline}></img>
                                    <img src={hline}></img>
                                    <img src={hline}></img>
                                    <img src={folder}></img>
                                    </td>
                                    <td><Link to="/Calculator/1">Live Calculator</Link></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                    <img src={tree}></img>
                                    <img src={hline}></img>
                                    <img src={hline}></img>
                                    <img src={hline}></img>
                                    <img src={hline}></img>
                                    <img src={folder}></img>
                                    </td>
                                    <td><Link to="/Calculator/0">Historical Calculator</Link></td>
                                </tr>
                            </td>
                            <td>
                                <img src={tree}></img>
                                <img src={book}></img>
                                <Link to="/ExchangeRates">ExchangeRates</Link>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                    <img src={tree}></img>
                                    <img src={hline}></img>
                                    <img src={hline}></img>
                                    <img src={hline}></img>
                                    <img src={hline}></img>
                                    <img src={folder}></img>
                                    </td>
                                    <td><Link to="/ExchangeRates">Current Currency Exchange Rates</Link></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </td>
                            <td>
                                <img src={tree}></img>
                                <img src={book}></img>
                                <Link to="/Charts/allcharts">Charts</Link>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                    <img src={tree}></img>
                                    <img src={hline}></img>
                                    <img src={hline}></img>
                                    <img src={hline}></img>
                                    <img src={hline}></img>
                                    <img src={folder}></img>
                                    
                                    </td>
                                    <td><Link to="/Charts/table">Tables</Link></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                    <img src={tree}></img>
                                    <img src={hline}></img>
                                    <img src={hline}></img>
                                    <img src={hline}></img>
                                    <img src={hline}></img>
                                    <img src={folder}></img>
                                    </td>
                                    <td><Link to="/Charts/line">Line Charts</Link></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                    <img src={tree}></img>
                                    <img src={hline}></img>
                                    <img src={hline}></img>
                                    <img src={hline}></img>
                                    <img src={hline}></img>
                                    <img src={folder}></img>
                                    </td>
                                    <td><Link to="/Charts/bar">Bar Charts</Link></td>
                                </tr>
                            </td>
                            <td>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                    <img  className="img-fluid" style={{height:"18px"}} src={uicon}></img>
                                    </td>
                                    <th>User</th> 
                                </tr>  
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                <td>
                                    <img src={tree}></img>
                                    <img src={book}></img>
                                    <Link to={"/profile/"+this.props.match.params.customerId}>Profile</Link>
                                </td>
                            </tr>
                            <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                <td>
                                    <img src={tree}></img>
                                    <img src={book}></img>
                                    <Link to={"/editprofile/"+this.props.match.params.customerId}>Edit Profile</Link>
                                </td>
                            </tr>
                            <tr> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                <td>
                                    <img src={tree}></img>
                                    <img src={book}></img>
                                    <Link to={"/updatepassword/"+this.props.match.params.customerId}>Update Password</Link>
                                </td>
                            </tr>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            </div>
        )
    }
}
export default Sitemap;