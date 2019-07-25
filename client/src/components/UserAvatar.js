import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Avatar from 'react-avatar-edit';

class UserAvatar extends Component {

    constructor(props) {
        super(props)
        const src = ''
        this.state = {
            preview: null,
            src
        }
        this.onCrop = this.onCrop.bind(this)
        this.Close = this.Close.bind(this)        
    }

    onClone() {
        this.setState({ Preview: null})
    }

    onCrop(preview) {
        this.setState({ preview })
    }

    render () {
        return (
            <div>
                <Avatar 
                    width={390}
                    height={295}
                    onCrop={this.onCrop}
                    onClose={this.onClone}
                    src={this.state.src}
                />
                <img src={this.state.preview} atl="preview" />>
            </div>
        )
    }
}


export default UserAvatar;