
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
import { MetaTags } from "react-meta-tags";
import { Avatar } from "react95";
import React from "react";
import { Mail, Mail2, CdMusic, cdMusicData, MediaVideo, mediaVideoData, Mic } from '@react95/icons';
import { GlobeSimple, InstagramLogo, TwitterLogo, TiktokLogo, SoundcloudLogo, DiscordLogo, SpotifyLogo, AppleLogo, YoutubeLogo, GithubLogo  } from "@phosphor-icons/react";
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
 
  const pdfUrl = 'https://www.dropbox.com/scl/fi/z61ib2py9zr4hgdo7cw9r/Chris-Fernandez-EPK.pdf?rlkey=jgfbfqxdb3er3zhyg9w41pasy&st=ugewx9kz&dl=0';
  
  return(
    
    <div id="EPK" style={{paddingBottom:"5%"}}>
        <div class="wrapper">
        <MetaTags>
          <title>KHR!S João Electronic Press Release</title>
          <meta id="meta-description" name="description" content="KHR!S João Electronic Press Release" />
          <meta id="og-title" property="og:title" content="Music by KHR!S João" />
          <meta id="og-image" property="og:image" content="https://khrisjoao.com/logo.png" />
        </MetaTags>
      </div>
      <Grid container spacing={3} style={{padding: "0px"}}> 
        <Grid item sm={12} md={4} lg={3}> 
          <div style={{height: "100vh", position: "sticky", top: 0}}>
          <img 
            src="https://dl.dropboxusercontent.com/s/nrv3bd216zj1wrh7h2i9j/DSC03120.JPG?rlkey=b8tf49n11rae6a06oq5rr4itx&st=fcw0fo8d&dl=0"
            alt="image"
            style={{height: "100%", width: "100%", objectFit: "cover"}}
          />  
          </div>
        </Grid>
        <Grid item sm={12} md={6} lg={6}> 
         <div style={{height:"100%", width: "100%"}}>
          <h1>KHR!S João</h1>
          <p style={{marginBottom:"2%"}}>Miami based Independent Artist, and Producer - Latin, Hip Hop, R&B, Alternative</p>
          
          <h1>ABOUT</h1>
          <p style={{marginBottom:"2%"}}>KHR!S João is a Miami based artist. Born July 10th 1998 in Queens, NY. A few years after his birth, his parents decided to move down to Miami. From a young age he took interest in music, and learned to write songs, and produce that of his own. He is influenced by all types of music, but mostly Latin, Hip-Hop & Alternative music.</p>
          
          <h1>ACCOMPLISHMENTS</h1>
          <p style={{marginBottom:"2%"}}>Featured in Colors Studios - Milan by gen.wav, KHR!S João, El Igor</p>

          <h1>BOOKINGS & PRESS INQUIRIES</h1>
          <p style={{marginBottom:"5%"}}><a style={{color:"white", textDecoration:"none"}} href="khrissosick@gmail.com">khrissosick@gmail.com</a></p>

          <a
              href={pdfUrl}
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Required for security reasons when using target="_blank"
              style={{
                backgroundColor: 'black',
                color: 'white',
                border: '1px solid white',
                borderRadius: '5px',
                padding: '10px 20px',
                margin: '5% auto',
                textDecoration: 'none' // Removes underline from anchor element
              }}
            >
              DOWNLOAD ELECTRONIC PRESS KIT
            </a>

          <h1 style={{marginTop:"5%"}}>MUSIC</h1>
          <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/artist/1dFp4yMaluDGWww446u1Kq?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
       
          <iframe style={{borderRadius:"12px", margin:"5% 0"}} width="100%" height="315" src="https://www.youtube.com/embed/siWRlUtHFUQ?si=bkdRR7EOZIu1sTaw" title="YouTube video player" showControls allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          
            <h1 style={{marginTop:"5%"}}>LINKS</h1>
           <div id="socials" style={{paddingTop:"10px", display:"flex", justifyContent:"space-between"}}>
              <div style={{display:"inline"}}>
                <a target="_blank" href="http://instagram.com/khrissosick" style={{textDecoration:"none"}}>
                  <InstagramLogo style={{color: 'orange'}} size={30}></InstagramLogo>
                </a>
              </div>
              <div style={{display:"inline"}}>
                <a target="_blank" href="http://tiktok.com/@khrissosick" style={{textDecoration:"none"}}>
                  <TiktokLogo style={{color: 'pink'}} size={30}></TiktokLogo>
                </a>
              </div>
              <div style={{display:"inline"}}>
                <a target="_blank" href="https://www.youtube.com/@khrissosick" style={{textDecoration:"none"}}>
                  <YoutubeLogo style={{color: 'red'}} size={30}></YoutubeLogo>
                </a>
              </div>
              <div style={{display:"inline"}}>
                <a target="_blank" href="https://open.spotify.com/artist/1dFp4yMaluDGWww446u1Kq?si=q7lk08CDT9uzHK4opwnYgw" style={{textDecoration:"none"}}>
                  <SpotifyLogo style={{color: 'green'}} size={30}></SpotifyLogo>
                </a>
              </div>
              <div style={{display:"inline"}}>
                <a target="_blank" href="https://music.apple.com/us/artist/khr-s-jo%C3%A3o/1685478437" style={{textDecoration:"none"}}>
                  <AppleLogo style={{color: 'pink'}} size={30}></AppleLogo>
                </a>
              </div>
            
              </div>
         </div>
        </Grid>
        <Grid item sm={12} md={3} lg={3}> 
        <div style={{height:"100%", width: "100%", paddingTop:"0", marginTop:"0", textAlign:"center"}}>
          <div style={{width:"100%", margin:"0 auto"}}>
            <h1 style={{marginBottom:"3%"}}>PRESS</h1>
            <h5 style={{marginBottom:"2%"}}><a href="https://somoslahoficial.com/blog/blog/7591475/los-artistas-de-miami-gen-wav-y-khr-s-joao-son-parte-de-una-nueva-ola-de-artistas-latinos-en-el-305" target="_blank" style={{color:"white", textDecoration:"none"}}>Somos La H Blog</a></h5>
            <h5><a href="https://colorsxstudios.com/music" target="_blank" style={{color:"white", textDecoration:"none"}}>Colors Studios Feature</a></h5>
           
            <img src="https://dl.dropboxusercontent.com/s/b0j9ghmmkj5axms1iasqm/DSC03827.jpg?rlkey=w53tcltbkhvc8zbuq5c1m2nhy&st=a3kfgm76&dl=0" style={{width:"80%", height:"auto", marginTop:'20px', marginBottom:"20px"}}></img>
            <img src="https://dl.dropboxusercontent.com/s/kphkwzr3dqa47t5jr1g2q/tsunami.png?rlkey=nna28tushrohvgjz3tdkn8v6r&st=w8bd4ly8&dl=0" style={{width:"80%", height:"auto", marginBottom:"20px"}}></img>
            <img src="https://dl.dropboxusercontent.com/s/sxwfnz9gtw9ky413j3ls2/DSC03106.JPG?rlkey=qxevjl8lc04myps4j8frgy3gw&st=b69gukdf&dl=0"style={{width:"80%", height:"auto", marginBottom:"20px"}}></img>
            
          </div>
          </div>
        </Grid>
      </Grid>
   </div>
    );
        
};

export default EPK;
