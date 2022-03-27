import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from "react-router-dom";
import ApiIcon from '@mui/icons-material/Api';
import HomeIcon from '@mui/icons-material/Home';
import GridOnIcon from '@mui/icons-material/GridOn';

export default function IconMenu() {
  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem component={Link} to="/home">
          <ListItemIcon>
            <ApiIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>RecuperaAPI</ListItemText>
        </MenuItem>
        <MenuItem component={Link} to="/datatable">
          <ListItemIcon>
            <GridOnIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>API com DataTable</ListItemText>
        </MenuItem>
        <MenuItem component={Link} to="/">
          <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Pagina Inicial</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
