
import { useState } from "react";
import { Key, ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useMemo, useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './styles.css'
import Grid from '@material-ui/core/Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faWallet } from '@fortawesome/free-solid-svg-icons'
import { MenuList, MenuListItem, Separator, styleReset, Window, WindowHeader, WindowContent, Frame, Button } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Alert, SliderThumb } from "@material-ui/core";
import '@react95/icons/icons.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Card, CardContent, div, Paper} from "@material-ui/core";
import { Carousel } from 'react-responsive-carousel';
/* Pick a theme of your choice */
import brick from 'react95/dist/themes/brick';
import blue from 'react95/dist/themes/blue';
import original from 'react95/dist/themes/original';
import millenium from 'react95/dist/themes/millenium';
import vaporTeal from 'react95/dist/themes/vaporTeal';
import modernDark from 'react95/dist/themes/modernDark';
import azureOrange from 'react95/dist/themes/azureOrange';
import denim from 'react95/dist/themes/denim';
import coldGray from 'react95/dist/themes/coldGray';
import matrix from 'react95/dist/themes/matrix';
import rainyDay from 'react95/dist/themes/rainyDay';
import aiee from 'react95/dist/themes/aiee';
import slate from 'react95/dist/themes/slate';
import shelbiTeal from 'react95/dist/themes/shelbiTeal';

import { Avatar } from "react95";
import React from "react";
import { Mail, Mail2, CdMusic, cdMusicData, MediaVideo, mediaVideoData, Mic } from '@react95/icons';
import { GlobeSimple, InstagramLogo, TwitterLogo, TiktokLogo, SoundcloudLogo, DiscordLogo, SpotifyLogo, AppleLogo, YoutubeLogo, GithubLogo, AmazonLogo, TidalLogo  } from "@phosphor-icons/react";
import axios from "axios"; 

const EPK = (props) => {
  const [email, setEmail] = useState("");
  const [fan, setFan] = useState(false);
  const [producer, setProducer] = useState(false);
  const [artist, setArtist] = useState(false);
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState("");

  useEffect(() => {
    
    //hide elements
    if(document){
      const welcomeBox = document.getElementById("welcomeBox");
      welcomeBox.style.display = "none";
    }
  }, []);

  useEffect(() => {
    //hide elements
    if(email){
    console.log(email);
    }
    if(producer){
      console.log(producer)
    }
    if(artist){
      console.log(artist)
    }
  }, );

  function handleOpenDialog(){
    //<a href="https://www.beatstars.com/genwav/sound-kits/179946" target="_blank" style={{textDecoration:"none", cursor:"pointer"}}></a>
    if(document){
      const dialog = document.querySelector("dialog")
      dialog.showModal();
    }
  }

  function handleCloseSignUp() {
    if(document){
      const dialog = document.querySelector("dialog")
      dialog.close();
    }
  }

  function handleSubmit() {
    const dataToSend = {
      email: email,
      subject: producer,
      body: artist
    };
  
    // Make a POST request using Axios
    axios.post('https://localhost:3001/sendEmail', dataToSend)
      .then((response) => {
        // Handle the response if needed
        console.log('Request successful', response.data);
        setMessage('Your e-mail has been saved!')
        window.open("https://www.beatstars.com/genwav/sound-kits/179946", "_blank")
      })
      .catch((error) => {
        // Handle errors
        console.error('Error: ', error);
        window.alert(error);
        setAlert('Error: ', error)
      });

    setAlert('There was an error.');

  }
 
  const pdfUrl = 'https://www.dropbox.com/scl/fi/fqwizf2o29pknnfhkxwgz/ELECTRONIC-PRESS-KIT-2.pdf?rlkey=ytaf41lgcv6fte2cgxypn78u6&dl=0';
  
  return(
    <div id="GENESIS">
    <div style={{ textAlign: "center" }}>
      <div id="GenesisImageDiv">
        <img 
          src="https://dl.dropboxusercontent.com/s/5xnhgm2ke222zk0d0wa9r/GENESIS-SQUARE.gif?rlkey=to0w09trb4yiykopazuwr1vxd&st=p7jqx8e8&dl=0"
          alt="GENESIS Album" type="gif"
          style={{ height: "auto", width: "auto", maxWidth: "35%", objectFit: "cover", margin: "2% 0", borderRadius:"15px" }}></img>
      </div>
      <Grid className="linksContainer" container spacing={2} style={{maxWidth: "35%", margin:"0 auto"}}>
        <Grid item xs={12} sm={12}>
          <Grid container spacing={2} className="logo-button-container">
            <Grid item xs={6} sm={6} style={{display:"flex", alignItems: "center"}}>
              <SpotifyLogo className="logoSize" style={{ color: '#1DD15E', marginRight: "5px" }} size={50} /><p style={{ color: '#1DD15E', marginRight: "5px", fontWeight:"600"}}>Spotify</p>
            </Grid>
            <Grid item xs={6} sm={6}>
            <a target="_blank" href="https://lnk.to/~/prerelease/spotify?code=AQDh0rTLeAXEPYdmDPNbWCCet7BQAO-nlyTLEfaxYwSopwzI-_YzAAw-q-7MZwDTuCL38fFhJN-rmTRLFi4N-T14SyDNcY-8cZAI57PNksW631HN9xHxTf3KO6g7oWKVer6vaxpzc7edhUYPdCrFrVdRNTTMMA5oKvc79uJRI4FvZTqvqiMob6SUyxS6wPfHxIjT7KhLWNGEiPT0iPHwxsYci2e7uYzw42tCgW_Gb0Xota7_07gopYjwL5wG1JjewUUrFFdkv3BgNcvnl4j8SJa9GMjX5K1Z7zbo8sCESzHa2lV49jKalIZLTaai5mpLlVzOSjo-hSt5mbmni75GPRaN5wuD&state=bFVybD1WZW5pY2UubG5rLnRvJTJGZ2VuZXNpcyZzSWQ9ZjBlYjk2NTUtYjFkZS00OWE2LWI4OGQtN2ZlNGFlMTFhYTU1JnRJZD1jYmQ0YTM3MS00MTk1LTQ1NTQtYmYwYy1jNmFjYmU4NGZlYWUmdT1odHRwcyUzQSUyRiUyRnZlbmljZS5sbmsudG8lMkZnZW5lc2lzJnZ0PTY2YjRhNDQwZGE5ODQ3NjRiN2UxNDBiN2I0Yzk0ZTQ1JnZ1PTY2MjZiOWJjOGVmYzU4LjE2OTU4NTU1"></a><button className="pre-save-button">Pre-Save</button>
            </Grid>
          </Grid>
          {/* <Grid container spacing={2} className="logo-button-container">
            <Grid item xs={6} sm={6} style={{display:"flex", alignItems: "center"}}>
              <AppleLogo className="logoSize" style={{ color: '#FA4C64', marginRight: "5px" }} size={50} /><p style={{marginRight: "5px", fontWeight:"600"}}>Apple Music</p>
            </Grid>
            <Grid item xs={6} sm={6}>
              <a target="_blank" href=""><button className="pre-save-button">Pre-Add</button></a>
            </Grid>
          </Grid> */}
          <Grid container spacing={2} className="logo-button-container">
            <Grid item xs={6} sm={6} style={{display:"flex", alignItems: "center"}}>
              <AmazonLogo className="logoSize" style={{ color: '#FF7000', marginRight: "5px" }} size={50} /><p style={{marginRight: "5px", fontWeight:"600"}}>Amazon Music</p>
            </Grid>
            <Grid item xs={6} sm={6}>
            <a target="_blank" href="https://www.amazon.com/ap/oa?response_type=code&client_id=amzn1.application-oa2-client.b1b26a26335a46e79c2ff62d19ed6ace&scope=profile&redirect_uri=https%3A%2F%2Flnk.to%2F%7E%2Fprerelease%2Famazon&state=bFVybD1WZW5pY2UubG5rLnRvJTJGZ2VuZXNpcyZzSWQ9NTMxNzQ3YzEtZDI3NS00Yzc3LThhMzItYmM5MjZhYTcxNTI0JnRJZD1iMmRmZTA1Ny0wYWI2LTQ4ZjMtYTdjZS1mMGMxMWJlOTdmYTgmdT1odHRwcyUzQSUyRiUyRnZlbmljZS5sbmsudG8lMkZnZW5lc2lzJnZ0PTY2YjRhNDQwZGE5ODQ3NjRiN2UxNDBiN2I0Yzk0ZTQ1JnZ1PTY2MjZiOWJjOGVmYzU4LjE2OTU4NTU1&tag=linkfiregen&ie=UTF8&linkCode=as2&ascsubtag=66b4a440da984764b7e140b7b4c94e45&ref=dmm_acq_soc_us_u_lfire_lp_x_66b4a440da984764b7e140b7b4c94e45"><button className="pre-save-button">Pre-Save</button></a>
            </Grid>
          </Grid>
          <Grid container spacing={2} className="logo-button-container">
            <Grid item xs={6} sm={6} style={{display:"flex", alignItems: "center"}}>
              <YoutubeLogo className="logoSize" style={{ color: 'red', marginRight: "5px" }} size={50} /><p style={{ marginRight: "5px", fontWeight:"600"}}>YouTube</p>
            </Grid>
            <Grid item xs={6} sm={6}>
            <a target="_blank" href="https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=772283799845-9ni04mapb0pafg0mhtro97t6f2rk5jhu.apps.googleusercontent.com&scope=openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fmusic&redirect_uri=https%3A%2F%2Flnk.to%2F%7E%2Fprerelease%2Fyoutube&access_type=offline&prompt=consent&state=bFVybD1WZW5pY2UubG5rLnRvJTJGZ2VuZXNpcyZzSWQ9NWU0YzQyMzQtY2M3Mi00NDU0LWE2MGItMjg1YzM1ZGY0YjgwJnRJZD1iMmRmZTA1Ny0wYWI2LTQ4ZjMtYTdjZS1mMGMxMWJlOTdmYTgmdT1odHRwcyUzQSUyRiUyRnZlbmljZS5sbmsudG8lMkZnZW5lc2lzJnZ0PTY2YjRhNDQwZGE5ODQ3NjRiN2UxNDBiN2I0Yzk0ZTQ1JnZ1PTY2MjZiOWJjOGVmYzU4LjE2OTU4NTU1"><button className="pre-save-button">Pre-Save</button></a>
            </Grid>
          </Grid>
          <Grid container spacing={2} className="logo-button-container">
            <Grid item xs={6} sm={6} style={{display:"flex", alignItems: "center"}}>
              <TidalLogo className="logoSize" style={{ color: 'white', marginRight: "5px" }} size={50} /><p style={{marginRight: "5px", fontWeight:"600"}}>Tidal</p>
            </Grid>
            <Grid item xs={6} sm={6}>
            <a target="_blank" href="https://login.tidal.com/authorize?client_id=sgHF2jeIMrbuvJ9l&response_type=code&redirect_uri=https%3A%2F%2Flnk.to%2F%7E%2Fprerelease%2Ftidal&lang=en&restrictSignup=true&geo=US&campaignId=default&scope=r_usr&state=bFVybD1WZW5pY2UubG5rLnRvJTJGZ2VuZXNpcyZzSWQ9Y2M4ZWJhMTYtYzMzMC00OGVjLWJlYTItMmY3YTk4Y2JkMWMxJnRJZD1iMmRmZTA1Ny0wYWI2LTQ4ZjMtYTdjZS1mMGMxMWJlOTdmYTgmdT1odHRwcyUzQSUyRiUyRnZlbmljZS5sbmsudG8lMkZnZW5lc2lzJnZ0PTY2YjRhNDQwZGE5ODQ3NjRiN2UxNDBiN2I0Yzk0ZTQ1JnZ1PTY2MjZiOWJjOGVmYzU4LjE2OTU4NTU1"><button className="pre-save-button">Pre-Save</button></a>
            </Grid>
          </Grid>
              {/* <Grid container spacing={2} className="logo-button-container">
            <Grid item xs={6} sm={6} style={{display:"flex", alignItems: "center"}}>
              <AppleLogo className="logoSize" style={{ color: '#FA4C64', marginRight: "5px" }} size={50} /><p style={{marginRight: "5px", fontWeight:"600"}}>iTunes</p>
            </Grid>
            <Grid item xs={6} sm={6}>
              <a target="_blank" href=""><button className="pre-save-button">Buy on iTunes</button></a>
            </Grid>
          </Grid> */}
              {/* <Grid container spacing={2} className="logo-button-container">
            <Grid item xs={6} sm={6} style={{display:"flex", alignItems: "center"}}>
              <img className="logoSize" style={{marginRight: "5px" }} width={50}></img><p style={{marginRight: "5px", fontWeight:"600"}}>Apple Music</p>
            </Grid>
            <Grid item xs={6} sm={6}>
              <a target="_blank" href=""><button className="pre-save-button">Buy on Bandcamp</button></a>
            </Grid>
          </Grid> */}
        </Grid>
      </Grid>
    </div>
  </div>
    );
        
};

export default EPK;
