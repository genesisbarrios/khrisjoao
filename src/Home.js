
import { useState } from "react";
import { Key, ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useMemo, useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './styles.css'
import Grid from '@material-ui/core/Grid'
import { Alert, SliderThumb } from "@material-ui/core";
import '@react95/icons/icons.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactModal from 'react-modal';

import { Avatar } from "react95";
import React from "react";
import { Mail, Mail2, CdMusic, cdMusicData, MediaVideo, mediaVideoData, Mic } from '@react95/icons';
import { GlobeSimple, InstagramLogo, TwitterLogo, TiktokLogo, SoundcloudLogo, DiscordLogo, SpotifyLogo, AppleLogo, YoutubeLogo, GithubLogo  } from "@phosphor-icons/react";
import axios from "axios"; 
import {Card, CardContent, div, Paper} from "@material-ui/core";

const Home = (props) => {
  const [showModal, toggleShowModal] = React.useState(true);
  const handleOpenModal = () => toggleShowModal(true);
  const handleCloseModal = () => toggleShowModal(false);
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
   
  }, []);


  function handleCloseSignUp() {
    if(document){
      const dialog = document.querySelector("dialog")
      dialog.close();
    }
  }

  function handleSubmit() {
    console.log('handle submit request to subscribe')
  
    // Check if data is valid
    if (!email) {
      console.log('No e-mail address provided');
      setAlert('Please set an e-mail address~');
      return;
    }

    const dataToSend = {
      email,
      producer,
      artist,
      fan
    };
  
    // Make a POST request using Axios
    axios.post('https://genwav-node-server.vercel.app/addUser', dataToSend, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        console.log('Request successful');
        setMessage("Your e-mail has been saved!")
        setAlert(''); // Resetting alert if necessary
      })
      .catch((error) => {
        setAlert("There was an error.");
        console.error('Error: ', error);
        setMessage(''); // Resetting message if necessary
      });
  }

  return(
    
    <div id="OS" style={{paddingBottom:"5%"}}>

        <div style={{margin: "0 5%", textAlign:"center"}}> 
          <img width="250px" src='KHRISPORTRAIT.png' />
        </div>
      <Grid container spacing={3} style={{maxWidth:"100%", margin: "0 auto"}}> 
        
        <Grid item  xs={12} sm={12} md={4} order={{ xs: 1, sm: 1 }} style={{ width: "100%" }}></Grid>
          <Grid item xs={12} sm={12} md={4} order={{ xs: 1, sm: 1 }} style={{ width: "80%" }}>
                <div id="socials" style={{padding:"10px 0", display:"flex", justifyContent:"space-between"}}>
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
                  <div style={{display:"inline"}}>
                    <a target="_blank" href="https://discord.com/invite/2MdNjbHnBR" style={{textDecoration:"none"}}>
                      <DiscordLogo style={{color: 'purple'}} size={30}></DiscordLogo>
                    </a>
                  </div>
                </div>
          
          </Grid>   
         
         
        </Grid>

        <div style={{width:"80%", margin:"0 auto"}}>
          <p style={{margin:"2% 0"}}> KHR!S João is a Miami based artist. Born July 10th 1998 in Queens, NY. A few years after his birth, his parents decided to move down to Miami. From a young age he took interest in music, and learned to write songs, and produce that of his own. He is influenced by all types of music, but mostly Latin, Hip-Hop & Alternative music. </p>
         
          <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/artist/1dFp4yMaluDGWww446u1Kq?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          
          <iframe style={{margin:"2% 0", border:"none"}} width="100%" height="560" src="https://www.youtube.com/embed/videoseries?list=PLzJLQrXfLatHHPOCKw8ixhllNFVJqnq8V&index=1&controls=1" title="YouTube video player" showControls allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         
          </div>
      </div>
    );
        
};

export default Home;
