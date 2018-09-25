import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import YesterdaySpot from './YesterdaySpot';
import '../App.css';

const YesterdayList = (props) => {
    console.log("here's what we passed down to the routed yesterday component: ", props.yesterday);

    const yesterdaySpotsArray = props.yesterday.map((spot) => {
        return <YesterdaySpot key={spot.id} spot={spot} />
    })
    
    return (
        <div className="outerDiv">
            <Header title={props.title} />
            <div className="somedayDiv">
                <h1>Yesterday Spots</h1>
                <Link to="/newYesterdaySpot">
                    <button className="addASpot">Add A Spot</button>
                </Link>
                <ul className="somedaySpotsList">
                    {yesterdaySpotsArray}   
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default YesterdayList;