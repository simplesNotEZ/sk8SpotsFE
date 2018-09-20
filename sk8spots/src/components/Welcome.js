import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../App.css';


const Welcome = (props) => {
    // console.log(props);
    
    return (
        <div className="homeDiv">
            <h2 className="intro">
            Come'on In!  The concrete's fine!
            </h2>
            <div className="allSpots">
                <div className="login-form">
                    <form action="" method="">
                        <div className="topStuff">
                            <h2>Sign In</h2>   
                            <input type="text" className="input" placeholder="Username" required="required" />
                            <input type="password" className="input" placeholder="Password" required="required" />
                            <Link to="/home" className="btnLink"><button type="submit" className="btn">Log in</button></Link>
                        </div>    
                        <div className="rememberMe">
                            <label className="checkboxLabel"><input type="checkbox" /> Remember me</label>
                            <a href="#" className="forgot">Forgot Password?</a>
                        </div>        
                    </form>
                    <p className="noAccount">Don't have an account?  <a href="#">Sign up here</a>.</p>
                </div>
                
               
            </div>
        </div>
    )
}

export default Welcome;