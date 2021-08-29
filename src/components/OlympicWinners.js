import React, {useState, useEffect} from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
const theme = "ag-theme-alpine-dark";


require(`ag-grid-community/dist/styles/${theme}.css`);


const OlympicWinners = () => {
  
    const [error, setError] = useState (null);

    const [rowData, setRowData] = useState([])


    useEffect(() => {
        fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
        .then(response => response.json())
        .then(data => setRowData(data))
        .catch(error => setError(error));
    })


    const mycolumns = [
        {headerName: 'Athlete', field: 'athlete', sortable: true, filter: true},
        {headerName: 'Age', field: 'age', sortable: true, filter: true, width: 100, type: 'numericColumn'},
        {headerName: 'Country', field: 'country', sortable: true, filter: true},
        {headerName: 'Year', field: 'year', sortable: true, filter: true, width: 100, type: 'numericColumn'},
        {headerName: 'Date', field: 'date', sortable: true, filter: true, width: 150, type: 'numericColumn'},
        {headerName: 'Sport', field: 'sport', sortable: true, filter: true},
        {headerName: 'Gold', field: 'gold', sortable: true, filter: true, width: 100, type: 'numericColumn'},
        {headerName: 'Silver', field: 'silver', sortable: true, filter: true, width: 100, type: 'numericColumn'},
        {headerName: 'Bronze', field: 'bronze', sortable: true, filter: true, width: 150, type: 'numericColumn'},
        {headerName: 'Total', field: 'total', sortable: true, filter: true, width: 100, type: 'numericColumn' }
    ]

    const gridOptions = {
        rowData: rowData,
        
        columnDefs: mycolumns,
        pagination:true,
        paginationPageSize: 25,
        rowSelect: 'single',
        onRowClick: event => console.log('A row was clicked'),
        onColumnResized: event => console.log('a column was resized'),
        onGridReady: event=> console.log('The grid is now ready'),

        isScrollLag: () => false
    }
    console.log(gridOptions.rowData);

    return (
        <div className={theme} style={{height: 900, width: 1500}}>
            {gridOptions.rowData.length > 0 ? (<AgGridReact
            gridOptions={gridOptions}/>) : (<h1>is Loading...</h1>)}
            
        </div>


    )
};

export default OlympicWinners;