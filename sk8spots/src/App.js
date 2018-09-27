import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';
import Home from './components/Home';
import SomedayList from './components/SomedayList';
import YesterdayList from './components/YesterdayList';
import SomedayForm from './components/SomedayForm';
import YesterdayForm from './components/YesterdayForm';
import EditSomedaySpot from './components/EditSomedaySpot';
import EditYesterdaySpot from './components/EditYesterdaySpot';

const apiURL1 = "http://localhost:9000/someday";
const apiURL2 = "http://localhost:9000/yesterday";

class App extends Component {
  state = {
    title: ["Welcome to ", "$k8$pots"],
    someday: [],
    yesterday: [],
    postedNewSpot: false,
    spotToEdit: []
  }

  deleteSomedaySpot= (event, spotId) => {
    event.preventDefault();
    
    const currentSpots = this.state.someday;

    const filteredSpots = currentSpots.filter((spotObj) => {
        return (spotObj.id !== spotId)
    });
    this.setState({
        someday: filteredSpots
    });

    fetch('http://localhost:9000/someday/' + spotId, {
    method: 'DELETE'
    })
    
  }

  deleteSomedaySpotAlert= (event) => {
    event.preventDefault();

    alert("Nice try buddy.  Don't be meddlin with my database son!");
  }

  deleteYesterdaySpot= (event, spotId) => {
    event.preventDefault();
    
    const currentSpots = this.state.yesterday;

    const filteredSpots = currentSpots.filter((spotObj) => {
        return (spotObj.id !== spotId)
    });
    this.setState({
        yesterday: filteredSpots
    });

    fetch('http://localhost:9000/yesterday/' + spotId, {
    method: 'DELETE'
    })
    
  }

  deleteYesterdaySpotAlert= (event) => {
    event.preventDefault();

    alert("Nice try buddy.  Don't be meddlin with my database son!");
  }

  fetchSomeday = () => {
    fetch(apiURL1)
      .then(response => response.json())
      .then((json) => {
        const reversedArr = json.somedaySpots.reverse();
        this.setState({
          someday: reversedArr
          });
      });
  }

  fetchYesterday = () => {
    fetch(apiURL2)
      .then(response => response.json())
      .then((json) => {
        const reversedArr = json.yesterdaySpots.reverse();
        this.setState({
          yesterday: reversedArr
          });
      });
  }

  componentDidMount() {
    
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
                      return (<Welcome {...props} title={this.state.title[0]} title2={this.state.title[1]} />)
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
                                                      deleteSomedaySpot={this.deleteSomedaySpot}
                                                      deleteSomedaySpotAlert={this.deleteSomedaySpotAlert} 
                                                      addEditToGlobalState={this.addEditToGlobalState} 
                              />)
                      }
                    }        
            />
            <Route path="/yesterday" 
                    render={ (props) => {
                      return (<YesterdayList {...props} title={this.state.title[1]} 
                                                        yesterday={this.state.yesterday}
                                                        deleteYesterdaySpot={this.deleteYesterdaySpot}
                                                        deleteYesterdaySpotAlert={this.deleteYesterdaySpotAlert} 
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
