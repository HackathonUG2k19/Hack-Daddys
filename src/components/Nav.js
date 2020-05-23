import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar,Nav} from 'react-bootstrap';
import 'jquery';
import 'popper.js';
import {Link} from 'react-router-dom';

const Nav1 = () => {
        return(
            <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand className="nav-logo">
                <Link to={"/"}>
                <img
                    src={require("./img/auction_icon2.png")}
                    width="60"
                    className="d-inline-block align-top"
                    alt="IIIT-H Auction logo" />{' '}
                </Link>
                    <div class="nav-text">IIIT-H <b><span className="nav-logo-gradient">Auction</span></b></div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto text-white">
                        <Nav.Link><Link to={"/about"} className="text-white">About</Link></Nav.Link>
                        <Nav.Link><Link to={"/contact"} className="text-white">Contact</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
}
export default Nav1;

