import React from 'react';
import PhotoUpload from './cloudinary/UserTacoImage'
import { Paper, Button, TextField, Container } from '@material-ui/core/';
import Axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import WhatshotIcon from '@material-ui/icons/Whatshot';


const token = sessionStorage.getItem("token");

// this can be used as the update area for the logged-in person's profile info
class UpdateUserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            favTaco: '',
            userPhoto: this.props.location.state.userPhoto,
            email: '',
            facebookPage: '',
            twitterHandle: '',
            instaHandle: '',
            website: '',
            zipcode: '',
            tacosPerMonth: '',
            hardOrSoft: '',
            cornOrFlour: '',
            heatPreference: '',
            streetOrGourmet: '',
            favTacoLocation: '',
            bestTacoMemory: '',

        };
    }

    componentDidMount() {
        setTimeout(() => {
            let userInfo = this.props.location.state.user;
            this.setState({
                firstName: userInfo.firstName,
                lastName: userInfo.lastName,
                favTaco: userInfo.favTaco,
                userPhoto: userInfo.userPhoto,
                email: userInfo.email,
                facebookPage: userInfo.facebookPage,
                twitterHandle: userInfo.twitterHandle,
                instaHandle: userInfo.instaHandle,
                website: userInfo.website,
                zipcode: userInfo.zipcode,
                tacosPerMonth: userInfo.tacosPerMonth,
                hardOrSoft: userInfo.hardOrSoft,
                cornOrFlour: userInfo.cornOrFlour,
                heatPreference: userInfo.heatPreference,
                streetOrGourmet: userInfo.streetOrGourmet,
                favTacoLocation: userInfo.favTacoLocation,
                bestTacoMemory: userInfo.bestTacoMemory


            });

        }, 0)

    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    setUserPhoto = userPhoto => {
        this.setState({ userPhoto })
    }

    wipePhoto = () => {
        this.setState({
            userPhoto: '',

        })
    }
    updateProfile = event => {
        event.preventDefault();
        Axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/users`, this.state, { headers: { token: token } }).then(res => this.props.history.push('/my-profile')).catch(err => console.log(err))
    };

    render() {
        console.log('looking at state', this.state)
        console.log('check for photo', this.state.userPhoto)
        return (


            <Paper>
                <form>
                    {/* User photo us updated here */}
                    <div >

                        {
                            this.state.userPhoto ?
                                <>
                                    <img className="avatar-image" src={this.state.userPhoto} alt="" />
                                    <button onClick={() => this.wipePhoto()}>Change my photo</button>
                                </>
                                :
                                <PhotoUpload id="photo-container" setUserPhoto={this.setUserPhoto} />
                        }

                        {/* <button onClick={() => this.setState(prevState => ({changePhoto: !prevState.changePhoto}))}>Change my photo</button>  */}
                    </div>
                    <Container>

                        <TextField
                            label="First Name"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                            placeholder={this.state.firstName}
                        />

                        <TextField
                            className="wider-text-field"

                            label="Last Name"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                            placeholder={this.state.lastName}
                        />

                        <TextField
                            disabled
                            label="Email"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                        />

                        <TextField
                            label="Instagram Handle"
                            name="instaHandle"
                            onChange={this.handleChange}
                            value={this.state.instaHandle}
                            placeholder="Instagram Handle"
                        />

                        <TextField
                            label="Twitter Handle"
                            name="twitterHandle"
                            onChange={this.handleChange}
                            value={this.state.twitterHandle}
                            placeholder="Twitter Handle Here"
                        />

                        <TextField
                            label="Facebook Page"
                            name="facebookPage"
                            onChange={this.handleChange}
                            value={this.state.facebookPage}
                            placeholder="Facebook Page Here"
                        />

                        <TextField
                            label="Website"
                            value={this.state.website}
                            name="website"
                            onChange={this.handleChange}
                            placeholder="Personal website here"
                        />

                        <TextField
                            label="Favorite Taco"
                            name="favTaco"
                            value={this.state.favTaco}
                            onChange={this.handleChange}
                            placeholder="Favorite Taco"
                        />
                        <TextField
                            label="Zip Code"
                            name="zipcode"
                            value={this.state.zipcode}
                            onChange={this.handleChange}
                            placeholder="Zip Code"
                        />
                        <TextField
                            label="Tacos Per Month"
                            name="tacosPerMonth"
                            value={this.state.tacosPerMonth}
                            onChange={this.handleChange}
                            placeholder="Tacos Per Month"
                        />
                        <TextField
                            label="Hard Or Soft"
                            name="hardOrSoft"
                            value={this.state.hardOrSoft}
                            onChange={this.handleChange}
                            placeholder="Hard Or Soft"
                        />
                        <TextField
                            label="Corn Or Flour"
                            name="cornOrFlour"
                            value={this.state.cornOrFlour}
                            onChange={this.handleChange}
                            placeholder="Corn Or Flour"
                        />
                        <Container className="ratings">
                            <p>Heat Preference:</p>
                            <Rating className="rating"
                                icon={<WhatshotIcon fontsize="inherit" />}
                                label="Heat Preference"
                                name="heatPreference"
                                value={this.state.heatPreference}
                                onChange={this.handleChange}
                                placeholder="Heat Preference"
                            />
                        </Container>
                        <TextField
                            label="Street Or Gourmet"
                            name="streetOrGourmet"
                            value={this.state.streetOrGourmet}
                            onChange={this.handleChange}
                            placeholder="Street Or Gourmet"
                        />
                        <TextField
                            label="Favorite Taco Location"
                            name="favTacoLocation"
                            value={this.state.favTacoLocation}
                            onChange={this.handleChange}
                            placeholder="Favorite Taco Location"
                        />
                        <TextField
                            label="Best Taco Memory"
                            name="bestTacoMemory"
                            value={this.state.bestTacoMemory}
                            onChange={this.handleChange}
                            placeholder="Best Taco Memory"
                        />

                    </Container>
                    <Button id='proBtn' type="submit" onClick={this.updateProfile} >
                        Save
                </Button>
                </form>
            </Paper>

        );
    }
}


export default UpdateUserProfile;