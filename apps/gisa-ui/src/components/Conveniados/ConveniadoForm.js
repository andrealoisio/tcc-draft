import React from 'react';
import AtendimentosCard from './AtendimentosCard';
import RemocaoCards from './RemocaoCards';
import TotalConveniadoCard from './TotalConveniadoCard';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import ListAltIcon from '@mui/icons-material/ListAlt';


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

export default function ConveniadoForm() {
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
          <AtendimentosCard />
          <RemocaoCards />
          <TotalConveniadoCard />
      </div>
      <div>     
        <Typography variant="h6">
          <ListAltIcon /> Conveniados
        </Typography>
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
