import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./Home.js";
import About from "./About.js";
import Electry from "./Electry.js";
import SportsHats from "./SportsHats.js";
import ChongQingHouse from "./ChongQingHouse.js";
import Gooey from "./Gooey.js";
import ScrollToTop from "./ScrollToTop.js";

class App extends Component {
  render() {
    return (      
      <BrowserRouter>
      <ScrollToTop />
       <div>
           <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About}/>
            <Route path="/electry" component={Electry}/>
            <Route path="/sports-hats" component={SportsHats}/>
            <Route path="/chongqing-house" component={ChongQingHouse}/>
            <Route path="/gooey" component={Gooey}/>
          </Switch>
       </div> 
     </BrowserRouter>
   );
  }
}

export default App;
