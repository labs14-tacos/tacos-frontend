import React, { Component } from 'react'
import tacoData from './tacoData'
import MyProfileTacos from './MyProfileTacos'

export default class MyProfile extends Component {

    state = {
        tacos: []
    }

    componentDidMount(){
        this.setState({
            tacos: tacoData
        })
    }
    render() {
        return (
            <div>
                {this.state.tacos.map(taco => {
                    return (
                        <div >
                           <MyProfileTacos taco={taco}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
