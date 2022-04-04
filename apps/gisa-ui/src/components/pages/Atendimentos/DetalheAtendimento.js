import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MediaQuery from 'react-responsive'
import { useParams } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';

const columnsAutorizacao = [
  { field: 'codigo', headerName: 'codigo', width: 120 },
  { field: 'dataEntrada', headerName: 'Data Atendimento', width: 120, align: "center"  },
  { field: 'dataAprovacao', headerName: 'Data Aprovação', width: 120  },
  { field: 'dataVencimento', headerName: 'Data Vencimento', width: 120, align: "center" },
  { field: 'tipo', headerName: 'Tipo', width: 250 },
  { field: 'situacao', headerName: 'Situacao', width: 120, align: "center" },
];
const rowsAutorizacao = [
  { codigo: 101049, dataEntrada: '10/10/2020',  dataAprovacao: '10/10/2020',  dataVencimento: '10/10/2020', tipo: 'Autorizacao Consulta' , situacao: 'Aprovada' },
  { codigo: 101080, dataEntrada: '10/10/2022',  dataAprovacao: '',  dataVencimento: '10/10/2023', tipo: 'Cirurgia Tornozelo' , situacao: 'Em analise' },
  ];
const columnsRemocao = [
  { field: 'seqRemocaoAssociado', headerName: 'id', width: 100 },
  { field: 'nomeAssociado', headerName: 'Nome Associado', width: 250 },
  { field: 'enderecoOrigem', headerName: 'Endereco Origem', width: 250 },
  { field: 'enderecoDestino', headerName: 'Endereco Destino', width: 250  },
  { field: 'coordenadasOrigem', headerName: 'Coordenadas Origem', width: 120  },
  { field: 'coordenadasDestino', headerName: 'Coordenadas Destino', width: 120  },
  { field: 'nomeConveniado', headerName: 'Nome Conveniado', width: 250 },
];
const rowsRemocao = [
  { seqRemocaoAssociado: 101049,  nomeAssociado: 'Cléber Santos da Cruz', enderecoOrigem: 'Rua das Flores, 2900', enderecoDestino: 'Av Prestes Maia, 2090' , coordenadasOrigem: '40.7600000,-73.9840000', coordenadasDestino: '40.7600000,-73.9840000', nomeConveniado: 'Hospital Josefina' },
  ];
const value = [{
  dataAtendimento: '10/10/2020',
  matriculaAssociado: '883784',
  nomeAssociado: 'Cléber Santos da Cruz',
  situacao: 'Em Andamento',
  tipo: 'Consulta Médica',
  custo: 'R$ 250,00',
  cid: '216',
  nomePrestador: 'Reginaldo Gomes',
  codigoPrestador: '352522',
  nomeConveniado: 'Fisioterapia Minas',
  seqConveniado: '3643634',
}];
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
  return (
    <>
      <Typography variant="h6">
        <ListAltIcon /> Detalhe de Atendimento
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
        <Typography variant="h6">{matricula}</Typography>
        <div>
          {value.map((values) => (
            <>
              <TextField label="Data de Atendimento" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.dataAtendimento} />               
              <TextField label="Matrícula Associado" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.matriculaAssociado} />               
              <MediaQuery minWidth="500px">
                {(matches) =>
                  matches
                    ? <> <TextField multiline label="Nome Associado" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.nomeAssociado} sx={{ width: '280px !important', }} /> </>
                    : <> <TextField multiline label="Nome" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.nome} sx={{ width: '80% !important', }} /> </> 
                }
              </MediaQuery>
              <TextField label="Situação" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.situacao} />              
              <TextField label="Tipo" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.tipo} />              
              <TextField label="Custo" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.custo} />              
              <TextField label="CID" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.cid} />    
              <TextField label="Código Prestador" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.codigoPrestador} />    
              <MediaQuery minWidth="500px">
                {(matches) =>
                  matches
                    ? <> <TextField multiline label="Nome Prestador" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.nomePrestador} sx={{ width: '280px !important', }} /> </> 
                    : <> <TextField multiline label="Nome Prestador" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.nomePrestador} sx={{ width: '80% !important', }} /> </>
                }
              </MediaQuery>                          
              <TextField label="Código Conveniado" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.seqConveniado} />    
              <MediaQuery minWidth="500px">
                {(matches) =>
                  matches
                    ? <> <TextField multiline label="Nome Clínica/ Parceiro" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.nomeConveniado} sx={{ width: '280px !important', }} /> </>
                    : <> <TextField multiline label="Nome Clínica/ Parceiro" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.nomeConveniado} sx={{ width: '80% !important', }} /> </>
                }
              </MediaQuery> 
              <Typography display="block" variant="h6"> <ListAltIcon /> Autorizações </Typography>              
              <div style={{ height: 400, width: '100%' }}>
                <DataGrid 
                  getRowId={row => row.codigo}
                  rowOptions={{ selectable: true }} 
                  rows={rowsAutorizacao}
                  columns={columnsAutorizacao}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                />
              </div>              
              <Typography display="block" variant="h6"> <ListAltIcon /> Remoções </Typography>              
              <div style={{ height: 400, width: '100%' }}>
                <DataGrid 
                  getRowId={row => row.seqRemocaoAssociado}
                  rowOptions={{ selectable: true }} 
                  rows={rowsRemocao}
                  columns={columnsRemocao}
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
