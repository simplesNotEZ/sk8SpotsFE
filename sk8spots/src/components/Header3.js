import React from 'react';
import sk8RDie from '../skate-or-die.png';
import cheetahBoard from '../img/cheetahBoard.png';
import slasher from '../img/slasher.png';
import '../App.css';

const Header3 = (props) => {
    // console.log(props);
    
    return (
        <header className="header3">
            <div className="main-title3">
                <img src={cheetahBoard} className="App-logo3" alt="logo" />
                <h1 className="App-title3">{props.title}</h1>
            </div>
            <div className="navSpots3">
                <div className="navLink3">
                    <img src={slasher} className="slasher3" alt="slasher"/>
                    <p className="slasherPgraph3">Someday</p>
                </div>
                <div className="navLink3">
                    <img src={slasher} className="slasher3" alt="slasher"/>
                    <p className="slasherPgraph3">Home</p>
                </div>
                <div className="navLink3">
                    <img src={slasher} className="slasher3" alt="slasher"/>
                    <p className="slasherPgraph3">Other-Day</p>
                </div>
            </div>
        </header>
    )
}

export default Header3;