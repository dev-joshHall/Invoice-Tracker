import React, { Component } from 'react';
import ChooseFileUpload from './ChooseFIleUpload';
import UploadProgress from './UploadProgress';
import $ from 'jquery';
import AttributeMatch from './AttributeMatch';
import UploadOrCancel from './UploadOrCancel';
import UploadSuccess from './UploadSuccess';

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
        $pBarEl.removeClass('s4-finished');
        $pBarEl.addClass('step1');
        setTimeout(()=>{
            $pBarEl.removeClass('step1');
            $pBarEl.addClass('s1-finished');
        }, 1000);
    }

    updateProgBar2 = () => {
        const $pBarEl = $('#uploadPBar');
        $pBarEl.removeClass('s1-finished');
        $pBarEl.addClass('step2');
        setTimeout(()=>{
            $pBarEl.removeClass('step2');
            $pBarEl.addClass('s2-finished');
        }, 1000);
    }

    updateProgBar3 = () => {
        const $pBarEl = $('#uploadPBar');
        $pBarEl.removeClass('s2-finished');
        $pBarEl.addClass('step3');
        setTimeout(()=>{
            $pBarEl.removeClass('step3');
            $pBarEl.addClass('s3-finished');
        }, 1000);
    }

    resetProgBar = () => {
        const $pBarEl = $('#uploadPBar');
        $pBarEl.removeClass('s3-finished');
        $pBarEl.addClass('s4-finished');
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
            {this.state.uploadStep===3 && <UploadOrCancel
                stateChanger={this.setState}
                jsonData={this.state.jsonUploadedData}
                updateProgBar={this.updateProgBar3}
            />}
            {this.state.uploadStep===4 && <UploadSuccess
                stateChanger={this.setState}
                jsonData={this.state.jsonUploadedData}
                updateProgBar={this.resetProgBar}
            />}
        </div> );
    }
}

export default BulkUpload;