import React from 'react';
import PrestadorCard from './PrestadorCard';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Link } from 'react-router-dom';
import LoupeIcon from '@mui/icons-material/Loupe';
import Button from "@material-ui/core/Button";

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

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex', 
    flexDirection: "row",
    flexWrap: 'wrap',
  },
}));

export default function PrestadorForm() {
  const classes = useStyles();
  const [prestadores, setPrestadores] = useState([])
  const [checouPrestadores, setChecouPrestadores] = useState(false)
  const [resumo, setResumo] = useState(null)

  useEffect(() => {
    fetch("http://localhost:8080/prestadores")
      .then(resp => {
        if (resp.ok) {
          setChecouPrestadores(true)
          return resp.json()
        } else if (resp.status === 404) {
          return Promise.reject('error 404')
        } else {
          return Promise.reject('some other error: ' + resp.status)
        }
      })
      .then(resp => {
        setPrestadores(resp)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:8080/prestadores/resumo")
      .then(resp => {
        if (resp.ok) {
          return resp.json()
        } else if (resp.status === 404) {
          return Promise.reject('error 404')
        } else {
          return Promise.reject('some other error: ' + resp.status)
        }
      })
      .then(resp => {
        setResumo(resp)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
      <div className="App">
        <div className={classes.card}>
          <PrestadorCard resumo={resumo}/>
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
            rows={prestadores}
            loading={!checouPrestadores}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>

      </div>  
        );
      }
