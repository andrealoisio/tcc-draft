import { useEffect, useState } from 'react';
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
  { field: 'data_entrada', headerName: 'Data Atendimento', width: 120, align: "center"  },
  { field: 'data_aprovacao', headerName: 'Data Aprovação', width: 120  },
  { field: 'data_vencimento', headerName: 'Data Vencimento', width: 120, align: "center" },
  { field: 'tipo_autorizacao', headerName: 'Tipo', width: 250 },
  { field: 'situacao', headerName: 'Situacao', width: 120, align: "center" },
];
// const rowsAutorizacao = [
//   { codigo: 101049, dataEntrada: '10/10/2020',  dataAprovacao: '10/10/2020',  dataVencimento: '10/10/2020', tipo: 'Autorizacao Consulta' , situacao: 'Aprovada' },
//   { codigo: 101080, dataEntrada: '10/10/2022',  dataAprovacao: '',  dataVencimento: '10/10/2023', tipo: 'Cirurgia Tornozelo' , situacao: 'Em analise' },
//   ];
const columnsRemocao = [
  { field: 'seq_remocao', headerName: 'id', width: 100 },
  // { field: 'nomeAssociado', headerName: 'Nome Associado', width: 250 },
  { field: 'nome_endereco_origem', headerName: 'Endereco Origem', width: 250 },
  { field: 'nome_endereco_destino', headerName: 'Endereco Destino', width: 250  },
  { field: 'coordenadasOrigem', headerName: 'Coordenadas Origem', width: 120  },
  { field: 'coordenadasDestino', headerName: 'Coordenadas Destino', width: 120  },
  { field: 'nomeConveniado', headerName: 'Nome Conveniado', width: 250 },
];
// const rowsRemocao = [
//   { seqRemocaoAssociado: 101049,  nomeAssociado: 'Cléber Santos da Cruz', enderecoOrigem: 'Rua das Flores, 2900', enderecoDestino: 'Av Prestes Maia, 2090' , coordenadasOrigem: '40.7600000,-73.9840000', coordenadasDestino: '40.7600000,-73.9840000', nomeConveniado: 'Hospital Josefina' },
//   ];
const value = {
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
};
const useStyles = makeStyles((theme) => ({
  disabled: {
    "& input.Mui-disabled": {
      color: 'black !important'
    },
  },
}));
export default function DetalheConveniados() {
  const { seqAtendimento } = useParams();
  const classes = useStyles();

  const [atendimento, setAtendimento] = useState(null)
  const [autorizacoes, setAutorizacoes] = useState([])
  const [remocoes, setRemocoes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)


  useEffect(() => {
    fetch(`http://localhost/atendimentos/${seqAtendimento}`)
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
        setAtendimento(resp)
        console.log('atendimento', resp)
        setLoading(false)
      })
      .catch(err => {
        setError(true)
        setLoading(false)
        console.log(err)
      })
  }, [seqAtendimento])

  useEffect(() => {
    fetch(`http://localhost/autorizacoes/${seqAtendimento}`)
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
        setAutorizacoes(resp)
        console.log('Autorizações', resp)
      })
      .catch(err => {
        console.log(err)
      })
  }, [seqAtendimento])

  useEffect(() => {
    fetch(`http://localhost/remocoes/${seqAtendimento}`)
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
        setRemocoes(resp)
        console.log('Remocoes', resp)
      })
      .catch(err => {
        console.log(err)
      })
  }, [seqAtendimento])


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
        {/* <Typography variant="h6">{seqAtendimento}</Typography> */}
        <div>
          
          
            <>
              
              {atendimento &&
                <>
                  <TextField label="Data de Atendimento" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={atendimento.dataAtendimento} />               
                  <TextField label="Matrícula Associado" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={atendimento.matriculaAssociado} />               
                  <MediaQuery minWidth="500px">
                    {(matches) =>
                      matches
                        ? <> <TextField multiline label="Nome Associado" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={atendimento.nomeAssociado} sx={{ width: '280px !important', }} /> </>
                        : <> <TextField multiline label="Nome" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={atendimento.nomeAssociado} sx={{ width: '80% !important', }} /> </> 
                    }
                  </MediaQuery>
                  <TextField label="Situação" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={atendimento.situacao} />              
                  <TextField label="Tipo" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={atendimento.tipo} />              
                  <TextField label="Custo" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={atendimento.custo || '10,00'} />
                  <TextField label="CID" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={atendimento.cid} />    
                  <TextField label="Código Prestador" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={atendimento.codigoPrestador} />    
                  <MediaQuery minWidth="500px">
                    {(matches) =>
                      matches
                        ? <> <TextField multiline label="Nome Prestador" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={atendimento.nomePrestador} sx={{ width: '280px !important', }} /> </> 
                        : <> <TextField multiline label="Nome Prestador" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={atendimento.nomePrestador} sx={{ width: '80% !important', }} /> </>
                    }
                  </MediaQuery>                          
                  <TextField label="Código Conveniado" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.seqConveniado} />    
                  <MediaQuery minWidth="500px">
                    {(matches) =>
                      matches
                        ? <> <TextField multiline label="Nome Clínica/ Parceiro" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={atendimento.clinicaParceira || ''} sx={{ width: '280px !important', }} /> </>
                        : <> <TextField multiline label="Nome Clínica/ Parceiro" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={atendimento.clinicaParceira || ''} sx={{ width: '80% !important', }} /> </>
                    }
                  </MediaQuery> 
                </>
              }
              
              <Typography display="block" variant="h6"> <ListAltIcon /> Autorizações </Typography>              
              {autorizacoes && autorizacoes.length > 0 &&
                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid 
                    getRowId={row => row.codigo}
                    rowOptions={{ selectable: true }} 
                    rows={autorizacoes}
                    columns={columnsAutorizacao}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                  />
                </div>
              } 

              <Typography display="block" variant="h6"> <ListAltIcon /> Remoções </Typography>              
              
              {remocoes &&
                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid 
                    getRowId={row => row.seq_remocao}
                    rowOptions={{ selectable: true }} 
                    rows={remocoes}
                    columns={columnsRemocao}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                  />
                </div>
              }
            </>
          )
        </div>
      </Box>
    </>
  );
}
