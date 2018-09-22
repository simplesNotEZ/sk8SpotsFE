import React from 'react';
import sk8RDie from '../skate-or-die.png';
import '../App.css';

const Header = (props) => {
    // console.log(props);
    
    return (
        <header className="App-header">
            <img src={sk8RDie} className="App-logo" alt="logo" />
            <h1 className="App-title">{props.title}</h1>
        </header>
    )
}

export default Header;