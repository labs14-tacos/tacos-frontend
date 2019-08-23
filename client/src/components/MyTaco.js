import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ButtonGroup from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';



const token = sessionStorage.getItem("token")

class MyTaco extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taco: {},
            taco_id: null,
            taco_ingredients: { protein: [], topping: [], salsa: [], cheese: [], tortilla: [], extraIng: [] }
        };
    };

    componentDidMount() {
        const tacoId = this.props.location.state.id
        const ing = this.props.location.state.ingredients
        const ingredientObject = JSON.parse(ing);
        this.setState({ taco_id: tacoId, taco_ingredients: ingredientObject });
        this.fetchTaco(this.props.location.state.id);
        console.log(this.props.location.state.id, 'taco');
    }


    fetchTaco = id => {
        axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/tacolog/${id}`, { headers: { token: token } })
            .then(res => {
                this.setState({ taco: res.data });
                console.log(this.state.taco, 'fetchTaco')

            })
            .catch(error => console.log(error, "fetchTacoError"))
    }

    onDelete() {
        // let id = this.state.taco_id;
        console.log(this.state.taco.id)
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/tacolog/${this.props.location.state.id}`, { headers: { token: token } })
            .then(response => {
                console.log('delete working', response)
                // this.props.history.push('/my-tacos');
            }).catch(err => console.log(err));
    }


    render() {
        console.log(this.state.taco, 'tacoState')

        if (!this.state.taco) {
            return <div>Loading Taco information...</div>

        }
        const { restaurantName, date, numberOfTacos, nameOfTaco, ingredients, protein, cheese, salsa, topping, rating, notes, tacoLogPhoto, t_rating, a_rating, c_rating, o_rating } = this.state.taco;

        // const tacoDate = new Intl.DateTimeFormat('en-GB', { 
        //     year: 'numeric', 
        //     month: 'long', 
        //     day: '2-digit' 
        // }).format(this.state.taco.date)

        console.log(this.state)

        return (
            <div>
                <div className="taco-card">
                    <h2>{restaurantName}</h2>
                    <div className="date">
                        <h2>{date}</h2>
                    </div>
                    <div className="total-tacos">
                        Total Tacos: <strong>{numberOfTacos}</strong>
                    </div>
                    <img src={tacoLogPhoto} alt={nameOfTaco} />
                    <div className="taco-name">
                        Taco Name: <strong>{nameOfTaco}</strong>
                    </div>
                    <div className="description">
                        <h2>Description:</h2>
                        {this.state.taco_ingredients.tortilla.map(function (tortilla) { return <p key={tortilla} >{tortilla}</p> })}
                        {this.state.taco_ingredients.protein.map(function (protein) { return <p key={protein} >{protein}</p> })}
                        {this.state.taco_ingredients.topping.map(function (topping) { return <p key={topping}>{topping}</p> })}
                        {this.state.taco_ingredients.cheese.map(function (cheese) { return <p key={cheese}>{cheese}</p> })}
                        {this.state.taco_ingredients.salsa.map(function (salsa) { return <p key={salsa}>{salsa}</p> })}
                        {this.state.taco_ingredients.extraIng.map(function (extraIng, index) { return <p key={index}>{extraIng}</p> })}


                    </div>
                    <div className="ratings">
                    <h1>"Overall Rating"</h1>
                     <Rating
                    name= 'rating'
                    disabled
                    value={rating}
                    />

                    <h3>"T" Rating: {t_rating}</h3>
                    <h4>"<span>T</span>he Fundamentals"</h4>
                    <Rating
                    name='t_rating'
                    disabled
                    value={t_rating}
                    />
                    <h3>"A" Rating: {a_rating}</h3>
                    <h4>"<span>A</span>lways Different, Positive, Special"</h4>

                     <Rating
                    name='a_rating'
                    disabled
                    value={a_rating}
                    />
                    <h3>"C" Rating: {c_rating}</h3>
                    <h4>"<span>C</span>onsistent Commitment"</h4>

                     <Rating
                    name='c_rating'
                    disabled
                    value={c_rating}
                    />
                    <h3>"O" Rating: {o_rating}</h3>
                    <h4>"<span>O</span>h, Wow!"</h4>
                     <Rating
                    name='o_rating'
                    disabled
                    value={o_rating}
                    />
                    </div>
                    <div className="comments">
                        <h2>{notes}</h2>
                    </div>
                  
                    <Button component={RouterLink} className="btn" to={{pathname:"/edit-taco", state: {taco: this.state.taco, taco_ingredients: this.state.taco_ingredients } }}> Edit</Button>
                    <Button onClick={() => this.onDelete()} id="primaryBtn" component={RouterLink} to="/my-tacos" color="primary" variant="contained">
                            Delete
                    </Button>
                  
                </div>
            </div>
        )
    }
}

export default MyTaco;