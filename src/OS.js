
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

const GenWavOS = (props) => {
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
    //<a href="https://www.beatstars.com/genwav/sound-kits/192047" target="_blank" style={{textDecoration:"none", cursor:"pointer"}}></a>
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
      producer: producer,
      artist: artist
    };
  
    // Make a POST request using Axios
    axios.post('https://localhost:3001/addUser', dataToSend)
      .then((response) => {
        // Handle the response if needed
        console.log('Request successful', response.data);
        setMessage('Your e-mail has been saved!')
        Card.open("https://www.beatstars.com/genwav/sound-kits/192047", "_blank")
      })
      .catch((error) => {
        // Handle errors
        console.error('Error: ', error);
        Card.alert(error);
        setAlert('Error: ', error)
      });

    setAlert('There was an error.');

  }
 
  return(
    
    <div id="OS">
      {showModal && 
        <dialog id="dialog" style={{overflow:"hidden", margin:"25% auto", width:"50%", height:"250px", zIndex:"1", border:"1px solid black", borderRadius:"5px", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
            
            <Card resizable style={{width:'100%', height:"100%", margin:"0 auto", minHeight: '200px', marginBottom:"5%"}}>
              <div>Please provide your e-mail for access to the sample pack. <img src="https://raw.githubusercontent.com/React95/React95/40e774b5e208822d206d9f6bc202ec1d7c3b0680/packages/icons/src/icons/hand.ico" width="20px"></img><button onClick={handleCloseSignUp} style={{float:"right", width:'25px', marginTop:'5px'}}>X</button></div>
                <CardContent>
                  <p style={{fontSize:'0.7em', color:"darkred", margin:"10px 0", textAlign:"center"}}>You will not be spammed, only for sending beats and loops</p>
                  <div style={{marginTop:"2%", textAlign:"center"}}>
                    <form>
                      <p>Enter Your E-mail Address</p>  
                      <input type="text" name="e-mail" style={{display:"inline-block", marginBottom:"20px", width:"50%"}}  
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      ></input>
                      <br></br>
                      <div style={{display:'inline'}}>
                        <input
                          style={{borderRadius:"10px", backgroundColor:"#CBD5E1", display:'inline'}}
                          type="checkbox"
                          name="producer"
                          value="0"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setProducer(true);
                            } else {
                              setProducer(false);
                            }
                          }}
                        />
                        <p style={{display:'inline', margin:"0 10px"}}>producer</p>
                    
                        <input
                          style={{borderRadius:"10px", backgroundColor:"#CBD5E1", display:'inline'}}
                          type="checkbox"
                          name="artist"
                          value="0"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setArtist(true);
                            } else {
                              setArtist(false);
                            }
                          }}
                        />
                        <p style={{display:'inline', margin:"0 10px"}}>artist</p>
                        <input
                          style={{borderRadius:"10px", backgroundColor:"#CBD5E1", display:'inline'}}
                          type="checkbox"
                          name="fan"
                          value="0"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFan(true);
                            } else {
                              setFan(false);
                            }
                          }}
                        />
                        <p style={{display:'inline', margin:"0 10px"}}>fan</p>
                        <br></br>
                        <button onClick={handleSubmit} style={{marginTop:"20px", padding:"5px 10px"}}>Acquire the Wav Pack </button>
                        {message && <Alert severity="success">{message}</Alert>}
                        {alert && <Alert severity="error">{alert}</Alert>}
                      </div>
                    </form>
                  </div>
                </CardContent>
            </Card>
      </dialog>
      }
          
      <Grid container spacing={3} style={{marginLeft:"3px"}}> 
        <Grid item sm={12} md={4} order={{ sm: 3, md: 1 }} style={{marginTop:"6%"}}> 
          <Card className="card" style={{width:'90%', marginBottom:"5%"}}>
            <div className="cardHeader"><img src="https://raw.githubusercontent.com/React95/React95/40e774b5e208822d206d9f6bc202ec1d7c3b0680/packages/icons/src/icons/mmsys_111.ico" width="25" height="25" className="inage" />  Music Videos </div>
            <CardContent>
              <iframe style={{borderRadius:"12px"}} width="100%" height="315" src="https://www.youtube.com/embed/kTtfDnEF7W4?si=iDAKmjAEseqQjkbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </CardContent>
          </Card>
          <Card className="card" style={{width:'90%', minHeight: '700px', marginBottom:"5%"}}>
                <div><img src="https://raw.githubusercontent.com/React95/React95/40e774b5e208822d206d9f6bc202ec1d7c3b0680/packages/icons/src/icons/mmsys_105.ico" width="20" height="20"/> Beats</div>
                <CardContent>
                  <iframe 
                      src="https://player.beatstars.com/?storeId=140652" 
                      width="100%" 
                      height="650">
                  </iframe>
                </CardContent>
              </Card>
              
              <Card className="card" style={{width:'90%', minHeight: '200px'}}>
                  <div className="cardHeader"><img src="https://raw.githubusercontent.com/React95/React95/40e774b5e208822d206d9f6bc202ec1d7c3b0680/packages/icons/src/icons/mmsys_120.ico" width="25" height="25" className="inage" /> Services</div>
                  <Carousel centerMode={true} dynamicHeight={false} centerSlidePercentage={100} infiniteLoop showThumbs={false} className="custom-carousel">
                    <div className="slide">
                          <img src="https://dl.dropboxusercontent.com/s/iav8s3cngc9dosooprmsx/fullmix.png?rlkey=rkg0k4lmq7wnw4thovkhza1g1&dl=0" />
                          <button className="legend"><a href="https://genwav.beatstars.com/services/119321" target="_blank" style={{textDecoration:"none", cursor:"pointer"}}><GlobeSimple width={25} className="igLogo"></GlobeSimple></a></button>
                      </div>
                      <div className="slide">
                          <img src="https://dl.dropboxusercontent.com/s/tfb6fip9rwypf0wb5m36j/mixing.png?rlkey=779ag1yk18i39dv0jnwfyvn41&dl=0" />
                          <button className="legend"><a href="https://genwav.beatstars.com/services" target="_blank" style={{textDecoration:"none", cursor:"pointer"}}><GlobeSimple width={25} className="igLogo"></GlobeSimple></a></button>
                      </div>
                      <div className="slide">
                          <img src="https://dl.dropboxusercontent.com/s/echpavedhvl9o0icm9gcg/mix-master.png?rlkey=b1bv8ydwqaxwpornxurrfb2cp&dl=0" />
                          <button className="legend"><a href="https://genwav.beatstars.com/services/119323" target="_blank" style={{textDecoration:"none", cursor:"pointer"}}><GlobeSimple width={25} className="igLogo"></GlobeSimple></a></button>
                      </div>
                      <div className="slide">
                          <img src="https://dl.dropboxusercontent.com/s/jqofzn3862jtixkiienc9/custombeat.png?rlkey=vh1woj30uv823iqvltf2qq3os&dl=0" />
                          <button className="legend"><a href="https://genwav.beatstars.com/services/119324" target="_blank" style={{textDecoration:"none", cursor:"pointer"}}><GlobeSimple width={25} className="igLogo"></GlobeSimple></a></button>
                      </div>
                      <div  className="slide">
                          <img src="https://dl.dropboxusercontent.com/s/kly82aimdiz7ul88qo75y/prod-lesson.png?rlkey=627j03ybxm5er8lqa35hqytxr&dl=0" />
                          <button className="legend"><a href="https://genwav.beatstars.com/services/119322" target="_blank" style={{textDecoration:"none", cursor:"pointer"}}><GlobeSimple width={25} className="igLogo"></GlobeSimple></a></button>
                      </div>
                      <div className="slide">
                          <img src="https://dl.dropboxusercontent.com/s/b1dbjimasknijpxwgz993/recording-session.png?rlkey=fex8apjdiiiwfovwuw4y7q4bk&dl=0" />
                          <button className="legend"><a href="https://genwav.beatstars.com/services/125886" target="_blank" style={{textDecoration:"none", cursor:"pointer"}}><GlobeSimple width={25} className="igLogo"></GlobeSimple></a></button>
                      </div>
                  </Carousel>
              </Card>
        </Grid>
       
          <Grid item sm={12} md={4} order={{ sm: 1, md: 2 }}>
                <div style={{paddingTop:"10px", display:"flex", justifyContent:"space-between"}}>
                  <div style={{display:"inline"}}>
                    <a target="_blank" href="http://instgram.com/gen.wav" style={{textDecoration:"none"}}>
                      <InstagramLogo style={{color: 'purple'}} size={25}></InstagramLogo>
                    </a>
                  </div>
                  <div style={{display:"inline"}}>
                    <a target="_blank" href="http://twitter.com/gendotwav" style={{textDecoration:"none"}}>
                      <TwitterLogo style={{color: '#A6CAF0'}} size={25}></TwitterLogo>
                    </a>
                  </div>
                  <div style={{display:"inline"}}>
                    <a target="_blank" href="http://tiktok.com/gen.wav" style={{textDecoration:"none"}}>
                      <TiktokLogo style={{color: 'pink'}} size={25}></TiktokLogo>
                    </a>
                  </div>
                  <div style={{display:"inline"}}>
                    <a target="_blank" href="https://soundcloud.com/genwav" style={{textDecoration:"none"}}>
                      <SoundcloudLogo style={{color: 'orange'}} size={25}></SoundcloudLogo>
                    </a>
                  </div>
                  <div style={{display:"inline"}}>
                    <a target="_blank" href="https://www.youtube.com/@genwav" style={{textDecoration:"none"}}>
                      <YoutubeLogo style={{color: 'red'}} size={25}></YoutubeLogo>
                    </a>
                  </div>
                  <div style={{display:"inline"}}>
                    <a target="_blank" href="https://open.spotify.com/artist/3YihJDU9YETUNDWO6pDuQG?si=VmY6439rRLS5mw8uC0nHYg" style={{textDecoration:"none"}}>
                      <SpotifyLogo style={{color: 'green'}} size={25}></SpotifyLogo>
                    </a>
                  </div>
                  <div style={{display:"inline"}}>
                    <a target="_blank" href="https://music.apple.com/us/artist/genesis-barrios/1194186719" style={{textDecoration:"none"}}>
                      <AppleLogo style={{color: 'pink'}} size={25}></AppleLogo>
                    </a>
                  </div>
                  <div style={{display:"inline"}}>
                    <a target="_blank" href="https://discord.com/invite/ctEu8m9h" style={{textDecoration:"none"}}>
                      <DiscordLogo style={{color: 'purple'}} size={25}></DiscordLogo>
                    </a>
                  </div>
                </div>
            
              <Card className="card" style={{width:'90%', minHeight: '200px', marginBottom:"20px", marginTop:'10%'}}>
                <div className="cardHeader"><img src="https://raw.githubusercontent.com/React95/React95/40e774b5e208822d206d9f6bc202ec1d7c3b0680/packages/icons/src/icons/vvexe32_1.ico" width="25" height="25" className="inage" /> About</div>
                  <CardContent>
                    <div style={{textAlign:"center"}}> 
                      <Avatar size={125} src='https://dl.dropboxusercontent.com/s/aw5uvuev357azdlo72og2/Screenshot-2024-04-18-at-2.18.45-AM.png?rlkey=waj1wtalo8qvyjddhyf768jw0&dl=0' />
                    </div>
                    <Paper> Hi, my name is gen.wav. I'm a Cuban-American Artist, Producer, and Software Engineer. 👨‍💻 I've been a musician for 18 years, with a background in classical training, where I received years of training in Music Theory, Ear Training, and Composition, and learned many instruments, including Piano, Cello, Violin, and Voice. I'm a self taught guitarist, bassist, and producer, with over 10 years of experience writing, recording, producing and performing music. Take a look around, you can stream my music, watch my music videos, buy beats, or Music NFTS, or just vibe. </Paper>
                  </CardContent>
              </Card>
              <Card className="card" style={{width:'90%', minHeight: '200px', marginBottom:"5%"}}>
                <div className="cardHeader"><img className="image" src="https://raw.githubusercontent.com/React95/React95/40e774b5e208822d206d9f6bc202ec1d7c3b0680/packages/icons/src/icons/progman_30.ico" width="20px" ></img> The Wav Pack V.1 - Free Sample Pack</div>
                  <div className="slide" onClick={handleOpenDialog}>
                    <img src="/WavPack.jpg" style={{width:"100%", cursor:"pointer"}} />
                  </div>
              </Card>

              <Card className="card" style={{width:'90%', minHeight: '200px', marginTop:"5%"}}>
              <div className="cardHeader"><img src="https://raw.githubusercontent.com/React95/React95/40e774b5e208822d206d9f6bc202ec1d7c3b0680/packages/icons/src/icons/wangimg_130.ico" width="20px"></img> Gallery</div>
                    <Carousel centerMode={true} dynamicHeight={false} centerSlidePercentage={100} infiniteLoop showThumbs={false} className="custom-carousel">
                     
                    <div className="slide">
                          <img src="https://dl.dropboxusercontent.com/s/cnowbumt3ecj9e2pa29yu/elcambiopic.png?rlkey=7vo4hcix675fk5wytkqu9hfgu&dl=0" />
                          <button className="legend"><a href="https://www.instagram.com/p/C5b22lTvChH/?img_index=1" target="_blank" style={{textDecoration:"none", cursor:"pointer"}}><InstagramLogo width={25} className="igLogo"></InstagramLogo></a></button>
                      </div>
                      <div className="slide">
                          <img src="https://dl.dropboxusercontent.com/s/dn8xm1k6kef804auw0pg7/D4A0CCB5-6F0C-4CB0-B93A-622E1697C908.JPG?rlkey=6cnvstghktqqrvxbqv2lg8o8y&dl=0" />
                          <button className="legend"><a href="https://www.instagram.com/p/C380AoJMQBH/?img_index=1" target="_blank" style={{textDecoration:"none", cursor:"pointer"}}><InstagramLogo width={25} className="igLogo"></InstagramLogo></a></button>
                      </div>
                      <div className="slide">
                          <img src="https://dl.dropboxusercontent.com/s/5hhls38wigt1wwgrt3p0m/1.png?rlkey=tjj5wradaf2lrw0pu7id6jatt&dl=0" />
                          <button className="legend"><a href="https://www.instagram.com/p/CyOdrU4xPSa/?img_index=1" target="_blank" style={{textDecoration:"none", cursor:"pointer"}}><InstagramLogo width={25} className="igLogo"></InstagramLogo></a></button>
                      </div>
                      <div className="slide">
                          <img src="https://dl.dropboxusercontent.com/s/6aroj9lrd83ka8082t8ik/4.png?rlkey=xd4waq4ideo8z8cwbzxi75o0j&dl=0" />
                          <button className="legend"><a href="https://www.instagram.com/p/C1m7-cQvV_J/?img_index=1" target="_blank" style={{textDecoration:"none", cursor:"pointer"}}><InstagramLogo width={25} className="igLogo"></InstagramLogo></a></button>
                      </div>
                      <div  className="slide">
                          <img src="https://dl.dropboxusercontent.com/s/aa6wibav18t36t47r2j6j/6.png?rlkey=ufxq4j0n8d5ua3fy00ljn7c57&dl=0" />
                          <button className="legend"><a href="https://www.instagram.com/p/CzJuQlgOB_6/?img_index=1" target="_blank" style={{textDecoration:"none", cursor:"pointer"}}><InstagramLogo width={25} className="igLogo"></InstagramLogo></a></button>
                      </div>
                      <div  className="slide">
                          <img src="https://dl.dropboxusercontent.com/s/g45lofzneu2yk3m3ecvos/7.png?rlkey=qx5wzzp37ba3jbplefm9721js&dl=0" />
                          <button className="legend"><a href="https://instagram.com/p/Cz4CNH3teEa/?img_index=1" target="_blank" style={{textDecoration:"none", cursor:"pointer"}}><InstagramLogo width={25} className="igLogo"></InstagramLogo></a></button>
                      </div>
                  </Carousel>
              </Card>

              <Card className="card" style={{width:'90%', minHeight: '200px', marginTop:"5%"}}>
                <div className="cardHeader"><img src="https://raw.githubusercontent.com/React95/React95/40e774b5e208822d206d9f6bc202ec1d7c3b0680/packages/icons/src/icons/mailnews_8.ico" width="20px"></img> Sign up to receive beats, loops and samples.</div>
                  <div style={{marginTop:"5%", textAlign:"center"}}>
                    <form>
                      <p>Enter Your E-mail Address</p>  
                      <input type="text" name="e-mail" style={{display:"inline-block", marginBottom:"20px", width:"50%"}}  
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      ></input>
                      <br></br>
                      <div style={{display:'inline'}}>
                        <input
                          style={{borderRadius:"10px", backgroundColor:"#CBD5E1", display:'inline'}}
                          type="checkbox"
                          name="producer"
                          value="0"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setProducer(true);
                            } else {
                              setProducer(false);
                            }
                          }}
                        />
                        <p style={{display:'inline',  margin:"0 5px"}}>producer</p>
                    
                        <input
                          style={{borderRadius:"10px", backgroundColor:"#CBD5E1", display:'inline'}}
                          type="checkbox"
                          name="artist"
                          value="0"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setArtist(true);
                            } else {
                              setArtist(false);
                            }
                          }}
                        />
                        <p style={{display:'inline', margin:"0 5px"}}>artist</p>
                        <input
                        style={{borderRadius:"10px", backgroundColor:"#CBD5E1", display:'inline'}}
                        type="checkbox"
                        name="fan"
                        value="0"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFan(true);
                          } else {
                            setFan(false);
                          }
                        }}
                      />
                      <p style={{display:'inline', margin:"0 10px"}}>fan</p>
                        <br></br>
                        <button onClick={handleSubmit} style={{marginTop:"20px", padding:"2px 5px"}}>Submit</button>
                        {message && <Alert style={{marginBottom:"5%"}} severity="success">{message}</Alert>}
                        {alert && <Alert style={{marginBottom:"5%"}} severity="error">{alert}</Alert>}
                      </div>
                    </form>
                  </div>
              </Card>
          </Grid>   
         
          <Grid item sm={12} md={4} order={{ sm: 2, md: 3 }} style={{marginTop:"6%"}}>
              <Card className="card" style={{width:'90%', minHeight: '200px', marginBottom:"20px"}}>
              <div className="cardHeader"><img src="https://raw.githubusercontent.com/React95/React95/40e774b5e208822d206d9f6bc202ec1d7c3b0680/packages/icons/src/icons/mmsys_116.ico" width="20" height="20" className="inage"/> Stream My Music</div>
                <CardContent>
                {/* <iframe width="100%" height="166" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/genesisbarrios/sets/my-music?si=62d1c9cdb8d54729a394f3c43d5d8d1b"></iframe>
                */}
                  <iframe src="https://open.spotify.com/embed/artist/3YihJDU9YETUNDWO6pDuQG?utm_source=generator" width="100%" height="180" frameBorder="0" allow="clipboard-write; encrypted-media; picture-in-picture" loading="lazy"></iframe>
                  <iframe width="100%" height="315" style={{borderRadius:"12px"}} src="https://www.youtube.com/embed/Dek1SdvAv2k?si=tNf8jxQ3qEEl4KO4" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                  <iframe 
                    title="SoundCloud Player"
                    width="100%"
                    height="300"
                    allow="autoplay"
                    style={{marginTop:"5%", borderRadius:"10px"}}
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1657973560&color=%235ab7ce&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                  ></iframe>
                </CardContent>
              </Card>
            <Card className="card" style={{width:'90%', minHeight: '800px'}}>
            <div className="cardHeader"><img src="https://raw.githubusercontent.com/React95/React95/40e774b5e208822d206d9f6bc202ec1d7c3b0680/packages/icons/src/icons/cd_music.ico" width="25" height="25" className="inage" /> Digital Collectibles - Music NFTs</div>
              <CardContent>
                <Paper style={{marginBottom:"10px"}}>
                  For those that don't know about Music NFTs, they are digital collectibles. You can collect(or mint) to own a rare, and unique copy of one of my songs. These collectibles will give you access to different features on my website.. It may be free beats, sample packs, or sneak peeks!
                </Paper>
                
                <Grid container spacing={2} style={{textAlign:"center"}}>
                  <Grid item sm={12} md={12}>
                  <iframe src="https://embed.sound.xyz/v1/release/6d9ec0ae-d689-4b11-9e4e-27216a6fcf10?referral=0x5dec3d6810fd96ac03593b862639ff32d7d1c78e&referral_source=embed-sound" style={{borderRadius: "8px"}} width="100%" height="188px"  allow="clipboard-write" sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"></iframe>
                    <iframe src="https://embed.sound.xyz/v1/release/4cb29261-df3e-4b43-8c37-8af5e9f0f3cf?referral=0x5dec3d6810fd96ac03593b862639ff32d7d1c78e&referral_source=embed-sound" style={{borderRadius: "8px"}} width="100%" height="188px"  allow="clipboard-write" sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"></iframe>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <iframe style={{border:"none"}} width="100%" height="250px" src="https://zora.co/collect/zora:0x4dd517d52618a2c5d90699b5fd49e28e4041ddfd/6/frame?padding=20px&mediaPadding=20px&showDetails=false&theme=%7B%22foreground%22%3A%22%23000000%22%2C%22background%22%3A%22%23f3f3f3%22%2C%22accent%22%3A%22%2307ff3b%22%2C%22onAccent%22%3A%22%23000000%22%2C%22border%22%3A%22%23f3f3f3%22%2C%22background2%22%3A%22%23f3f3f3%22%2C%22positive%22%3A%22%231CB687%22%2C%22negative%22%3A%22%23F03232%22%2C%22warning%22%3A%22%23F5A623%22%7D&showMedia=true&showCollectors=false&showMintingUI=true"></iframe>
                    <iframe style={{border:"none"}} width="100%" height="250px" src="https://zora.co/collect/oeth:0xe5a213495a6186bc85b6411c35286a858cb3675f/1/frame?padding=20px&mediaPadding=20px&showDetails=false&theme=%7B%22foreground%22%3A%22%23000000%22%2C%22background%22%3A%22%23f3f3f3%22%2C%22accent%22%3A%22%2307ff3b%22%2C%22onAccent%22%3A%22%23000000%22%2C%22border%22%3A%22%23f3f3f3%22%2C%22background2%22%3A%22%23f3f3f3%22%2C%22positive%22%3A%22%231CB687%22%2C%22negative%22%3A%22%23F03232%22%2C%22warning%22%3A%22%23F5A623%22%7D&showMedia=true&showCollectors=false&showMintingUI=true"></iframe>
                   
                  </Grid>
                  <Grid item sm={12} md={6}>
                      <iframe style={{border:"none"}} id="embed" width="100%" height="250px" src="https://zora.co/editions/eth:0x5bc30e809aed2ff3c3bede9804419488e305b258/1/frame?padding=20px&mediaPadding=20px&showDetails=false&theme=%7B%22foreground%22%3A%22%23000000%22%2C%22background%22%3A%22%23f3f3f3%22%2C%22accent%22%3A%22%2307ff3b%22%2C%22onAccent%22%3A%22%23000000%22%2C%22border%22%3A%22%23f3f3f3%22%2C%22background2%22%3A%22%23f3f3f3%22%2C%22positive%22%3A%22%231CB687%22%2C%22negative%22%3A%22%23F03232%22%2C%22warning%22%3A%22%23F5A623%22%7D&showMedia=true&showCollectors=false&showMintingUI=true"></iframe>
                      <iframe style={{border:"none"}} width="100%" height="250px" src="https://zora.co/collect/oeth:0xb45cd602810c48df0e36c1c292c51b4dd21f8e9d/1/frame?padding=20px&mediaPadding=20px&showDetails=false&theme=%7B%22foreground%22%3A%22%23000000%22%2C%22background%22%3A%22%23f3f3f3%22%2C%22accent%22%3A%22%2307ff3b%22%2C%22onAccent%22%3A%22%23000000%22%2C%22border%22%3A%22%23f3f3f3%22%2C%22background2%22%3A%22%23f3f3f3%22%2C%22positive%22%3A%22%231CB687%22%2C%22negative%22%3A%22%23F03232%22%2C%22warning%22%3A%22%23F5A623%22%7D&showMedia=true&showCollectors=false&showMintingUI=true"></iframe> 
                  </Grid>
                </Grid>

                <div style={{width:"100%", textAlign:"center"}}>
                  <Paper style={{marginTop:"10px"}}>
                    <a href="https://beta.catalog.works/gendotwav/soltero" target="_blank" style={{textDecoration:"none", color:"black"}}>Soltero feat. El Igor on Catalog</a>
                  </Paper>
                  <br></br>
                  <Paper style={{marginBottom:"10px"}}>
                  <a href="https://www.oohlala.xyz/artist/64c1b698-881c-4f40-959a-405dceb0d706/tracks" target="_blank" style={{textDecoration:"none", color:"black"}}>OohLala - Web3 Music Aggregator</a>
                  </Paper>
                </div>
                {/* <Frame style={{marginBottom:"10px"}}>
                <a href="https://www.sound.xyz/user/genwav.eth" target="_blank" style={{textDecoration:"none"}}><Button>sound.xyz</Button></a>
                </Frame> */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
            <Grid item sm={3}>
            </Grid>
            <Grid item sm={6}></Grid>
            <Grid item sm={3}>
            
          </Grid>
      </Grid>
   </div>
    );
        
};

export default GenWavOS;
