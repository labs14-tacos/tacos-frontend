import React from 'React'; 


// I am naming this component Friends so we can repurpose it to later be the display of each friend a user is friends with. For now (7-11) this is just to pull in our seed data to prove our FE and BE are communicating. -- MJ
class Friends extends React.Component {
state = {
    
}


render() {
    return (
        <div>
        {this.state.friends.map(friend => {<div> </div> })}
        </div>
    )
}
}

export default Friends;
