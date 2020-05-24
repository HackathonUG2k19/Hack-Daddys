import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar,Nav,Button, Container,Row,Col} from 'react-bootstrap';
import 'jquery';
import 'popper.js';
import {Link} from 'react-router-dom';


class Home extends Component{
  render(){
    return(
      <React.Fragment>
        <Container fluid>
          <Row>
            <Col className=" mainCols text-white" id="welcomeMessage" sm={6}><h1 className="text-warning" id="welcomeText">WELCOME!!</h1></Col>
            <Col className="bg-primary mainCols text-white" sm={6}><p className="temporary">UPDATES , RULES AND DETAILS</p></Col>
          </Row>
          <Row>
            <Col className="bg-warning mainCols text-white" sm={6}><p className="temporary">FEATURED STUFF,HIGHEST BID DEALS AN OFFERS HERE!</p></Col>
            <Col className="bg-primary mainCols text-white" sm={6}><p className="temporary">HEMANTHS IS THE ANIMAL OF THE NIGHT</p></Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default Home;
