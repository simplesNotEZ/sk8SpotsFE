import React from 'react';
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
            <ul className="somedaySpotsList">
                {somedaySpotsArray}   
            </ul>
        </div>
    )
}

export default SomedayList;