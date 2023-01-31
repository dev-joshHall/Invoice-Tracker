import React, { useMemo, useState,useEffect } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import "./ViewTable.css";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { ViewTableSearch } from "./ViewTableSearch";
import { CheckmarkBox } from "./CheckmarkBox";
import { NavLink } from "./NavbarElements";
import TablePull from "./table-pull";
import axios from 'axios';
import ViewTableFull from "./ViewTableFull";

export const ViewTable = (props) => {

  const [data,setData] = useState([]);
  const [selectedRows, setSelectedRows] = React.useState([]);

  const columns = useMemo(
    () => COLUMNS,
    []
  ); /*function returns COLUMNS with an empty dependency array. This is so data is not recreated on every render*/


useEffect(() => {
  let active = true
  load()
  return () => { active = false }

  async function load() {//connecting to the database
    setData([]) 
    const res = await axios.get("http://localhost:8080/api/getinvoicedata-All")
    .then((response) => {
        const data1 = response.data

        console.log("pulled data")
        console.log(data1)
        
        return data1;
        
    })
    if (!active) { return }
    setData(res)
  }
}, [])


  const checkedIds = [];

  const theseIds = () => {
    console.log("theseIds")
    console.log(selectedFlatRows.map((row) => row.original));
    return selectedFlatRows.map((row) => row.original)
  };

  console.log("new data")
  console.log(data)

  const {
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
      columns: columns,
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

   return (
    <>

      <ViewTableSearch
        filter={globalFilter}
        setFilter={setGlobalFilter}
        className="search"
        high
      />
      {/*Search icon */}
      
      {/*creating table with html this is the format to use with the above functions and arrays*/}
      <table {...getTableProps()} id="#view-docs">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((columns) => (
                <th {...columns.getHeaderProps(columns.getSortByToggleProps())}>
                  {columns.render("Header")}
                  <span>
                    {columns.isSorted ? (
                      columns.isSortedDesc ? (
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
          {page.map((row) => {
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
        <NavLink to="/view-full" id="getResultsSection"  >
          <button className="getResults btn-primary m-2" ViewTable collectedIds  = {theseIds()}  >
            Get Results
          </button>
        </NavLink>
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
        </div>
      </div>
      <code>
      {JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map((row) => row.original)
            },
            null,
            2
          )}
      </code>
      <div>
      
      </div>
    </>
  );
};

export default ViewTable;
