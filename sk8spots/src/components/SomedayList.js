import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';
import SomedaySpot from './SomedaySpot';

const SomedayList = (props) => {
    
    console.log("here's what we passed down to the routed SomedayList component: ", props);

    const somedaySpotsArray = props.someday.map((spot) => {
        return <SomedaySpot key={spot.id} spot={spot} deleteSpot={props.deleteSpot} addEditToGlobalState={props.addEditToGlobalState} />
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