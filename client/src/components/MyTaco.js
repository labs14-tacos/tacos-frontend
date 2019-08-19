import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';
import { Link as RouterLink } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ButtonGroup from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const token = sessionStorage.getItem("token")

class MyTaco extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taco: {},
            taco_id: null,
            taco_ingredients: {protein: [], topping: [], salsa: [], cheese: [], tortilla: []}
        };
    };

    componentDidMount() {
        const ing = this.props.location.state.ingredients
        const ingredientObject = JSON.parse(ing);
        this.setState({taco_id: this.props.location.state.id, taco_ingredients: ingredientObject});
        this.fetchTaco(this.props.location.state.id);
        console.log(ingredientObject, "ingredients");
    }

    fetchTaco = id => {
        axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/tacolog/${id}`, {headers: {token: token}})
        .then(res => {
            this.setState({ taco: res.data });
            console.log(this.state.taco, 'fetchTaco')

        })
        .catch(error => console.log(error, "fetchTacoError"))
    }

    
    render() {
        console.log(this.state.taco, 'tacoState')

        if (!this.state.taco) {
            return <div>Loading Taco information...</div>

        }
        const { restaurantName, date, totalTacos, nameOfTaco, ingredients, protein, cheese, salsa, topping, rating, notes, tacoLogPhoto, t_rating, a_rating, c_rating, o_rating } = this.state.taco;

        console.log(this.state)

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
                        <h2>Description:</h2>
                        <p>{this.state.taco_ingredients.protein[0]}</p>
                          {this.state.taco_ingredients.tortilla.map(function(tortilla) {return <p>{tortilla}</p>})} 
        {this.state.taco_ingredients.protein.map(function(protein)  {return <p>{protein}</p>})}
                         {this.state.taco_ingredients.topping.map(function(topping) {return <p>{topping}</p>})}
                        {this.state.taco_ingredients.cheese.map(function(cheese) {return <p>{cheese}</p>})}
                        {this.state.taco_ingredients.salsa.map(function(salsa) {return <p>{salsa}</p>})} 
                        
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

                    <GridList>
            {this.state.tacofeed.map(taco => {const ingredients = JSON.stringify(taco.ingredients); console.log(taco);
             return <GridListTile component={RouterLink} to={{pathname:"/my-tacos", state: {restaurantName: taco.restaurantName, date: taco.date, totalTacos: taco.totalTacos, nameOfTaco: taco.nameOfTaco,
                ingredients: ingredients,

                id: taco.id,
                rating: taco.rating, notes: taco.notes, tacoLogPhoto: taco.tacoLogPhoto, t_rating: taco.t_rating, a_rating: taco.a_rating, c_rating: taco.c_rating, o_rating: taco.o_rating}}}
            key={taco.id}><img src={taco.tacoLogPhoto} alt={taco.nameOfTaco}/></GridListTile>})}
            </GridList>
                </div>
            </div>
        )
    }
}

export default MyTaco;