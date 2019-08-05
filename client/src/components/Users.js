import React, { Component } from 'react';
import User from './User';


class Users extends Component {
    render() {
        return (
            <div className='Users'>
                <h1>TOP REVIEWERS</h1>
                <ul className='profile-card'>
                    {this.props.users.map(user => {
                        return (
                            <User
                                name={user.name}
                                id={user.id}
                                age={user.age}
                                key={user.key}
                                email={user.email}
                            />
                        )
                    })}
                </ul>
            </div>
        )
    }
}


User.defaultProps = {
    users: [],
};



export default Users;