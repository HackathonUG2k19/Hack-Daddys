import React from 'react';
import './App.css';
import {Helmet} from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery';
import 'popper.js';
import Nav from './components/Nav.js'


function App() {
  return (
    <div className="App">
      <Helmet>
        <title>IIIT-H Auctioning App</title>
      </Helmet>
      <div className="jumbotron text-center">
        <div className="container  container-sm " id="welcome_div">
          <h1 id="welcome_message" className="font-weight-bold display-3">The IIIT-H auction app!</h1>
          <p id="desc" className="">An auctioning platform for IIIT-H students</p>
        </div>
      </div>
     
      <Nav/>

    </div>
  );
}

export default App;
