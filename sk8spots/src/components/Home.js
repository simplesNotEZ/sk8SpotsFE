import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import churchPipe from '../churchPipe.jpg';
import oldSpot from '../blackNWhiteSpot.jpeg';
import Header from './Header';
import Footer from './Footer';
import '../App.css';


const Home = (props) => {
    
    return (
        <div className="homeDiv">
            <Header title={props.title} />
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
    )
}

export default Home;