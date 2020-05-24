import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Container,Row,Col,Carousel} from 'react-bootstrap';
import 'jquery';
import 'popper.js';

setInterval(getTime,1000);

function getTime(){
  var timer;
  timer = new Date();
  return timer.toLocaleTimeString();
}

class Home extends Component{
  render(){
    return(
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
                <h1 className="text-warning">Rules</h1>
                <ul>
                  <li>Articles put up for auction have an expiration period of 7 days.<p>After that they will be considered sold to the highest bidder or be removed
                    in case of no valid bids. 
                    </p></li>
                  <li className="text-warning">An article can be requested to be put up for auction, after which there is a 3-day buffer period in which the owner has to give the proof
                    of quality of product
                  </li>
                  <li>Anyone is free to bid for the until the last day provided that their bid is an increment of the current bid by a minimum value
                    decided by the admins.
                  </li>
                  <li className="text-warning">On the last day of the auction of a particular item, bidding is only limited to people who have bids on the item in the last 
                    24 hours to prevent spamming.
                  </li>
                  <li>The seller can set a minimum price for the item and all starting bids to be valid need to be more than that amount</li>
                  <li className="text-warning">The payment will be handled by the site itself and it will act as an insurance until 3 days within which the item is to be delivered.
                    If not, then the seller can cancel the transaction and money will be refunded.
                  </li>
                </ul>
              </div>
              <div className="container container-sm">
              <Button className="bidButtons" variant="outline-warning">Add Item</Button>
              <Button className="bidButtons" variant="outline-success">Bid</Button>
              <Button className="bidButtons" variant="outline-danger">Remove Item</Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="mainCols text-white" id="hottestDeals" sm={6}>
              <Carousel className="bg-dark" id="dealsCar">
                <Carousel.Item>
                  <div  className="carouselItem bg-dark container container-sm">
                    <div className="carouselImgDiv bg-dark">
                      <img src={require("./img/press.jpg")} alt="first"/>
                    </div>
                    <div className="bg-dark carouselInfoDiv test-center">
                    <img className="saleTag" src={require("./img/saleTag.png")} alt="first"/>
                    <h1 className="carouselText">CurrentBid:100Rs!</h1>
                    <h1 className="carouselText">Minimum Increment:50Rs</h1>
                    <h1 className="carouselText">Time Remaining: {getTime()}</h1>
                    <h1 className="carouselText">HURRRRYY!</h1>
                    </div>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div  className="carouselItem bg-dark container container-sm">
                    <div className="carouselImgDiv bg-dark">
                      <img src={require("./img/press.jpg")} alt="first"/>
                    </div>
                    <div className="bg-dark carouselInfoDiv test-center">
                    <img className="saleTag" src={require("./img/saleTag.png")} alt="first"/>
                    <h1 className="carouselText">CurrentBid:100Rs!</h1>
                    <h1 className="carouselText">Minimum Increment:50Rs</h1>
                    <h1 className="carouselText">Time Remaining: {getTime()}</h1>
                    <h1 className="carouselText">HURRRRYY!</h1>
                    </div>
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div  className="carouselItem bg-dark container container-sm">
                    <div className="carouselImgDiv bg-dark">
                      <img src={require("./img/press.jpg")} alt="first"/>
                    </div>
                    <div className="bg-dark carouselInfoDiv test-center">
                    <img className="saleTag" src={require("./img/saleTag.png")} alt="first"/>
                    <h1 className="carouselText">CurrentBid:100Rs!</h1>
                    <h1 className="carouselText">Minimum Increment:50Rs</h1>
                    <h1 className="carouselText">Time Remaining: {getTime()}</h1>
                    <h1 className="carouselText">HURRRRYY!</h1>
                    </div>
                  </div>
                </Carousel.Item>
                
              </Carousel>
            </Col>
            <Col className="bg-primary mainCols text-white" sm={6}><p className="temporary">REACH OUT TO YOUR IDEAL BUYER!</p></Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }

  
  
  
}



export default Home;
