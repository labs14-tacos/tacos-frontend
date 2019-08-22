import React from 'react';
import TextField from '@material-ui/core/TextField';
import PhotoUpload from '../../components/cloudinary/TacoImage'
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import {Link as RouterLink} from 'react-router-dom';
import axios from 'axios';

// we'll need to flip between this and the actual tacolog view or we won't have a way to edit it because we need the taco log id. 
const token = sessionStorage.getItem("token")


class EditTacoLog extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
  
        tacoLogPhoto: this.props.location.state.taco.tacoLogPhoto,
        nameOfTaco: this.props.location.state.taco.nameOfTaco,
        restaurantName: this.props.location.state.taco.restaurantName,
        numberOfTacos: this.props.location.state.taco.numberOfTacos,
        rating: this.props.location.state.taco.rating,
        t_rating: this.props.location.state.taco.t_rating,
        a_rating: this.props.location.state.taco.a_rating,
        c_rating: this.props.location.state.taco.c_rating,
        o_rating: this.props.location.state.taco.o_rating, 
        notes: this.props.location.state.taco.notes,
        id: this.props.location.state.taco.id, 
        firebaseId: this.props.location.state.taco.firebaseId
        }
    
}


async componentDidMount() {
//  const tacoInfo = this.props.location.state; 
//  console.log('component did mout', this.props.location.state)
//     await this.setState({
//         tacoLogPhoto: tacoInfo.taco.tacoLogPhoto,
//         nameOfTaco: tacoInfo.taco.nameOfTaco,
//         restaurantName: tacoInfo.taco.restaurantName,
//         numberOfTacos: tacoInfo.taco.numberOfTacos,
//         rating: tacoInfo.taco.rating,
//         t_rating: tacoInfo.taco.t_rating,
//         a_rating: tacoInfo.taco.a_rating,
//         c_rating: tacoInfo.taco.c_rating,
//         o_rating: tacoInfo.taco.o_rating, 
//         notes: tacoInfo.taco.notes,
//         id: tacoInfo.taco.id, 
//         firebaseId: tacoInfo.taco.firebaseId
//          });
}

handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log('handlechange', event.target.value)
  } 

updateLog = () => {
    const tacoLog = {
        tacoLogPhoto: this.state.tacoLogPhoto,
        nameOfTaco: this.state.nameOfTaco,
        restaurantName: this.state.restaurantName,
        numberOfTacos: this.state.numberOfTacos,
        rating: this.state.rating,
        t_rating: this.state.t_rating,
        a_rating: this.state.a_rating,
        c_rating: this.state.c_rating,
        o_rating: this.state.o_rating, 
        notes: this.state.notes
    }; 
    axios.put(`${process.env.REACT_APP_BACKEND_URL}/tacolog/${this.state.id}`, tacoLog, 
       {headers: {token: token}})
       .then(res => {
           this.props.history.push('/my-tacos')
        })
       .catch(err => console.log({err}));
};

setTacoPhoto = tacoLogPhoto => {
  this.setState({tacoLogPhoto})
}

wipePhoto = () => {
  this.setState({
      tacoLogPhoto: '',

  })
}

render() {
  console.log('State when component mounts',this.state)
    return(
        <>
            <div>
                <h2 className="form-heading">Update Taco Log</h2>
                <form className="edit-form">
               
                  {
                    this.state.tacoLogPhoto ?
                    <>
                    <img className="avatar-image" src={this.state.tacoLogPhoto} alt=""/>
                    <button onClick={() => this.wipePhoto()}>Change my photo</button>
                    </>
                    :
                    <PhotoUpload id="photo-container" onClick={() => this.wipePhoto()} 
                    setTacoLogPhoto={this.setTacoPhoto}

                     />
                }
                 


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
          <Button className="saveButton" type='submit' component={RouterLink} to="/my-tacos" onClick={this.updateLog}>Save Taco Log</Button>
                </form>
            </div>
        </>
    );
}
}

export default EditTacoLog;
