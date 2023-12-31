
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

/* Pick a theme of your choice */
import brick from 'react95/dist/themes/brick';
import blue from 'react95/dist/themes/blue';
import original from 'react95/dist/themes/original';
import modernDark from 'react95/dist/themes/modernDark';

import { InstagramLogo, TwitterLogo, TiktokLogo, SoundcloudLogo, SpotifyLogo, AppleLogo, YoutubeLogo  } from "@phosphor-icons/react";

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
      <div style={{backgroundColor:'#535353', width:"100%", paddingBottom:'5px', marginBottom:'10px'}}>      
        <img src="logo.png" width="25px" style={{display:"inline", marginLeft:"5px", marginTop:'5px'}}></img>
        <h2 style={{display:"inline", fontFamily:"arial"}}>genwavOS</h2>
      </div>
      <Grid container spacing={2}> 
        <Grid item sm={4}> 
          <div style={{marginTop:"17%", marginLeft:"5%"}}>
            <ThemeProvider theme={brick}>
                <Window style={{width:'80%', minHeight: '700px'}}>
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
                <Window style={{width:'80%', minHeight: '350px', marginTop:"3%"}}>
                  <WindowHeader> Original Music by gen.wav </WindowHeader>
                  <WindowContent>
                  <iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?si=xGEY6ZggMM4ptxno&amp;list=PLcGBMxEyx5p8fc_zHMGJAUxLs94iw_puY" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfulscreen></iframe>
                   </WindowContent>
                </Window>
              </ThemeProvider>
          </div>
        </Grid>
        <Grid item sm={4}>
        <div style={{marginLeft:"18%", marginTop:"5%"}}>  
              <ThemeProvider theme={modernDark}>
                <MenuList inline="true" style={{paddingTop:"10px"}}>
                  <MenuListItem disabled="true" style={{fontSize:"1.3rem"}}>Socials</MenuListItem>
                  <MenuListItem>
                    <a target="_blank" href="http://instgram.com/gen.wav" style={{textDecoration:"none"}}>
                      <InstagramLogo style={{color: 'limegreen'}} size={25}></InstagramLogo>
                    </a>
                  </MenuListItem>
                  <MenuListItem>
                    <a target="_blank" href="http://twitter.com/gendotwav" style={{textDecoration:"none"}}>
                      <TwitterLogo style={{color: 'limegreen'}} size={25}></TwitterLogo>
                    </a>
                  </MenuListItem>
                  <MenuListItem>
                    <a target="_blank" href="http://tiktok.com/gen.wav" style={{textDecoration:"none"}}>
                      <TiktokLogo style={{color: 'limegreen'}} size={25}></TiktokLogo>
                    </a>
                  </MenuListItem>
                  <MenuListItem>
                    <a target="_blank" href="https://soundcloud.com/genwav" style={{textDecoration:"none"}}>
                      <SoundcloudLogo style={{color: 'limegreen'}} size={25}></SoundcloudLogo>
                    </a>
                  </MenuListItem>
                  <MenuListItem>
                    <a target="_blank" href="https://www.youtube.com/@genwav" style={{textDecoration:"none"}}>
                      <YoutubeLogo style={{color: 'limegreen'}} size={25}></YoutubeLogo>
                    </a>
                  </MenuListItem>
                  <MenuListItem>
                    <a target="_blank" href="https://open.spotify.com/artist/5p2tmJU9R8sopvcXdXBbsV?si=vVx-nEfmS2WlKXoXk0XHeA" style={{textDecoration:"none"}}>
                      <SpotifyLogo style={{color: 'limegreen'}} size={25}></SpotifyLogo>
                    </a>
                  </MenuListItem>
                  <MenuListItem>
                    <a target="_blank" href="https://music.apple.com/us/artist/genesis-barrios/1194186719" style={{textDecoration:"none"}}>
                      <AppleLogo style={{color: 'limegreen'}} size={25}></AppleLogo>
                    </a>
                  </MenuListItem>
                </MenuList>
            </ThemeProvider>
          </div>
          <ThemeProvider theme={blue}>
            <Window style={{width:'80%', minHeight: '200px', marginTop:'5%'}}>
              <WindowHeader> About</WindowHeader>
              <WindowContent>
              <p> Hi, my name is gen.wav. I'm a Cuban-American Artist, Producer, and Software Engineer. 👨‍💻 I like to say I'm a creative because aside from programming, and making music, I do photography, I dabble in videography and graphic design, I do live coding, I DJ, and I make YouTube videos. So, take a look around, you can stream my music, watch my music videos, buy beats, or Music NFTS, or just vibe.</p>
              </WindowContent>
            </Window>
          </ThemeProvider>
        </Grid>
        <Grid item sm={4}>
         <ThemeProvider theme={blue}>
            <Window style={{width:'80%', minHeight: '200px', marginTop:'17%'}}>
              <WindowHeader>🎤 Stream My Music 🎤</WindowHeader>
              <WindowContent>
              {/* <iframe width="100%" height="166" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/genesisbarrios/sets/my-music?si=62d1c9cdb8d54729a394f3c43d5d8d1b"></iframe>
              */}
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/playlist/0njrEVbOQFg1AXXeEfyEQF?utm_source=generator"
                width="100%"
                height="400px"
                allow="clipboard-write; encrypted-media;"
                loading="lazy"
              ></iframe>
               </WindowContent>
            </Window>
          </ThemeProvider>

          <ThemeProvider theme={blue}>
              <Window style={{width:'80%', minHeight: '800px', marginTop:'20px'}}>
                <WindowHeader>💿 Music NFTs</WindowHeader>
                <WindowContent>
                  <Frame style={{marginBottom:"10px"}}>
                    For those that don't know about Music NFTs, they are digital collectibles. You can collect(or mint) to own a rare, and unique copy of one of my songs. These collectibles will give you access to different features on my website.. It may be free beats, sample packs, or sneak peeks!
                  </Frame>
                  <Frame style={{marginBottom:"10px", width:"100%"}}>
                  <div><iframe id="embed" width="100%" height="700px" src="https://zora.co/editions/eth:0x5bc30e809aed2ff3c3bede9804419488e305b258/1/frame?padding=20px&mediaPadding=20px&showDetails=false&theme=%7B%22foreground%22%3A%22%23000000%22%2C%22background%22%3A%22%23f3f3f3%22%2C%22accent%22%3A%22%2307ff3b%22%2C%22onAccent%22%3A%22%23000000%22%2C%22border%22%3A%22%23f3f3f3%22%2C%22background2%22%3A%22%23f3f3f3%22%2C%22positive%22%3A%22%231CB687%22%2C%22negative%22%3A%22%23F03232%22%2C%22warning%22%3A%22%23F5A623%22%7D&showMedia=true&showCollectors=false&showMintingUI=true"></iframe></div>
                  </Frame>
                  <Frame style={{marginBottom:"10px", width:"100%"}}>
                  <div><iframe id="embed" width="100%" height="700px" src="https://zora.co/collect/oeth:0xb45cd602810c48df0e36c1c292c51b4dd21f8e9d/1/frame?padding=20px&mediaPadding=20px&showDetails=false&theme=%7B%22foreground%22%3A%22%23000000%22%2C%22background%22%3A%22%23f3f3f3%22%2C%22accent%22%3A%22%2307ff3b%22%2C%22onAccent%22%3A%22%23000000%22%2C%22border%22%3A%22%23f3f3f3%22%2C%22background2%22%3A%22%23f3f3f3%22%2C%22positive%22%3A%22%231CB687%22%2C%22negative%22%3A%22%23F03232%22%2C%22warning%22%3A%22%23F5A623%22%7D&showMedia=true&showCollectors=false&showMintingUI=true"></iframe></div>
                  </Frame>
                  <Frame style={{marginBottom:"10px", width:"100%"}}>
                  <div><iframe id="embed" width="100%" height="700px" src="https://zora.co/collect/oeth:0xe5a213495a6186bc85b6411c35286a858cb3675f/1/frame?padding=20px&mediaPadding=20px&showDetails=false&theme=%7B%22foreground%22%3A%22%23000000%22%2C%22background%22%3A%22%23f3f3f3%22%2C%22accent%22%3A%22%2307ff3b%22%2C%22onAccent%22%3A%22%23000000%22%2C%22border%22%3A%22%23f3f3f3%22%2C%22background2%22%3A%22%23f3f3f3%22%2C%22positive%22%3A%22%231CB687%22%2C%22negative%22%3A%22%23F03232%22%2C%22warning%22%3A%22%23F5A623%22%7D&showMedia=true&showCollectors=false&showMintingUI=true"></iframe></div>
                  </Frame>

                  <Frame style={{marginBottom:"10px"}}>
                    <Button><a href="https://beta.catalog.works/gendotwav/soltero" target="_blank" style={{textDecoration:"none"}}>Soltero feat. El Igor on Catalog</a></Button>
                  </Frame>
                  <br></br>
                  <Frame style={{marginBottom:"10px"}}>
                    <Button><a href="https://www.riffapp.xyz/post/0x01a1b9-0x12" target="_blank" style={{textDecoration:"none"}}>La Playa Snippet - Free on Riffapp</a></Button>
                  </Frame>
                  <br></br>
                  <Frame style={{marginBottom:"10px"}}>
                    <Button><a href="https://lenstube.xyz/channel/genwav.lens" target="_blank" style={{textDecoration:"none"}}>Lenstube</a></Button>
                  </Frame>
                  <br></br>
                  <Frame style={{marginBottom:"10px"}}>
                    <Button><a href="https://www.sound.xyz/user/genwav.eth" target="_blank" style={{textDecoration:"none"}}>sound.xyz</a></Button>
                  </Frame>
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
