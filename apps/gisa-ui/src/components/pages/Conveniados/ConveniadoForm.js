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
import dayjs from 'dayjs';

const columns = [
  { field: 'seq_conveniado', headerName: 'Id', width: 100, hide: true, disableColumnMenu: true },
  { field: 'nome', headerName: 'Nome', width: 250 },
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
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [resumo, setResumo] = useState(null)


  useEffect(() => {
    setRows(null)
    fetch("http://localhost/conveniados")
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
        resp = resp.map(item => ({...item, data_registro: dayjs(item.data_registro).format('DD/MM/YYYY')}))
        setRows(resp)
        setLoading(false)
      })
      .catch(err => {
        setError(true)
        setLoading(false)
        console.log(err)
      })
  }, [])

  useEffect(() => {
    fetch("http://localhost/conveniados/resumo")
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
        {resumo &&
          <ConveniadoCard resumo={resumo} />
        };
      </div>
      <div>
        <Typography variant="h6"> <ListAltIcon /> Visão Geral de Conveniados </Typography>
      </div>
      {rows &&
        <>
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
        </>
      }
      {loading &&
        <Typography variant="h6">Carregando...</Typography>
      }
      {error &&
        <Typography variant="h6" style={{ color: 'red' }}>Erro inesperado ao carregar Associados.</Typography>
      }
    </div>
  );
}
