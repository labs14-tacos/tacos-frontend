import React from 'react';
import axios from 'axios';

// we'll need to flip between this and the actual tacolog view or we won't have a way to edit it because we need the taco log id. 

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
    this.ListeningStateChangedEvent({ [event.target.name]: event.target.value });
};

updateLog = (event, tacolog_id) => {
    event.preventDefault();
    const tacoLog = {
        ...this.state,
        rating: parseInt(this.state.rating)
    }; 

    axios.put(`${process.env.REACT_APP_BACKEND_URL}/tacolog/${tacolog_id}`, tacoLog).then(res => console.log(res)).catch(err => console.log(err));
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
                        placeholder="Type of Taco"
                    />
                    <input
                        type="text"
                        name="tacoLogPhoto"
                        onChange={this.handleChange}
                        placeholder="Image url"
                    />
                    <input
                        type="text"
                        name="restaurantName"
                        onChange={this.handleChange}
                        placeholder="Restaurant Name"
                    />
                    <input
                        type="text"
                        name="rating"
                        onChange={this.handleChange}
                        placeholder="Rating"
                    />
                    <input
                        type="text"
                        name="notes"
                        onChange={this.handleChange}
                        placeholder="Notes"
                    />
                    <input
                        type="text"
                        name="tacoName"
                        onChange={this.handleChange}
                        placeholder="Taco Name"
                    />
                    <input
                        type="text"
                        name="address"
                        onChange={this.handleChange}
                        placeholder="Address"
                    />
                    <input
                        type="text"
                        name="userExperience"
                        onChange={this.handleChange}
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
