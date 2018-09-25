import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../App.css';

const apiURL = "http://localhost:9000/someday";

class SomedayForm extends Component {
    
    state = {
            image_url: "",
            name: "",
            country: "",
            address: "",
            city: "",
            state: "",
            description: "",
            posted: false
    }
    
    handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;

        this.setState({
            [key]: value
        });
    }    
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("here's handleSubmit: ", this.state);
        console.log("And here's this.props: ", this.props);
        let data = {...this.state};
        delete data.posted;
        console.log("after delete: ", data);
        fetch(apiURL, {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(data)
        })
        .then(resp => {
            if (!resp.ok) {
                if (resp.status >= 400 && resp.status < 500) {
                return resp.json().then(data => {
                    const err = { errorMessage: data.message };
                    throw err;
                });
                }
                const err = { errorMessage: 'Blah' };
                throw err;
            }
            return resp.json();
        })
        .then(json => {
            console.log("here's the response.json back from the post: ", json);
            // if (!json.error) {
            this.props.fetchSomeday();
            this.setState({
                posted: true
            })
            //     const newSpot = json;
            //     this.props.addGifToGlobalState(newSpot);
            // }
        })    
    }    
    
    render () {
        const posted = this.state.posted;
        return (
            <div className="moreOuterFormDiv">
                <Header title={this.props.title} />
                <div className="outerFormDiv">
                    <h2>Add A New Spot</h2>
                    <div className="formDiv">
                        <form className="form" onSubmit={this.handleSubmit}>
                            <div className="formSubDiv">
                                <div className="form-div">
                                    <label htmlFor="image_url">Image: </label>
                                    <input className="inputBox"
                                            id="image_url" 
                                            type="text"
                                            value={this.state.image_url} 
                                            name="image_url"
                                            onChange={this.handleChange} 
                                    />
                                </div>
                                <div className="form-div">
                                    <label htmlFor="name">Name: </label>
                                    <input className="inputBox"
                                            id="name" 
                                            type="text"
                                            value={this.state.name} 
                                            name="name"
                                            onChange={this.handleChange} 
                                    />
                                </div>
                                <div className="form-div">
                                    <label htmlFor="country">Country: </label>
                                    <input className="inputBox"
                                            id="country" 
                                            type="text"
                                            value={this.state.country} 
                                            name="country"
                                            onChange={this.handleChange} 
                                    />
                                </div>
                                <div className="form-div">
                                    <label htmlFor="address">Address: </label>
                                    <input className="inputBox"
                                            id="address" 
                                            type="text"
                                            value={this.state.address} 
                                            name="address"
                                            onChange={this.handleChange} 
                                    />
                                </div>
                                <div className="form-div">
                                    <label htmlFor="city">City: </label>
                                    <input className="inputBox"
                                            id="city" 
                                            type="text"
                                            value={this.state.city} 
                                            name="city"
                                            onChange={this.handleChange} 
                                    />
                                </div>
                                <div className="form-div">
                                    <label htmlFor="state">State: </label>
                                    <input className="inputBox"
                                            id="state" 
                                            type="text"
                                            value={this.state.state} 
                                            name="state"
                                            onChange={this.handleChange} 
                                    />
                                </div>
                                <div className="form-div">
                                    <label htmlFor="description">Description: </label>
                                    <textarea className="inputBox"
                                            id="description" 
                                            type="text"
                                            value={this.state.description} 
                                            name="description"
                                            onChange={this.handleChange} 
                                    >
                                    </textarea>
                                </div>
                            </div>    
                            <div className="submitBtnDiv">
                                <input className="submit-button" type="submit" name="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                    {posted && <Redirect to="/someday" />}
                </div>
                <Footer />
            </div>
        )
    }
}

export default SomedayForm;