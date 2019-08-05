import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StarRatingComponent from 'react-star-rating-component';


export default class StarRating extends Component {
  constructor() {
    super();
 
    this.state = {
      rating: 1
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
 
  render() {
    const { rating } = this.state;
    
    return (                
      <div>
        <h2>Taco review: {rating}</h2>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          starColor = "#a1dd70"
          value={rating}
        //   renderStarIcon={() => <span></span>}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}
 
