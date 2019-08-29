import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Container } from '@material-ui/core';
import DatePicker from 'react-date-picker';
import axios from 'axios';

const token = sessionStorage.getItem("token")

class Taco extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taco: {},
            taco_id: null,
            taco_ingredients: { protein: [], topping: [], salsa: [], cheese: [], tortilla: [], extraIng: [] },
            tacoCreatorId: '',
            tacoFanFirstName: '',
            tacoFanLastName: ''
        };
    };

    componentDidMount() {
        const ing = this.props.location.state.ingredients
        const ingredientObject = JSON.parse(ing);
        this.setState({ taco_id: this.props.location.state.id, taco_ingredients: ingredientObject, tacoCreatorId: this.props.location.state.firebaseId });
        this.fetchTaco(this.props.location.state.id);
        this.getTacoFan();
        console.log(ingredientObject, "ingredients");
    }

    componentDidUpdate() {
        this.getTacoFan();
    }

    getTacoFan() {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/tacofan_info/${this.state.tacoCreatorId}`, { headers: { token: token } }).then(res => {
            console.log("it worked!!!!");
            this.setState({
                tacoFanFirstName: res.data.firstName,
                tacoFanLastName: res.data.lastName
            })
        }).catch(err => console.log("this is an error in the getTacoFan function", err))
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

    render() {
        if (!this.state.taco) {
            return <div>Loading Taco information...</div>
        }
        const { restaurantName, date, numberOfTacos, nameOfTaco, rating, notes, tacoLogPhoto, t_rating, a_rating, c_rating, o_rating } = this.state.taco;
        return (
            <Container>
                <Container className="taco-card">
                    <Button component={RouterLink} to={{ pathname: "/tacofan", state: { tacoCreatorId: this.state.tacoCreatorId } }}>{
                        this.state.tacoFanFirstName === null && this.state.tacoFanLastName === null ? `See Taco Fan Profile` : `See ${this.state.tacoFanFirstName} ${this.state.tacoFanLastName} Profile`
                    }</Button>
                    <h2>{restaurantName}</h2>
                    <Container className="date">
                        <DatePicker
                            disabled
                            value={date}
                        />
                    </Container>
                    <Container className="total-tacos">
                        Total Tacos: <strong>{numberOfTacos}</strong>
                    </Container>
                    <img src={tacoLogPhoto} alt={nameOfTaco} />
                    <Container className="taco-name">
                        Taco Name: <strong>{nameOfTaco}</strong>
                    </Container>
                    <Container className="description">
                        <h2>Description:</h2>
                        {this.state.taco_ingredients.tortilla.map(function (tortilla) { return <p>{tortilla}</p> })}
                        {this.state.taco_ingredients.protein.map(function (protein) { return <p>{protein}</p> })}
                        {this.state.taco_ingredients.topping.map(function (topping) { return <p>{topping}</p> })}
                        {this.state.taco_ingredients.cheese.map(function (cheese) { return <p>{cheese}</p> })}
                        {this.state.taco_ingredients.salsa.map(function (salsa) { return <p>{salsa}</p> })}
                        {this.state.taco_ingredients.extraIng.map(function (extraIng) { return <p>{extraIng}</p> })}
                    </Container>
                    <Container className="ratings">
                        <h2>Overall Rating: {rating}</h2>
                        <Rating
                            name='rating'
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
                    </Container>
                    <Container className="comments">
                        <h2>{notes}</h2>
                    </Container>
                </Container>
            </Container>
        )
    }
}

export default Taco;
