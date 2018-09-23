import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Header from './components/Header'
import Welcome from './components/Welcome'
import Home from './components/Home'
import SomedayList from './components/SomedayList'
import YesterdayList from './components/YesterdayList'
import Form from './components/Form'
import Edit from './components/Edit'
import Footer from './components/Footer'

const apiURL1 = "http://localhost:9000/someday";
const apiURL2 = "https://sk8spots.herokuapp.com/yesterday";

class App extends Component {
  state = {
    title: ["Welcome to $k8$pots!", "Fuck you: Goodbye Wrold!"],
    someday: [],
    yesterday: [],
    postedNewSpot: false,
    spotToEdit: []
  }

  deleteSpot= (event, spotId) => {
    event.preventDefault();
    
    const currentSpots = this.state.someday;

    const filteredSpots = currentSpots.filter((spotObj) => {
        return (spotObj.id !== spotId)
    });
    this.setState({
        someday: filteredSpots
    });

    ////////now, the functionality to delete from the database and not just from the array in state:
    fetch('http://localhost:9000/someday/' + spotId, {
    method: 'DELETE'
    })
    
  }

  addGifToGlobalState = (newSpot) => {

    let currentSpots = this.state.someday;
    console.log("currentSpots is: ", currentSpots);
    currentSpots.unshift(newSpot);
    let updatedSpots = currentSpots;
    console.log("after unshifting, updatedSpots is: ", updatedSpots);
    this.setState({
      someday: updatedSpots,
      postedNewSpot: true
    });
    console.log("State updated with updatedSpots: ", this.state.someday);
    console.log("postedNewSpot in state is now: ", this.state.postedNewSpot);

  }

  addEditToGlobalState = (event, spotToEdit) => {
    event.preventDefault();
    console.log("addEditToGlobalState is running.  And here's the spotToEdit: ", spotToEdit);
    console.log("spotToEdit in state before it's added: ", this.state.spotToEdit);
    this.setState({
      spotToEdit: spotToEdit
    });
    console.log("here's this.state.spotToEdit once it's added: ", this.state.spotToEdit);
  }

  componentDidMount() {
    
    console.log("ComponentDidMount ran!");

    fetch(apiURL1)
      .then(response => response.json())
      .then((json) => {
        console.log("Here's the response from fetch #1--pre-state and pre-reverse: ", json);
        const reversedArr = json.somedaySpots.reverse();
        this.setState({
          someday: reversedArr
          });
          console.log("From fetch #1 AND in state and reversed: ", this.state.someday);
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
                    render={ (props) => <SomedayList {...props} someday={this.state.someday} deleteSpot={this.deleteSpot} addEditToGlobalState={this.addEditToGlobalState} />}        
            />
            <Route path="/yesterday" 
                    render={ (props) => <YesterdayList {...props} yesterday={this.state.yesterday} />}
            /> 
            <Route path="/newSpot"
                    render={ (props) => <Form {...props} addGifToGlobalState={this.addGifToGlobalState} />}
            />
            <Route path="/edit" component={Edit} />
            
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
