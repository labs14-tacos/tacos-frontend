import React from 'react'; 
import UserAvatar from './UserAvatar';

// This can be used to display the person who is logged in's own profile information
const UserProfile = props => {

    return (
        <div>
            <div className = "user-profile">
                <h1>Profile</h1>
                <UserAvatar />
                <h3>{props.name}</h3>
                <h3>{props.age} years old</h3>
            </div>
        </div>
    )
}

UserProfile.defaultProps = {

}

export default UserProfile;