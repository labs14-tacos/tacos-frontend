import React, { Component } from 'react'
import data from './userData'
import TacoLogNav from './TacoLogNav'
import TacoUser from './TacoUser'
import './Taco.css'
export default class TacoLogHomePage extends Component {

    state = {
        userData: []
    }

    componentDidMount(){
        this.setState({
            userData: data
        })
    }

    render() {
        return (
            <div style={{margin: "0 auto", width: "1100px"}}>
            <div className="TacoLog__main">
                 <TacoLogNav />
                <div>
                <input style={{width: "300px"}}/>
                <div>
                 <h2>Special Taco Experiences</h2>
                    <button>Global</button>
                    <button>Mine</button>
                    <button>Friends</button>
                </div>
                <div style={{display: "flex", justifyContent: "space-around"}}>
                {this.state.userData.map(user => {
                    return (
                       
                           <TacoUser user={user}/>
                      
                    )
                })}
                </div>
                </div>
            </div>
        </div>
        )
    }
}







