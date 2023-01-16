import React, {useMemo} from "react";
import {useTable, useSortBy, useGlobalFilter, usePagination,useRowSelect} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS} from './columns'
import './ViewTable.css'
import { BsFillCaretDownFill,BsFillCaretUpFill } from "react-icons/bs";
import { ViewTableSearch } from "./ViewTableSearch";
import { CheckmarkBox } from "./CheckmarkBox";
import {NavLink} from './NavbarElements';
import test from "./test";
import axios from 'axios';
import getTestData from './test'


export const ViewTable = () => {

    console.log("before")
    const testData =[]
    test.getInvoiceData = () => {
        axios.get('http://localhost:8080/api/test')
            .then((response) => {
                const dataDB = response.data
                //can change testData to mach any array you set in the state
                this.setState({ invoiceData: dataDB })
                console.log("Data has been recieved")

            })
            .catch(() => {
                console.log("error has occured")
            })
    }
    
    console.log(testData)
    console.log("viewtable")
    
    const columns = useMemo(() => COLUMNS, []) /*function returns COLUMNS with an empty dependency array. This is so data is not recreated on every render*/
    const data = useMemo(() => MOCK_DATA, []) /*function returns MOCK_DATA with an empty dependency array. This is so data is not recreated on every render*/


    const checkedIds = []

    const gatherIds =() =>{
        checkedIds.push(this.state.id)
        console.log("pushed " + this.state.id)
    }

    const theseIds = () =>  {
        console.log("userowselect: " + selectedFlatRows)
    }



    const {getTableProps, //{/*these are function that we can use for the table */}
        getTableBodyProps, 
        headerGroups, 
        page, nextPage, 
        previousPage, canNextPage, 
        canPreviousPage, 
        pageOptions, 
        gotoPage,pageCount, 
        prepareRow, 
        state, 
        setPageSize,
        selectedFlatRows,
        setGlobalFilter,
        } = useTable({ /*creating table instance, functions and arrays provided by usetable package**/
        columns: columns, 
        data: data
    },useGlobalFilter,/*enabling search*/
    useSortBy,/*enabling sort*/
    usePagination,/*setting up pages*/
    useRowSelect,/*for checkbox*/
    (hooks) => {/* this is to toggle checkbox*/
        hooks.visibleColumns.push((columns) => {

          
            return [
                {
                    id: 'selection',
                    Header: ({getToggleAllRowsSelectedProps}) => (
                        <CheckmarkBox {...getToggleAllRowsSelectedProps()}  />
                        
                    ),
                    Cell: ({ row }) => (
                         <CheckmarkBox {...row.getToggleRowSelectedProps()}  />
                    )
                    
                },
                ...columns,
            ]
        })
    }
    ) 
    const {globalFilter,pageIndex,pageSize} = state  /*getting a state of the table**/


    return (
        <>
        <ViewTableSearch filter = {globalFilter} setFilter = {setGlobalFilter} id = 'search' high/>{/*Search icon */}

      
        {/*creating table with html this is the format to use with the above functions and arrays*/}
        <table {...getTableProps()} id = "#view-docs"> 
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                    <tr {... headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map((columns) =>(
                                <th {...columns.getHeaderProps(columns.getSortByToggleProps())}>{columns.render('Header')}
                                <span>
                                    {columns.isSorted ? (columns.isSortedDesc ? <BsFillCaretDownFill/> : <BsFillCaretUpFill/>) : ''} {/*this is for implimenting sort icons*/}
                                </span></th>
                        ))}

                    </tr>
                ))}

            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    page.map(row => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell) =>{
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
            </tbody>
        </table>
        <div>

            <span>{/*this span is for setting up the page jumps*/ }
                | Go to page: {' '}
                <input type = 'number' defaultValue={pageIndex +1}
                onChange ={e =>{
                    const pageNumber = e.target.value ? Number(e.target.value) - 1: 0
                    gotoPage(pageNumber)
                }}
                style ={{width : '50px'}}/>
            </span>

            <button onClick = {() => gotoPage(0)} disabled={!canPreviousPage}>{/*jumping to end button*/}
                    {'<<'}
            </button>
            <button onClick = {() => previousPage()} disabled ={!canPreviousPage}>Previous</button>
            <span>{/*this span is to show what page and how many pages*/ }
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>
            </span>
            <button onClick = {() => nextPage()} disabled ={!canNextPage}>Next</button>
            <button onClick = {() => gotoPage(pageCount -1)} disabled={!canNextPage}>{/*jumping to begining button*/}
                    {'>>'}
            </button>
            <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>{/*this select is for setting page size*/ }
                {[10,25,50].map((pageSize) => (
                    <option key ={pageSize} value ={pageSize}>
                        Show {pageSize}
                    </option>
                ))

                }

            </select>
            <NavLink to='/view-full'>
                <button className='getResults btn-primary m-2' selectedFlatRows>
                    Get Results
                </button>
            </NavLink>


        </div>
        </>
    )
}
export default ViewTable;