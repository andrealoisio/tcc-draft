import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import MoveDownIcon from '@mui/icons-material/MoveDown';
import GroupsIcon from '@mui/icons-material/Groups';
import MediaQuery from 'react-responsive'


export default function BasicCard({resumo}) {
  return (
    <MediaQuery minWidth="500px">
      {(matches) =>
        matches
          ?
          <>
            <Card sx={{ minWidth: 275, margin: 1, height: 150, maxWidth: 275 }}>
              <CardContent>
                <FactCheckIcon fontSize="large" />
                <Typography sx={{ mb: 1.5, float: "right", fontSize: 30 }} color="green">
                  {resumo.totalAtendimentos}
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize: 18 }} color="green">
                  Atendimentos em Conveniados
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 275, margin: 1, height: 150, maxWidth: 275 }}>
              <CardContent>
                <GroupsIcon fontSize="large" />
                <Typography sx={{ mb: 1.5, float: "right", fontSize: 30 }} color="green">
                  {resumo.totalConveniados}
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize: 18 }} color="green">
                  Total de Conveniados
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 275, margin: 1, height: 150, maxWidth: 275 }}>
              <CardContent>
                <MoveDownIcon fontSize="large" />
                <Typography sx={{ mb: 1.5, float: "right", fontSize: 30 }} color="green">
                  {resumo.totalRemocoes}
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize: 18 }} color="green">
                  Total de Remoções
                </Typography>
              </CardContent>
            </Card>
          </>
          :
          <>
            <Card sx={{ width: "100%", margin: 1, height: 150, maxWidth: 250 }}>
              <CardContent>
                <FactCheckIcon fontSize="medium" />
                <Typography sx={{ mb: 1.5, float: "right", fontSize: 20 }} color="green">
                {resumo.totalAtendimentos}
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize: 18 }} color="green">
                  Atendimentos em Conveniados
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ width: "100%", margin: 1, height: 150, maxWidth: 250 }}>
              <CardContent>
                <GroupsIcon fontSize="medium" />
                <Typography sx={{ mb: 1.5, float: "right", fontSize: 20 }} color="green">
                  {resumo.totalConveniados}
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize: 18 }} color="green">
                  Total de Conveniados
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ width: "100%", margin: 1, height: 150, maxWidth: 250 }}>
              <CardContent>
                <MoveDownIcon fontSize="medium" />
                <Typography sx={{ mb: 1.5, float: "right", fontSize: 20 }} color="green">
                  {resumo.totalRemocoes}
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize: 18 }} color="green">
                  Total de Remoções
                </Typography>
              </CardContent>
            </Card>
          </>
      }
    </MediaQuery>
  );
}
