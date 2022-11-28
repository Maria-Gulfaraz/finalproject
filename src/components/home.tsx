
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  "./home.css";

function Slider() {
  return (
    <> <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src= "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        alt="First slide"
        style={{width: 100, height: 520}}
      />
      <Carousel.Caption>
        <h3>COME TO EXPERIENCE IN  HOLIDAYS HOME</h3>
        <p>LENDMARK TOUR  LETS'S ENJOY</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80"
        alt="Second slide"
        
        style={{width: 100, height: 520}}
      
      
      />

      <Carousel.Caption>
        <h3>COME TO EXPERIENCE IN  HOLIDAYS HOME</h3>
        <p>LENDMARK TOUR  LETS'S ENJOY</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        alt="Third slide"
        style={{width: 100, height: 520}}
       
      />

      <Carousel.Caption>
        <h3>COME TO EXPERIENCE IN  HOLIDAYS HOME</h3>
        <p>
        LENDMARK TOUR  
        LETS'S ENJOY
         
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel></>
   
  );
}

export default Slider;