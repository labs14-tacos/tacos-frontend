import React from 'react';
import {Link as RouterLink } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const token = sessionStorage.getItem("token")


class OthersTacos extends React.Component {
    state = {
        tacofeed: []
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/tacolog`, {headers: {token:token}}).then(
            res => {
                const reverseTaco = res.data.reverse()
                this.setState({tacofeed: reverseTaco})
            }
        ).catch(error => console.log(error))
    }

    render() {
        console.log(this.state.tacofeed, "TACOFEED")
        return (
            <div>
            <ButtonGroup id="btnGrp" 
              aria-label="full-width contained primary button group">
                <Button component={RouterLink} to="/my-tacos" color="primary" variant="outlined">
                    My Tacos
                </Button>
                <Button id="primaryBtn" component={RouterLink} to="/explore-tacos" color="primary" variant="contained"> 
                    Other People's Tacos
                </Button>
            </ButtonGroup>
            <GridList>
            {this.state.tacofeed.map(taco => {const ingredients = JSON.stringify(taco.ingredients); console.log(taco);
             return <GridListTile component={RouterLink} to={{pathname:"/taco", state: {restaurantName: taco.restaurantName, date: taco.date, totalTacos: taco.totalTacos, nameOfTaco: taco.nameOfTaco,
                ingredients: ingredients,
                firebaseId: taco.firebaseId,
                id: taco.id,
                rating: taco.rating, notes: taco.notes, tacoLogPhoto: taco.tacoLogPhoto, t_rating: taco.t_rating, a_rating: taco.a_rating, c_rating: taco.c_rating, o_rating: taco.o_rating}}}
            key={taco.id}><img src={taco.tacoLogPhoto} alt={taco.nameOfTaco}/></GridListTile>})}
            </GridList>
            </div>
        )
    }
}

export default OthersTacos;