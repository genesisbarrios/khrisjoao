
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

<<<<<<< HEAD
=======
  useEffect(() => {
    if (!CSS.supports('animation-timeline: scroll()')) {
      let cancelled = false;
      const cleanupFns = [];

      const loadGsap = async () => {
        try {
          const [gsapModule, scrollTriggerModule] = await Promise.all([
            import('https://esm.sh/gsap@3.12.0'),
            import('https://esm.sh/gsap@3.12.0/ScrollTrigger'),
          ]);

          if (cancelled) return;
          const gsap = gsapModule.default ?? gsapModule;
          const ScrollTrigger = scrollTriggerModule.default ?? scrollTriggerModule;
          gsap.registerPlugin(ScrollTrigger);

          const container = document.querySelector('.home-socials');
          const direction = container?.querySelector('#direction');
          const items = container?.querySelectorAll('a') ?? [];
          const dock = container?.querySelector('.dock');
          const scroller = container?.querySelector('nav');
          if (!direction || !dock || !scroller) return;

          const scrub = 0.2;

          const setScrollers = (vertical = false) => {
            items.forEach((a) => {
              gsap
                .timeline()
                .fromTo(
                  a,
                  { scale: 1, '--blur': 0, '--parallax': 1 },
                  {
                    scale: 0.25,
                    '--blur': 1,
                    '--parallax': 0,
                    scrollTrigger: {
                      trigger: a,
                      ease: 'power1.inOut',
                      scroller,
                      horizontal: !vertical,
                      end: `${vertical ? 'bottom' : 'right'} 0`,
                      start: `${vertical ? 'top' : 'left'} ${1.5 * 16}`,
                      scrub,
                    },
                  }
                )
                .fromTo(
                  a,
                  { scale: 0.25, '--blur': 1, '--parallax': 0 },
                  {
                    scale: 1,
                    '--blur': 0,
                    '--parallax': 1,
                    scrollTrigger: {
                      trigger: a,
                      ease: 'power1.inOut',
                      scroller,
                      horizontal: !vertical,
                      end: `${vertical ? 'bottom' : 'right'} ${
                        dock[vertical ? 'offsetHeight' : 'offsetWidth'] - 1.5 * 16
                      }`,
                      start: `${vertical ? 'top' : 'left'} ${
                        dock[vertical ? 'offsetHeight' : 'offsetWidth']
                      }`,
                      scrub,
                    },
                  }
                );
            });
          };

          const resizeObserver = new ResizeObserver(() => {
            if (cancelled) return;
            ScrollTrigger.killAll();
            setScrollers(direction.checked);
          });
          resizeObserver.observe(dock);

          const directionChangeHandler = () => {
            if (direction.checked) dock.style.height = '400px';
            setScrollers(direction.checked);
          };
          direction.addEventListener('change', directionChangeHandler);

          setScrollers(direction.checked);

          cleanupFns.push(() => {
            resizeObserver.disconnect();
            direction.removeEventListener('change', directionChangeHandler);
            ScrollTrigger.killAll();
          });
        } catch (error) {
          console.error('Failed to load GSAP fallback', error);
        }
      };

      loadGsap();

      return () => {
        cancelled = true;
        cleanupFns.forEach((fn) => fn());
      };
    }
  }, []);

>>>>>>> 0fb84a0 (update alkaline)

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
<<<<<<< HEAD
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
=======
            <div className="home-socials">
              <div className="dock">
                <nav>
                  <a target="_blank" rel="noreferrer noopener" href="http://instagram.com/khrissosick">
                    <InstagramLogo size={30} />
                  </a>
                  <a target="_blank" rel="noreferrer noopener" href="http://tiktok.com/@khrissosick">
                    <TiktokLogo size={30} />
                  </a>
                  <a target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/@khrissosick">
                    <YoutubeLogo size={30} />
                  </a>
                  <a target="_blank" rel="noreferrer noopener" href="https://open.spotify.com/artist/1dFp4yMaluDGWww446u1Kq?si=q7lk08CDT9uzHK4opwnYgw">
                    <SpotifyLogo size={30} />
                  </a>
                  <a target="_blank" rel="noreferrer noopener" href="https://music.apple.com/us/artist/khr-s-jo%C3%A3o/1685478437">
                    <AppleLogo size={30} />
                  </a>
                  <a target="_blank" rel="noreferrer noopener" href="https://discord.com/invite/2MdNjbHnBR">
                    <DiscordLogo size={30} />
                  </a>
                </nav>
              </div>
            </div>
          </Grid>
      </Grid>
        <div style={{width:"80%", margin:"0 auto"}}>
          <p style={{margin:"2% 0"}}> KHR!S João is a Ecuadorian-American, Miami based artist. Born July 10th 1998 in Queens, NY. A few years after his birth, his parents decided to move down to Miami, FL. From a young age he took interest in music, learned to write songs, and produce that of his own. He is influenced by all types of music, but mostly Latin, Hip-Hop & Alternative music. </p>
         
          <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/artist/1dFp4yMaluDGWww446u1Kq?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          
          <iframe style={{margin:"2% 0", border:"none"}} width="100%" height="560" src="https://www.youtube.com/embed/jANkM-cDgnk" title="YouTube video player" showControls allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
>>>>>>> 0fb84a0 (update alkaline)
         
          </div>
      </div>
    );
        
};

export default Home;
