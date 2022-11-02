import React, { Component } from 'react';
 function UploadProgress() {
    return ( <div className="d-flex flex-column bd-highlight mb-3">
        <span className='d-flex justify-content-center'>Bulk Uploader</span>
        <img className='d-flex justify-content-center' src='upload_docs.png' alt='upload-image' id='updocs-img'/>
        <span className='d-flex justify-content-center'>Progress Bar Here</span>
    </div> );
 }
 
 export default UploadProgress;