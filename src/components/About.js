import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'popper.js';


const About = () => {
  return (
    <div className="App">
      <title>IIIT-H Auctioning App</title>
      <div className="jumbotron text-center">
        <div className="container  container-sm " id="welcome_div">
          <h1 id="welcome_message" className="font-weight-bold display-3">The IIIT-H auction app!</h1>
          <p id="desc" className="">HEMANT BIG GAY.</p>
        </div>
      </div>
    </div>
  );
}

export default About;