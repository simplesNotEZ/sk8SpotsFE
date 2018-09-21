import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';
import SomedaySpot from './SomedaySpot';

const SomedayList = (props) => {
    
    console.log("here's what we passed down to the routed someday component: ", props.someday);

    const somedaySpotsArray = props.someday.map((spot) => {
        return <SomedaySpot key={spot.id} spot={spot} />
    })
    
    return (
        <div className="somedayDiv">
            <h1>Someday Spots</h1>
            <Link to="/newSpot">
                <button className="addASpot">Add A Spot</button>
            </Link>
            <ul className="somedaySpotsList">
                {somedaySpotsArray}   
            </ul>
        </div>
    )
}

export default SomedayList;