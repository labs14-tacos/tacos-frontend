import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';
import { Link as RouterLink } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ButtonGroup from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const token = sessionStorage.getItem("token")

class Taco extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taco: {},
            taco_id: null,
            taco_ingredients: {protein: [], topping: [], salsa: [], cheese: [], tortilla: []}, 
            tacoCreatorId: '', 
            tacoFanFirstName: 'Taco',
            tacoFanLastName: 'Taco'
        };
    };

    componentDidMount() {
        const ing = this.props.location.state.ingredients
        const ingredientObject = JSON.parse(ing);
        this.setState({taco_id: this.props.location.state.id, taco_ingredients: ingredientObject, tacoCreatorId: this.props.location.state.firebaseId});
        this.fetchTaco(this.props.location.state.id); 
        this.getTacoFan();
        console.log(ingredientObject, "ingredients");
    } 


    getTacoFan() {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/tacofan_info/${this.state.tacoCreatorId}`, {headers: {token: token}}).then(res => { console.log("it worked!!!!");
        this.setState({
           tacoFanFirstName: res.data.firstName, 
           tacoFanLastName: res.data.lastName
       })}).catch(err => console.log("this is an error in the getTacoFan function", err))
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
        let id = this.props.location.state.id;
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/tacolog/${id}`, )
        .then(response => {
            this.props.history.push('/');
        }) .catch(err => console.log(err));
    }

    render() {
        console.log(this.state.taco, 'tacoState')

        if (!this.state.taco) {
            return <div>Loading Taco information...</div>

        }
        const { restaurantName, date, numberOfTacos, nameOfTaco, ingredients, protein, cheese, salsa, topping, rating, notes, tacoLogPhoto, t_rating, a_rating, c_rating, o_rating } = this.state.taco;

        console.log(this.state)

        return (
            <div>
                <div className="taco-card">
                    <Button component={RouterLink} to={{pathname:"/tacofan", state: { tacoCreatorId: this.state.tacoCreatorId }}}>{this.state.tacoFanFirstName} {this.state.tacoFanLastName}</Button>
                    <h2>{restaurantName}</h2>
                    <div className="date">
                        <h2>{date}</h2>
                    </div>
                    <div className="total-tacos">
                        Total Tacos: <strong>{numberOfTacos}</strong>
                    </div>
                    <img src={tacoLogPhoto} alt={nameOfTaco}/>
                    <div className="taco-name">
                        Taco Name: <strong>{nameOfTaco}</strong>
                    </div>
                    <div className="description">
                        <h2>Description:</h2>
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
                    <div>
                    <ButtonGroup>
                    <Button onClick={this.onDelete.bind(this)} id="primaryBtn" component={RouterLink} to="/explore-tacos" color="primary" variant="contained"> 
                        Delete
                    </Button>
                    </ButtonGroup>
                    </div>
                </div>
            </div>
        )
    }
}

export default Taco;