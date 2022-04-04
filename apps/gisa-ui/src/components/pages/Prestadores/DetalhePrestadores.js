import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MediaQuery from 'react-responsive'
import { useParams } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'seqFormacao', headerName: 'id',  width: 80, hide:true },
  { field: 'nomeCurso', headerName: 'Nome do Curso', width: 250,  },
  { field: 'titulo', headerName: 'Título', width: 120  },
  { field: 'instituicao', headerName: 'Instituição', width: 200, },
  { field: 'areaConhecimento', headerName: 'Área de Conhecimento', width: 120 },
  { field: 'dataInicio', headerName: 'Data Inicio', width: 120 },
  { field: 'dataTermino', headerName: 'Data Término', width: 120 },
];
const rows = [
  { seqFormacao: 101049, nomeCurso: 'Mestrado em Radiologia',  titulo: 'MsC', instituicao: 'UFMG', areaConhecimento: 'Radiologia', dataInicio: '01/01/2021', dataTermino: '01/01/2023' },
  ];
const useStyles = makeStyles((theme) => ({
  disabled: {
    "& input.Mui-disabled": {
      color: 'black !important'
    },
  },
}));
export default function DetalheConveniados() {
  const { codigo } = useParams();
  const classes = useStyles();
  const value = [{
    nome: 'Juvenal dos Santos Neves',
    email: 'Jotalhao01@gmail.com',
    cpf: '000.000.001-91',
    cnpj: '19.106.757/0001-92',
    especializacao: 'Fisioterapia',
    dataRegistro: '10/10/2010',
    telefone: '(31) 2607-8090',
    celular: '(11) 94770-8090',
    endereco: 'Av Humberto de Alencar Castelo Branco, 889',
    bairro: 'Vila das Flores',
    cidade: 'Belo Horizonte',
    uf: 'MG',
    cep: '07890020',
    banco: '001',
    agencia: '0001',
    conta: '01001',
  }];
  return (
    <>
      <Typography variant="h6">
        <ListAltIcon /> Detalhe de Prestador
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          overflow: 'hidden',
          display: 'flex',
          flexWrap: 'wrap',
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h6">{codigo}</Typography>
        <div>
          {value.map((values) => (
            <>
              <MediaQuery minWidth="500px">
                {(matches) =>
                  matches
                    ? <><TextField multiline label="Nome" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.nome} sx={{ width: '280px !important', }} />
                      <TextField multiline label="e-mail" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.email} sx={{ width: '280px !important', }} /></>
                    : <><TextField multiline label="Nome" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.nome} sx={{ width: '80% !important', }} />
                      <TextField multiline label="e-mail" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.email} sx={{ width: '80% !important', }} /></>
                }
              </MediaQuery>
              <TextField label="CPF" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.cpf} />
              <TextField label="CNPJ" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.cnpj} />
              <TextField label="Especialização" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.especializacao} />
              <TextField label="Data de registro" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.dataRegistro} />
              <TextField label="Telefone" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.telefone} />
              <TextField label="Celular" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.celular} />
              <MediaQuery minWidth="500px">
                {(matches) =>
                  matches
                    ? <>
                      <TextField multiline label="Endereço" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.endereco} sx={{ width: '400px !important', }} /></>
                    : <>
                      <TextField multiline label="Endereço" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.endereco} sx={{ width: '80% !important', }} /></>
                }
              </MediaQuery>
              <TextField label="Bairro" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.bairro} />
              <TextField label="Cidade" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.cidade} />
              <TextField label="UF" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.uf} />
              <TextField label="CEP" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.cep} />
              <TextField label="Banco" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.banco} />
              <TextField label="Agência" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.agencia} />
              <TextField label="Conta Corrente" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.conta} />
              <Typography variant="h6"> <ListAltIcon /> Formação </Typography>
              <div style={{ height: 400, width: '100%' }}>
                <DataGrid 
                  getRowId={row => row.seqFormacao}
                  rowOptions={{ selectable: true }} 
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                />
              </div>   
            </>
          ))}
        </div>
      </Box>
    </>
  );
}
