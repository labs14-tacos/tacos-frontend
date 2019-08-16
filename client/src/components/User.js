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
                    <p>Email: {this.state.user.email}</p>
                    <p>Instagram: {this.state.user.instaHandle}</p>
                    <p>Twitter: {this.state.user.twitterHandle}</p>
                    <p>Facebook: {this.state.user.facebookPage}</p>
                    <p>Website: {this.state.user.website}</p>
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