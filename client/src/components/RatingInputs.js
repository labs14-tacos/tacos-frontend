import React, { Component } from 'react'



export default class RatingInputs extends Component {
   constructor() {
       super()
       this.handleRating = this.handleRating.bind(this)
   }


   handleRating() {
       let rating = Number(this.refs.rating.value)
       
       this.props.onStarRatingUpdate({
           rating,
       })
   }



    render() {
        let { rating } = this.props

        return (
            <div className="rating-inputs">
                <label htmlFor="rating">Rating</label>
                <input 
                    type='number' 
                    name='rating' 
                    ref='rating'
                    value={rating}
                    onChange={this.handleRating}
                />
            </div>
        )
    }
}