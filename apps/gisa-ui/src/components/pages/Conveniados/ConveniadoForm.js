import React from 'react';
import ConveniadoCard from './ConveniadoCard';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Link } from 'react-router-dom';
import LoupeIcon from '@mui/icons-material/Loupe';
import Button from "@material-ui/core/Button";

const value = [{
  totalAtendimentos: '124155',
  totalConveniado: '224543',
  totalRemocao: '4453252',
}];
const columns = [
  { field: 'seq_conveniado', headerName: 'Id', width: 100, hide: true, disableColumnMenu: true },
  { field: 'nome', headerName: 'Nome', width: 250  },
  { field: 'cnpj', headerName: 'CNPJ', width: 180, align: "center" },
  { field: 'atividade', headerName: 'Atividade', width: 150, align: "center" },
  { field: 'data_registro', headerName: 'Data de Registro', width: 150, align: "center" },
  {
    field: 'detalhe',
    headerName: 'Detalhes',
    sortable: false,
    width: 100,
    disableClickEventBubbling: true,
    disableColumnMenu: true,
    align: "center",
    renderCell: (params) => {
      return (
        <Link to={"/detalheConveniados/" + params.row.seq_conveniado}>
          <Button variant="contained" color="primary"><LoupeIcon /></Button>
        </Link>        
      );
    }
  },
];


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
    fetch("http://localhost/conveniados")
      .then(resp => resp.json())
      .then(resp => {
        setRows(resp)
      })
      .catch(err => {console.log(err)})
  }, [])

  return (
    <div className="App">
      <div className={classes.card}>
        {value.map((values) => (
            <ConveniadoCard valores={values}/>
          ))}; 
      </div>
      <div>     
        <Typography variant="h6">
          <ListAltIcon /> Visão Geral de Conveniados
        </Typography>
      </div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid 
          getRowId={row => row.seq_conveniado}
          rowOptions={{ selectable: true }} 
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>  
        );
      }
