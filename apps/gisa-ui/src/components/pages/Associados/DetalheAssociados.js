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
  { field: 'numero', headerName: 'Número de Série', width: 120 },
  { field: 'nome', headerName: 'Nome do Associado', width: 250, align: "center"  },
  { field: 'dataEmissao', headerName: 'Data Emissão', width: 120  },
  { field: 'dataVencimento', headerName: 'Data Vencimento', width: 120, align: "center" },
  { field: 'plano', headerName: 'Plano', width: 120 },
];
const rows = [
  { numero: 101049, dataEmissao: '10/10/2020',  dataVencimento: '10/10/2020',  nome: 'Cléber Santos da Cruz', plano: 'VIP'  },
  ];

const useStyles = makeStyles((theme) => ({
  disabled: {
    "& input.Mui-disabled": {
      color: 'black !important'
    },
  },
}));
export default function DetalheConveniados() {
  const { matricula } = useParams();
  const classes = useStyles();
  const value = [{
    matricula: '101049',
    nome: 'Cléber Santos da Cruz',
    email: 'cleber.s.cruz@yahoo.com.br',
    dataNascimento: '10/10/2010',
    dataRegistro: '10/10/2010',
    estaAtivo: 'S',
    plano: 'VIP',
    telefone: '(31) 2607-8090',
    celular: '(11) 94770-8090',    
    nomeMae: 'Raimunda Nonato',
    endereco: 'Av Humberto de Alencar Castelo Branco, 889',
    bairro: 'Vila das Flores',
    cidade: 'Belo Horizonte',
    uf: 'MG',
    cep: '07890020',
    banco: '001',
    agencia: '0001',
    conta: '01001',
    cooredanadas: '40.7600000,-73.9840000',
  }];
  return (
    <>
      <Typography variant="h6"> <ListAltIcon /> Detalhe de Associado </Typography>
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
        <Typography variant="h6">{matricula}</Typography>
        <div>
          {value.map((values) => (
            <>
              <TextField label="Matrícula" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.matricula} />
              <MediaQuery minWidth="500px">
                {(matches) =>
                  matches
                    ? <><TextField multiline label="Nome" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.nome} sx={{ width: '280px !important', }} />
                      <TextField multiline label="e-mail" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.email} sx={{ width: '280px !important', }} /></>
                    : <><TextField multiline label="Nome" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.nome} sx={{ width: '80% !important', }} />
                      <TextField multiline label="e-mail" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.email} sx={{ width: '80% !important', }} /></>
                }
              </MediaQuery>
              <TextField label="Data de nascimento" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.dataNascimento} />
              <TextField label="Data de registro" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.dataRegistro} />
              <TextField label="Plano Ativo?" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.estaAtivo} />
              <TextField label="Plano" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.plano} />
              <TextField label="Telefone" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.telefone} />
              <TextField label="Celular" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.celular} />              
              <MediaQuery minWidth="500px">
                {(matches) =>
                  matches
                    ? <><TextField multiline label="Nome da Mãe" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.nomeMae} sx={{ width: '280px !important', }} />
                      <TextField multiline label="Endereço" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.endereco} sx={{ width: '400px !important', }} /></>
                    : <><TextField multiline label="Nome da Mãe" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.nomeMae} sx={{ width: '80% !important', }} />
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
              <MediaQuery minWidth="500px">
                {(matches) =>
                  matches
                    ? <><TextField label="Coordenadas" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.cooredanadas} sx={{ width: '280px !important', }} /></>
                    : <><TextField label="Coordenadas" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.cooredanadas} sx={{ width: '80% !important', }} /></>
                }
              </MediaQuery>              
              <Typography variant="h6"> <ListAltIcon /> Detalhes de Carteirinha </Typography>
              <div style={{ height: 400, width: '100%' }}>
                <DataGrid 
                  getRowId={row => row.numero}
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
