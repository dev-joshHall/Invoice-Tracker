import React, { Component } from 'react';
import Nav from './Nav';
import Body from './Body';

function Main() {
    return ( <div className='mainComponent bg-dark'>
        <p>Main app</p>
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <Nav/>
                <Body/>
            </div>
        </div>
    </div> );
}

export default Main;