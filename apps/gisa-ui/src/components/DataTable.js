import { DataGrid } from '@mui/x-data-grid';
import React, { useState, useEffect } from 'react';
import ConveniadoCard from './ConveniadoCard';
import { makeStyles } from "@material-ui/core/styles";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'username', headerName: 'User Name', width: 130 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'email', headerName: 'e-Mail', width: 130 },
  { field: 'phone', headerName: 'Phone', width: 130 },
  { field: 'website', headerName: 'WebSite', width: 130 },
]
const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex', 
    flexDirection: "row",
    flexWrap: 'wrap',
  },
}));
 
export default function DataTable() {
  const classes = useStyles();
  const [rows, setRows] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(resp => {
        setRows(resp)
      })
  }, [])
  return (
    <div className="App">
      <div className={classes.card}>
          <ConveniadoCard />
          <ConveniadoCard />
          <ConveniadoCard />
      </div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>  
  );
}
