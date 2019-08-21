import React, { Component } from 'react';
import PhotoUpload from './cloudinary/UserTacoImage';
import {Paper, Button, TextField} from '@material-ui/core/';
import {Link as RouterLink} from 'react-router-dom';
import Axios from 'axios';

const token = sessionStorage.getItem("token");

export default class UpdateUserPhoto extends Component {

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
        this.setState({
            user: this.props.location.state.user
        })
    //   let  userInfo = this.props.location.state.user; 
    //     this.setState({
    //         firstName: userInfo.firstName,
    //         lastName: userInfo.lastName,
    //         favTaco: userInfo.favTaco,
    //         userPhoto: userInfo.userPhoto, 
    //         email: userInfo.email,
    //         facebookPage: userInfo.facebookPage,
    //         twitterHandle: userInfo.twitterHandle,
    //         instaHandle: userInfo.instaHandle,
    //         website: userInfo.website
    //     });

        // console.log("componentDidMount in update profile", userInfo);
    }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    setUserPhoto = userPhoto => {
        this.setState({userPhoto})
    }

    
    // updateProfile = event => {
    //     event.preventDefault();
    //     const user = {
    //         ...this.state.user,
    //         userPhoto: this.state.userPhoto
    //       }
    //     Axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/users`, user, {headers: {token: token}} )
    //     .then(res => console.log(res)).catch(err => console.log(err))
    //     this.props.history.push('/update-profile')
    // };
    
    render() {
        // console.log(this.props.location.state.user, "update user profile props")
        return(
           
               
               <Paper>
                <form>
               
                <div >
                <PhotoUpload id="photo-container" setUserPhoto={this.setUserPhoto}/>
                   <Button id="proBtn" component={RouterLink} onClick={this.updateProfile} to={{ pathname: "/update-user-photo", 
                   
                    state: {
                        user:
                        {
                        ...this.state.user,
                        userPhoto: this.state.userPhoto
                        }}
                   
                   }}>Save Updated Photo</Button>
                   
                </div>
                <div className="flex-container">
                
                {/* <TextField
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
          */}
                </div>
                <Button id='proBtn' type="submit" onClick={this.updateProfile} >
                    Save
                </Button>
                </form>
                <Button id='proBtn' component={RouterLink} to="/my-profile">
                    Back to Profile
                </Button>
                </Paper>
               
        );
    }




    // constructor(props) {
    //     super(props);
    //     this.state = {
    //        userPhoto: ''  
    //     };
    // }

    // componentDidMount() {
    //     let  userInfo = this.props.location.state.user; 
    //       this.setState({   
    //           userPhoto: userInfo.userPhoto, 
    //       });
    //   }

    // setUserPhoto = userPhoto => {
    //     this.setState({userPhoto})
    // }
    // updateProfile = event => {
    //     event.preventDefault();
    //     Axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/users`, this.state, {headers: {token: token}} ).then(res => console.log(res)).catch(err => console.log(err))
    // };


    // render() {
    //     return (
    //         <div>
    //             <Paper>
    //                 <div>
    //                     <PhotoUpload id="photo-container" setUserPhoto={this.setUserPhoto}/>
    //                 </div>
    //             </Paper>
    //         </div>
    //     )
    // }
}
