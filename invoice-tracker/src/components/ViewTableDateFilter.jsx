import React from 'react'
import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ViewTable from './ViewTable';


export const ViewTableDates = ( props ) =>{
    //const [startDate, setStartDate] = useState(null);
    //const [endDate, setEndDate] = useState(null);
    const startDate = props.startDate;
    const endDate = props.endDate;
    const setStartDate =props.setStartDate;
    const setEndDate = props.setEndDate;

    const handleStartDateChange = (date) => {
      setStartDate(date);
      //onChange({ startDate: date, endDate: endDate });
      console.log("start", startDate);
    };
  
    const handleEndDateChange = (date) => {
      setEndDate(date);
     // onChange({ startDate: startDate, endDate: date });
     console.log("End", endDate);
      
    };

    const passingDatesStart = Date();
    const passingDatesEnd = Date();
    return (
<div>
    <label>Start Date:</label>
      <DatePicker

        selected={startDate}
        date = {startDate}
        dateFormat='yyyy-MM-dd'
        onChange={handleStartDateChange}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Start Date"
      />
      <label>End Date:</label>
      <DatePicker

        selected={endDate}
        date = {endDate}
        dateFormat='yyyy-MM-dd'
        onChange={handleEndDateChange}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="End Date"

      />

    </div>
    
    )
}
export default ViewTableDates;