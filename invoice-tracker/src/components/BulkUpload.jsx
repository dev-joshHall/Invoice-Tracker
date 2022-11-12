import React, { Component } from 'react';
import ChooseFileUpload from './ChooseFIleUpload';
import UploadProgress from './UploadProgress';
import { useCSVReader } from 'react-papaparse';
import $ from 'jquery';
import AttributeMatch from './AttributeMatch';

class BulkUpload extends Component {

    state = {
        jsonUploadedData: {},
        uploadStep: 1,
        progBarPercent: 0,
    }

    componentDidMount() {
        // test to see value of json data in state
        // const interval = setInterval(()=>{console.log(this.state.jsonUploadedData)}, 1000);
    }

    updateProgBar1 = () => {
        const $pBarEl = $('#uploadPBar');
        $pBarEl.addClass('step1');
        setTimeout(()=>{
            $pBarEl.removeClass('step1');
            $pBarEl.addClass('s1-finished');
        }, 1000);
    }

    updateProgBar2 = () => {
        const $pBarEl = $('#uploadPBar');
        $pBarEl.addClass('step2');
        setTimeout(()=>{
            $pBarEl.removeClass('step2');
            $pBarEl.addClass('s2-finished');
        }, 1000);
    }

    render() {
        this.setState = this.setState.bind(this);
        return ( <div className='m-2' id='uplaod-docs'>
            <UploadProgress/>
            {this.state.uploadStep===1 && <ChooseFileUpload
                stateChanger={this.setState}
                uploadState={this.state}
                updateProgBar={this.updateProgBar1}
            />}
            {this.state.uploadStep===2 && <AttributeMatch
                stateChanger={this.setState}
                jsonData={this.state.jsonUploadedData}
                updateProgBar={this.updateProgBar2}
            />}
        </div> );
    }
}

export default BulkUpload;