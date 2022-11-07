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
        return ( <div className='border rounded d-flex flex-column bd-highlight mb-3'>
            <span className='d-flex justify-content-center'>Step 1 - Choose File</span>
            <span className='d-flex justify-content-center'>Upload File (CSV)</span>
            <div className='m-3'>
                <CSVReader stateChanger={this.props.stateChanger} uploadState={this.props.uploadState}/>
            </div>
            <button id='step1NextBtn' className='btn btn-primary m-2' disabled={true}>Next</button>
        </div> );
    }
    
}

export default ChooseFileUpload;