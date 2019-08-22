import React from 'react';
// import UserAvatar from './UserAvatar';
import { Paper, Button } from '@material-ui/core/';
import { Link as RouterLink } from 'react-router-dom';
import Axios from 'axios';

const token = sessionStorage.getItem("token");

// This can be used to display the person who is logged in's own profile information
class User extends React.Component {
    state = {
        user: {}
    }


    componentDidMount() {
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/my_info`, { headers: { token: `${token}` } }).then(user => this.setState({ user: user.data })).catch(error => console.log(error));
    }

    passProps() {

    }
    render() {
        console.log(this.state.user, "user console log")
        return (
            <div>
                <Paper id="paper">
                    <img className="avatar-image" src={this.state.user.userPhoto} />
                    <h1>{this.state.user.firstName} {this.state.user.lastName}</h1>
                    <p><span>Email:</span> {this.state.user.email}</p>
                    <p><span>Instagram:</span> {this.state.user.instaHandle}</p>
                    <p><span>Twitter:</span> {this.state.user.twitterHandle}</p>
                    <p><span>Facebook:</span> {this.state.user.facebookPage}</p>
                    <p><span>Website:</span> {this.state.user.website}</p>
                    <p><span>Favorite Taco:</span> {this.state.user.favTaco}</p>
                    <div className="button-container">

                        <Button id="proBtn" component={RouterLink} to="/my-tacos" variant="contained" size="medium" color="primary">
                            My Tacos
                       </Button>
                        <Button id="proBtn" component={RouterLink} onClick={this.passProps} to={{ pathname: "/update-profile", state: { user: this.state.user } }} variant="contained" size="medium" color="primary">
                            Update Profile
                       </Button>
                    </div>

                </Paper>
            </div>
        )
    }
}


export default User;