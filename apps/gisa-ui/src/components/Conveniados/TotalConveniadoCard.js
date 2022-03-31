import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GroupsIcon from '@mui/icons-material/Groups';

export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 275,margin: 1, height: 150, maxWidth: 275 }}>
      <CardContent>
        <GroupsIcon  fontSize="large" /> 
        <Typography sx={{ mb: 1.5, float: "right", fontSize: 30}} color="green">
          {props.totalConveniado}
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: 18}} color="green">
          Total de Conveniados
        </Typography>
      </CardContent>
    </Card>
  );
}
