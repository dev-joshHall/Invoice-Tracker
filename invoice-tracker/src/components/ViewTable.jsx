
import React, { useMemo, useState,useEffect } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from "react-table";
import { COLUMNS } from "./columns";
import{COLUMNSFULL} from "./columnsFull"
import "./ViewTable.css";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { ViewTableSearch } from "./ViewTableSearch";
import { CheckmarkBox } from "./CheckmarkBox";
import axios from 'axios';
import { ViewTableDates } from "./ViewTableDateFilter";
import { CSVLink} from 'react-csv';

export const ViewTable = (props) => {

  let [data,setData] = useState([]);

  /*const [finalDate,setFinalDate] = useState(null);
  const [eendDate,SSetEndDate] = useState(null);
  
  const handleDateChange=({sstartDate,eendDate})=>{
    SSetStartDate (sstartDate);
    SSetEndDate(eendDate);
  };*/

  const [filterClick,SetFilterClick] = useState(false);//if get results have been clicked or not

  const columns = useMemo(
    () => COLUMNS,
    []
  ); /*function returns COLUMNS with an empty dependency array. This is so data is not recreated on every render*/
  const columnsFull = useMemo(
    () => COLUMNSFULL,
    []
    
  ); /*function returns COLUMNS with an empty dependency array. This is so data is not recreated on every render*/
  const [columnState, setColumnState] = useState(columns);
  //setSelectedColumns();

useEffect(() => {
  let active = true
  load()
  return () => { active = false }

  async function load() {//connecting to the database
    setData([]) 
    const res = await axios.get("http://localhost:8080/api/getinvoicedata-All")
    .then((response) => {
        let data1 = response.data
        console.log("pulled data")
        
        return data1;
    })
    if (!active) { return }
    setData(res)
  }
}, [])

  let {
    getTableProps, //{/*these are function that we can use for the table */}
    getTableBodyProps, 
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    prepareRow,
    state,
    setPageSize,
    selectedFlatRows,
    setGlobalFilter,
    
  } = useTable(
    {
      /*creating table instance, functions and arrays provided by usetable package**/
      columns: columnState,
      data: data,
    },
    useGlobalFilter /*enabling search*/,
    useSortBy /*enabling sort*/,
    usePagination /*setting up pages*/,
    useRowSelect /*for checkbox*/,
    (hooks) => {
      /* this is to toggle checkbox*/
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <CheckmarkBox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <CheckmarkBox {...row.getToggleRowSelectedProps() } />
              
            ),
          },
          ...columns,
        ];
      });
    }
  );
  const { globalFilter, pageIndex, pageSize } =
    state; /*getting a state of the table**/
  
  const UpdateTable = ()=>{// updating current table with whats selected. 
    setColumnState(columnsFull);
    data = selectedFlatRows.map((row) => row.original);
    setData(data)
    SetFilterClick(true);
 }

 function handleBackClick(){// clickinking on back button should rerender correct data
  SetFilterClick(false);
  let active = true
  async function load() {//connecting to the database
    setData([]) 
    const res = await axios.get("http://localhost:8080/api/getinvoicedata-All")
    .then((response) => {
        let data1 = response.data
        console.log("pulled data")
        
        return data1;
    })
    if (!active) { return }
    console.log("oh no")
    setData(res)
  }
  setColumnState(columns);
  page = load();
 }
 ///////////////////////////////////////////////////////
  const [dateFilter, setDateFilter] = useState({

    //eendDate: null
  })
  ///////////////////////////////////////////////
  console.log("page",page)
  const startDate = props.startDate;
  console.log("startDateView " , startDate);
  const dates=Date();
   return (
    <>
      {/*Search icon */}
      <ViewTableSearch
        filter={globalFilter}
        setFilter={setGlobalFilter}
        className="search"
        high
      />
      <ViewTableDates/>
      
      {/*creating table with html this is the format to use with the above functions and arrays*/}
      <table {...getTableProps()} id="#view-docs">
        <thead>
          {
          
          headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((columnState) => (
                <th {...columnState.getHeaderProps(columnState.getSortByToggleProps())}>
                  {columnState.render("Header")}
                  <span>
                    {columnState.isSorted ? (
                      columnState.isSortedDesc ? (
                        <BsFillCaretDownFill />
                      ) : (
                        <BsFillCaretUpFill />
                      )
                    ) : (
                      ""
                    )}{" "}
                    {/*this is for implimenting sort icons*/}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {
            filterClick ? page.map((row) => {//if filterclick is true
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            }):
          page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div id="paginationResultsSection">

          {
            filterClick ? 
            <button onClick={handleBackClick}>
              Go Back
            </button>:
          <button className="getResults btn-primary m-2" onClick={() => UpdateTable()}  >
            Get Results
          </button>
          }
        <div id="pagination">
          <span>
            {/*this span is for setting up the page jumps*/}| Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
              style={{ width: "50px" }}
            />
          </span>

          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {/*jumping to end button*/}
            {"<<"}
          </button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </button>
          <span>
            {/*this span is to show what page and how many pages*/}
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {/*jumping to begining button*/}
            {">>"}
          </button>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {/*this select is for setting page size*/}
            {[10, 25, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
          {
          filterClick ?
          <button className="exportBtn">
                
          <CSVLink data={selectedFlatRows.map((row) => row.original)} target='_blank'  filename={"Checked-Invoices.csv"}>Export CSV </CSVLink> {/*csv download link*/}
          </button>:
          <div></div>

          }

          
        </div>
      </div>
      <div>
      
      </div>
    </>
  );
};

export default ViewTable;
