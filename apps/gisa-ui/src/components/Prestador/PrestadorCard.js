import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import GroupsIcon from '@mui/icons-material/Groups';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function BasicCard(props) {
  return (
    <>
      <Card sx={{ minWidth: 275, margin: 1, height: 150, maxWidth: 275 }}>
        <CardContent>
          <FactCheckIcon fontSize="large" />
          <Typography sx={{ mb: 1.5, float: "right", fontSize: 30 }} color="green">
            {props.valores.totalAtendimentos}
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize: 18 }} color="green">
            Total de Atendimentos
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275, margin: 1, height: 150, maxWidth: 275 }}>
        <CardContent>
          <CreditCardIcon fontSize="large" />
          <Typography sx={{ mb: 1.5, float: "right", fontSize: 30 }} color="green">
            {props.valores.totalCarteirinhas}
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize: 18 }} color="green">
            Carteirinhas Emitidas
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275, margin: 1, height: 150, maxWidth: 275 }}>
        <CardContent>
          <GroupsIcon fontSize="large" />
          <Typography sx={{ mb: 1.5, float: "right", fontSize: 30 }} color="green">
            {props.valores.totalAssociados}
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize: 18 }} color="green">
            Total de Associados
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275, margin: 1, height: 150, maxWidth: 275 }}>
        <CardContent>
          <CheckCircleIcon fontSize="large" />
          <Typography sx={{ mb: 1.5, float: "right", fontSize: 30 }} color="green">
            {props.valores.totalAssociadosAtivos}
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize: 18 }} color="green">
            Associados Ativos
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
