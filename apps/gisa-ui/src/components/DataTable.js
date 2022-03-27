import { DataGrid } from '@mui/x-data-grid';
import React, { useState, useEffect } from 'react';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'username', headerName: 'User Name', width: 130 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'email', headerName: 'e-Mail', width: 130 },
  { field: 'phone', headerName: 'Phone', width: 130 },
  { field: 'website', headerName: 'WebSite', width: 130 },
]
 
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
      />
    </div>
  );
}
