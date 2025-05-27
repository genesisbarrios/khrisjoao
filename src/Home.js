
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
import { Camera, VideoCamera, Info, EnvelopeSimple } from "@phosphor-icons/react";


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
    

  }, []);

return (
  <div className="home-root">
    <video
      className="tv-bg-video"
      src="/tvstatic.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
    <div className="win95-window">
      <div className="win95-titlebar">
        <img
          src="/LOGO.PNG"
          alt="Logo"
          className="win95-logo"
        />
        <span className="win95-title">cinemautographer</span>
        <div className="win95-controls">
          <button className="win95-btn" aria-label="Minimize">_</button>
          <button className="win95-btn" aria-label="Maximize">▢</button>
          <button className="win95-btn" aria-label="Close">✕</button>
        </div>
      </div>
      <div className="win95-content">
        <nav className="home-nav">
          <div className="home-nav-grid">
            <a href="/photography" title="Photo">
              <img src="/spinCamera.gif" alt="Photo" />
              <span>Photo</span>
            </a>
            <a href="/videography" title="Video">
              <img src="/SPINVIDEO.gif" alt="Video" />
              <span>Video</span>
            </a>
            <a href="/about" title="About">
              <img src="/ABOUT.gif" alt="About" />
              <span>About</span>
            </a>
            <a href="/contact" title="Contact">
              <img src="/CONTACT.gif" alt="Contact" />
              <span>Contact</span>
            </a>
            <a href="/contact" title="Instagram">
              <img src="/IG.gif" alt="Instagram" />
              <span>IG</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  </div>
);
};

export default Home;
