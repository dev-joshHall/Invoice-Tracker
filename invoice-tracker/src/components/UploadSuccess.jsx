import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

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
        return (<div>
            <h2>Upload Success!</h2>
        </div>);
    }
}
 
export default UploadSuccess;