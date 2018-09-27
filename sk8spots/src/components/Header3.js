import React from 'react';
import { Link } from 'react-router-dom';
import cheetahBoard from '../img/cheetahBoard.png';
import slasher from '../img/slasher.png';
import '../App.css';

const Header3 = (props) => {
    
    return (
        <header className="header3">
            <div className="main-title3">
                <img src={cheetahBoard} className="App-logo3" alt="logo" />
                <h1 className="App-title3">{props.title}</h1>
            </div>
            <div className="navSpots3">
                <Link to="/someday" className="navLink3">
                    <img src={slasher} className="slasher3" alt="slasher"/>
                    <p className="slasherPgraph3">Someday</p>
                </Link>
                <Link to="/home" className="navLink3">
                    <img src={slasher} className="slasher3" alt="slasher"/>
                    <p className="slasherPgraph3">Home</p>
                </Link>
                <Link to="/yesterday" className="navLink3">
                    <img src={slasher} className="slasher3" alt="slasher"/>
                    <p className="slasherPgraph3">Other-Day</p>
                </Link>
            </div>
        </header>
    )
}

export default Header3;