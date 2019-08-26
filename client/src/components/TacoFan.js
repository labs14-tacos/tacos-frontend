import React from 'react'; 
// import UserAvatar from './UserAvatar';
import {Paper, Button, GridList, GridListTile} from '@material-ui/core/';
import {Link as RouterLink} from 'react-router-dom';
import axios from 'axios';
import Rating from '@material-ui/lab/Rating';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const token = sessionStorage.getItem("token");

// This can be used to display the person who is logged in's own profile information
class TacoFan extends React.Component {
    state = {
        user: {}, 
        tacofeed: []
    }


    componentDidMount() {
        const fanFirebaseId = this.props.location.state.tacoCreatorId; 
        console.log('tacofan', this.state.tacofeed)
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/tacofan_info/${fanFirebaseId}`, {headers: {token: token}}).then(res => { console.log("it worked!!!!");
        this.setState({
           user: res.data
       })}).catch(err => console.log("this is an error in the getTacoFan function", err)); 
       this.getTacoFanTacos();
       
    } 

    getTacoFanTacos() {
        console.log("function for taco list runs")
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/tacolog/user/${this.state.user.firebaseId}`, {headers: {token:token}}).then(
            res => {
                console.log(res.data, "taco fan tacos method")
                this.setState({tacofeed: res.data})
            }
        ).catch(error => console.log(error))
    }

   
    render() {
        console.log(this.state.user, "user console log")
    return (
        <div>
               <Paper>
                <img className="avatar-image" src={this.state.user.userPhoto}/>
                <h1>{this.state.user.firstName} {this.state.user.lastName}</h1> 
                <p>Email: {this.state.user.email}</p>
                <p>Instagram: {this.state.user.instaHandle}</p>
                <p>Twitter: {this.state.user.twitterHandle}</p>
                <p>Facebook: {this.state.user.facebookPage}</p> 
                <p>Website: {this.state.user.website}</p> 
                <p>Favorite Taco: {this.state.user.favTaco}</p> 
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
                <GridList>
            {/* {this.state.tacofeed.map(taco => 
             <GridListTile 
            key={taco.id}><img src={taco.tacoLogPhoto} alt={taco.nameOfTaco}/></GridListTile>)} */}
            </GridList>
                <Button component={RouterLink} to="/explore-tacos">Back to All Tacos</Button>
               </Paper>
        </div>
    )
    }
}


export default TacoFan;