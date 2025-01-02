// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import "./Header.css";

const Footer = () => {
  return (
    <AppBar position="static" color="transparent" style={{backgroundColor:"black", textAlign:"center"}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">
            <img src="favicon.gif" alt="Logo" style={{ width: '50px', height: 'auto' }} />
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
