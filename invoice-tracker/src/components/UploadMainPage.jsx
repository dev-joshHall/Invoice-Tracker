import React, { Component } from 'react';
import { NavLink } from './NavbarElements';

function UploadMainPage() {
    return (<div id='upload-page' className="d-flex flex-column bd-highlight mb-3 container">
        <div className='row d-flex justify-content-center container m-3'>
            <div className='col-sm-2 m-2 border border-primary border-4 rounded d-flex justify-content-center w-25 btn btn-light'>
                <NavLink to='upload-docs'>
                    <div className='text-center m-5'>
                        Upload <img id='upload-icon' src='upload_icon.png' style={{ 'height': '25px' }}/>
                    </div>
                </NavLink>
            </div>
            <div className='col-sm-2 m-2 border border-primary border-4 rounded d-flex justify-content-center w-25 btn btn-light'>
                <NavLink to='../CreateRecord'>
                    <div className='text-center m-5'>
                        Create <img id='add-icon' src='add.png' style={{ 'height': '25px' }} />
                    </div>
                </NavLink>
            </div>

        </div>
        <div className='d-flex justify-content-center row'>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                    <th scope="col">Bulk ID #</th>
                    <th scope="col">Upload Date</th>
                    <th scope="col">Errors Found</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">00000001</th>
                    <td>12/28/22</td>
                    <td>0</td>
                    </tr>
                    <tr>
                    <th scope="row">00000002</th>
                    <td>3/14/23</td>
                    <td>0</td>
                    </tr>
                    <tr>
                    <th scope="row">00000003</th>
                    <td>3/20/23</td>
                    <td>2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>);
}

export default UploadMainPage;