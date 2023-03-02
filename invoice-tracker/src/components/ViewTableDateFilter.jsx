import React from 'react'

export const ViewTableDates = ({filter, setFilter}) =>{

    return (
        <span>
            Date Range: {' '}
            <input value = {filter || ''} onChange = {(e) => setFilter(e.target.value)} />
            
        </span>
    )
}