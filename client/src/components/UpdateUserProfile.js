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
            favTaco: "",
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
                            value={this.firstName}
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            name="lastName"
                            onChange={this.handleChange}
                            value={this.lastName}
                            placeholder="Last Name"
                        />
                        <input
                            type="text"
                            name="email"
                            onChange={this.handleChange}
                            value={this.email}
                            placeholder="Email"
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
                            name="favTaco"
                            onChange={this.handleChange}
                            value={this.favTaco}
                            placeholder="Favorite Taco"
                        />
                        />
                        <input
                            type="text"
                            name="instaHandle"
                            onChange={this.handleChange}
                            value={this.instaHandle}
                            placeholder="Instagram Account Here"
                        />
                        <input
                            type="text"
                            name="twitterHandle"
                            onChange={this.handleChange}
                            value={this.twitterHandle}
                            placeholder="Twitter Handle Here"
                        />
                        <input
                            type="text"
                            name="facebookPage"
                            onChange={this.handleChange}
                            value={this.facebookPage}
                            placeholder="Facebook Page Here"
                        />
                        <input
                            type="text"
                            name="website"
                            onChange={this.handleChange}
                            value={this.website}
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