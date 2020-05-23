import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery';
import 'popper.js';
import {NavLink} from 'react-router-dom';

const Nav = () => {
        return(
            <div>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
        )
}
export default Nav;

