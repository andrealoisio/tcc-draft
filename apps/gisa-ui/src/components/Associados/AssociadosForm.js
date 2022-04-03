import React from 'react';
import AssociadoCard from './AssociadoCard';
import { DataGrid } from '@mui/x-data-grid';
// import { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Link } from 'react-router-dom';
import LoupeIcon from '@mui/icons-material/Loupe';
import Button from "@material-ui/core/Button";

const value = [{
  totalAtendimentos: '124155',
  totalCarteirinhas: '224543',
  totalAssociados: '4453252',
  totalAssociadosAtivos: '35553',
}];

const columns = [
  { field: 'matricula', headerName: 'Matrícula', width: 100 },
  { field: 'nome', headerName: 'Nome', width: 250  },
  { field: 'cpf', headerName: 'CPF', width: 150, align: "center" },
  { field: 'email', headerName: 'e-mail', width: 250, align: "center" },
  { field: 'plano', headerName: 'Plano Contratado', width: 150, align: "center" },
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
        <Link to={"/detalheAssociados/" + params.row.matricula}>
          <Button variant="contained" color="primary"><LoupeIcon /></Button>
        </Link>        
      );
    }
  },
];
const rows = [
  { matricula: 101049, nome: 'Cléber Santos da Cruz', cpf: '093.812.400-51', email: 'cleber.s.cruz@yahoo.com.br', plano: 'VIP' },
  { matricula: 102000, nome: 'Maria dos Milagres Silva', cpf: '093.812.400-51', email: 'maria.milagres@yahoo.com.br', plano: 'Apartamento' },
  { matricula: 143563, nome: 'Julio Souza Empaminhondas', cpf: '093.812.400-51', email: 'j.s.empaminhondas@yahoo.com.br', plano: 'VIP' },
  { matricula: 135672, nome: 'Mônica Ferreira', cpf: '093.812.400-51', email: 'monica.ferreira@yahoo.com.br', plano: 'Básico' },
  { matricula: 135456, nome: 'Alberto Ferraz de Vasconcellos', cpf: '093.812.400-51', email: 'alberto.ferraz.v@yahoo.com.br', plano: 'VIP' },
  { matricula: 135278, nome: 'Bruno Pereira de Lima e Silva ', cpf: '093.812.400-51', email: 'bruno.p.limaa@yahoo.com.br', plano: 'VIP' },
  { matricula: 139876, nome: 'Carlos Alberto de Nobrega', cpf: '093.812.400-51', email: 'cazabe@yahoo.com.br', plano: 'VIP' },
];

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'username', headerName: 'User Name', width: 130 },
//   { field: 'name', headerName: 'Name', width: 130 },
//   { field: 'email', headerName: 'e-Mail', width: 130 },
//   { field: 'phone', headerName: 'Phone', width: 130 },
//   { field: 'website', headerName: 'WebSite', width: 130 },
// ]
const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex', 
    flexDirection: "row",
    flexWrap: 'wrap',
  },
}));


export default function AssociadoForm() {
  const classes = useStyles();
  // const [rows, setRows] = useState([])

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(resp => resp.json())
  //     .then(resp => {
  //       setRows(resp)
  //     })
  // }, [])

  return (
    <div className="App">
      <div className={classes.card}>
        {value.map((values) => (
          <AssociadoCard valores={values}/>
        ))};  
      </div>
      <div>     
        <Typography variant="h6">
          <ListAltIcon /> Conveniados
        </Typography>
      </div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid 
          getRowId={row => row.matricula}
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
