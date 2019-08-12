import React from 'react';

class EditTacoLog extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        typeOfTaco: "",
        tacoLogPhoto: "",
        restaurantName: "",
        rating: null,
        notes: "",
        tacoName: "",
        address: "",
        userExperience: ""
    };
}

handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
};

updateLog = event => {
    event.preventDefault();
    const id = this.props.match.params.id;
    const tacoLog = {
        ...this.state,
        rating: parseInt(this.state.rating)
    };
    this.props.EditTacoLog(id, tacoLog);
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
                        name="typeOfTaco"
                        onChange={this.handleChange}
                        value={this.typeOfTaco}
                        placeholder="Type of Taco"
                    />
                    <input
                        type="text"
                        name="tacoLogPhoto"
                        onChange={this.handleChange}
                        value={this.tacoLogPhoto}
                        placeholder="Image url"
                    />
                    <input
                        type="text"
                        name="restaurantName"
                        onChange={this.handleChange}
                        value={this.restaurantName}
                        placeholder="Restaurant Name"
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
                        name="notes"
                        onChange={this.handleChange}
                        value={this.notes}
                        placeholder="Notes"
                    />
                    <input
                        type="text"
                        name="tacoName"
                        onChange={this.handleChange}
                        value={this.tacoName}
                        placeholder="Taco Name"
                    />
                    <input
                        type="text"
                        name="address"
                        onChange={this.handleChange}
                        value={this.address}
                        placeholder="Address"
                    />
                    <input
                        type="text"
                        name="userExperience"
                        onChange={this.handleChange}
                        value={this.userExperience}
                        placeholder="User Experience"
                    />
                    <button type="submit" onClick={this.updateLog} className="btn">
                        Save
                    </button>
                </form>
            </div>
        </>
    );
}
}

export default EditTacoLog;
