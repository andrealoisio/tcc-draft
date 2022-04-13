import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
import GridOnIcon from '@mui/icons-material/GridOn';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function AsideMenu() {
  return (
    <Paper sx={{ width: 250, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem component={Link} to="/atendimentos">
          <RemoveRedEyeIcon sx={{minWidth: (theme) => theme.spacing(4)}}>
            <GridOnIcon fontSize="small" />
          </RemoveRedEyeIcon>
          <ListItemText>Atendimentos</ListItemText>
        </MenuItem>
        <MenuItem component={Link} to="/associados">
          <AccountCircleIcon  sx={{minWidth: (theme) => theme.spacing(4)}}>
            <GridOnIcon fontSize="small" />
          </AccountCircleIcon>
          <ListItemText>Associados</ListItemText>
        </MenuItem>
        <MenuItem component={Link} to="/prestadores">
          <HandshakeIcon sx={{minWidth: (theme) => theme.spacing(4)}}>
            <GridOnIcon fontSize="small" />
          </HandshakeIcon>
          <ListItemText>Prestadores</ListItemText>
        </MenuItem>
        <MenuItem component={Link} to="/conveniados">
          <LocalHospitalIcon sx={{minWidth: (theme) => theme.spacing(4)}}>
            <GridOnIcon fontSize="small" />
          </LocalHospitalIcon>
          <ListItemText>Conveniados</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
