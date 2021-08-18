import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.getValue(params.id,'firstName') || ''} ${params.getValue(params.id,'lastName') || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Haley', firstName: 'Bobi', age: 35 },
    { id: 2, lastName: 'Tompkins', firstName: 'Christian', age: 42 },
    { id: 3, lastName: 'Idem', firstName: 'Constance', age: 45 },
    { id: 4, lastName: 'Ubom', firstName: 'Eddie', age: 16 },
    { id: 5, lastName: 'Haley', firstName: 'Landin', age: 44 },
    { id: 6, lastName: 'Logan', firstName: 'Madden', age: 36 },
];

export const DataTable = () => {
    return (
        <div style={{ height: 700, width: '100%' }}>
            <h2>Cars In Inventory</h2>
            <DataGrid rows={rows} columns={columns} pageSize={rows.length} checkboxSelection />
        </div>
    );
}