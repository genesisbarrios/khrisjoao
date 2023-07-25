
import { useState } from "react";
import { Key, ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useMemo, useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './styles.css';
import Grid from '@material-ui/core/Grid'
import Paper from "@material-ui/core/Paper";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faWallet } from '@fortawesome/free-solid-svg-icons'


const GenWavOS = (props) => {


  useEffect(() => {
    
  }, []);

 
  return(
    <div>
      <Grid container spacing={2}> 
        <Grid item sm={2}> </Grid >
        <Grid item sm={8}>

          <Grid container spacing={2} style={{justifyContent:"center", margin:"10% 0"}}>
            <Grid item>
              Welcome to GenWavOS
            </Grid>
            <Grid item>
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={2}> </Grid>
      </Grid>
   </div>
    );
        
};

export default GenWavOS;
