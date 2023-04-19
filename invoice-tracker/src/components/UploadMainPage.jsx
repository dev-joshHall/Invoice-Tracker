import React, { Component } from 'react';
import { NavLink } from './NavbarElements';
import axios from 'axios';

class UploadMainPage extends Component {

    state = {
        bulkData: {}
    }

    async componentDidMount() {
        const res = await axios.get("http://localhost:8080/api/getinvoicedata-All")
          .then((response) => {
              const data1 = response.data
      
              console.log("Data has been recieved")
              console.log("pulled data")
              console.log(data1)
              
              return data1;
          })
        let bulkData = {};
        for (let i=0; i<res.length; i++) {
            if (bulkData[res[i].bulk_id]) {
                bulkData[res[i].bulk_id].push(res[i]);
            } else {
                let arr = [res[i]];
                bulkData[res[i].bulk_id] = arr;
            }
        }
        this.setState({bulkData});
    }

    render() {
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
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Bulk ID #</th>
                        <th scope="col">Upload Date</th>
                        <th scope="col"># of Invoices</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(this.state.bulkData).map((x)=>{
                            return <tr key={parseInt(x[0].bulk_id)}>
                            <td scope="row">{x[0].bulk_id}</td>
                            <td>{x[0].paid_date}</td>
                            <td>{x.length}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>);
    }
    
}

export default UploadMainPage;