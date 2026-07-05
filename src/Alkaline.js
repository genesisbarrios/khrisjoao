import { useState, useEffect } from "react";
import './styles.css';
import Grid from '@material-ui/core/Grid';
import { Alert } from "@material-ui/core";
import MetaTags from 'react-meta-tags';
import { InstagramLogo, TiktokLogo, YoutubeLogo, SpotifyLogo, AppleLogo, AmazonLogo, TidalLogo } from "@phosphor-icons/react";
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

        <div
          className="card"
          style={{
            width: '40%',
            minHeight: '200px',
            margin: '0 auto',
            marginTop: '3%',
          }}
        >
          <style>
            {`@media (max-width: 768px) { .card { width: 80% !important; } }`}
          </style>
          <div className="cardHeader">
            <img
              src="https://raw.githubusercontent.com/React95/React95/40e774b5e208822d206d9f6bc202ec1d7c3b0680/packages/icons/src/icons/mailnews_8.ico"
              width="20px"
              alt="Mail Icon"
            />{' '}
            Sign up to receive beats, loops, and news!
          </div>
          <div style={{ marginTop: '5%', textAlign: 'center' }}>
            <form>
              <p>Enter Your E-mail Address</p>
              <input
                type="text"
                name="e-mail"
                style={{ display: 'inline-block', marginBottom: '20px', width: '50%' }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <div style={{ display: 'inline' }}>
                <input
                  style={{ borderRadius: '10px', backgroundColor: '#CBD5E1', display: 'inline' }}
                  type="checkbox"
                  name="producer"
                  onChange={(e) => setProducer(e.target.checked)}
                />
                <p style={{ display: 'inline', margin: '0 5px' }}>producer</p>
                <input
                  style={{ borderRadius: '10px', backgroundColor: '#CBD5E1', display: 'inline' }}
                  type="checkbox"
                  name="artist"
                  onChange={(e) => setArtist(e.target.checked)}
                />
                <p style={{ display: 'inline', margin: '0 5px' }}>artist</p>
                <input
                  style={{ borderRadius: '10px', backgroundColor: '#CBD5E1', display: 'inline' }}
                  type="checkbox"
                  name="fan"
                  onChange={(e) => setFan(e.target.checked)}
                />
                <p style={{ display: 'inline', margin: '0 10px' }}>supporter</p>
                <br />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                  style={{ marginTop: '20px', padding: '2px 5px' }}
                  type="submit"
                >
                  Submit
                </button>
                {message && (
                  <Alert style={{ marginTop: '5%', marginBottom: '5%' }} severity="success">
                    {message}
                  </Alert>
                )}
                {alert && (
                  <Alert style={{ marginTop: '5%', marginBottom: '5%' }} severity="error">
                    {alert}
                  </Alert>
                )}
              </div>
            </form>
          </div>
        </div>

        <Grid className="linksContainer" container spacing={3} style={{ maxWidth: "35%", margin: "0 auto", paddingTop: "2%", paddingBottom: "5%" }}>
          <Grid item xs={12} sm={12}>
            <div id="socials" style={{ padding: "10px 0", display: "flex", justifyContent: "space-between" }}>
              <a target="_blank" rel="noreferrer" href="http://instagram.com/khrissosick" style={{ textDecoration: "none" }}>
                <InstagramLogo style={{ color: 'orange' }} size={30} />
              </a>
              <a target="_blank" rel="noreferrer" href="http://tiktok.com/@khrissosick" style={{ textDecoration: "none" }}>
                <TiktokLogo style={{ color: 'pink' }} size={30} />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@khrissosick" style={{ textDecoration: "none" }}>
                <YoutubeLogo style={{ color: 'red' }} size={30} />
              </a>
              <a target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/1dFp4yMaluDGWww446u1Kq?si=q7lk08CDT9uzHK4opwnYgw" style={{ textDecoration: "none" }}>
                <SpotifyLogo style={{ color: 'green' }} size={30} />
              </a>
              <a target="_blank" rel="noreferrer" href="https://music.apple.com/us/artist/khr-s-jo%C3%A3o/1685478437" style={{ textDecoration: "none" }}>
                <AppleLogo style={{ color: 'pink' }} size={30} />
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Alkaline;
