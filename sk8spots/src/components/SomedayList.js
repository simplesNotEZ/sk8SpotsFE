import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';
import SomedaySpot from './SomedaySpot';
import Header3 from './Header3';
import Footer from './Footer';

const SomedayList = (props) => {
    
    console.log("here's what we passed down to the routed SomedayList component: ", props);

    const somedaySpotsArray = props.someday.map((spot) => {
        return (<SomedaySpot key={spot.id} 
                            spot={spot}
                            title={props.title} 
                            deleteSomedaySpot={props.deleteSomedaySpot}
                            deleteSomedaySpotAlert={props.deleteSomedaySpotAlert} 
                            addEditToGlobalState={props.addEditToGlobalState} 
                />)
    })
    
    return (
        <div className="outerSomedayDiv">
            <Header3 title={props.title} />
            <div className="somedayDiv">
                <h1>$omeday $pots</h1>
                <Link to="/newSomedaySpot">
                    <button className="addASpot">Add A Spot</button>
                </Link>
                <ul className="somedaySpotsList">
                    {somedaySpotsArray}   
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default SomedayList;