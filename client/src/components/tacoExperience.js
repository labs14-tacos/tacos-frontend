import React from 'react';

class TacoExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurantName: "",
            date: "",
            totalTacos: 1,
            userPhoto: "",
            tacoName: "",
            description: "",
            rating: 1,
            comments: ""
        };
    }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    tacoExp = event => {
        event.preventDefault();
        const id = this.props.match.params.id;
        const userExperience = {
            ...this.state
        };
        this.props.TacoExperience(id, userExperience);
        this.props.history.push('/');
    };
    
    render() {
        return(
            <>
                <div>
                    <h2 className="form-heading">Update Taco Log</h2>
                    <form className="edit-form">
                        <input
                            type="text"
                            name="restarauntName"
                            onChange={this.handleChange}
                            value={this.restaurantName}
                            placeholder="Restaraunt Name"
                        />
                        <input
                            type="text"
                            name="date"
                            onChange={this.handleChange}
                            value={this.date}
                            placeholder="Date"
                        />
                        <input
                            type="number"
                            name="totalTacos"
                            onChange={this.handleChange}
                            value={this.totalTacos}
                            placeholder="Total Tacos"
                        />
                        <input
                            type="text"
                            name="userPhoto"
                            onChange={this.handleChange}
                            value={this.userPhoto}
                            placeholder="Img url"
                        />
                        />
                        <input
                            type="text"
                            name="tacoName"
                            onChange={this.handleChange}
                            value={this.tacoName}
                            placeholder="Taco Name"
                        />
                        />
                        <input
                            type="text"
                            name="description"
                            onChange={this.handleChange}
                            value={this.description}
                            placeholder="Describe Ingredients"
                        />
                        <input
                            type="number"
                            name="rating"
                            onChange={this.handleChange}
                            value={this.rating}
                            placeholder="Rating"
                        />
                        <input
                            type="text"
                            name="comments"
                            onChange={this.handleChange}
                            value={this.comments}
                            placeholder="Describe your Experience"
                        />
                        />
                        <button type="submit" onClick={this.updateProfile} className="btn">
                            Save
                        </button>
                    </form>
                </div>
            </>
        );
    }
    }

    export default TacoExperience;