import React from 'react'; 

// this can be used as the update area for the logged-in person's profile info
class UpdateUserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            userPhoto: "",
            zipCode: "",
            tacosPerMonth: "",
            hardOrSoft: "",
            cornOrFlour: "",
            heatPreference: "",
            streetOrGourmet: "",
            favTaco: "",
            favTacoLocation: "",
            bestTacoMemory: "",
            instaHandle: "",
            twitterHandle: "",
            facebookPage: "",
            website: ""
        };
    }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    updateProfile = event => {
        event.preventDefault();
        const id = this.props.match.params.id;
        const userProfile = {
            ...this.state
        };
        this.props.UpdateUserProfile(id, userProfile);
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
                            name="firstName"
                            onChange={this.handleChange}
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            name="lastName"
                            onChange={this.handleChange}
                            placeholder="Last Name"
                        />
                        <input
                            type="text"
                            name="email"
                            onChange={this.handleChange}
                            placeholder="Email"
                        />
                        <input
                            type="text"
                            name="userPhoto"
                            onChange={this.handleChange}
                            placeholder="Img url"
                        />
                        />
                        <input
                            type="text"
                            name="favTaco"
                            onChange={this.handleChange}
                            placeholder="Favorite Taco"
                        />
                        />
                        <input
                            type="text"
                            name="instaHandle"
                            onChange={this.handleChange}
                            placeholder="Instagram Account Here"
                        />
                        <input
                            type="text"
                            name="twitterHandle"
                            onChange={this.handleChange}
                            placeholder="Twitter Handle Here"
                        />
                        <input
                            type="text"
                            name="facebookPage"
                            onChange={this.handleChange}
                            placeholder="Facebook Page Here"
                        />
                        <input
                            type="text"
                            name="website"
                            onChange={this.handleChange}
                            placeholder="Your Website Here"
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


export default UpdateUserProfile;