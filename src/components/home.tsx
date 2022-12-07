
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import  "./home.css";

const images  = [
  {
    url: 'https://images.unsplash.com/photo-1650123956505-4e0b25aa140d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    title: 'TURBAT',
    width: '30%',
  },
  {
    url: 'https://images.unsplash.com/photo-1610427791820-77302066c082?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title : 'NARAN',
    width: '30%',
  },
  {
    url: 'https://images.unsplash.com/photo-1568285362916-ad64b99aac3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    title: 'KASHMIR',
    width: '30%',
  },
  {
    url: 'https://images.unsplash.com/photo-1596464148416-e0916276a9f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: 'GILGIT',
    width: '30%',
  },
  {
    url: 'https://images.unsplash.com/photo-1611051493453-48ec14096052?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    title: 'MURREE',
    width: '30%',
  },
  {
    url: 'https://images.unsplash.com/photo-1650796453680-2e0ed46c75b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    title: 'SWAAT',
    width: '30%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 300,

  margin:'22px',

  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,



  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

function Slider() {
  return (
    <> 
    <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src= "https://images.unsplash.com/photo-1595361315899-72a291112b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="First slide"
        style={{width: 100, height: 520}}
      />
      <Carousel.Caption>
        <h3 style={{fontFamily: 'serif'}}>COME TO EXPERIENCE IN  HOLIDAYS HOME</h3>
        <p style={{fontFamily: 'serif'}}>LENDMARK TOUR  LETS'S ENJOY</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1601886004192-5629cda1203d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
        alt="Second slide"
        
        style={{width: 100, height: 520}}
      
      
      />

      <Carousel.Caption>
        <h3 style={{fontFamily: 'serif'}}>COME TO EXPERIENCE IN  HOLIDAYS HOME</h3>
        <p style={{fontFamily: 'serif'}}>LENDMARK TOUR  LETS'S ENJOY</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1630400949812-26c6ae8182dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="Third slide"
        style={{width: 100, height: 520}}
       
      />

      <Carousel.Caption>
        <h3 style={{fontFamily: 'serif'}}>COME TO EXPERIENCE IN  HOLIDAYS HOME</h3>
        <p style={{fontFamily: 'serif'}}>
        LENDMARK TOUR  
        LETS'S ENJOY
         
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  <br></br>
<h1 style={{fontFamily: 'serif'}}> PACKAGE</h1>


<Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
{images.map((image) => (
  <ImageButton
    focusRipple
    key={image.title}
    style={{
      width: image.width,
    }}
  >
    <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
    <ImageBackdrop className="MuiImageBackdrop-root" />
    <Image>
      <Typography
        component="span"
        variant="subtitle1"
        color="inherit"
        sx={{
          position: 'relative',
          p: 4,
          pt: 2,
          pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
        }}
      >
        {image.title}
        <ImageMarked className="MuiImageMarked-root" />
      </Typography>
    </Image>
  </ImageButton>
))}
</Box>
</>
  );
}



  

export default Slider;