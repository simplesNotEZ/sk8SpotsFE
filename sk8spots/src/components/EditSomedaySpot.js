import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header3 from './Header3';
import Footer from './Footer';
import '../App.css';


const apiURL1 = "http://localhost:9000/someday";
const apiURL2 = "https://sk8spots.herokuapp.com/someday";

class EditSomedaySpot extends Component {
    

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
    
    handleSubmit = (event, id) => {
        event.preventDefault();
        let data = {...this.state};
        delete data.posted;
        fetch(apiURL2 + '/' + id, {
            method: 'PUT',
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
            this.props.fetchSomeday();
            this.setState({
                posted: true
            });
        })    
    }

    submitAlert = (event) => {
        event.preventDefault();

        alert("Nice try buddy.  Don't be meddlin with my database son!");
    }

    componentDidMount () {
    }
    
    render () {
        const posted = this.state.posted;
        return (
            <div className="moreOuterFormDiv">
                <Header3 title={this.props.title} />
                <div className="outerFormDiv">
                    
                    <div className="formDiv">
                        <form className="form" onSubmit={(event) => this.submitAlert(event)}>
                            <h2>Edit {this.props.location.state.spot.name}</h2>
                            <div className="formSubDiv">
                                <div className="form-div2">
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
                                <div className="form-div2">
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
                                <div className="form-div2">
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
                                <div className="form-div2">
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
                                <div className="form-div2">
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
                                <div className="form-div2">
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
                                <div className="form-div2">
                                    <label htmlFor="description">Description: </label>
                                    <textarea className="inputBox textArea"
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
                    {posted && <Redirect to="/someday" />}
                </div>
                <Footer />
            </div>
        )
    }
}

export default EditSomedaySpot;