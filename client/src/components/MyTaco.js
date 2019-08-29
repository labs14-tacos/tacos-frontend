import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';
import { Button, Container } from '@material-ui/core';
import axios from 'axios';
import DatePicker from 'react-date-picker';
import { Link as RouterLink } from 'react-router-dom';



const token = sessionStorage.getItem("token")

class MyTaco extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taco: {},
            taco_ingredients: { protein: [], topping: [], salsa: [], cheese: [], tortilla: [], extraIng: [] }
        };
    };

    componentDidMount() {
        this.fetchTaco(this.props.location.state.id); // gets taco by taco id passed in as props
    }


    fetchTaco = id => {
        axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/tacolog/${id}`, { headers: { token: token } })
            .then(res => {
                this.setState({ taco: res.data, taco_ingredients: res.data.ingredients });
                console.log(this.state.taco, 'fetchTaco')
                console.log(this.state.taco_ingredients, 'taco ingredients in fetch taco')

            })
            .catch(error => console.log(error, "fetchTacoError"))
    }

    onDelete() {
        // let id = this.state.taco_id;
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/tacolog/${this.props.location.state.id}`, { headers: { token: token } })
            .then(response => {
                console.log(response)
                // this.props.history.push('/my-tacos');
            }).catch(err => console.log(err));
    }


    render() {

        if (!this.state.taco) {
            return <div>Loading Taco information...</div>

        }
        const { restaurantName, date, numberOfTacos, nameOfTaco, rating, notes, tacoLogPhoto, t_rating, a_rating, c_rating, o_rating } = this.state.taco;


        return (
            <Container className="tacoContainer">
                <Container className="taco-card">
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
                        {this.state.taco_ingredients.tortilla.map(function (tortilla, index) { return <p key={index} >{tortilla}</p> })}
                        {this.state.taco_ingredients.protein.map(function (protein, index) { return <p key={index} >{protein}</p> })}
                        {this.state.taco_ingredients.topping.map(function (topping, index) { return <p key={index}>{topping}</p> })}
                        {this.state.taco_ingredients.cheese.map(function (cheese, index) { return <p key={index}>{cheese}</p> })}
                        {this.state.taco_ingredients.salsa.map(function (salsa, index) { return <p key={index}>{salsa}</p> })}
                        {this.state.taco_ingredients.extraIng.map(function (extraIng, index) { return <p key={index}>{extraIng}</p> })}


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

                    <Button component={RouterLink} className="btn" to={{ pathname: "/edit-taco", state: { taco: this.state.taco, taco_ingredients: this.state.taco_ingredients } }}> Edit</Button>
                    <Button onClick={() => this.onDelete()} id="primaryBtn" component={RouterLink} to="/my-tacos" color="primary" variant="contained">
                        Delete
                    </Button>
                </Container>
            </Container>
        )
    }
}

export default MyTaco;