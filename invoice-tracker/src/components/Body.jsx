import React, { Component } from 'react';
import Dashboard from './Dashboard';

function Body() {
    return ( <div>
        
        <div className="col py-3" style={{"width": "200px"}}>
            <Dashboard/>
        </div>
        
    </div> );
}

export default Body;