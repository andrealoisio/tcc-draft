import React from 'react';
import ConveniadoCard from './ConveniadoCard';
import { DataGrid } from '@mui/x-data-grid';
// import { useState, useEffect } from 'react';
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
  { field: 'id', headerName: 'Id', width: 100, hide: true, disableColumnMenu: true },
   { field: 'nome', headerName: 'Nome', width: 250  },
  // { field: 'nome', headerName: 'Nome', width: 200,  renderCell: (params) => (
  //   <Link to={"/"}>{params.value}</Link>
  // ) },
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
        <Link to={"/detalheConveniados/" + params.row.id}>
          <Button variant="contained" color="primary"><LoupeIcon /></Button>
        </Link>        
      );
    }
  },
];
const rows = [
  { id: 1, nome: 'Hospital Santa Cruz', cnpj: '19.106.757/0001-92', atividade: 'Hospital', data_registro: '10/10/2010' },
  { id: 2, nome: 'Fisioterapia Mineira', cnpj: '19.106.757/0001-92', atividade: 'Clínica', data_registro: '10/10/2010' },
  { id: 3, nome: 'Clínica Ortopedica BH', cnpj: '19.106.757/0001-92', atividade: 'Clínica', data_registro: '10/10/2010' },
  { id: 4, nome: 'Distribuidora de Fármacos MG', cnpj: '19.106.757/0001-92', atividade: 'Fármacos', data_registro: '10/10/2010' },
  { id: 5, nome: 'Respiradores SA', cnpj: '19.106.757/0001-92', atividade: 'Suprimento', data_registro: '10/10/2010' },
  { id: 6, nome: 'Hospital São Luiz da Barra', cnpj: '19.106.757/0001-92', atividade: 'Hospital', data_registro: '10/10/2010' },
  { id: 7, nome: 'Hospital Mineiros', cnpj: '19.106.757/0001-92', atividade: 'Hospital', data_registro: '10/10/2010' },
  { id: 8, nome: 'Clinica dos Olhos Bh', cnpj: '19.106.757/0001-92', atividade: 'Clínica', data_registro: '10/10/2010' },
  { id: 9, nome: 'Hospital Geral', cnpj: '19.106.757/0001-92', atividade: 'Hospital', data_registro: '10/10/2010' },
  { id: 10, nome: 'Nutrição de Minas', cnpj: '19.106.757/0001-92', atividade: 'Clínica', data_registro: '10/10/2010' },
];

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'username', headerName: 'User Name', width: 130 },
//   { field: 'name', headerName: 'Name', width: 130 },
//   { field: 'email', headerName: 'e-Mail', width: 130 },
//   { field: 'phone', headerName: 'Phone', width: 130 },
//   { field: 'website', headerName: 'WebSite', width: 130 },
// ]
const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex', 
    flexDirection: "row",
    flexWrap: 'wrap',
  },
}));


export default function ConveniadoForm() {
  const classes = useStyles();
  // const [rows, setRows] = useState([])

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(resp => resp.json())
  //     .then(resp => {
  //       setRows(resp)
  //     })
  // }, [])

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
