import React, { Component } from 'react';
import axios from 'axios';
import ViewTable from './ViewTable';

class TablePull extends Component{
    /*constructor(props){
        super(props)
    }*/
    pulledData = []
    componentDidMount = () => {
        this.getInvoiceData();
    }
    getInvoiceData = (pulledData) => {
        axios.get('http://localhost:8080/api/getinvoicedata-All')
            .then((response) => {
                const data = response.data
                //can change testData to mach any array you set in the state
                this.setState({ invoiceData: data })
                console.log("Data has been recieved")
                console.log("pulled data")
                
                pulledData = data
                console.log(pulledData)
                
            })
            .catch(() => {
                console.log("error has occured")
            })
    }
    render(){
        return ( 
            <div>
                {/*<ViewTable pulledData ={this.data}/>*/}
            </div>
                
            
            )
    }
}

export default TablePull;