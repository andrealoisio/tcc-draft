import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@mui/material/Typography';
import ListAltIcon from '@mui/icons-material/ListAlt';

// export default function DetalheConveniados() {
//   const { id } = useParams();
//   return (
//           <>
//             <h1>Code Placeholder</h1>
//             <h1>{id}</h1>
//           </>
//         );
//       }

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textFieldTamanhoNome: {
    width: '280px !important',
  },
  textFieldTamanhoEndereco: {
    width: '400px !important',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    "& input.Mui-disabled": {
      color: "black"
    },
    "& label.Mui-disabled": {
      color: "green"
    },
  },
});
class FilledTextFields extends React.Component {

  state = {
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
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <Typography variant="h6">
          <ListAltIcon /> Detalhe de Conveniado
        </Typography>
        {/* <Typography variant="h6">{this.props.id}</Typography> */}
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="filled-name"
              label="Nome"
              className={classes.textField}
              value={this.state.nome}
              margin="normal"
              variant="filled"
              disabled={true}
              InputProps={{
                classes: {
                  input: classes.textFieldTamanhoNome,
                },
              }} />
            <TextField
              id="filled-name"
              label="Nome Fantasia"
              className={classes.textField}
              value={this.state.nomeFantasia}
              margin="normal"
              variant="filled"
              disabled={true}
              InputProps={{
                classes: {
                  input: classes.textFieldTamanhoNome,
                },
              }} />
            <TextField
              id="filled-name"
              label="e-Mail"
              className={classes.textField}
              value={this.state.email}
              margin="normal"
              variant="filled"
              disabled={true}
              InputProps={{
                classes: {
                  input: classes.textFieldTamanhoNome,
                },
              }} />
            <TextField
              id="filled-name"
              label="CNPJ"
              className={classes.textField}
              value={this.state.cnpj}
              margin="normal"
              variant="filled"
              disabled={true} />
            <TextField
              id="filled-name"
              label="Atividade"
              className={classes.textField}
              value={this.state.atividade}
              margin="normal"
              variant="filled"
              disabled={true} />
            <TextField
              id="filled-name"
              label="Data de Entrada no Sistema"
              className={classes.textField}
              value={this.state.dataRegistro}
              margin="normal"
              variant="filled"
              disabled={true} />
            <TextField
              id="filled-name"
              label="Telefone"
              className={classes.textField}
              value={this.state.telefone}
              margin="normal"
              variant="filled"
              disabled={true} />
            <TextField
              id="filled-name"
              label="Celular"
              className={classes.textField}
              value={this.state.celular}
              margin="normal"
              variant="filled"
              disabled={true} />
            <TextField
              id="filled-name"
              label="Nome do Responsável"
              className={classes.textField}
              value={this.state.nomeResponsavel}
              margin="normal"
              variant="filled"
              disabled={true}
              InputProps={{
                classes: {
                  input: classes.textFieldTamanhoNome,
                },
              }} />
            <TextField
              id="filled-name"
              label="Endereço"
              className={classes.textField}
              value={this.state.endereco}
              margin="normal"
              variant="filled"
              disabled={true}
              InputProps={{
                classes: {
                  input: classes.textFieldTamanhoEndereco,
                },
              }} />
            <TextField
              id="filled-name"
              label="Bairro"
              className={classes.textField}
              value={this.state.bairro}
              margin="normal"
              variant="filled"
              disabled={true} />
            <TextField
              id="filled-name"
              label="Cidade"
              className={classes.textField}
              value={this.state.cidade}
              margin="normal"
              variant="filled"
              disabled={true} />
            <TextField
              id="filled-name"
              label="UF"
              className={classes.textField}
              value={this.state.uf}
              margin="normal"
              variant="filled"
              disabled={true} />
            <TextField
              id="filled-name"
              label="CEP"
              className={classes.textField}
              value={this.state.cep}
              margin="normal"
              variant="filled"
              disabled={true} />
            <TextField
              id="filled-name"
              label="Banco"
              className={classes.textField}
              value={this.state.banco}
              margin="normal"
              variant="filled"
              disabled={true} />
            <TextField
              id="filled-name"
              label="Agência"
              className={classes.textField}
              value={this.state.agencia}
              margin="normal"
              variant="filled"
              disabled={true} />
            <TextField
              id="filled-name"
              label="Conta"
              className={classes.textField}
              value={this.state.conta}
              margin="normal"
              variant="filled"
              disabled={true} />
            <TextField
              id="filled-name"
              label="Coordenadas"
              className={classes.textField}
              value={this.state.cooredanadas}
              margin="normal"
              variant="filled"
              disabled={true} />
          </form>
        </>
    );
  }
}

FilledTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilledTextFields);