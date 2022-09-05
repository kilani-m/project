import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LaptopIcon from '@mui/icons-material/Laptop';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleOutlineIcon />
      </ListItemIcon>
      <Link style={{textDecoration:"none", color:"black"}} to="/listeFormateur">
      <ListItemText primary="Liste formateurs" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link style={{textDecoration:"none", color:"black"}} to="/listeCandidat">
      <ListItemText primary="List candidats" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LaptopIcon />
      </ListItemIcon>
      <Link style={{textDecoration:"none", color:"black"}} to="/listeCourses">
      <ListItemText primary="Liste courses" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton>
  </React.Fragment>
);

export const mainListItemsFormateur = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link style={{textDecoration:"none", color:"black"}} to="/Dashboard">
      <ListItemText primary="Dashboard" />
      </Link>
    </ListItemButton>
    
    <ListItemButton>
      <ListItemIcon>
        <LaptopIcon />
      </ListItemIcon>
      <Link style={{textDecoration:"none", color:"black"}} to="/listeCourses">
      <ListItemText primary="Manage courses" />
      </Link>
    </ListItemButton>
   
    <ListItemButton>

      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link style={{textDecoration:"none", color:"black"}} to="/listeCandidat">
      <ListItemText primary="Manage candidates" />
      </Link>
    </ListItemButton>
    <ListItemButton>
    <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <Link style={{textDecoration:"none", color:"black"}} to="/AddCourses">
      <ListItemText primary="Add courses" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    
     
    
  </React.Fragment>
);
