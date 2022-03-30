import React from 'react'; 
import { Box } from '@material-ui/core';
import { Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MediaQuery from 'react-responsive'


export default function Header() {
    return(
        <>
            <div style={{float: "right"}} >
                <MediaQuery minWidth="800px">
                    {(matches) =>
                        matches
                        ?                
                        <Typography variant="h5">
                            <DashboardIcon /> My Dashboard
                        </Typography>
                        :                        
                        <Typography variant="h7">
                            <DashboardIcon fontSize="xs"/> My Dashboard
                        </Typography>
                    }
                </MediaQuery>

            </div>
            <Link to={"/"}>
            <Tooltip title="Home">
                <Box
                    component="img"
                    alt="Home"
                    src="gisa.png" />
            </Tooltip>
            </Link>
        </>
    )
}
