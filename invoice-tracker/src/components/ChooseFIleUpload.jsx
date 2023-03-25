import React, { Component } from 'react';
import $ from 'jquery'
import CSVReader from './CSVReader.tsx';

class ChooseFileUpload extends Component {

    componentDidMount = () => {
        $('#step1NextBtn').on('click', this.nextPressed);
    }

    nextPressed = () => {
        this.props.stateChanger({'uploadStep': 2});
        this.props.updateProgBar();
    }

    render() {
        return ( <div className='border rounded m-3'>
            <div className='m-2 d-flex flex-column justify-content-center bd-highlight border-3 m-5'>
                <h2 className='d-flex justify-content-center'>Step 1 - Choose File</h2>
                <span className='d-flex justify-content-center'>Upload File (CSV)</span>
                <div className='m-3 w-50 mx-auto'>
                    <CSVReader stateChanger={this.props.stateChanger} uploadState={this.props.uploadState}/>
                </div>
                <button id='step1NextBtn' className='btn btn-primary m-2 w-25 mx-auto' disabled={true}>Next</button>
            </div>
        </div> );
    }
    
}

export default ChooseFileUpload;