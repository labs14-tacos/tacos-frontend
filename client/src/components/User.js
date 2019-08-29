import React from 'react';
import { Paper, Button } from '@material-ui/core/';
import { Link as RouterLink } from 'react-router-dom';
import Axios from 'axios';
import SocialFollow from './SocialFollow';
import Rating from '@material-ui/lab/Rating';
import WhatshotIcon from '@material-ui/icons/Whatshot';


const token = sessionStorage.getItem("token");

// This can be used to display the person who is logged in's own profile information
class User extends React.Component {
    state = {
        user: {},
        rating: null,
    }


    componentDidMount() {
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/my_info`, { headers: { token: `${token}` } }).then(user => this.setState({ user: user.data })).catch(error => console.log(error));
    } 

    
    render() {

        return (
            <div>
                <Paper id="paper">
                    <img className="avatar-image" src={this.state.user.userPhoto} />
                    <h1>{this.state.user.firstName} {this.state.user.lastName}</h1>
                    <p><span>Favorite Taco:</span> {this.state.user.favTaco}</p>
                    <p><span>Zip Code:</span> {this.state.user.zipcode}</p>
                    <p><span>Tacos Per Month:</span> {this.state.user.tacosPerMonth}</p>
                    <p><span>Hard or Soft:</span> {this.state.user.hardOrSoft}</p>
                    <p><span>Corn or Flour:</span> {this.state.user.cornOrFlour}</p>
                    <p><span>Heat Preference: </span> {this.state.user.heatPreference}</p>
                    <Rating
                    name= 'heatPreference'
                    disabled
                    value={this.state.user.heatPreference}
                    icon={<WhatshotIcon fontSize="inherit" />}
                    />
                    <p><span>Street Or Gourmet:</span> {this.state.user.streetOrGourmet}</p>
                    <p><span>Favorite Taco Location:</span> {this.state.user.favTacoLocation}</p>
                    <p><span>Best Taco Memory:</span> {this.state.user.bestTacoMemory}</p>
                    <p><span>Email:</span> {this.state.user.email}</p>
                    <p><span>My Social Media: <SocialFollow /></span></p>
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