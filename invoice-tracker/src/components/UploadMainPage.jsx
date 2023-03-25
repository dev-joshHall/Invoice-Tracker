import React, { Component } from 'react';
import { NavLink } from './NavbarElements';

function UploadMainPage() {
    return (<div id='upload-page' className="d-flex flex-column bd-highlight mb-3 container">
        <div className='row d-flex justify-content-center'>
            <div className='col-sm-2 m-2 border border-primary border-4 rounded d-flex justify-content-center'>
                <NavLink to='upload-docs'>
                    <div className='text-center m-5'>
                        Upload <img id='upload-icon' src='upload_icon.png' style={{ 'height': '25px' }}/>
                    </div>
                </NavLink>
            </div>
            <div className='col-sm-2 m-2 border border-primary border-4 rounded d-flex justify-content-center'>
                <NavLink to='../CreateRecord'>
                    <div className='text-center m-5'>
                        Create <img id='add-icon' src='add.png' style={{ 'height': '25px' }} />
                    </div>
                </NavLink>
            </div>

        </div>
        <div className='d-flex justify-content-center row'>
            Bulk Upload Data...
        </div>
    </div>);
}

export default UploadMainPage;