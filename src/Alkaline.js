import { useState, useEffect } from "react";
import './styles.css';
import Grid from '@material-ui/core/Grid';
import { Alert } from "@material-ui/core";
import MetaTags from 'react-meta-tags';
import { InstagramLogo, TiktokLogo, YoutubeLogo, SpotifyLogo, AppleLogo, SoundcloudLogo, AmazonLogo, TidalLogo } from "@phosphor-icons/react";
import axios from "axios";
import React from "react";

const Alkaline = () => {
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState("");
  const [email, setEmail] = useState("");
  const [fan, setFan] = useState(false);
  const [producer, setProducer] = useState(false);
  const [artist, setArtist] = useState(false);

  useEffect(() => {
    const welcomeBox = document.getElementById("welcomeBox");
    if (welcomeBox) welcomeBox.style.display = "none";
  }, []);

  const handleSubmit = () => {
    if (!email) {
      setAlert('Please set an e-mail address~');
      return;
    }

    const dataToSend = {
      email,
      producer,
      artist,
      fan,
    };

    axios.post('https://genwav-node-server.vercel.app/addUser', dataToSend, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      setMessage("Your e-mail has been saved!");
      setAlert('');
    })
    .catch((error) => {
      setAlert("There was an error.");
      setMessage('');
      console.error('Error: ', error);
    });
  };

  return (
    <div id="NEW">
      <div className="wrapper">
        <MetaTags>
          <title>Alkaline | KHR!S Joao, gen.wav</title>
          <meta id="meta-description" name="description" content="Alkaline - KHR!S Joao, gen.wav" />
          <meta id="og-title" property="og:title" content="Alkaline - KHR!S Joao, gen.wav" />
          <meta id="og-image" property="og:image" content="https://khrisjoao.com/Alkaline.jpg" />
        </MetaTags>
      </div>

      <div style={{ textAlign: "center" }}>
        <div id="NEWImageDiv">
          <img
            src="/Alkaline.jpg"
            alt="Alkaline"
            style={{ height: "auto", width: "auto", maxWidth: "15%", objectFit: "cover", margin: "2% 0", borderRadius: "15px" }}
          />
        </div>

        <iframe
          id="NEWVideo"
          style={{ margin: "0 auto" }}
          width="50%"
          height="315"
          src="https://www.youtube.com/embed/jANkM-cDgnk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        <Grid className="linksContainer" container spacing={2} style={{ width: "25%", margin: "0 auto" }}>
          <Grid item xs={12} sm={12}>
            <Grid container spacing={2} className="logo-button-container">
              <Grid item xs={6} sm={6} style={{ display: "flex", alignItems: "center" }}>
                <SpotifyLogo className="logoSize" style={{ color: '#1DD15E', marginRight: "5px" }} size={50} />
                <p style={{ color: '#1DD15E', marginRight: "5px", fontWeight: "600" }}>Spotify</p>
              </Grid>
              <Grid item xs={6} sm={6}>
                <a target="_blank" rel="noreferrer" href="https://open.spotify.com/track/16KJxyMXdlWMO60lLKJdSq?si=ef903e13a3974982"><button className="pre-save-button">Stream</button></a>
              </Grid>
            </Grid>

            <Grid container spacing={2} className="logo-button-container">
              <Grid item xs={6} sm={6} style={{ display: "flex", alignItems: "center" }}>
                <AppleLogo className="logoSize" style={{ color: '#FA4C64', marginRight: "5px" }} size={50} />
                <p style={{ marginRight: "5px", fontWeight: "600", fontSize: "0.8em" }}>Apple</p>
              </Grid>
              <Grid item xs={6} sm={6}>
                <a target="_blank" rel="noreferrer" href="https://music.apple.com/us/song/alkaline/6766296364"><button className="pre-save-button">Stream</button></a>
              </Grid>
            </Grid>

            <Grid container spacing={2} className="logo-button-container">
              <Grid item xs={6} sm={6} style={{ display: "flex", alignItems: "center" }}>
                <YoutubeLogo className="logoSize" style={{ color: 'red', marginRight: "5px" }} size={50} />
                <p style={{ marginRight: "5px", fontWeight: "600" }}>YouTube</p>
              </Grid>
              <Grid item xs={6} sm={6}>
                <a target="_blank" rel="noreferrer" href="https://youtu.be/XtjI9kCZRZE?si=2pDM_yfuMAlhCWkb"><button className="pre-save-button">Stream</button></a>
              </Grid>
            </Grid>

          </Grid>
        </Grid>

        <div className="aboutNEW">
          <a target="_blank" rel="noreferrer" style={{ color: "white", margin: "0 auto" }} href="https://enigma-labs.printify.me/">
            <h3 style={{ marginTop: "2%", marginBottom: "2%", textAlign: "center" }}>MERCH</h3>
            <img src="AlkalineBlackTank.jpg" alt="Alkaline Black Tank" style={{ width: "30%", height: "auto", margin: "0 auto" }} />
            <img src="AlkalineWhiteTank.jpg" alt="Alkaline White Tank" style={{ width: "30%", height: "auto", margin: "0 auto" }} />
            <img src="AlkalineTowel.jpg" alt="Alkaline Towel" style={{ width: "30%", height: "auto", margin: "0 auto" }} />
            <h3 style={{ marginTop: "2%", textAlign: "center" }}>GET YOURS NOW</h3>
          </a>

          <h2 style={{ marginTop: "20%" }}>Credits</h2>
          <h4>Alkaline</h4>
          <p>Produced by <a href="https://www.instagram.com/genwav/" target="_blank" rel="noreferrer">gen.wav</a>, <a href="https://www.instagram.com/va.baby__/" target="_blank" rel="noreferrer">VABABY</a></p>
          <p>Mixed and Mastered by <a href="https://www.instagram.com/gen.wav" target="_blank" rel="noreferrer">gen.wav</a></p>
          <p>Artwork by <a href="https://www.instagram.com/khrissosick" target="_blank" rel="noreferrer">KHR!S João</a></p>
          <br />
        </div>

        <div style={{margin:"0 auto", textAlign:"center", backgroundColor:"transparent"}}>
          <iframe src="https://influanto.com/embed/newsletter/khrissosick" width="100%" height="440" style={{border:"none", maxWidth:"480px", backgroundColor:"transparent"}} title="Newsletter signup"></iframe>
        </div>

        <Grid className="linksContainer" container spacing={3} style={{ maxWidth: "35%", margin: "0 auto", paddingTop: "2%", paddingBottom: "5%" }}>
          <Grid item xs={12} sm={12}>
            <div className="social-dock-wrapper">
                  <div className="social-dock">
                    <a className="social-link" target="_blank" rel="noreferrer" href="http://instagram.com/khrissosick">
                      <InstagramLogo className="social-icon" size={28} color="orange" />
                    </a>
                    <a className="social-link" target="_blank" rel="noreferrer" href="http://tiktok.com/@khrissosick">
                      <TiktokLogo className="social-icon" size={28} color="pink" />
                    </a>
                    <a className="social-link" target="_blank" rel="noreferrer" href="https://www.youtube.com/@khrissosick">
                      <YoutubeLogo className="social-icon" size={28} color="red" />
                    </a>
                    <a className="social-link" target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/1dFp4yMaluDGWww446u1Kq?si=q7lk08CDT9uzHK4opwnYgw">
                      <SpotifyLogo className="social-icon" size={28} color="green" />
                    </a>
                    <a className="social-link" target="_blank" rel="noreferrer" href="https://music.apple.com/us/artist/khr-s-jo%C3%A3o/1685478437">
                      <AppleLogo className="social-icon" size={28} color="red" />
                    </a>
                    <a className="social-link" target="_blank" rel="noreferrer" href="https://soundcloud.com/khrissosick">
                      <SoundcloudLogo className="social-icon" size={28} color="orange" />
                    </a>
                  </div>
                </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Alkaline;
