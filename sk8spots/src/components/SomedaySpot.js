import React from 'react';
import '../App.css';
import burnside from '../burnside.jpg'

const SomedaySpot = (props) => {
    
    console.log("hello from Someday Spot.  Here're the props: ", props);
    
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
            </div> 
        </li>
    )
}

export default SomedaySpot;