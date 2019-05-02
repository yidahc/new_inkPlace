import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

import Carousel from './Carousel.jsx';
import './home.css'

const Home = (props) => (
  <div>
      <h1 align="center">InkPlace</h1>
        <div align="center">
        
  </div>

  <div>
    <p>{props.style.info}</p>
  </div>

  <center>
    <div className='slideshow'>
   <Carousel />
  </div>
  </center>
  
  </div>

);

export default Home;
