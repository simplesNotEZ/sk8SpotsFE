import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Welcome from './components/Welcome';
import Home from './components/Home';
import SomedayList from './components/SomedayList';
import YesterdayList from './components/YesterdayList';
import SomedayForm from './components/SomedayForm';
import YesterdayForm from './components/YesterdayForm';
import EditSomedaySpot from './components/EditSomedaySpot';
import EditYesterdaySpot from './components/EditYesterdaySpot';
import Footer from './components/Footer';

const apiURL1 = "http://localhost:9000/someday";
const apiURL2 = "http://localhost:9000/yesterday";

class App extends Component {
  state = {
    title: ["Welcome to $k8$pots", "$k8$pots"],
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

  fetchSomeday = () => {
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
  }

  fetchYesterday = () => {
    fetch(apiURL2)
      .then(response => response.json())
      .then((json) => {
        console.log(json);
        const reversedArr = json.yesterdaySpots.reverse();
        this.setState({
          yesterday: json.yesterdaySpots
          });
          console.log("From #2 fetch and in state: ", this.state.yesterday);
      });
  }

  componentDidMount() {
    
    console.log("ComponentDidMount ran!");
    this.fetchSomeday();
    this.fetchYesterday();
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <div className="content">
            <Route exact path="/" 
                    render={ (props) => {
                      return (<Welcome {...props} title={this.state.title[0]} />)
                      }
                    }
            />  
            <Route path="/home" 
                    render={ (props) => {
                      return (<Home {...props} title={this.state.title[1]} />)
                      }
                    } 
            />
            <Route path="/someday" 
                    render={ (props) => {
                      return (<SomedayList {...props} title={this.state.title[1]} 
                                                      someday={this.state.someday} 
                                                      deleteSpot={this.deleteSpot} 
                                                      addEditToGlobalState={this.addEditToGlobalState} 
                              />)
                      }
                    }        
            />
            <Route path="/yesterday" 
                    render={ (props) => {
                      return (<YesterdayList {...props} title={this.state.title[1]} 
                                                        yesterday={this.state.yesterday} 
                              />)
                      }
                    }
            /> 
            <Route path="/newSomedaySpot"
                    render={ (props) => {
                      return (<SomedayForm {...props} title={this.state.title[1]} 
                                                      addGifToGlobalState={this.addGifToGlobalState} 
                                                      fetchSomeday={this.fetchSomeday} 
                              />)
                      }
                    }
            />
            <Route path="/newYesterdaySpot"
                    render={ (props) => {
                      return (<YesterdayForm {...props} title={this.state.title[1]} 
                                                        addGifToGlobalState={this.addGifToGlobalState} 
                                                        fetchYesterday={this.fetchYesterday} 
                              />)
                      }
                    }
            />
            <Route path="/editSomedaySpot" 
                    render={ (props) => {
                      return (<EditSomedaySpot {...props} title={this.state.title[1]}
                                                          fetchSomeday={this.fetchSomeday}
                              />)
                      }
                    }
            />
            <Route path="/editYesterdaySpot" 
                    render={ (props) => {
                      return (<EditYesterdaySpot {...props} title={this.state.title[1]}
                                                            fetchYesterday={this.fetchYesterday}
                              />)
                      }
                    }
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
