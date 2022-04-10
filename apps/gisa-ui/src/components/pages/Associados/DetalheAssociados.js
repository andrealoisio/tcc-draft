import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MediaQuery from 'react-responsive'
import { useParams } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';


const columns = [
  { field: 'numero', headerName: 'Número de Série', width: 120 },
  { field: 'nome', headerName: 'Nome do Associado', width: 250, align: "center" },
  { field: 'dataEmissao', headerName: 'Data Emissão', width: 120 },
  { field: 'dataVencimento', headerName: 'Data Vencimento', width: 120, align: "center" },
  { field: 'plano', headerName: 'Plano', width: 120 },
];
const rows = [
  { numero: 101049, dataEmissao: '10/10/2020', dataVencimento: '10/10/2020', nome: 'Cléber Santos da Cruz', plano: 'VIP' },
];

const useStyles = makeStyles((theme) => ({
  disabled: {
    "& input.Mui-disabled": {
      color: 'black !important'
    },
  },
}));
export default function DetalheAssociados() {
  const { matricula } = useParams();
  const classes = useStyles();

  const [value, setValues] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  //const [rows, setRows] = useState([])
  //const [loadingCarteirinhas, setLoadingCarteirinhas] = useState(true)
  //const [errorCarteirinhas, setErrorCarteirinhas] = useState(false)
  console.log(value)
  useEffect(() => {
    setValues(null)
    fetch(`http://localhost/associados/${matricula}`)
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
        setValues(resp)
        setLoading(false)
      })
      .catch(err => {
        setError(true)
        console.log(err)
      })
    // setRows(null)
    // fetch(`http://localhost/carteirinhas/${matricula}`)
    //   .then(resp => {
    //     if (resp.ok) {
    //       return resp.json()
    //     } else if(resp.status === 404) {
    //       return Promise.reject('error 404')
    //     } else {
    //       return Promise.reject('some other error: ' + resp.status)
    //     }      
    //   })
    //   .then(resp => {
    //     setRows(resp) 
    //     setLoadingCarteirinhas(false)      
    //   })
    //   .catch(err => {
    //     setErrorCarteirinhas(true)
    //     console.log(err)})        
  }, [matricula])

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
        <div>
          {value &&
            <>
              <TextField label="Matrícula" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.matricula|| ''} />
              <MediaQuery minWidth="500px">
                {(matches) =>
                  matches
                    ? <><TextField multiline label="Nome" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.nome|| ''} sx={{ width: '280px !important', }} />
                      <TextField multiline label="e-mail" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.email|| ''} sx={{ width: '280px !important', }} /></>
                    : <><TextField multiline label="Nome" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.nome|| ''} sx={{ width: '80% !important', }} />
                      <TextField multiline label="e-mail" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.email|| ''} sx={{ width: '80% !important', }} /></>
                }
              </MediaQuery>
              <TextField label="Data de nascimento" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.data_nascimento|| ''} />
              <TextField label="Data de registro" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.data_registro|| ''} />
              <TextField label="Plano Ativo?" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.is_ativo|| ''} />
              <TextField label="Plano" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.plano|| ''} />
              <TextField label="Telefone" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.telefone|| ''} />
              <TextField label="Celular" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.celular|| ''} />
              <MediaQuery minWidth="500px">
                {(matches) =>
                  matches
                    ? <><TextField multiline label="Nome da Mãe" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.nome_mae|| ''} sx={{ width: '280px !important', }} />
                      <TextField multiline label="Endereço" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.nome_endereco|| ''} sx={{ width: '400px !important', }} /></>
                    : <><TextField multiline label="Nome da Mãe" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.nome_mae|| ''} sx={{ width: '80% !important', }} />
                      <TextField multiline label="Endereço" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.nome_endereco|| ''} sx={{ width: '80% !important', }} /></>
                }
              </MediaQuery>
              <TextField label="Bairro" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.bairro|| ''} />
              <TextField label="Cidade" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.cidade|| ''} />
              <TextField label="UF" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.uf|| ''} />
              <TextField label="CEP" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.cep|| ''} />
              <TextField label="Banco" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.banco|| ''} />
              <TextField label="Agência" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.agencia|| ''} />
              <TextField label="Conta Corrente" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.conta|| ''} />
              <MediaQuery minWidth="500px">
                {(matches) =>
                  matches
                    ? <><TextField label="Coordenadas" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.cooredanadas|| ''} sx={{ width: '280px !important', }} /></>
                    : <><TextField label="Coordenadas" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.cooredanadas|| ''} sx={{ width: '80% !important', }} /></>
                }
              </MediaQuery>
              {/* {rows && 
              <>          */}
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
              {/* </>
              }    
              {loadingCarteirinha && 
                  <Typography variant="h6">Carregando...</Typography> 
              }
              {errorCarteirinha && 
                  <Typography variant="h6">Carteirinha id:{matricula} não encontrado.</Typography> 
              }              
            </> */}
            </>
          }
        </div>
        {loading &&
          <Typography variant="h6">Carregando...</Typography>
        }
        {error &&
          <Typography variant="h6">Associado id:{matricula} não encontrado.</Typography>
        }
      </Box>
    </>
  );
}
