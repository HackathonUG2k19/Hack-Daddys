import React,{Component} from 'react';
import ReactDOM from "react-dom"
import {Helmet} from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery';
import 'popper.js';

class Nav extends Component{
    render(){
        return(
            <React.Fragment>
                <nav className="navbar navbar-expand-md bg-primary">
                    <a className="navbar-brand" href="/home/mehul/webdev/HackDaddys/Hack-Daddys/public/index.html">
                        <img src="/home/mehul/webdev/HackDaddys/Hack-Daddys/public/auction_icon2.png"/>
                    </a>
                </nav>
            </React.Fragment>
        )
    }
}

export default Nav;

