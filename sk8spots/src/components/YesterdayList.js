import React from 'react';
import '../App.css';
import YesterdaySpot from './YesterdaySpot';

const YesterdayList = (props) => {
    console.log("here's what we passed down to the routed yesterday component: ", props.yesterday);

    const yesterdaySpotsArray = props.yesterday.map((spot) => {
        return <YesterdaySpot key={spot.id} spot={spot} />
    })
    
    return (
        <div className="somedayDiv">
            <h1>Yesterday Spots</h1>
            <ul className="somedaySpotsList">
                {yesterdaySpotsArray}   
            </ul>
        </div>
    )
}

export default YesterdayList;