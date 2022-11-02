import React, { Component } from 'react';
import ChooseFileUpload from './ChooseFIleUpload';
import UploadProgress from './UploadProgress';

function BulkUpload() {
    return ( <div id='uplaod-docs'>
        <UploadProgress/>
        <ChooseFileUpload/>
    </div> );
}

export default BulkUpload;