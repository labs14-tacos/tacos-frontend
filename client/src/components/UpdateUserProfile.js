import React from 'react'; 
import PhotoUpload from './cloudinary/UserTacoImage'
import {Paper, Button} from '@material-ui/core/';
import Axios from 'axios';

const token = sessionStorage.getItem("token");

// this can be used as the update area for the logged-in person's profile info
class UpdateUserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           firstName: '',
           lastName: '',
           favTaco: '',
           userPhoto: '', 
           email: '',
           facebookPage: '',
           twitterHandle: '',
           instaHandle: '',
           website: ''
        };
    }

    componentDidMount() {
      let  userInfo = this.props.location.state.user; 
        this.setState({
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            favTaco: userInfo.favTaco,
            userPhoto: userInfo.userPhoto, 
            email: userInfo.email,
            facebookPage: userInfo.facebookPage,
            twitterHandle: userInfo.twitterHandle,
            instaHandle: userInfo.instaHandle,
            website: userInfo.website
        });

        console.log("componentDidMount in update profile", userInfo);
    }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    setUserPhoto = userPhoto => {
        this.setState({userPhoto})

    }

    
    updateProfile = event => {
        event.preventDefault();
        Axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/users`, this.state, {headers: {token: token}} ).then(res => console.log(res)).catch(err => console.log(err))
    };
    
    render() {
        // console.log(this.props.location.state.user, "update user profile props")
        return(
           
               
               <Paper>
                <form>
                <PhotoUpload setUserPhoto={this.setUserPhoto}/>
                <p>First name:</p>
                <input
                            type="text"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                            placeholder={this.state.firstName}
                        />
                <p>Last Name</p>
                <input
                    type="text"
                    name="lastName"         
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    placeholder={this.state.lastName}
                />
                <p>Email:</p>
                <input
                            type="text"
                            name="user.email"
                            onChange={this.handleChange}
                            placeholder={this.state.email}
                        />
                <p>Instagram:</p>
                <input
                            type="text"
                            name="instaHandle"
                            onChange={this.handleChange}
                            value={this.state.instaHandle}
                            placeholder="Instagram Account Here"
                        />            
                <p>Twitter:</p>
                <input
                            type="text"
                            name="twitterHandle"
                            onChange={this.handleChange}
                            value={this.state.twitterHandle}
                            placeholder="Twitter Handle Here"
                        />
                <p>Facebook:</p>
                <input
                            type="text"
                            name="facebookPage"
                            onChange={this.handleChange}
                            value={this.state.facebookPage}
                            placeholder="Facebook Page Here"
                        />
                <p>Website:</p> 
                <input
                            type="text"
                            value={this.state.website}
                            name="website"
                            onChange={this.handleChange}
                            placeholder="Personal website here"
                        />
                <p>Favorite Taco:</p>
                <input
                            type="text"
                            name="favTaco"
                            value={this.state.favTaco}
                            onChange={this.handleChange}
                            placeholder="Favorite Taco"
                />
                <button type="submit" onClick={this.updateProfile} className="btn">
                    Save
                </button>
                </form>
               </Paper>
               
        );
    }
    }


export default UpdateUserProfile;