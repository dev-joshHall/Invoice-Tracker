import React, { Component } from 'react';
 class AttributeMatch extends Component {
    state = {  } 
    render() { 
        return (<div>
            <span>attribute match</span>
            {console.log(this.props.jsonData.data[0])}
            {this.props.jsonDat.data.map((x)=>{//error
                <span>{x}</span>
            })}
        </div>);
    }
 }
  
 export default AttributeMatch;