import React, { Component } from 'react';
import dinoImage from '../imgs/dino.png'

function Dashboard() {
    return (<div>
        <h3 style={{ "paddingLeft": "60px", "paddingTop": "20px", "textDecoration": "underline" }}> Invoicing Dashboard </h3>


        <div style={{ "paddingTop": "100px" }}>
            <h4 style={{ "textAlign": "center" }}> Welcome to Winvoice! </h4>
            <img src={dinoImage} style={{ "width": "25%", "display": "block", "marginLeft": "auto", "marginRight": "auto" }}></img>

        </div>
    </div>);
}

export default Dashboard;