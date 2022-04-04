// import React from 'react';
// import {Link} from 'react-router-dom'


// const Navbar = () => {
//   return (
//    <div className='navbar'>
//        <h3 > Online Shopping Center</h3>
//        <Link to = "/Cart"> Cart </Link>
//    </div>
   
//   )
// }

// export default Navbar

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Online Shopping Center
          </Typography>
          <Link color="inherit" to ="/cart"> Cart </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}