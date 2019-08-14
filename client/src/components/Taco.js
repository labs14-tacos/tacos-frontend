import React, { Component } from 'react';
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
        this.setState({taco: this.props.taco});
        console.log(this.props.taco, 'tacos');
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
        if (!this.state.taco) {
            return <div>Loading Taco information...</div>
        }

        const { restaurant, date, totalTacos, tacoName, description, rating, comments } = this.state.taco;
        return (
            <div>
                <div className="taco-card">
                    <h2>{restaurant}</h2>
                    <div className="date">
                        <h2>{date}</h2>
                    </div>
                    <div className="total-tacos">
                        Total Tacos: <strong>{totalTacos}</strong>
                    </div>
                    <div className="taco-name">
                        Taco Name: <strong>{tacoName}</strong>
                    </div>
                    <div className="description">
                        <h2>{description}</h2>
                    </div>
                    <div className="rating">
                        <h2>{rating}</h2>
                    </div>
                    <div className="comments">
                        <h2>{comments}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Taco;