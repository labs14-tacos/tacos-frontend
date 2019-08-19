import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';
import { Link as RouterLink } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ButtonGroup from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        const tacoId = this.props.location.state.id
        const ing = this.props.location.state.ingredients
        const ingredientObject = JSON.parse(ing);
        this.setState({taco_id: tacoId, taco_ingredients: ingredientObject});
        this.fetchTaco(this.props.location.state.id);
        console.log(this.props.location.state.id, 'taco');
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

    onDelete() {
        // let id = this.state.taco_id;
        console.log(this.state.taco.id)
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/tacolog/${this.props.location.state.id}`, {headers: {token: token}})
        .then(response => {
            console.log('delete working', response)
            // this.props.history.push('/my-tacos');
        }) .catch(err => console.log(err));
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
                    <div className="ratings">
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
                    <Link className="btn" to={`/my-tacos/edit/${this.props.location.state.id}`}> Edit</Link>
                    <ButtonGroup>
                    <Button onClick={() =>this.onDelete()} id="primaryBtn" component={RouterLink} to="/my-tacos" color="primary" variant="contained"> 
                        Delete
                    </Button>
                    </ButtonGroup>
                </div>
            </div>
        )
    }
}

export default MyTaco;