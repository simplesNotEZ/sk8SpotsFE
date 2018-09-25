import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../App.css';


const apiURL = "http://localhost:9000/yesterday";

class EditYesterdaySpot extends Component {
    

    state = {
            image_url: "",
            name: "",
            country: "",
            address: "",
            city: "",
            state: "",
            description: ""
    }
    
    handleChange = (event) => {

        const key = event.target.name;
        const value = event.target.value;

        this.setState({
            [key]: value
        });
    }    
    
    handleSubmit = (event, id) => {
        event.preventDefault();
        console.log("here's handleSubmit: ", this.state);
        console.log("handleSubmit from edit's id param is: ", id);
        fetch('http://localhost:9000/yesterday/' + id, {
            method: 'PUT',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(this.state)
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
            console.log("here's the response.json back from the PUT: ", json);
            // if (!json.error) {
            //     const newSpot = json;
            //     this.props.addGifToGlobalState(newSpot);
            // }
        })    
    }

    componentDidMount () {
        console.log("Props passed to Edit: ", this.props);
    }
    
    render () {
        return (
            <div className="moreOuterFormDiv">
                <Header title={this.props.title} />
                <div className="outerFormDiv">
                    <h2>Edit {this.props.location.state.spot.name}</h2>
                    <div className="formDiv">
                        <form className="form" onSubmit={(event) => this.handleSubmit(event, this.props.location.state.spot.id)}>
                            <div className="formSubDiv">
                                <div className="form-div">
                                    <label htmlFor="image_url">Image: </label>
                                    <input className="inputBox"
                                            id="image_url" 
                                            type="text"
                                            value={this.state.image_url} 
                                            placeholder={this.props.location.state.spot.image_url}
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
                                            placeholder={this.props.location.state.spot.name} 
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
                                            placeholder={this.props.location.state.spot.country} 
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
                                            placeholder={this.props.location.state.spot.address} 
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
                                            placeholder={this.props.location.state.spot.city} 
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
                                            placeholder={this.props.location.state.spot.state}  
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
                                            placeholder={this.props.location.state.spot.description}  
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
                </div>
                <Footer />
            </div>
        )
    }
}

export default EditYesterdaySpot;