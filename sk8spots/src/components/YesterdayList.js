import React from 'react';
import { Link } from 'react-router-dom';
import Header3 from './Header3';
import Footer from './Footer';
import YesterdaySpot from './YesterdaySpot';
import '../App.css';

const YesterdayList = (props) => {

    const yesterdaySpotsArray = props.yesterday.map((spot) => {
        return (<YesterdaySpot key={spot.id} 
                                spot={spot}
                                deleteYesterdaySpot={props.deleteYesterdaySpot}
                                deleteYesterdaySpotAlert={props.deleteYesterdaySpotAlert}
                />)
    })
    
    return (
        <div className="outerDiv">
            <Header3 title={props.title} />
            <div className="somedayDiv">
                <h1>Other-Day $pots</h1>
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