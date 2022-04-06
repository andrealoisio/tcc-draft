import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MediaQuery from 'react-responsive'
import { useParams } from "react-router-dom";

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
  const value = [{
    nome: 'Hospital Santa Cruz',
    nomeFantasia: 'Hospital Santa Cruz LTDA',
    email: 'hospital.santa.cruz@gmail.com',
    cnpj: '19.106.757/0001-92',
    atividade: 'Hospital',
    dataRegistro: '10/10/2010',
    telefone: '(31) 2607-8090',
    celular: '(11) 94770-8090',
    nomeResponsavel: 'Roberval dos Santos Neto',
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
          {value.map((values) => (
            <>
              <MediaQuery minWidth="500px">
                {(matches) =>
                  matches
                    ? <><TextField multiline label="Nome" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.nome} sx={{ width: '280px !important', }} />
                      <TextField multiline label="Nome Fantasia" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.nomeFantasia} sx={{ width: '280px !important', }} />
                      <TextField multiline label="e-mail" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.email} sx={{ width: '280px !important', }} /></>
                    : <><TextField multiline label="Nome" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.nome} sx={{ width: '80% !important', }} />
                      <TextField multiline label="Nome Fantasia" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.nomeFantasia} sx={{ width: '80% !important', }} />
                      <TextField multiline label="e-mail" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.email} sx={{ width: '80% !important', }} /></>
                }
              </MediaQuery>
              <TextField label="CNPJ" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.cnpj} />
              <TextField label="Atividade" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.atividade} />
              <TextField label="Data de registro" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.dataRegistro} />
              <TextField label="Telefone" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.telefone} />
              <TextField label="Celular" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.celular} />
              <MediaQuery minWidth="500px">
                {(matches) =>
                  matches
                    ? <><TextField multiline label="Nome do Responsável" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.nomeResponsavel} sx={{ width: '280px !important', }} />
                      <TextField multiline label="Endereço" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.endereco} sx={{ width: '400px !important', }} /></>
                    : <><TextField multiline label="Nome do Responsável" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.nomeResponsavel} sx={{ width: '80% !important', }} />
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
              <TextField label="Coordenadas" className={classes.textField} InputProps={{ classes: { disabled: classes.disabled }, }} value={values.conta} />
            </>
          ))}
        </div>
      </Box>
    </>
  );
}
