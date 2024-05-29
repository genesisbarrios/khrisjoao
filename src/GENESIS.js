
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
          src="https://dl.dropboxusercontent.com/s/h6t8dvgtzzj8f069s0ma4/GENESIS_ANI.gif?rlkey=i1x2657yni0v3dyhhe8fjixvs&st=8dpg1ttt&dl=0"
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
              <AmazonLogo className="logoSize" style={{ color: '#FF7000', marginRight: "5px" }} size={50} /><p style={{marginRight: "5px", fontWeight:"600"}}>Amazon</p>
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
            <a target="_blank" href="https://www.youtube.com/watch?v=YMPVuPspRw0&list=PLcGBMxEyx5p8sfg853csGDXChKZo2ZNNi"><button className="pre-save-button">Pre-Save</button></a>
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

      <h2 style={{marginTop:"5%"}}>Music Videos</h2>
      <Grid container spacing={3} style={{padding:"2%"}}>
          <Grid item xs={12} md={4}>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/kTtfDnEF7W4?si=81ziews9ko5yMXXl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Grid>
          <Grid item xs={12} md={4}>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/3v6ZX_XowU8?si=ACM_I7z7FcTxn20u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Grid>
      </Grid>
      
      <div className="aboutAlbum">
        <h2>About the Album</h2>
        <p>I had no idea what I was getting to when I started this project, but it was so worth the blood sweat and tears. What started as an EP with a couple features on it ended up being my debut album and it wouldn’t have been possible without all my friends and colleagues. I'm not an artist that's bound to one genre, that's why this project is packed with different genres, and fusions. Although I stick true to my Cuban roots, I'm sure there's a song for everyone in it. It was created over the past year, while still releasing singles monthly and I would appreciate from the bottom of my heart if you took a listen 🙏🏽🫶🏽🌊</p>
        <br></br>
        <p>GENESIS is about self reflection through relationship, self awareness, transformation, and coming back to yourself and your purpose. </p>    
        <h2>Credits</h2>
        <h4>El Ingeniero</h4>
        <p>Produced, and Written by <a href="https://www.instagram.com/gen.wav/" target="_blank">gen.wav</a></p>
        <p>Mixed and Mastered by <a href="https://www.instagram.com/mixedbyedwn/?hl=en" target="_blank">Edwin Estacio</a></p>
        <br></br>
        <h4>Ibiza</h4>
        <p>Produced, and Written by gen.wav</p>
        <p>Background Vocalist: <a href="https://www.instagram.com/s33kr0/" target="_blank">°S33KR0°</a></p>
        <p>Mixed and Mastered by <a href="https://www.instagram.com/cundibeatz/?hl=en" target="_blank">CundiBeatz</a></p>
        <br></br>
        <h4>Bandolera Feat. <a href="https://www.instagram.com/riskrunnaricky" target="_blank">Riskrunnaricky</a></h4>
        <p>Produced, and Written by gen.wav</p>
        <p>Mixed and Mastered by gen.wav</p>
        <br></br>
        <h4>Cachumbambé Feat. <a href="https://www.instagram.com/igorcentrism" target="_blank">El Igor</a></h4>
        <p>Produced, and Written by gen.wav</p>
        <p>Mixed and Mastered by <a href="https://www.instagram.com/nielklopen/?hl=en" target="_blank">Niel Klopen</a></p>
        <br></br>
        <h4>Milán Feat. <a href="https://www.instagram.com/khrissosick/" target="_blank">KHR!S João,</a> <a href="https://www.instagram.com/igorcentrism" target="_blank">El Igor</a></h4>
        <p>Produced, and Written by gen.wav</p>
        <p>Mixed and Mastered by <a href="https://www.instagram.com/cundibeatz/?hl=en" target="_blank">CundiBeatz</a></p>
        <br></br>
        <h4>Corazón Frío</h4>
        <p>Produced, and Written by gen.wav</p>
        <p>Mixed and Mastered by <a href="https://www.instagram.com/adrian.ajv/?hl=en" target="_blank">ADRIAN</a></p>
        <br></br>
        <h4>La Peli</h4>
        <p>Produced, and Written by gen.wav</p>
        <p>Mixed and Mastered by <a href="https://www.instagram.com/adrian.ajv/?hl=en" target="_blank">ADRIAN</a></p>
        <br></br>
        <h4>No Me Llames Más Feat. <a href="https://www.instagram.com/igorcentrism" target="_blank">El Igor</a></h4>
        <p>Produced, and Written by gen.wav</p>
        <p>Mixed and Mastered by gen.wav</p>
        <br></br>
        <h4>El Cambio</h4>
        <p>Produced, and Written by gen.wav</p>
        <p>Mixed and Mastered by gen.wav</p>
        <br></br>
        <h4>Gucci</h4>
        <p>Produced by <a href="https://www.instagram.com/b0neb0yyy/" target="_blank">SAM0</a></p>
        <p>Written, Mixed and Mastered by gen.wav</p>
        <br></br>
        <h4>I Remember Feat. <a href="https://www.instagram.com/claudiasings/" target="_blank">Claudia</a></h4>
        <p>Produced, and Written by gen.wav</p>
        <p>Mixed and Mastered by gen.wav</p>
        <br></br>
        <h4>It's Me Not You Feat. <a href="https://www.instagram.com/grlkrash/" target="_blank">GRLKRASH</a></h4>
        <p>Produced, and Written by gen.wav</p>
        <p>Mixed and Mastered by gen.wav</p>
        <br></br>
        <h4>Tsunami (Olvídalo) Feat. <a href="https://www.instagram.com/khrissosick/" target="_blank">KHR!S João</a></h4>
        <p>Produced, and Written by gen.wav</p>
        <p>Mixed and Mastered by gen.wav</p>
        <br></br>

      </div>
        
          
      
    </div>

      <Grid className="linksContainer" container spacing={3} style={{maxWidth: "35%", margin:"0 auto", paddingTop:"2%", paddingBottom:"5%"}}>
        <Grid item xs={12} sm={12}>
          <div id="socials" style={{paddingTop:"10px", display:"flex", justifyContent:"space-between"}}>
                <div style={{display:"inline"}}>
                  <a target="_blank" href="http://instagram.com/gen.wav" style={{textDecoration:"none"}}>
                    <InstagramLogo style={{color: 'purple'}} size={20}></InstagramLogo>
                  </a>
                </div>
                <div style={{display:"inline"}}>
                  <a target="_blank" href="http://twitter.com/gendotwav" style={{textDecoration:"none"}}>
                    <TwitterLogo style={{color: '#A6CAF0'}} size={20}></TwitterLogo>
                  </a>
                </div>
                <div style={{display:"inline"}}>
                  <a target="_blank" href="http://tiktok.com/gen.wav" style={{textDecoration:"none"}}>
                    <TiktokLogo style={{color: 'pink'}} size={20}></TiktokLogo>
                  </a>
                </div>
                <div style={{display:"inline"}}>
                  <a target="_blank" href="https://soundcloud.com/genwav" style={{textDecoration:"none"}}>
                    <SoundcloudLogo style={{color: 'orange'}} size={20}></SoundcloudLogo>
                  </a>
                </div>
                <div style={{display:"inline"}}>
                  <a target="_blank" href="https://www.youtube.com/@genwav" style={{textDecoration:"none"}}>
                    <YoutubeLogo style={{color: 'red'}} size={20}></YoutubeLogo>
                  </a>
                </div>
                <div style={{display:"inline"}}>
                  <a target="_blank" href="https://open.spotify.com/artist/3YihJDU9YETUNDWO6pDuQG?si=VmY6439rRLS5mw8uC0nHYg" style={{textDecoration:"none"}}>
                    <SpotifyLogo style={{color: 'green'}} size={20}></SpotifyLogo>
                  </a>
                </div>
                <div style={{display:"inline"}}>
                  <a target="_blank" href="https://music.apple.com/us/artist/genesis-barrios/1194186719" style={{textDecoration:"none"}}>
                    <AppleLogo style={{color: 'pink'}} size={20}></AppleLogo>
                  </a>
                </div>
                <div style={{display:"inline"}}>
                  <a target="_blank" href="https://discord.com/invite/2MdNjbHnBR" style={{textDecoration:"none"}}>
                    <DiscordLogo style={{color: 'purple'}} size={20}></DiscordLogo>
                  </a>
                </div>
              </div>
            </Grid>
          </Grid>
      </div>
    );
        
};

export default EPK;
