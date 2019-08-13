import React from 'react'; 
// import UserAvatar from './UserAvatar';
import Paper from '@material-ui/core/Paper';
import Axios from 'axios';


// This can be used to display the person who is logged in's own profile information
class User extends React.Component {
    state = {
        user: {}
    }


    componentDidMount() {
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}/my_profile`).then(user => this.setState({user})).catch(error=> console.log(error));
    }
    render() {
    return (
        <div>
               <Paper>
                <img src={this.state.user.photoURL}/>
                <h1>{this.state.user.firstName} {this.state.user.lastName}</h1> 

               </Paper>
        </div>
    )
    }
}


export default User;