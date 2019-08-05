import React from 'react'; 
// import UserAvatar from './UserAvatar';
import Friends from './Friends.js';


// This can be used to display the person who is logged in's own profile information
const User = props => {

    return (
        <div>
            <div className = "user-profile">
                <h1>Profile</h1>
                {/* <UserAvatar /> */}
                <h4>{props.name}</h4>
                <h4>{props.age} years old</h4>
                <h4>{props.email}</h4>
            </div>
            <Friends />
        </div>
    )
}

User.defaultProps = {
name: '',
age: '',
email: ''
}

export default User;