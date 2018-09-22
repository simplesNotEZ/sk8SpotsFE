import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';

const SomedaySpot = (props) => {
    
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
                    <Link to="/someday">
                        <button className="deleteBtn" onClick={(event) => props.deleteSpot(event, props.spot.id)}>Delete</button>
                    </Link>
                    <Link to="/edit">
                        <button className="editBtn">Edit</button>
                    </Link>
                </div>
            </div> 
        </li>
    )
}

export default SomedaySpot;