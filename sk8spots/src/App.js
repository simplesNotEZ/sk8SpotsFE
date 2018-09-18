import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom' 
import sk8RDie from './skate-or-die.png';
import churchPipe from './churchPipe.jpg';
import oldSpot from './blackNWhiteSpot.jpeg';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  state = {
    title: ["Welcome to $k8$pots!", "Fuck you: Goodbye Wrold!"],
  }
  
  render() {
    return (
      <Router>
      <div className="App">
        <Header title={this.state.title[0]} />
        <p className="App-intro">
          Where you gonna skate today?
        </p>
        <div className="allSpots">
          <Link to="/someday">
            <section className="wishSpots mainSpotsCard">
              <h2>Someday Spots</h2>
              <img src={churchPipe} className="mainSpotsImage" alt="a halfpipe in a church"/>
            </section>
          </Link>
          <Link to="/yesterday">
            <section className="theOtherDaySpots mainSpotsCard">
              <h2>Yesterday Spots</h2>
              <img src={oldSpot} className="mainSpotsImage" alt="old-school skate spot"/>
            </section>
          </Link>
        </div>
        <Footer />
      </div>

      {/* <Route exact path="/" component={Home} />
      <Route path="/someday" component={Someday} />
      <Route path="/yesterday" component={Yesterday} /> */}

      </Router>
    );
  }
}

export default App;
