import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import dinoImage from '../imgs/dino.png'

class UploadSuccess extends Component {
    state = {  }

    componentDidMount() {
        setTimeout(()=>{
            this.props.updateProgBar();
            this.props.stateChanger({uploadStep: 1});
            <Navigate to="/upload" replace={true}/>
        }, 1500)
    }

    render() { 
        return (<div className='m-2 d-flex flex-column justify-content-center bd-highlight border-3 m-5'>
            <h2 className='mx-auto'>Upload Success!</h2>
            <br/>
            <img src={dinoImage} className="w-25" style={{"display": "block", "marginLeft": "auto", "marginRight": "auto" }}/>
        </div>);
    }
}
 
export default UploadSuccess;