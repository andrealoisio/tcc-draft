import React from 'react';
import AssociadoCard from './AssociadoCard';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Link } from 'react-router-dom';
import LoupeIcon from '@mui/icons-material/Loupe';
import Button from "@material-ui/core/Button";

const columns = [
  { field: 'matricula', headerName: 'Matrícula', width: 100 },
  { field: 'nome', headerName: 'Nome', width: 250 },
  { field: 'cpf', headerName: 'CPF', width: 150, align: "center" },
  { field: 'email', headerName: 'e-mail', width: 250, align: "center" },
  { field: 'plano', headerName: 'Plano Contratado', width: 150, align: "center" },
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
        <Link to={"/detalheAssociados/" + params.row.matricula}>
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
export default function AssociadoForm() {
  const classes = useStyles();
  const [associados, setAssociados] = useState([])
  const [checouAssociados, setChecouAssociados] = useState(false)
  const [error, setError] = useState(false)
  const [resumo, setResumo] = useState(false)


  useEffect(() => {
    fetch("http://localhost:8080/associados")
      .then(resp => {
        if (resp.ok) {
          setChecouAssociados(true)
          return resp.json()
        } else if (resp.status === 404) {
          return Promise.reject('error 404')
        } else {
          return Promise.reject('some other error: ' + resp.status)
        }
      })
      .then(resp => {
        setAssociados(resp)
      })
      .catch(err => {
        setError(true)
        console.log(err)
      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:8080/associados/resumo")
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
        <AssociadoCard resumo={resumo} />
      </div>
      <div>
        <Typography variant="h6">
          <ListAltIcon /> Visão Geral de Associados
        </Typography>
      </div>

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          getRowId={row => row.matricula}
          rowOptions={{ selectable: true }}
          rows={associados}
          loading={!checouAssociados}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
      {error &&
        <Typography variant="h6" style={{color: 'red'}}>Erro inesperado ao carregar Associados.</Typography>
      }
    </div>
  );
}
