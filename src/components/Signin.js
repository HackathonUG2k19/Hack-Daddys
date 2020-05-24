import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {InputGroup,FormControl,Button, Container,Row,Col} from 'react-bootstrap';
import 'jquery';
import 'popper.js';


class Signin extends Component {
  render() {
  return (
    <React.Fragment>

                    <div className="jumbotron text-center mb-0 ">
                    <div className="container  container-sm " >
                    <h1 id="welcome_message" className="text-white font-weight-bold display-4 pt-4 mt-4">The IIIT-H auction app!</h1>
                    <p id="desc" className="">An auctioning platform for IIIT-H students</p>
                    </div>
                    </div>
        <Container fluid>
          <Row>
            <Col className=" mainCols" id="welcomeMessage" sm={6}>
              <div className="container container-sm text-center" id="welcomeContainer">
            <h1 id="splashWelcome" className="font-weight-bold display-4 mt-4 mx-auto">WELCOME!</h1>
            <h1 id="splashWelcome" className="font-weight-bold display-4 mt-4 mx-auto">IIITs very own</h1>
            <h1 id="splashWelcome" className="font-weight-bold display-4 mt-4 mx-auto">Online Auction Site</h1> 
            </div>
            </Col>
            <Col className="bg-dark mainCols text-white" id="updatesContainer" sm={6}>
              <div className="container container-sm bg-dark my-3" id="rulesContainer">
                <h1 className="text-warning py-3">Sign In</h1>
  <InputGroup className="mb-3 py-2">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon3">
        Username
      </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl id="basic-url" aria-describedby="basic-addon3" />
    </InputGroup>
    <InputGroup className="mb-3 py-2">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon3">
        Password
      </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl id="basic-url" aria-describedby="basic-addon3" />
  </InputGroup>
  <Button className="bidButtons py-2" variant="outline-warning">Login</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
  );
  }
}

export default Signin;