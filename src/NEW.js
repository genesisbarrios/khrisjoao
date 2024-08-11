
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

 
  const pdfUrl = 'https://www.dropbox.com/scl/fi/fqwizf2o29pknnfhkxwgz/ELECTRONIC-PRESS-KIT-2.pdf?rlkey=ytaf41lgcv6fte2cgxypn78u6&dl=0';
  
  return(
    <div id="NEW">
    <div style={{ textAlign: "center" }}>
      <div id="NEWImageDiv">
        <img 
          src="https://dl.dropboxusercontent.com/s/5f62vzertqlizupyest37/DALE-MAMI-COVER-ARTWORK.jpg?rlkey=45wrmjerbuz3rhnkrjycvu7yj&st=nc8nj56b&dl=0"
          alt="DALE MAMI" type="gif"
          style={{ height: "auto", width: "auto", maxWidth: "15%", objectFit: "cover", margin: "2% 0", borderRadius:"15px" }}></img>
      </div>
      <iframe id="NEWVideo" width="50%" height="315" src="https://www.youtube.com/embed/PWxMpte_2cA?si=bGEQXi1rJ_S7PNKP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <Grid className="linksContainer" container spacing={2} style={{width: "25%", margin:"0 auto", paddingLeft:"5%"}}>
        <Grid item xs={12} sm={12}>
          <Grid container spacing={2} className="logo-button-container">
            <Grid item xs={6} sm={6} style={{display:"flex", alignItems: "center"}}>
              <SpotifyLogo className="logoSize" style={{ color: '#1DD15E', marginRight: "5px" }} size={50} /><p style={{ color: '#1DD15E', marginRight: "5px", fontWeight:"600"}}>Spotify</p>
            </Grid>
            <Grid item xs={6} sm={6}>
             <a target="_blank" href="https://accounts.spotify.com/authorize?response_type=code&client_id=5a14783d79444ee9babd9176b256979e&scope=user-follow-modify+user-library-modify+playlist-modify-public+playlist-modify-private+user-read-email+user-read-private&redirect_uri=https%3A%2F%2Flnk.to%2F%7E%2Fprerelease%2Fspotify&state=bFVybD1WZW5pY2UubG5rLnRvJTJGZGFsZS1tYW1pJnNJZD1mMGViOTY1NS1iMWRlLTQ5YTYtYjg4ZC03ZmU0YWUxMWFhNTUmdElkPWRiN2QwYjgwLWUyMzctNGFjOC1hMzM4LWY1YzUwN2IzMTRhNCZ1PWh0dHBzJTNBJTJGJTJGdmVuaWNlLmxuay50byUyRmRhbGUtbWFtaSZ2dD01ZjMzYjhhMjYyYjE5NzE3MzIwZGM3YmE5MGIzZTNmNyZ2dT02NjlmMWEzZjk1MjcxNC43NDM0NDQwNg%3D%3D&utm_source=Original_Original&utm_medium=Original&utm_content=91dd2386-496b-4e6f-8470-f49144e6dd3a_none_KHR%2521S%2BJo%25C3%25A3o_none_none_none_20240728_direct_q-and-a-api_none_Venice.lnk.to%2Fdale-mami"><button className="pre-save-button">Stream</button></a>
            </Grid>
          </Grid>
          {/* <Grid container spacing={2} className="logo-button-container">
            <Grid item xs={6} sm={6} style={{display:"flex", alignItems: "center"}}>
              <AppleLogo className="logoSize" style={{ color: '#FA4C64', marginRight: "5px" }} size={50} /><p style={{marginRight: "5px", fontWeight:"600"}}>Apple Music</p>
            </Grid>
            <Grid item xs={6} sm={6}>
              <a target="_blank" href="https://music.apple.com/us/album/1747470473?app=music&at=1l3vpUI&ct=LFV_7d58c687eeff1763f79f5c3638b3da52&itscg=30440&itsct=catchall_p3&lId=210713504&cId=none&sr=3&src=Linkfire&ls=1"><button className="pre-save-button">Stream</button></a>
            </Grid>
          </Grid> */}
          
          {/* <Grid container spacing={2} className="logo-button-container">
            <Grid item xs={6} sm={6} style={{display:"flex", alignItems: "center"}}>
              <YoutubeLogo className="logoSize" style={{ color: 'red', marginRight: "5px" }} size={50} /><p style={{ marginRight: "5px", fontWeight:"600"}}>YouTube</p>
            </Grid>
            <Grid item xs={6} sm={6}>
            <a target="_blank" href="https://www.youtube.com/watch?v=YMPVuPspRw0&list=PLcGBMxEyx5p8sfg853csGDXChKZo2ZNNi"><button className="pre-save-button">Stream</button></a>
            </Grid>
          </Grid>
            <Grid container spacing={2} className="logo-button-container">
            <Grid item xs={6} sm={6} style={{display:"flex", alignItems: "center"}}>
              <SoundcloudLogo className="logoSize" style={{ color: '#FF7000', marginRight: "5px" }} size={50} /><p style={{marginRight: "5px", fontWeight:"600"}}>Soundcloud</p>
            </Grid>
            <Grid item xs={6} sm={6}>
            <a target="_blank" href="https://soundcloud.com/genwav/sets/genesis-414993647"><button className="pre-save-button">Stream</button></a>
            </Grid>
          </Grid> */}
          <Grid container spacing={2} className="logo-button-container">
            <Grid item xs={6} sm={6} style={{display:"flex", alignItems: "center"}}>
              <TidalLogo className="logoSize" style={{ color: 'white', marginRight: "5px" }} size={50} /><p style={{marginRight: "5px", fontWeight:"600"}}>Tidal</p>
            </Grid>
            <Grid item xs={6} sm={6}>
            <a target="_blank" href="https://login.tidal.com/authorize?client_id=sgHF2jeIMrbuvJ9l&response_type=code&redirect_uri=https%3A%2F%2Flnk.to%2F%7E%2Fprerelease%2Ftidal&lang=en&restrictSignup=true&geo=US&campaignId=default&scope=r_usr&state=bFVybD1WZW5pY2UubG5rLnRvJTJGZGFsZS1tYW1pJnNJZD1jYzhlYmExNi1jMzMwLTQ4ZWMtYmVhMi0yZjdhOThjYmQxYzEmdElkPWRiN2QwYjgwLWUyMzctNGFjOC1hMzM4LWY1YzUwN2IzMTRhNCZ1PWh0dHBzJTNBJTJGJTJGdmVuaWNlLmxuay50byUyRmRhbGUtbWFtaSZ2dD01ZjMzYjhhMjYyYjE5NzE3MzIwZGM3YmE5MGIzZTNmNyZ2dT02NjlmMWEzZjk1MjcxNC43NDM0NDQwNg%3D%3D"><button className="pre-save-button">Stream</button></a>
            </Grid>
          </Grid>
           {/* <Grid container spacing={2} className="logo-button-container">
            <Grid item xs={6} sm={6} style={{display:"flex", alignItems: "center", marginBottom:"20px"}}>
             <img className="logoSize" style={{marginRight: "5px" }} src="pandora.png" width={50}></img><p style={{marginRight: "5px", fontWeight:"600"}}>Pandora</p>
            </Grid>
            <Grid item xs={6} sm={6}>
            <a target="_blank" href="https://www.pandora.com/artist/genwav/genesis/ALVK52vZZ46mn7q?%24ios_deeplink_path=pandorav4%3A%2F%2Fbackstage%2Falbum%3Ftoken%3DAL%3A34977410&%24android_deeplink_path=pandorav4%3A%2F%2Fbackstage%2Falbum%3Ftoken%3DAL%3A34977410&~channel=Partner%20Catalog%20Search%20API%20-%20Linkfire&part=lf&corr=7d58c687eeff1763f79f5c3638b3da52&partnerName=Linkfire&~campaign=Partner%20Customer%20ID%20-%201e32aa2b-5540-4eef-8a89-c5baf73558a2&sharedId=7d58c687eeff1763f79f5c3638b3da52&_branch_match_id=1309723444836776967&utm_source=Partner%20Catalog%20Search%20API%20-%20Linkfire&utm_campaign=Partner%20Customer%20ID%20-%201e32aa2b-5540-4eef-8a89-c5baf73558a2&_branch_referrer=H4sIAAAAAAAAA62Py2rDMBBFv8beGOdhWZZTMMU0DYSGEih0kU0YS%2BMHtiVVUuLfr9xHusymMIvLcOccqXVO24flUoMUysACtF4MneyXj0GSCrS9U%2Fp8MUPRzsWAlEGy8zNN0%2BL3hKvRb8C4zjofGpQTXL8D2s76VB7eX2hyPZ3SbJTsI%2FToTtmzQNSz66zBtcUP7preJBXw3jpocMYP1WUMyM6pHmVAtuXB10i6YSxdr2agvzaqE%2F8JZc%2B8BSlxKI7%2BdxJN9AQOBtVEbwiGt1F53EdxdPC2ujMYat8qhjrkypiCCZrzLGeIdb1mGanZpqacZCSviACafLU98xVGLG6I2Qmjhq6Rf9KLdWr0Yb%2F1tjWSBCCpYkrTVZx6fJxDvok5raBmhNIcktC2YFDsxd1XfAJVa1qo%2FwEAAA%3D%3D"><button className="pre-save-button">Stream</button></a>
            </Grid>
          </Grid> */}
          {/* <Grid container spacing={2} className="logo-button-container">
            <Grid item xs={6} sm={6} style={{display:"flex", alignItems: "center"}}>
              <img className="logoSize" style={{marginRight: "5px" }} src="Bandcamp.png" width={50}></img><p style={{marginRight: "5px", fontWeight:"600"}}>Bandcamp</p>
            </Grid>
            <Grid item xs={6} sm={6}>
              <a target="_blank" href="https://genwav.bandcamp.com/album/genesis"><button className="pre-save-button">Buy</button></a>
            </Grid>
          </Grid> */}
           <Grid container spacing={2} className="logo-button-container">
            <Grid item xs={6} sm={6} style={{display:"flex", alignItems: "center"}}>
              <AmazonLogo className="logoSize" style={{ color: '#FF7000', marginRight: "5px" }} size={50} /><p style={{marginRight: "5px", fontWeight:"600"}}>Amazon</p>
            </Grid>
            <Grid item xs={6} sm={6}>
            <a target="_blank" href="https://www.amazon.com/ap/oa?response_type=code&client_id=amzn1.application-oa2-client.b1b26a26335a46e79c2ff62d19ed6ace&scope=profile&redirect_uri=https%3A%2F%2Flnk.to%2F%7E%2Fprerelease%2Famazon&state=bFVybD1WZW5pY2UubG5rLnRvJTJGZGFsZS1tYW1pJnNJZD01MzE3NDdjMS1kMjc1LTRjNzctOGEzMi1iYzkyNmFhNzE1MjQmdElkPWRiN2QwYjgwLWUyMzctNGFjOC1hMzM4LWY1YzUwN2IzMTRhNCZ1PWh0dHBzJTNBJTJGJTJGdmVuaWNlLmxuay50byUyRmRhbGUtbWFtaSZ2dD01ZjMzYjhhMjYyYjE5NzE3MzIwZGM3YmE5MGIzZTNmNyZ2dT02NjlmMWEzZjk1MjcxNC43NDM0NDQwNg%3D%3D&tag=linkfiregen&ie=UTF8&linkCode=as2&ascsubtag=5f33b8a262b19717320dc7ba90b3e3f7&ref=dmm_acq_soc_us_u_lfire_lp_x_5f33b8a262b19717320dc7ba90b3e3f7"><button className="pre-save-button">Stream / Buy</button></a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
      <div className="aboutNEW">
        <h2>Credits</h2>
        <h4>DALE MAMI</h4>
        <a href="https://www.instagram.com/khrissosick/" target="_blank">KHR!S Joao</a>, <a href="https://www.instagram.com/genwav/" target="_blank">gen.wav</a>, <a href="https://www.instagram.com/nickgarcia305/" target="_blank">Nick Garcia</a>, <a href="https://www.instagram.com/igorcentrism/" target="_blank">El Igor</a>
        <p>Produced by <a href="https://www.instagram.com/camebeats/" target="_blank">Came Beats</a></p>
        <p>Mixed and Mastered by <a href="https://www.instagram.com/mixedbyedwn/?hl=en" target="_blank">Edwin Estacio</a></p>
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
