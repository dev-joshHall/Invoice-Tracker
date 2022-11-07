import React, { Component } from 'react';

 function UploadProgress() {

    return ( <div className="d-flex flex-column bd-highlight mb-3">
        <span className='d-flex justify-content-center'>Bulk Uploader</span>
        <img className='d-flex justify-content-center' src='/upload_docs.png' alt='upload-image' id='updocs-img'/>
        <div className="progress">
            <div id='uploadPBar' className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div> );
 }
 
 export default UploadProgress;