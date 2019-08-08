import React from 'react'

 const TacoUser = ({user}) => {
    return (
        <div style={{display: "flex", margin: "16px"}}>
            <div style={{paddingRight: "10px"}}>
               <img src={user.photo} alt="" style={{borderRadius: "50%"}}/>
            </div>
            <div style={{textAlign: "left"}}>
                <p style={{fontWeight: "bold"}}>{user.firstName} {user.lastName}</p>
                <p>Location: {user.restaurantName}</p>
                <p><span style={{fontWeight: "bold", color: "black", fontSize: "16px"}}>Taco:</span> {user.tacoName}</p>
                <p style={{border: "1px solid gray", padding: "10px"}}>{user.notes}</p>
            </div>
        </div>
    )
}

export default TacoUser