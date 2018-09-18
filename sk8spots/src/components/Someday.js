import React from 'react';
import '../App.css';

import burnside from '../burnside.jpg';

import Header from './Header'
import Footer from './Footer'

const Someday = (props) => {
    // console.log(props);
    
    return (
        <div className="somedayDiv">
            <h1>Someday Spots</h1>
            <ul className="somedaySpotsList">
                <li className="spotCard">
                    <img src={burnside} className="cardImg" alt="picture of skate spot" />
                    <div className="spotDetails">
                        <h2>Burnside Skatepark</h2>
                        <div className="spotDetails2">
                            <div className="individualDetail">
                                <p className="label">Country:</p><p>United States</p>
                            </div>
                            <div className="individualDetail">
                                <p className="label">Address:</p><p>SE 2nd Ave, Portland, OR 97232</p>
                            </div>
                            <div className="individualDetail">
                                <p className="label">City:</p><p>Portland</p>
                            </div>
                            <div className="individualDetail">
                                <p className="label">State:</p><p>Oregon</p>
                            </div>
                            <div className="descriptionDetail">
                                <p className="label descriptionLabel">Description:</p>
                                <p className="description-p">
                                    &nbsp;&nbsp;&nbsp;&nbsp;Burnside Skatepark is located under the east end of the Burnside Bridge. The skatepark was originally built by the skateboard community without permission and eventually the city approved the area as a public skatepark.
                                    The skatepark has been featured in videogames such as Tony Hawk's Pro Skater, Tony Hawk's Pro Skater 2X, Tony Hawk's Pro Skater 3, Mat Hoffman's Pro BMX, and Grind Session. Burnside Skatepark was also featured in the 1993 film Free Willy and the 2007 film Paranoid Park, as a setting for the eponymous skate park. 
                                </p>
                            </div>
                        </div>
                    </div> 
                </li>
                <li className="spotCard">
                    <img src={burnside} className="cardImg" alt="picture of skate spot" />
                    <div className="spotDetails">
                        <h2>Burnside Skatepark</h2>
                        <div className="spotDetails2">
                            <div className="individualDetail">
                                <p className="label">Country:</p><p>United States</p>
                            </div>
                            <div className="individualDetail">
                                <p className="label">Address:</p><p>SE 2nd Ave, Portland, OR 97232</p>
                            </div>
                            <div className="individualDetail">
                                <p className="label">City:</p><p>Portland</p>
                            </div>
                            <div className="individualDetail">
                                <p className="label">State:</p><p>Oregon</p>
                            </div>
                            <div className="descriptionDetail">
                                <p className="label descriptionLabel">Description:</p>
                                <p className="description-p">
                                    &nbsp;&nbsp;&nbsp;&nbsp;Burnside Skatepark is located under the east end of the Burnside Bridge. The skatepark was originally built by the skateboard community without permission and eventually the city approved the area as a public skatepark.
                                    The skatepark has been featured in videogames such as Tony Hawk's Pro Skater, Tony Hawk's Pro Skater 2X, Tony Hawk's Pro Skater 3, Mat Hoffman's Pro BMX, and Grind Session. Burnside Skatepark was also featured in the 1993 film Free Willy and the 2007 film Paranoid Park, as a setting for the eponymous skate park. 
                                </p>
                            </div>
                        </div>
                    </div> 
                </li>   
            </ul>
        </div>
    )
}

export default Someday;