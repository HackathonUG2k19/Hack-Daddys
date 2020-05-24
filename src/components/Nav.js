import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar,Nav,Button} from 'react-bootstrap';
import 'jquery';
import 'popper.js';
import {Link} from 'react-router-dom';

class Nav1 extends Component{

    state={
        signin:true,
        signLink:"/signin",
        imgLinkGuest:"./img/user.png",
        imgLinkUser:"./img/male.png"
    }
    
    render(){
        return(
            <div>

                <title>IIIT-H Auctioning App</title>
                   
         <Navbar fixed = "top" collapseOnSelect expand="lg" bg="dark" variant="dark" className="my-0">
                <Navbar.Brand className="nav-logo">
                <Link to={"/"}>
                <img
                    src={require("./img/iiith_auction.png")}
                    width="60"
                    className="d-inline-block align-top float-left navLogo"
                    alt="IIIT-H Auction logo" />{' '}
                </Link>
                    <Link className="text-white" to={"/"}><div class="nav-text float-left mt-3 ml-2">IIIT-H <b><span className="nav-logo-gradient" id="navAucText">Auction</span></b></div></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto text-white  ">
                        <Nav.Link><Link to={"/about"} className="text-white mr-3 px-1 navLinks" id="signInLink">About</Link></Nav.Link>
                        <Nav.Link><Link  to={"/"} className="text-white mr-3 px-1 navLinks">View Items</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Navbar.Brand className="nav-logo">
                            <Link to={"/"}>
                                {this.state.signin ? <img src={require("./img/user.png")} width="40" className="d-inline-block align-top mr-0" alt="User logo"/> : <img src={require("./img/male.png")} width="40" className="d-inline-block align-top mr-0" alt="User logo"/>}
                            </Link>
                        </Navbar.Brand>
                      <div class="nav-text mt-3 mr-4 text-white" id="guest">{!this.state.signin ? "Username":"Guest"}</div>
                    <Link className="mt-2" onClick={this.toggleSign} to={this.state.signLink}><Button   className="ml-3" variant="outline-warning">{this.state.signin ? "Sign-in":"Sign-out"}</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )}

    toggleSign = ()=>{
        this.setState({signin:!this.state.signin});
        if(this.state.signLink === "/signin")
            this.setState({signLink:"/"});
        else
            this.setState({signLink:"/signin"});
        
    }
}
export default Nav1;

