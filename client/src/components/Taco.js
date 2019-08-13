import React from 'react';

const Taco = props => {
    return (
        <div className="taco">
            <h2>{props.restaurantName}</h2>
            <h2>{props.date}<h2>
            <h2>{props.totalTacos}</h2>
            <h1>{props.userPhoto}</h1>
            <h2>{props.tacoName}</h2>
            <h2>{props.description}<h2>
            <h2>{props.rating}</h2>
            <h2>{props.comments}</h2>
        </div>
    );
};

Taco.defaultProps = {
    restaurantName: "",
    date: "",
    totalTacos: "",
    userPhoto: "",
    tacoName: "",
    description: "",
    rating: "",
    comments: ""
};

export default Taco;