import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';
import { Link as RouterLink } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ButtonGroup from '@material-ui/core/Button';
import axios from 'axios';

const token = sessionStorage.getItem("token")

class Taco extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taco: {}
        };
    }

    componentDidMount() {
        this.setState({taco: this.props.location.state});
        console.log(this.props.location.state, "taco");
    }

    // fetchTaco = id => {
    //     axios
    //     .get(`${process.env.REACT_APP_BACKEND_URL}/tacolog/${id}`, {headers: {token: token}})
    //     .then(res => {
    //         this.setState(() => ({ taco: res.data }));
    //     })
    //     .catch(error => console.log(error))
    // }

    render() {
        console.log(this.state.taco, 'tacoState')

        if (!this.state.taco) {
            return <div>Loading Taco information...</div>

        }
        const { restaurantName, date, totalTacos, nameOfTaco, tortilla, protein, cheese, salsa, topping, rating, notes, tacoLogPhoto, t_rating, a_rating, c_rating, o_rating } = this.state.taco;


        return (
            <div>
                <div className="taco-card">
                    <h2>{restaurantName}</h2>
                    <div className="date">
                        <h2>{date}</h2>
                    </div>
                    <div className="total-tacos">
                        Total Tacos: <strong>{totalTacos}</strong>
                    </div>
                    <img src={tacoLogPhoto} alt={nameOfTaco}/>
                    <div className="taco-name">
                        Taco Name: <strong>{nameOfTaco}</strong>
                    </div>
                    <div className="description">
                        <h2>Description:
                        {this.state.tortilla.map(tortilla => {return {tortilla}})}
                        {/* {protein.map(protein => {return {protein}})}
                        {topping.map(topping => {return {topping}})}
                        {cheese.map(cheese => {return {cheese}})}
                        {salsa.map(salsa => {return {salsa}})} */}
                        </h2>
                    </div>
                    <div className="rating">
                    <h1>"Overall Rating"</h1>
                     <Rating
                    name= 'rating'
                    value={rating}
                    />

                    <h3>"T" Rating: {t_rating}</h3>
                    <h4>"<span>T</span>he Fundamentals"</h4>
                    <Rating
                    name='t_rating'
                    value={t_rating}
                    />
                    <h3>"A" Rating: {a_rating}</h3>
                    <h4>"<span>A</span>lways Different, Positive, Special"</h4>

                     <Rating
                    name='a_rating'
                    value={a_rating}
                    />
                    <h3>"C" Rating: {c_rating}</h3>
                    <h4>"<span>C</span>onsistent Commitment"</h4>

                     <Rating
                    name='c_rating'
                    value={c_rating}
                    />
                    <h3>"O" Rating: {o_rating}</h3>
                    <h4>"<span>O</span>h, Wow!"</h4>
                     <Rating
                    name='o_rating'
                    value={o_rating}
                    />
                    </div>
                    <div className="comments">
                        <h2>{notes}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Taco;