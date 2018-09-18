import React from 'react';
import '../App.css';

import Header from './Header'
import Footer from './Footer'

const Someday = (props) => {
    // console.log(props);
    
    return (
        <div className="somedayDiv">
            <Header />
            <h1>Holy Shit Gentlemen</h1>
            <Footer />
        
        </div>
    )
}

export default Someday;