import React, { Component } from 'react';

class SingleUploadView extends Component {
    state = {  } 
    render() { 
        return (<div>
            <h1>Bulk Upload #{this.props.bulkId}</h1>
            <div id='single-upload-details'>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Invoice ID #</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.invoices.map((inv)=>{
                            {console.log(inv.invoiceNumber)}
                            return <tr key={inv.invoiceNumber}>
                                <td>{inv.invoiceNumber}</td>
                                <td>{inv.companyName}</td>
                                <td>{inv.status}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
                {}
            </div>
        </div>);
    }
}
 
export default SingleUploadView;
