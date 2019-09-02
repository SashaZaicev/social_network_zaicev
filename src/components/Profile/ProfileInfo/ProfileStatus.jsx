import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
<<<<<<< HEAD
        status: this.props.status,
=======
        // status: this.props.status,
>>>>>>> e91ac68bd2d2a53d9e6e6c5aed414e5f5316a5d5
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
            status: this.props.status,
        })
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
this.setState({status: e.currentTarget.value})
    };
<<<<<<< HEAD
componentDidUpdate(prevProps, prevState) {
    // debugger
    if (prevProps.status !== this.props.status ) {
        this.setState({
            status: this.props.status
        })
    }
=======
componentDidMount() {
>>>>>>> e91ac68bd2d2a53d9e6e6c5aed414e5f5316a5d5
    console.log('component render')
}

    render() {
    console.log('render');
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || '===='}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                </div>
                }
            </div>
        )
    }


};

export default ProfileStatus;