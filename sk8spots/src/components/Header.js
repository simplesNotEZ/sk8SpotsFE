import React from 'react';
import sk8RDie from '../skate-or-die.png';
import cheetahBoard from '../img/cheetahBoard.png';
import slasher from '../img/slasher.png';
import '../App.css';

const Header = (props) => {
    // console.log(props);
    
    return (
        <header className="App-header">
            <div className="home-header">
                <img src={cheetahBoard} className="App-logo" alt="logo" />
                <h1 className="home-title">{props.title}</h1>
            </div>
        </header>
    )
}

export default Header;