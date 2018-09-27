import React from 'react';
import { Link } from 'react-router-dom';
import Header2 from "./Header2";
import Footer from "./Footer";

import '../App.css';


const Welcome = (props) => {
    
    return (
        <div className="homeDiv">
            <Header2 title={props.title} title2={props.title2} />
            <h2 className="intro">
            Come'on in, the concrete's fine!
            </h2>
            <div className="allSpots">
                <div className="login-form">
                    <form>
                        <div className="topStuff">
                            <h2>Sign In</h2>   
                            <input type="text" className="input" placeholder="Just click on Log In." required="required" />
                            <input type="password" className="input" placeholder="This feature is just for looks for now." required="required" />
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
            <Footer />
        </div>
    )
}

export default Welcome;