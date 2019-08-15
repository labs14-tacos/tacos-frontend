import React from 'react';
import {Link as RouterLink } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import './TacoViews.css';

const token = sessionStorage.getItem("token")


const token = sessionStorage.getItem("token")


class MyTacoFeed extends React.Component {
    state = {
        tacofeed: []
    }

    componentDidMount() {
<<<<<<< HEAD
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/mytacolog`, {headers: {token: token}}).then(
=======
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/mytacolog`, {headers: {token: token}}
        ).then(
>>>>>>> 89c3372b7629b1c4f80a3d78bf373e50cec8d32c
            res => {
                const reverseTaco = res.data.reverse()
                this.setState({tacofeed: reverseTaco})
            }
        ).catch(error => console.log(error))
    }

    render() {
        console.log(this.state.tacofeed, "tacofeed");
        return (
            <div>
            <ButtonGroup  
              aria-label="full-width contained primary button group">
                <Button component={RouterLink} to="/my-tacos" color="primary" variant="contained" >
                    My Tacos
                </Button>
                <Button component={RouterLink} to="/explore-tacos" color="primary" variant="outlined"> 
                    Other People's Tacos
                </Button>
            </ButtonGroup>
            <GridList>
            {this.state.tacofeed.map(taco => <GridListTile key={taco.id}><img src={taco.tacoLogPhoto} alt={taco.nameOfTaco}/></GridListTile>)}
            </GridList>
            </div>
        )
    }
}

export default MyTacoFeed;