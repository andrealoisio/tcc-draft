import { DataGrid } from '@mui/x-data-grid';
import React, { useState, useEffect } from 'react';

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'userName', headerName: 'User Name', width: 130 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'email', headerName: 'e-Mail', width: 130 },
  { field: 'phone', headerName: 'Phone', width: 130 },
  { field: 'webLink', headerName: 'Web Link', width: 130 },


  // { field: 'firstName', headerName: 'First name', width: 130 },
  // { field: 'lastName', headerName: 'Last name', width: 130 },
  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  //   width: 90,
  // },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
  // {
  //   field: "edit",
  //   headerName: "Edit",
  //   sortable: false,
  //   width: 130,
  //   disableClickEventBubbling: true,
  //   renderCell: () => {
  //     return (
  //       <Button variant="contained" color="primary" startIcon={<EditIcon />}>
  //         Edit
  //       </Button>
  //     );
  //   }
  // },
  // {
  //   field: "delete",
  //   headerName: "Delete",
  //   sortable: false,
  //   width: 130,
  //   disableClickEventBubbling: true,
  //   renderCell: () => {
  //     return (
  //       <Button
  //         variant="contained"
  //         color="secondary"
  //         startIcon={<DeleteIcon />}
  //       >
  //         Delete
  //       </Button>
  //     );
  //   }
  // }
];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export default function DataTable() {
  const [rows, setRows] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(resp => {
        setRows(resp)
      })
  }, [])
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
  );
}
