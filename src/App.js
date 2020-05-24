import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Nav1 from './components/Nav';
import Signin from './components/Signin';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Nav1/>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/signin" component={Signin}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;