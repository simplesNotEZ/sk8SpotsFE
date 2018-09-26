import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';


const YesterdaySpot = (props) => {
    
    console.log("hello from YesterdaySpot.  Here're the props: ", props);
    
    return (
        <li className="spotCard">
            <img src={props.spot.image_url} className="cardImg" alt="skate spot" />
            <div className="spotDetails">
                <h2>{props.spot.name}</h2>
                <div className="spotDetails2">
                    <div className="individualDetail">
                        <p className="label">Country:</p><p>{props.spot.country}</p>
                    </div>
                    <div className="individualDetail">
                        <p className="label">Address:</p><p>{props.spot.address}</p>
                    </div>
                    <div className="individualDetail">
                        <p className="label">City:</p><p>{props.spot.city}</p>
                    </div>
                    <div className="individualDetail">
                        <p className="label">State:</p><p>{props.spot.state}</p>
                    </div>
                    <div className="descriptionDetail">
                        <p className="label descriptionLabel">Description:</p>
                        <p className="description-p">
                            &nbsp;&nbsp;&nbsp;&nbsp;{props.spot.description} 
                        </p>
                    </div>
                </div>
                <div className="EDbuttons">
                    <Link to={{
                        pathname: "/editYesterdaySpot",
                        state: {
                            spot: props.spot
                        }
                    }} >
                        <button className="editBtn">Edit</button>
                    </Link>
                    <button className="deleteBtn" onClick={(event) => props.deleteYesterdaySpot(event, props.spot.id)}>Delete</button>
                </div>
            </div> 
        </li>
    )
}

export default YesterdaySpot;