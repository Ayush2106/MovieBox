import React from 'react'
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
function Footer() {
  return (
    <div className='footer'>
  <div className='heading'>
    <h1 
    onClick={(e) => {
        e.preventDefault();
        window.location.href='https://www.instagram.com/x_ayush01/';
        }}
    >Find Us On Instagram </h1>
  
  </div>

<div className='second'>
    <div className='left'>
  <div className='lefta'>
    <h1>Subscribe To our Youtube Channel </h1>
   <h2> We are uploading various action scenes and dialogue scene as a Youtube Shorts on our Channel.</h2>
   <YouTubeIcon
   onClick={(e) => {
    e.preventDefault();
    window.location.href='https://www.youtube.com/channel/UCALa8l19Ds9OD25DgSd4LpA';
    }}
   />
  </div>

  <div className='leftb'>
  <h1>Subscribe To our Spotify Channel </h1>
  <h2>We are providing high class Song Playlists of various types</h2>
  <PodcastsIcon
     onClick={(e) => {
        e.preventDefault();
        window.location.href='  https://open.spotify.com/collection/playlists/';
        }}
  />
  </div>
    <div className='leftb'>
    <h2>Connect With US</h2>
<div className='logoo'>
<LinkedInIcon 
onClick = {(e) =>{
    e.preventDefault();
    window.location.href = "https://www.linkedin.com/in/ayush-singla-04801b185/";
  }}
/>
<TwitterIcon
onClick={(e) => {
    e.preventDefault();
    window.location.href='https://twitter.com/ayush21singla';
    }}
/>
<InstagramIcon
onClick={(e) => {
    e.preventDefault();
    window.location.href='https://www.instagram.com/x_ayush01/';
    }}
/>
<FacebookIcon 
onClick={(e) => {
    e.preventDefault();
    window.location.href='https://www.facebook.com/ayush.singla.581730/';
    }}
/>
</div>
</div>

</div>

 

</div>
    </div>
  )
}

export default Footer