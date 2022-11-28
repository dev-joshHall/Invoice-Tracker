import React, { Component, useState } from 'react';
// import { ViewTable } from './ViewTable';
//     const ViewClickHandler=() =>{
//         console.log('clicked view')
//         ViewTable();
//     }


// function Nav() {
//     const[viewState,viewSHow]=useState(true)//use this to hide and show view table
//     return ( <div>
//         <div className="col-auto px-sm-2 px-0 bg-dark">
//             <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                
                
//                 <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
//                     <span className="fs-5 d-none d-sm-inline">Winvoice</span>
//                 </a>
//                 <div className="dropdown">
//                     <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                         <img src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png" style={{"width": "30px"}}/>
//                         Account
//                     </button>
//                     <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                         <li><a className="dropdown-item" href="#">Action</a></li>
//                         <li><a className="dropdown-item" href="#">Another action</a></li>
//                         <li><a className="dropdown-item" href="#">Something else here</a></li>
//                     </ul>
                    
//                 </div>
//                 <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
//                     <li className="nav-item">
//                         <a href="#" className="nav-link align-middle px-0">
//                             <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#upload-page" className="nav-link px-0 align-middle">
//                             <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Upload</span> </a>
//                             <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            
//                         </ul>
//                     </li>
//                     <li>
//                         <a href="#view-docs" className="nav-link px-0 align-middle" >
//                             <i className="fs-4 bi-people" ></i> <span className="ms-1 d-none d-sm-inline" onClick ={() =>ViewClickHandler}>View</span> </a>
//                     </li>
//                 </ul>
                
//                 <hr/>
//                 <div className="dropdown" style={{"width": "128px"}}>
//                     <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                         <img src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png" style={{"width": "30px"}}/>
//                         Account
//                     </button>
//                     <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                         <li><a className="dropdown-item" href="#">Action</a></li>
//                         <li><a className="dropdown-item" href="#">Another action</a></li>
//                         <li><a className="dropdown-item" href="#">Something else here</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </div>


//     </div> );
// }

// export default Nav;

import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import { ViewTable } from './ViewTable';
import Dashboard from './Dashboard';

const Navbar = () => {
return (
    <Nav>
        <Bars />
        <NavMenu>
            <h1 style = {{"marginRight": "100px", "color": "White"}}> WINVOICE </h1> 
            <NavLink to='/'>
                <span style={{"color": "white"}}>Dashboard</span>
            </NavLink>
            <NavLink to='/upload'>
                <span style={{"color": "white"}}>Upload</span>
            </NavLink>
            <NavLink to='/view-table'>
                <span style={{"color": "white"}}>View</span>
            </NavLink>
        </NavMenu>
        
    </Nav>
);
};

export default Navbar;
