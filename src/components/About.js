import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Container,Row,Col} from 'react-bootstrap';
import 'jquery';
import 'popper.js';


class About extends Component {
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
                <h1 className="text-warning py-3">About</h1>
                <ul>
                  <li>The IIITH Auction app is the number one platform for the purchase, sale, and exchange of second hand commodities between students in IIIT Hyderabad.</li>
                  <li className="text-warning py-2">Through this initiative, this tranasaction of items is centralized, and thus the entire process is streamlined and designed to give the user the best experience. 
                  </li>
                  <li>The admins of the page will only be responsible for the upkeep and maintanence of the website. In no way will any transaction fee be charged, and all proceeds go directly to the seller.
                  </li>
                  <li className="text-warning py-2">There isnt any restriction on who can use this platform, or what items will be sold. However, there will be monitoring of items sold to make sure that the items adhere to college rules. In addition, the users can only make bids once they create a account and verify their identity.
                  </li>
                  <li>The payment will be handled by the site itself and it will act as an insurance until 3 days within which the item is to be delivered.
                    If not, then the seller can cancel the transaction and money will be refunded.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
  );
  }
}

export default About;