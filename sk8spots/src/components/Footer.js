import React from 'react';
import facebookIcon from '../img/facebookIcon.png';
import twitterIcon from '../img/twitterIcon.png';
import instagramIcon from '../img/instagramIcon.png';
import '../App.css';

const Footer = (props) => {
        
    return (
        <footer className="App-footer">
            <p>&copy; 2018 $k8$pots. All Rights Reserved.</p>
            <div className="socialMediaIcons">
                <img src={facebookIcon} className="icons" alt="facebook icon" />
                <img src={twitterIcon} className="icons" alt="twitter icon" />
                <img src={instagramIcon} className="instagramIcon" alt="instagram icon" />
            </div>
        </footer>
    )
}

export default Footer;