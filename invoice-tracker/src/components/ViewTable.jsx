import React, {useMemo} from "react";
import {useTable} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS} from './columns'
import './ViewTable.css'

export const ViewTable = () => {
    console.log("viewtable")
    const columns = useMemo(() => COLUMNS, []) /*function returns COLUMNS with an empty dependency array. This is so data is not recreated on every render*/
    const data = useMemo(() => MOCK_DATA, []) /*function returns MOCK_DATA with an empty dependency array. This is so data is not recreated on every render*/

    const tableInstance = useTable({ /*creating table instance*/
        columns: columns, 
        data: data
    })

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance /*functions and arrays provided by usetable package*/
    return (
        //creating table with html this is the format to use the above functions and arrays
        <table {...getTableProps()} id = "#view-docs"> 
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                    <tr {... headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map((columns) =>(
                                <th {...columns.getHeaderProps()}>{columns.render('Header')}</th>
                        ))}

                    </tr>
                ))}

            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
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
    )
}