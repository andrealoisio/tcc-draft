import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function BasicCard({resumo}) {
  return (
    <>
      <Card sx={{ minWidth: 275, margin: 1, height: 150, maxWidth: 275 }}>
        <CardContent>
          <CreditCardIcon fontSize="large" />
          <Typography sx={{ mb: 1.5, float: "right", fontSize: 30 }} color="green">
            {resumo.totalCarterinhasEmitidas}
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize: 18 }} color="green">
            Carteirinhas Emitidas
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275, margin: 1, height: 150, maxWidth: 275 }}>
        <CardContent>
          <CheckCircleIcon fontSize="large" />
          <Typography sx={{ mb: 1.5, float: "right", fontSize: 30 }} color="green">
            {resumo.totalAssociadosAtivos}
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize: 18 }} color="green">
            Associados Ativos
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
