import React from 'react';
import sk8RDie from '../skate-or-die.png';
import cheetahBoard from '../img/cheetahBoard.png';
import slasher from '../img/slasher.png';
import '../App.css';

const Header2 = (props) => {
    // console.log(props);
    
    return (
        <header className="App-header">
            <div className="main-title">
                <img src={cheetahBoard} className="App-logo" alt="logo" />
                <div className="h1-div">
                    <h1 className="App-subTitle">{props.title} </h1>
                    <h1 className="welcome-title">{props.title2}</h1>
                </div>
            </div>
        </header>
    )
}

export default Header2;