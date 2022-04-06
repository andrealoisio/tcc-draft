import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MediaQuery from 'react-responsive'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';


const useStyles = makeStyles((theme) => ({
  disabled: {
    "& input.Mui-disabled": {
      color: 'black !important'
    },
  },
}));
export default function DetalheConveniados() {
  const { seq_conveniado } = useParams();
  const classes = useStyles();
  // const value = [{
  //   nome: 'Hospital Santa Cruz',
  //   nomeFantasia: 'Hospital Santa Cruz LTDA',
  //   email: 'hospital.santa.cruz@gmail.com',
  //   cnpj: '19.106.757/0001-92',
  //   atividade: 'Hospital',
  //   dataRegistro: '10/10/2010',
  //   telefone: '(31) 2607-8090',
  //   celular: '(11) 94770-8090',
  //   nomeResponsavel: 'Roberval dos Santos Neto',
  //   endereco: 'Av Humberto de Alencar Castelo Branco, 889',
  //   bairro: 'Vila das Flores',
  //   cidade: 'Belo Horizonte',
  //   uf: 'MG',
  //   cep: '07890020',
  //   banco: '001',
  //   agencia: '0001',
  //   conta: '01001',
  //   cooredanadas: '40.7600000,-73.9840000',
  // }];
  const [value, setValues] = useState({nome: null})
  useEffect(() => {
    fetch(`http://localhost/conveniados/${seq_conveniado}`)
      .then(resp => resp.json())
      .then(resp => {
        setValues(resp)       
      })
      .catch(err => {console.log(err)})
  }, [seq_conveniado])

  return (
    <>
      <Typography variant="h6">
        <ListAltIcon /> Detalhe de Conveniado
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
        <Typography variant="h6">{seq_conveniado}</Typography>
        <div>
        {value ? 
            <>
              <MediaQuery minWidth="500px">
                {(matches) =>
                  matches
                    ? <><TextField multiline label="Nome" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.nome|| ''} sx={{ width: '280px !important', }} />
                      <TextField multiline label="Nome Fantasia" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.nome_fantasia|| ''} sx={{ width: '280px !important', }} />
                      <TextField multiline label="e-mail" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.email|| ''} sx={{ width: '280px !important', }} /></>
                    : <><TextField multiline label="Nome" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.nome|| ''} sx={{ width: '80% !important', }} />
                      <TextField multiline label="Nome Fantasia" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.nome_fantasia|| ''} sx={{ width: '80% !important', }} />
                      <TextField multiline label="e-mail" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.email|| ''} sx={{ width: '80% !important', }} /></>
                }
              </MediaQuery>
              <TextField label="CNPJ" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.cnpj || ''} />
              <TextField label="Atividade" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.atividade|| ''} />
              <TextField label="Data de registro" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.data_registro|| ''} />
              <TextField label="Telefone" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.telefone|| ''} />
              <TextField label="Celular" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.celular|| ''} />
              <MediaQuery minWidth="500px">
                {(matches) =>
                  matches
                    ? <><TextField multiline label="Nome do Responsável" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.nome_responsavel|| ''} sx={{ width: '280px !important', }} />
                      <TextField multiline label="Endereço" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.nome_endereco|| ''} sx={{ width: '400px !important', }} /></>
                    : <><TextField multiline label="Nome do Responsável" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.nome_responsavel|| ''} sx={{ width: '80% !important', }} />
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
              <TextField label="Coordenadas" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={value.coordenadas|| ''} />
            </>
          :
            <Typography variant="h6">Conveniado id:{seq_conveniado} não encontrado.</Typography> 
          }
        </div>
      </Box>
    </>
  );
}
