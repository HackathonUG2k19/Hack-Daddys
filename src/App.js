import React from 'react';
import './App.css';
import {Helmet} from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery';
import 'popper.js';


function App() {
  return (
    <div className="App">
      <Helmet>
        <title>IIIT-H Auctioning App</title>
        <style>{"body{background-color: #F08A00}"}</style>
      </Helmet>
      <div className="jumbotron text-center">
        <div className="container-sm">
          <h1 id="welcome_message" className="font-weight-bold ">The IIIT-H auction app!</h1>
          <p id="desc" className="">An auctioning platform for IIIT-H students</p>
        </div>
      </div>
      
    </div>
  );
}

export default App;
