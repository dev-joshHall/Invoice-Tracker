import React, { Component } from 'react';
import {NavLink} from './NavbarElements';

function UploadMainPage() {
    return ( <div id='upload-page' className="d-flex flex-column bd-highlight mb-3">
        <div className='d-flex justify-content-end'>
            <NavLink to='upload-docs'>
                <button className='btn btn-primary m-2'>
                    upload<img id='upload-icon' src='upload_icon.png'/>
                </button>
            </NavLink>
            
        </div>
        <div className='d-flex justify-content-center'>
            Bulk Upload Data...
        </div>
    </div> );
}

export default UploadMainPage;