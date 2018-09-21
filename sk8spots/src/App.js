import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Header from './components/Header'
import Welcome from './components/Welcome'
import Home from './components/Home'
import SomedayList from './components/SomedayList'
import YesterdayList from './components/YesterdayList'
import Form from './components/Form'
import Footer from './components/Footer'

const apiURL1 = "https://sk8spots.herokuapp.com/someday";
const apiURL2 = "https://sk8spots.herokuapp.com/yesterday";

class App extends Component {
  state = {
    title: ["Welcome to $k8$pots!", "Fuck you: Goodbye Wrold!"],
    someday: [],
    yesterday: []
  }

  componentDidMount() {
    fetch(apiURL1)
      .then(response => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          someday: json.somedaySpots
          });
          console.log("From fetch #1 and in state: ", this.state.someday);
      });

      fetch(apiURL2)
      .then(response => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          yesterday: json.yesterdaySpots
          });
          console.log("From #2 fetch and in state: ", this.state.yesterday);
      });

      
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <Header title={this.state.title[0]} />
          <div className="content">
            <Route exact path="/" component={Welcome} />
            <Route path="/home" component={Home} /> 
            <Route path="/someday" 
                   render={ (props) => <SomedayList {...props} someday={this.state.someday} />}
            />
            <Route path="/yesterday" 
                   render={ (props) => <YesterdayList {...props} yesterday={this.state.yesterday} />}
            /> 
            <Route path="/newSpot" component={Form} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
