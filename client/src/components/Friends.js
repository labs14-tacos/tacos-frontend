import React from 'react'; 
import axios from 'axios';

// I am naming this component Friends so we can repurpose it to later be the display of each friend a user is friends with. For now (7-11) this is just to pull in our seed data to prove our FE and BE are communicating. -- MJ




class Friends extends React.Component {
state = {
    friends: [
       
    ]
}

componentDidMount() {
     axios.get(`${process.env.REACT_APP_BACKEND_URL_USERS}`).then(res => this.setState({friends: res.data})).catch(error => console.log(error));
}

render() {
 return (
     <div>
         {
             this.state.friends.map(friend => <p>{friend.firstName} {friend.lastName}</p>)
         }
     </div>
 )

};

}
export default Friends;
