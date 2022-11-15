import React, { Component } from 'react';

class UploadOrCancel extends Component {
    state = {  } 

    onUploadPressed = () => {
        this.props.stateChanger({uploadStep: 4});
        this.props.updateProgBar();
    }

    onCancelPressed = () => {
        this.props.stateChanger({uploadStep: 2});
    }

    render() { 
        return (<div className='border rounded d-flex flex-column bd-highlight mb-3'>
            <h2 className='d-flex justify-content-center'>Are you sure?</h2>
            <span className='d-flex justify-content-center'>You cannot undo this action</span>
            <button id='step3NextBtn' className='btn btn-primary m-2' onClick={this.onUploadPressed}>Upload</button>
            <button id='step3CancelBtn' className='btn btn-primary m-2' onClick={this.onCancelPressed}>Back</button>
        </div>);
    }
}
 
export default UploadOrCancel;