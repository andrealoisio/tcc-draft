import React from 'react';
import PrestadorCard from './PrestadorCard';
import { DataGrid } from '@mui/x-data-grid';
// import { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Link } from 'react-router-dom';
import LoupeIcon from '@mui/icons-material/Loupe';
import Button from "@material-ui/core/Button";

const value = [{
  totalPrestadores: '124155',
  totalPrestadoresEspecializacao: '224543',
}];

const columns = [
  { field: 'codigo', headerName: 'Código Funcional', width: 100 },
  { field: 'nome', headerName: 'Nome', width: 250  },
  { field: 'email', headerName: 'e-mail', width: 250, align: "center" },
  { field: 'especializacao', headerName: 'Especialidade', width: 150, align: "center" },
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
        <Link to={"/detalhePrestadores/" + params.row.codigo}>
          <Button variant="contained" color="primary"><LoupeIcon /></Button>
        </Link>        
      );
    }
  },
];
const rows = [
  { codigo: 323523, nome: 'Ângelo Marcondes', email: 'angelo.marcondes@yahoo.com.br', especializacao: 'Clínica Médica' },
  { codigo: 323524, nome: 'Dolores Almeida', email: 'dolores.almeida@yahoo.com.br', especializacao: 'Enfermagem' },
  { codigo: 323525, nome: 'Bruce dos Santes', email: 'bruce.santos@yahoo.com.br', especializacao: 'Fisioterpia' },
  { codigo: 323526, nome: 'Olga Martins', email: 'olga_martins@yahoo.com.br', especializacao: 'Técnico Radiologia' },
  { codigo: 323527, nome: 'Livia Andrade', email: 'l_andrade@yahoo.com.br', especializacao: 'Radiologia' },
  { codigo: 323528, nome: 'Lucelia Santos', email: 'lu_santos@yahoo.com.br', especializacao: 'Enfermagem' },
  { codigo: 323529, nome: 'Marcos Dantas Silva', email: 'm_dantas_silva@yahoo.com.br', especializacao: 'Cardiologia' },
  { codigo: 323520, nome: 'Maristela Ferreira', email: 'm.ferreira@yahoo.com.br', especializacao: 'Saúde da Mulher' },
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


export default function PrestadorForm() {
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
          <PrestadorCard valores={values}/>
        ))};  
      </div>
      <div>     
        <Typography variant="h6">
          <ListAltIcon /> Visão Geral de Prestadores
        </Typography>
      </div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid 
          getRowId={row => row.codigo}
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
