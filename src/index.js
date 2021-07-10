import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.js";
import "bootstrap/dist/js/bootstrap.min.js";


import {BrowserRouter} from "react-router-dom";

ReactDOM.render(<BrowserRouter><Home/></BrowserRouter>,document.getElementById("root"));

