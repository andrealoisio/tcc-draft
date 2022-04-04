import React from 'react';
import Typography from '@mui/material/Typography';
import MediaQuery from 'react-responsive'

export default function Splash() {
    return (
        <div>
            <MediaQuery minWidth="500px">
                {(matches) =>
                    matches
                        ? <><Typography align="center" variant="h5">GISA - Gestão Integrada de Saúde do Associado </Typography><Typography align="center" variant="h5">Trabalho de Conclusão de Curso </Typography></>
                        : <><Typography align="center" variant="h6">GISA - Gestão Integrada de Saúde do Associado </Typography><Typography align="center" variant="h6">Trabalho de Conclusão de Curso </Typography></>
                }
            </MediaQuery>
            <Typography align="center" variant="subtitle1">Arquitetura de Software Distribuido 2020</Typography>
            <Typography align="center" variant="subtitle1">Daniel Mariano Castilho e André Aloisio Mendes</Typography>
        </div>
    )
}