import React from 'react'
import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ViewTable from './ViewTable';


export const ViewTableDates = ({ props }) =>{
    const [startDate, setStartDate] = useState(undefined);
    const [endDate, setEndDate] = useState(undefined);
  
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