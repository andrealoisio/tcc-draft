import React from 'react';
import AtendimentoCard from './AtendimentoCard';
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
  { field: 'seqAtendimento', headerName: 'id', width: 100, hide: true },
  { field: 'dataAtendimento', headerName: 'Data Atendimento', width: 120, align: "center"  },
  { field: 'nomeAssociado', headerName: 'Nome Associado', width: 250  },
  { field: 'matriculaAssociado', headerName: 'Matrícula Associado', width: 120, align: "center" },
  { field: 'nomePrestador', headerName: 'Nome Prestador', width: 250 },
  { field: 'codigoPrestador', headerName: 'Funcional Prestador', width: 120, align: "center" },
  { field: 'nomeConveniado', headerName: 'Clinica Parceira', width: 150 },
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
        <Link to={"/detalheAtendimentos/" + params.row.seqAtendimento}>
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


export default function AtendimentoForm() {
  const classes = useStyles();
  const [rows, setRows] = useState([])
  const [resumo, setResumo] = useState(null)


  useEffect(() => {
    setRows(null)
    fetch("http://localhost/atendimentos")
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
        resp = resp.map(item => ({...item, dataAtendimento: dayjs(item.dataAtendimento).format('DD/MM/YYYY')}))
        console.log('resp', resp)
        setRows(resp)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    setRows(null)
    fetch("http://localhost/atendimentos/resumo")
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

  return (rows &&
          <div className="App">
            {resumo && 
            <div className={classes.card}>
              <AtendimentoCard resumo={resumo}/>
            </div>}
            <div>     
              <Typography variant="h6">
                <ListAltIcon /> Visão Geral de Atendimentos
              </Typography>
            </div>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid 
                getRowId={row => row.seqAtendimento}
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
