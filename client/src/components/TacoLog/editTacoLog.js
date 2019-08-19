import React from 'react';
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';
import axios from 'axios';

// we'll need to flip between this and the actual tacolog view or we won't have a way to edit it because we need the taco log id. 
const token = sessionStorage.getItem("token")


class EditTacoLog extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        taco: {}
    };
}


async componentDidMount() {
 const tacoInfo = this.props.location.state; 
    await this.setState({
        nameOfTaco: tacoInfo.taco.nameOfTaco,
        restaurantName: tacoInfo.taco.restaurantName,
        numberOfTacos: tacoInfo.taco.numberOfTacos,
        rating: tacoInfo.taco.rating,
        t_rating: tacoInfo.taco.t_rating,
        a_rating: tacoInfo.taco.a_rating,
        c_rating: tacoInfo.taco.c_rating,
        o_rating: tacoInfo.taco.o_rating, 
        notes: tacoInfo.taco.notes,
        id: tacoInfo.taco.id, 
        firebaseId: tacoInfo.taco.firebaseId
         });
}

handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  } 

updateLog = (event, id) => {
    event.preventDefault();
    const tacoLog = {
        ...this.state
    }; 
    axios.put(`${process.env.REACT_APP_BACKEND_URL}/tacolog/${id}`, {headers: {token: token}}, tacoLog).then(res => console.log(res)).catch(err => console.log(err));
    this.props.history.push('/');
};

render() {
    return(
        <>
            <div>
                <h2 className="form-heading">Update Taco Log</h2>
                <form className="edit-form">
                <TextField
            className='textField-num'
            type='number'
            name='numberOfTacos'
            value={this.state.numberOfTacos}
            onChange={this.handleChange}
            label="How many tacos?"
          />
          <TextField
            className='textField'
            type='text'
            name='nameOfTaco'
            value={this.state.nameOfTaco}
            onChange={this.handleChange}
            label='Taco Name'
          />
          <TextField
            className='textField'
            type='text'
            name='restaurantName'
            value={this.state.restaurantName}
            onChange={this.handleChange}
            label='Restaurant'
          />
          <TextField
          required
            className='textField'
            type='text'
            name='notes'
            value={this.state.notes}
            onChange={this.handleChange}
            label="Wanna taco 'bout it?"
          />
         
          <div className="ratings">
            <h2>Overall Rating: {this.state.rating}</h2>
            <Rating
              className='rating'
              name='rating'
              value={this.state.rating}
              onChange={this.handleChange}
            />
            <h3>"T" Rating: {this.state.t_rating}</h3>
            <h4>"<span>T</span>he Fundamentals"</h4>
            <Rating
              className='rating'
              name='t_rating'
              value={this.state.t_rating}
              onChange={this.handleChange}
            />
            <h3>"A" Rating: {this.state.a_rating}</h3>
            <h4>"<span>A</span>lways Different, Positive, Special"</h4>
            <Rating
              className='rating'
              name='a_rating'
              value={this.state.a_rating}
              onChange={this.handleChange}
            />
            <h3>"C" Rating: {this.state.c_rating}</h3>
            <h4>"<span>C</span>onsistent Commitment"</h4>
            <Rating
              className='rating'
              name='c_rating'
              value={this.state.c_rating}
              onChange={this.handleChange}
            />
            <h3>"O" Rating: {this.state.o_rating}</h3>
            <h4>"<span>O</span>h, Wow!"</h4>
            <Rating
              className='rating'
              name='o_rating'
              value={this.state.o_rating}
              onChange={this.handleChange}
            />
          </div>
          <button className="saveButton" type='submit' onClick={() => this.updateLog(this.state.id)}>Save Taco Log</button>
                </form>
            </div>
        </>
    );
}
}

export default EditTacoLog;
