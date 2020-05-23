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
      <p>Hello World</p>
      
    </div>
  );
}

export default App;
