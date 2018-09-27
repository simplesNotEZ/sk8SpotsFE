import React from 'react';
import cheetahBoard from '../img/cheetahBoard.png';
import '../App.css';

const Header = (props) => {
    
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