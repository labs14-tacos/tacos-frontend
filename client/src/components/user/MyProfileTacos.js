import React from 'react'


const MyProfileTacos = ({taco}) => {
    return (
        <div key={taco.id} style={{
                     border: "1px solid gray",
                     width: "270px",
                     margin: "16px"
                     }}>
            <p>Featured Taco: {taco.typeOfTaco}</p> 
            <img src={taco.tacoLogPhoto} alt={taco.typeOfTaco}/>
            <p>Restaurant: {taco.restaurantName}</p>

            <address>
                    <p>{taco.address}</p>
            </address>
        </div>
    )
}

export default MyProfileTacos