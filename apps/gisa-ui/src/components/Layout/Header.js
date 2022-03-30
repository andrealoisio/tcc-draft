import React from 'react'; 
import { Box } from '@material-ui/core';
import { Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <Link to={"/"} >
            <Tooltip title="Home">
                <Box
                    component="img"
                    alt="Home"
                    src="gisa.png"
                />
            </Tooltip>
        </Link >
    )
}
