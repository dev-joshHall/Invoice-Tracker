import React, { Component } from 'react';
 class AttributeMatch extends Component {
    state = {  
        cols: 0,
    } 

    onConfirmPressed = () => {
        this.props.stateChanger({uploadStep: 3});
        this.props.updateProgBar();
    }

    render() { 
        let counter = 0;
        return (<div className='border rounded d-flex flex-column bd-highlight mb-3'>
            <h2 className='d-flex justify-content-center'>Attribute Match</h2>
            
            {this.props.jsonData.data[0].map((x)=>{
                counter++;
                return <span  className='d-flex justify-content-left' key={counter}>Field name: {x}<br/></span> 
            })}
            <button id='step2NextBtn' className='btn btn-primary m-2' onClick={this.onConfirmPressed}>Confirm</button>
        </div>);
    }
 }
  
 export default AttributeMatch;