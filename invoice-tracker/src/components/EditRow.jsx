import React from 'react'
import ViewTable from './ViewTable';

const EditRow =() =>{
    return(
        <tr>
            <td>
                
            </td>
            <td>
                <input
                type ="text"
                required = "required"
                placeholder='Enter Invoice Number...'
                name='invoiceNumber'
                ></input>
            </td>
            <td>
                <input
                type ="text"
                required = "required"
                placeholder='Enter Product...'
                name='product'
                ></input>
            </td>
            <td>
                <input
                type ="text"
                required = "required"
                placeholder='Enter Description...'
                name='description'
                ></input>
            </td>
            <td>
                <input
                type ="text"
                required = "required"
                placeholder='Enter Quantity...'
                name='orderedQuantity'
                ></input>
            </td>
            <td>
                <input
                type ="text"
                required = "required"
                placeholder='Enter Unit Of Measure...'
                name='unitOfMeasure'
                ></input>
            </td>
            <td>
                <input
                type ="text"
                required = "required"
                placeholder='Enter Unit Price...'
                name='unitPrice'
                ></input>
            </td>
            <td>
                <input
                type ="text"
                required = "required"
                placeholder='Enter total...'
                name='total'
                ></input>
            </td>
            <td>
                <input
                type ="text"
                required = "required"
                placeholder='Enter taxes...'
                name='taxes'
                ></input>
            </td>
            <td>
                <input
                type ="text"
                required = "required"
                placeholder='Enter status...'
                name='status'
                ></input>
            </td>
            <td>
                <input
                type ="text"
                required = "required"
                placeholder='Enter bulkId...'
                name='bulkId'
                ></input>
            </td>
            <td>
                <input
                type ="text"
                required = "required"
                placeholder='Enter attributes...'
                name='attributes'
                ></input>
            </td>
            <td>
                <input
                type ="text"
                required = "required"
                placeholder='Enter companyName...'
                name='companyName'
                ></input>
            </td>
            <td>
                <input
                type ="text"
                required = "required"
                placeholder='Enter billedDate...'
                name='billedDate'
                ></input>
            </td>
            <td>
                <input
                type ="text"
                required = "required"
                placeholder='Enter phoneNumber...'
                name='phoneNumber'
                ></input>
            </td>
            <td>
                <input
                type ="text"
                required = "required"
                placeholder='Enter email...'
                name='email'
                ></input>
            </td>
            <td>
                <input
                type ="text"
                required = "required"
                placeholder='Enter streetAddress...'
                name='streetAddress'
                ></input>
            </td>
            <td>
                <input
                type ="text"
                required = "required"
                placeholder='Enter address 2...'
                name='address 2'
                ></input>
            </td>
            <td>
                <input
                type ="text"
                required = "required"
                placeholder='Enter zip...'
                name='zip'
                ></input>
            </td>
            <td>
                <input
                type ="text"
                required = "required"
                placeholder='Enter city...'
                name='city'
                ></input>
            </td>
            <td>
                <input
                type ="text"
                required = "required"
                placeholder='Enter state...'
                name='state'
                ></input>
            </td>
            <td>
                <input
                type ="text"
                required = "required"
                placeholder='Enter country...'
                name='country'
                ></input>
            </td>

        </tr>
        
    )
}
export default EditRow;