import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Header from './components/Header'
import Home from './components/Home'
import SomedayList from './components/SomedayList'
import Yesterday from './components/Yesterday'
import Footer from './components/Footer'

const apiURL = "https://sk8spots.herokuapp.com/someday";

class App extends Component {
  state = {
    title: ["Welcome to $k8$pots!", "Fuck you: Goodbye Wrold!"],
    someday: [],
    yesterday: []
  }

  componentDidMount() {
    fetch(apiURL)
      .then(response => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          someday: json.somedaySpots
          });
          console.log("here's what's in state: ", this.state.someday);
      });
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <Header title={this.state.title[0]} />
          <div className="content">
            <Route exact path="/" component={Home} /> 
            {/* <Route path="/someday" someday={this.state.someday} component={Someday} /> */}
            <Route path="/someday" 
                   render={ (props) => <SomedayList {...props} someday={this.state.someday} />}
            />
            <Route path="/yesterday" component={Yesterday} /> 
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
