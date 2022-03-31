import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MoveDownIcon from '@mui/icons-material/MoveDown';

export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 275,margin: 1, height: 150, maxWidth: 275 }}>
      <CardContent>
        <MoveDownIcon  fontSize="large" /> 
        <Typography sx={{ mb: 1.5, float: "right", fontSize: 30}} color="green">
          {props.totalRemocao}
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: 18}} color="green">
          Total de Remoções 
        </Typography>
      </CardContent>
    </Card>
  );
}
