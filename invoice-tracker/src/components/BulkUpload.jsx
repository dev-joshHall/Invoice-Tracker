import React, { Component } from 'react';
import ChooseFileUpload from './ChooseFIleUpload';
import UploadProgress from './UploadProgress';
import $ from 'jquery';
import AttributeMatch from './AttributeMatch';
import UploadOrCancel from './UploadOrCancel';
import UploadSuccess from './UploadSuccess';
import axios from 'axios';

class BulkUpload extends Component {

    state = {
        jsonUploadedData: {},
        note: '',
        uploadStep: 1,
        progBarPercent: 0,
        invoice_number: '',
        bulk_id: '',
    }

    componentDidMount() {
        // generate IDs
        this.getInvoiceNumber();
        this.getBulkId();
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

    formatAMPM = (dt) => {
        var hours = dt.getHours();
        var minutes = dt.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }

    axiosCall = (bulkData) => {
        axios({
            url: 'http://localhost:8080/api/BulkInvoicePost',
            method: 'POST',
            data: bulkData
        })
            .then(() => {
                console.log('Success')
            })
            .catch(() => {
                console.log('ERROR')
            })
    }

    getInvoiceNumber = () => {
        axios.get('http://localhost:8080/api/getNewInvoiceNumber')
            .then((response) => {
                const data = response.data
                //can change testData to mach any array you set in the state
                console.log(data);
                const invoiceNumber = data + 1;
                this.setState({ invoice_number: invoiceNumber.toString() })
                console.log("Data has been recieved")

            })
            .catch(() => {
                console.log("error has occured")
            })
    }

    getBulkId = () => {
        axios.get('http://localhost:8080/api/getNewBulkId')
            .then((response) => {
                const data = response.data
                //can change testData to mach any array you set in the state
                console.log(data);
                const bulk_id = data + 1;
                this.setState({ bulk_id: bulk_id.toString() })
                console.log("Data has been recieved")

            })
            .catch(() => {
                console.log("error has occured")
            })
    }

    submitData = (event) => {
        // event.preventDefault();

        // do one for every invoice
        const copiedData = [...this.state.jsonUploadedData.data];
        const headers = copiedData[0];
        copiedData.splice(0,1);

        const currTime = Date.now();
        const dt = new Date(currTime);
        let uploadDate = `${dt.getMonth()+1}-${dt.getDate()}-${dt.getFullYear()} ${this.formatAMPM(dt)}`;

        const labeledData = []; // array of labeled invoice objects
        for (const inv of copiedData) {
            const labeledInv = {};
            for (let i = 0; i < headers.length; i++) {
                if (headers[i].toLowerCase() != "bulkid" && headers[i].toLowerCase() != "bulk_id") {
                    labeledInv[headers[i]] = inv[i].toString();
                }
            }
            labeledInv.uploadTime = uploadDate;
            labeledInv.uploadTimeNum = `${currTime}`;
            labeledInv.bulk_id = `${this.bulkId}`;
            labeledInv.invoice_number = `${this.invoice_number}`
            labeledData.push(labeledInv);
        }

        console.log(labeledData);
        this.axiosCall(labeledData);

        
        



        


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
                submitData={this.submitData}
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