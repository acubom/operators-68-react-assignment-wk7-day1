import React, { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams, GridRowModel } from '@material-ui/data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import {
    Button, 
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';
import { CarForm } from '../../components/CarForm';

interface gridData {
    id?: string;
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'year', headerName: 'Year', width: 130 },
    { field: 'make', headerName: 'Make', width: 130 },
    { field: 'model', headerName: 'Model', width: 130 },
    { field: 'color', headerName: 'Color', width: 130 },
    { field: 'condition', headerName: 'Condition', width: 130 },
    {
        field: 'price',
        headerName: 'Price',
        type: 'string',
        width: 90,
    },
    {
        field: 'dimensions',
        headerName: 'Dimensions',
        type: 'string',
        width: 90,
    },
    {
        field: 'weight',
        headerName: 'Weight',
        type: 'string',
        width: 90,
    },
]

export const DataTable = () => {

    let { CarData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({ id: '' });

    let handleOpen = () => {
        setOpen(true)
    }

    let handleClose = () => {
        setOpen(false)
    }

    let handleCheckbox = (id: GridRowModel) => {
        if (id[0] === undefined) {
            setData({ id: '' })
        } else {
            setData({ id: id[0].toString() })
        }
    }

    let deleteData = () => {
        server_calls.delete(gridData.id!)
        getData()
    }
    

    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2>Cars In Inventory</h2>
            <DataGrid rows={CarData} columns={columns} pageSize={5} checkboxSelection onSelectionModelChange={handleCheckbox} />
            {console.log(gridData)}
            <Button onClick={handleOpen}>Update</Button>
            <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

            {/*Dialog Pop Up begin */}
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update Car</DialogTitle>
                <DialogContent>
                    <DialogContentText>Update Car</DialogContentText>
                    <CarForm id={gridData.id!} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleClose} color="primary">Done</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}