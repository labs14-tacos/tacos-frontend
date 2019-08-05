import React, { Component } from 'react'


class NameOfTaco extends Component {


    render() {
        return (
            <div>
                <h2>Name:</h2>
                <input 
                  type='text'
                  name='name'
                />
            </div>
        )
    }
}


export default NameOfTaco;