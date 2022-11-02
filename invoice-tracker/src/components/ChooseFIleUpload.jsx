import React, { Component } from 'react';

function ChooseFileUpload() {
    return ( <div className='border rounded d-flex flex-column bd-highlight mb-3'>
        <span className='d-flex justify-content-center'>Step 1 - Choose File</span>
        <span className='d-flex justify-content-center'>Upload File (CSV)</span>
        <input type={"file"} className='d-flex justify-content-center'/>
        <button className='btn btn-primary m-2'>Next</button>
    </div> );
}

export default ChooseFileUpload;