import React, { Component } from 'react';
import ChooseFileUpload from './ChooseFIleUpload';
import UploadProgress from './UploadProgress';
import $ from 'jquery';
import AttributeMatch from './AttributeMatch';
import UploadOrCancel from './UploadOrCancel';
import UploadSuccess from './UploadSuccess';
import axios from 'axios';
import {COLUMNS} from './columns';

class BulkUpload extends Component {

    state = {
        jsonUploadedData: {},
        note: '',
        uploadStep: 1,
        progBarPercent: 0,
        invoiceNumber: '',
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
                console.log([data])
                //can change testData to mach any array you set in the state
                console.log("invoice #: "+typeof(data));
                const invoiceNumber = (parseInt(data) + 1).toString().padStart(8, '0');
                console.log(`inv #: ${invoiceNumber}`);
                this.setState({ invoiceNumber: invoiceNumber });
                console.log("Invoice number has been recieved");

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
                const bulk_id = (parseInt(data) + 1).toString().padStart(8, '0');
                this.setState({ bulk_id: bulk_id })
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
        console.log(headers)
        let modStr = (s) => {return s.toLowerCase().replace("_", "").replace(" ", "")}
        for (let i = 0; i < headers.length; i++) {
            let moddedVer = modStr(headers[i]);
            for (const col of COLUMNS) {
                if (moddedVer.includes(modStr(col.Header)) || moddedVer.includes(modStr(col.accessor))) {
                    headers[i] = col.accessor;
                    break;
                }
            }
        }
        console.log(headers);

        copiedData.splice(0,1);

        const currTime = Date.now();
        const dt = new Date(currTime);
        let uploadDate = `${dt.getMonth()+1}-${dt.getDate()}-${dt.getFullYear()} ${this.formatAMPM(dt)}`;

        const labeledData = []; // array of labeled invoice objects
        for (const inv of copiedData) {
            const labeledInv = {};
            for (let i = 0; i < headers.length; i++) {
                if (headers[i].toLowerCase() != "bulkid" && headers[i].toLowerCase() != "bulk_id" && headers[i].toLowerCase() != "invoice_number" && headers[i].toLowerCase() != "invoicenumber") {
                    labeledInv[headers[i]] = inv[i].toString();
                }
            }
            labeledInv.uploadTime = uploadDate;
            labeledInv.uploadTimeNum = `${currTime}`;
            labeledInv.bulk_id = `${this.state.bulk_id}`;
            labeledInv.invoiceNumber = `${this.state.invoiceNumber}`
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