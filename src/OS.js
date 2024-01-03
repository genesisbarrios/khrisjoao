
import { useState } from "react";
import { Key, ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useMemo, useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './styles.css'
import Grid from '@material-ui/core/Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faWallet } from '@fortawesome/free-solid-svg-icons'
import { MenuList, MenuListItem, Separator, styleReset, Window, WindowHeader, WindowContent, Frame, Button } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Container } from "@material-ui/core";
import '@react95/icons/icons.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

/* Pick a theme of your choice */
import brick from 'react95/dist/themes/brick';
import blue from 'react95/dist/themes/blue';
import original from 'react95/dist/themes/original';
import modernDark from 'react95/dist/themes/modernDark';
import { Avatar } from "react95";

import { GlobeSimple, InstagramLogo, TwitterLogo, TiktokLogo, SoundcloudLogo, SpotifyLogo, AppleLogo, YoutubeLogo, GithubLogo  } from "@phosphor-icons/react";

const GenWavOS = (props) => {

  useEffect(() => {
    
    //hide elements
    if(document){
    const welcomeBox = document.getElementById("welcomeBox");
    welcomeBox.style.display = "none";
    }
  }, []);

 
  return(
    
    <div id="OS">
      
      <Grid container spacing={2}> 
        <Grid item sm={4}> 
          <div style={{marginTop:"17%", marginLeft:"5%"}}>
            <ThemeProvider theme={brick}>
              <Window style={{width:'90%', minHeight: '350px', margin:"5% 0"}}>
                <WindowHeader> Original Music by gen.wav </WindowHeader>
                <WindowContent>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?si=xGEY6ZggMM4ptxno&amp;list=PLcGBMxEyx5p8fc_zHMGJAUxLs94iw_puY" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfulscreen></iframe>
                  </WindowContent>
              </Window>
            </ThemeProvider>
            <ThemeProvider theme={brick}>
                <Window style={{width:'90%', minHeight: '700px'}}>
                  <WindowHeader><img src="https://drive.google.com/uc?export=view&id=1Uvtq5e8SooDABw2cRESMMeLLcYc_tee3" width="20" height="20"/> Beats</WindowHeader>
                  <WindowContent>
                    <iframe 
                        src="https://player.beatstars.com/?storeId=140652" 
                        width="100%" 
                        height="650">
                    </iframe>
                  </WindowContent>
                </Window>
              </ThemeProvider>
              <ThemeProvider theme={brick}>
                <Window style={{width:'90%', minHeight: '200px', marginTop:'5%'}}>
                  <WindowHeader> Services</WindowHeader>
                      <Carousel centerMode={true} dynamicHeight={false} centerSlidePercentage={100} infiniteLoop showThumbs={false} className="custom-carousel">
                        <div className="slide">
                            <img src="carouselImages/mixing.png" />
                            <button className="legend"><a href="https://genwav.beatstars.com/services" target="_blank" style={{textDecoration:"none", cursor:"pointer"}}><GlobeSimple width={25} className="igLogo"></GlobeSimple></a></button>
                        </div>
                        <div className="slide">
                            <img src="carouselImages/fullmix.png" />
                            <button className="legend"><a href="https://genwav.beatstars.com/services/119321" target="_blank" style={{textDecoration:"none", cursor:"pointer"}}><GlobeSimple width={25} className="igLogo"></GlobeSimple></a></button>
                        </div>
                        <div  className="slide">
                            <img src="carouselImages/mastering.png" />
                            <button className="legend"><a href="https://genwav.beatstars.com/services/119322" target="_blank" style={{textDecoration:"none", cursor:"pointer"}}><GlobeSimple width={25} className="igLogo"></GlobeSimple></a></button>
                        </div>
                        <div className="slide">
                            <img src="carouselImages/mix+master.png" />
                            <button className="legend"><a href="https://genwav.beatstars.com/services/119323" target="_blank" style={{textDecoration:"none", cursor:"pointer"}}><GlobeSimple width={25} className="igLogo"></GlobeSimple></a></button>
                        </div>
                        <div className="slide">
                            <img src="carouselImages/custombeat.png" />
                            <button className="legend"><a href="https://genwav.beatstars.com/services/119324" target="_blank" style={{textDecoration:"none", cursor:"pointer"}}><GlobeSimple width={25} className="igLogo"></GlobeSimple></a></button>
                        </div>
                    </Carousel>
                </Window>
            </ThemeProvider>
            
          </div>
        </Grid>
        <Grid item sm={4}>
        <div style={{marginLeft:"5%", marginTop:"5%"}}>  
              <ThemeProvider theme={modernDark}>
                <MenuList inline="true" style={{paddingTop:"10px"}}>
                  <MenuListItem disabled="true" style={{fontSize:"1.3rem"}}>Socials</MenuListItem>
                  <MenuListItem>
                    <a target="_blank" href="http://instgram.com/gen.wav" style={{textDecoration:"none"}}>
                      <InstagramLogo style={{color: '#A6CAF0'}} size={25}></InstagramLogo>
                    </a>
                  </MenuListItem>
                  <MenuListItem>
                    <a target="_blank" href="http://twitter.com/gendotwav" style={{textDecoration:"none"}}>
                      <TwitterLogo style={{color: '#A6CAF0'}} size={25}></TwitterLogo>
                    </a>
                  </MenuListItem>
                  <MenuListItem>
                    <a target="_blank" href="http://tiktok.com/gen.wav" style={{textDecoration:"none"}}>
                      <TiktokLogo style={{color: '#A6CAF0'}} size={25}></TiktokLogo>
                    </a>
                  </MenuListItem>
                  <MenuListItem>
                    <a target="_blank" href="https://soundcloud.com/genwav" style={{textDecoration:"none"}}>
                      <SoundcloudLogo style={{color: '#A6CAF0'}} size={25}></SoundcloudLogo>
                    </a>
                  </MenuListItem>
                  <MenuListItem>
                    <a target="_blank" href="https://www.youtube.com/@genwav" style={{textDecoration:"none"}}>
                      <YoutubeLogo style={{color: '#A6CAF0'}} size={25}></YoutubeLogo>
                    </a>
                  </MenuListItem>
                  <MenuListItem>
                    <a target="_blank" href="https://open.spotify.com/artist/5p2tmJU9R8sopvcXdXBbsV?si=vVx-nEfmS2WlKXoXk0XHeA" style={{textDecoration:"none"}}>
                      <SpotifyLogo style={{color: '#A6CAF0'}} size={25}></SpotifyLogo>
                    </a>
                  </MenuListItem>
                  <MenuListItem>
                    <a target="_blank" href="https://music.apple.com/us/artist/genesis-barrios/1194186719" style={{textDecoration:"none"}}>
                      <AppleLogo style={{color: '#A6CAF0'}} size={25}></AppleLogo>
                    </a>
                  </MenuListItem>
                </MenuList>
            </ThemeProvider>
          </div>
          <ThemeProvider theme={blue}>
            <Window style={{width:'90%', minHeight: '200px', marginTop:'5%'}}>
              <WindowHeader> About</WindowHeader>
              <WindowContent>
                <div style={{textAlign:"center"}}>
                  <Avatar size={100} src='avatar.png' />
                </div>
                <Frame> Hi, my name is gen.wav. I'm a Cuban-American Artist, Producer, and Software Engineer. 👨‍💻 I like to say I'm a creative because aside from programming, and making music, I do photography, I dabble in videography and graphic design, I do live coding, I DJ, and I make YouTube videos. So, take a look around, you can stream my music, watch my music videos, buy beats, or Music NFTS, or just vibe. </Frame>
              </WindowContent>
            </Window>
          </ThemeProvider>

          <ThemeProvider theme={blue}>
            <Window style={{width:'90%', minHeight: '200px', marginTop:'5%'}}>
              <WindowHeader> Gallery</WindowHeader>
                  <Carousel centerMode={true} dynamicHeight={false} centerSlidePercentage={100} infiniteLoop showThumbs={false} className="custom-carousel">
                   
                    <div className="slide">
                        <img src="carouselImages/1.png" />
                        <button className="legend"><a href="https://www.instagram.com/p/CyOdrU4xPSa/?img_index=1" target="_blank" style={{textDecoration:"none", cursor:"pointer"}}><InstagramLogo width={25} className="igLogo"></InstagramLogo></a></button>
                    </div>
                    <div className="slide">
                        <img src="carouselImages/2.png" />
                     </div>
                     <div className="slide">
                        <img src="carouselImages/3.png" />
                     </div>
                    <div className="slide">
                        <img src="carouselImages/4.png" />
                        <button className="legend"><a href="https://www.instagram.com/p/C1m7-cQvV_J/?img_index=1" target="_blank" style={{textDecoration:"none", cursor:"pointer"}}><InstagramLogo width={25} className="igLogo"></InstagramLogo></a></button>
                    </div>
                    <div  className="slide">
                        <img src="carouselImages/5.png" />
                        <button className="legend"><a href="https://www.instagram.com/p/Cy_izfGt77a/?img_index=1" target="_blank" style={{textDecoration:"none", cursor:"pointer"}}><InstagramLogo width={25} className="igLogo"></InstagramLogo></a></button>
                    </div>
                    <div  className="slide">
                        <img src="carouselImages/6.png" />
                        <button className="legend"><a href="https://www.instagram.com/p/CzJuQlgOB_6/?img_index=1" target="_blank" style={{textDecoration:"none", cursor:"pointer"}}><InstagramLogo width={25} className="igLogo"></InstagramLogo></a></button>
                    </div>
                    <div  className="slide">
                        <img src="carouselImages/7.png" />
                        <button className="legend"><a href="https://instagram.com/p/Cz4CNH3teEa/?img_index=1" target="_blank" style={{textDecoration:"none", cursor:"pointer"}}><InstagramLogo width={25} className="igLogo"></InstagramLogo></a></button>
                    </div>
                 </Carousel>
            </Window>
          </ThemeProvider>
        </Grid>
        <Grid item sm={4}>
         <ThemeProvider theme={blue}>
            <Window style={{width:'90%', minHeight: '200px', marginTop:'22%'}}>
              <WindowHeader>🎤 Stream My Music 🎤</WindowHeader>
              <WindowContent>
              {/* <iframe width="100%" height="166" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/genesisbarrios/sets/my-music?si=62d1c9cdb8d54729a394f3c43d5d8d1b"></iframe>
              */}
                <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/artist/3YihJDU9YETUNDWO6pDuQG?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
               </WindowContent>
            </Window>
          </ThemeProvider>

          <ThemeProvider theme={blue}>
              <Window style={{width:'90%', minHeight: '800px', marginTop:'20px'}}>
                <WindowHeader>💿 Digital Collectibles - Music NFTs</WindowHeader>
                <WindowContent>
                  <Frame style={{marginBottom:"10px"}}>
                    For those that don't know about Music NFTs, they are digital collectibles. You can collect(or mint) to own a rare, and unique copy of one of my songs. These collectibles will give you access to different features on my website.. It may be free beats, sample packs, or sneak peeks!
                  </Frame>
                  <Grid container spacing={2}>
                    <Grid item sm={12} md={6}>
                      <Frame style={{marginBottom:"10px", borderRadius:"15px"}}>
                       <iframe style={{border:"none"}} id="embed" width="100%" height="250px" src="https://zora.co/editions/eth:0x5bc30e809aed2ff3c3bede9804419488e305b258/1/frame?padding=20px&mediaPadding=20px&showDetails=false&theme=%7B%22foreground%22%3A%22%23000000%22%2C%22background%22%3A%22%23f3f3f3%22%2C%22accent%22%3A%22%2307ff3b%22%2C%22onAccent%22%3A%22%23000000%22%2C%22border%22%3A%22%23f3f3f3%22%2C%22background2%22%3A%22%23f3f3f3%22%2C%22positive%22%3A%22%231CB687%22%2C%22negative%22%3A%22%23F03232%22%2C%22warning%22%3A%22%23F5A623%22%7D&showMedia=true&showCollectors=false&showMintingUI=true"></iframe>
                      </Frame>
                      <Frame style={{marginBottom:"10px", borderRadius:"15px"}}>
                      <iframe style={{border:"none"}} width="100%" height="250px" src="https://zora.co/collect/oeth:0xe5a213495a6186bc85b6411c35286a858cb3675f/1/frame?padding=20px&mediaPadding=20px&showDetails=false&theme=%7B%22foreground%22%3A%22%23000000%22%2C%22background%22%3A%22%23f3f3f3%22%2C%22accent%22%3A%22%2307ff3b%22%2C%22onAccent%22%3A%22%23000000%22%2C%22border%22%3A%22%23f3f3f3%22%2C%22background2%22%3A%22%23f3f3f3%22%2C%22positive%22%3A%22%231CB687%22%2C%22negative%22%3A%22%23F03232%22%2C%22warning%22%3A%22%23F5A623%22%7D&showMedia=true&showCollectors=false&showMintingUI=true"></iframe>
                      </Frame>
                    </Grid>
                    <Grid item sm={12} md={6}>
                      <Frame style={{marginBottom:"10px", borderRadius:"15px"}}>
                       <iframe style={{border:"none"}} width="100%" height="250px" src="https://zora.co/collect/oeth:0xb45cd602810c48df0e36c1c292c51b4dd21f8e9d/1/frame?padding=20px&mediaPadding=20px&showDetails=false&theme=%7B%22foreground%22%3A%22%23000000%22%2C%22background%22%3A%22%23f3f3f3%22%2C%22accent%22%3A%22%2307ff3b%22%2C%22onAccent%22%3A%22%23000000%22%2C%22border%22%3A%22%23f3f3f3%22%2C%22background2%22%3A%22%23f3f3f3%22%2C%22positive%22%3A%22%231CB687%22%2C%22negative%22%3A%22%23F03232%22%2C%22warning%22%3A%22%23F5A623%22%7D&showMedia=true&showCollectors=false&showMintingUI=true"></iframe>
                      </Frame>
                      <Frame style={{marginBottom:"10px", height:"255px", backgroundColor:"white", borderRadius:"15px"}}>
                        <div style={{}}>
                          <img width="90%" height="auto" style={{marginLeft:"5%", marginBottom:"5%"}} src="https://drive.google.com/uc?export=view&id=1frRAuaOWuqEUUYqaYzLB9AdQZvMap58f"></img>
                          <p style={{display:"inline", margin:"0 10%", fontFamily:"Helvetica Neue", fontWeight:"400", fontSize:"0.9em"}}>Trust Me</p>
                          <a href="https://opensea.io/assets/matic/0x6ac6ea8ea96b582d6473def2a1cd13aaf3f80cc3/" target="_blank" style={{display:"inline", marginLeft:"15%", cursor:"pointer"}}><button style={{backgroundColor:"black", color:"white", borderRadius:"5px", padding:"5px 15px"}}>Mint</button></a>
                       </div>
                      </Frame>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item sm={12} style={{width:"100%", textAlign:"center"}}>
                      <Frame style={{marginBottom:"10px", borderRadius:"15px"}}>
                        <iframe src="https://embed.sound.xyz/v1/release/5d3056a3-3f54-4aac-827d-15372f8f391e?referral=0x5dec3d6810fd96ac03593b862639ff32d7d1c78e&referral_source=embed-sound" style={{borderRadius: "8px"}} width="100%" height="auto" allow="clipboard-write" sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"></iframe>
                      </Frame>
                      </Grid>
                  </Grid>

                  <div style={{width:"100%", textAlign:"center"}}>
                    <Frame style={{marginBottom:"10px",}}>
                      <a href="https://beta.catalog.works/gendotwav/soltero" target="_blank" style={{textDecoration:"none"}}><Button>Soltero feat. El Igor on Catalog</Button></a>
                    </Frame>
                    <br></br>
                    <Frame style={{marginBottom:"10px"}}>
                      <a href="https://www.riffapp.xyz/post/0x01a1b9-0x12" target="_blank" style={{textDecoration:"none"}}><Button>La Playa Snippet - Free on Riffapp</Button></a>
                    </Frame>
                    <br></br>
                    <Frame style={{marginBottom:"10px"}}>
                    <a href="https://www.oohlala.xyz/artist/64c1b698-881c-4f40-959a-405dceb0d706/tracks" target="_blank" style={{textDecoration:"none"}}> <Button>OohLala - Web3 Music Aggregator</Button></a>
                    </Frame>
                  </div>
                  {/* <Frame style={{marginBottom:"10px"}}>
                  <a href="https://www.sound.xyz/user/genwav.eth" target="_blank" style={{textDecoration:"none"}}><Button>sound.xyz</Button></a>
                  </Frame> */}
                </WindowContent>
              </Window>
            </ThemeProvider>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
          <Grid item sm={3}>
          <ThemeProvider theme={brick}>
            
            </ThemeProvider>
          </Grid>
          <Grid item sm={6}></Grid>
          <Grid item sm={3}>
            
          </Grid>
      </Grid>
   </div>
    );
        
};

export default GenWavOS;
