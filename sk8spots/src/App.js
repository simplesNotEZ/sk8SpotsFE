import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom' 
import './App.css';

import Header from './components/Header'
import Home from './components/Home'
import Someday from './components/Someday'
import Yesterday from './components/Yesterday'
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
          <div className="content">
            <Route exact path="/" component={Home} /> 
            <Route path="/someday" component={Someday} />
            <Route path="/yesterday" component={Yesterday} /> 
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
