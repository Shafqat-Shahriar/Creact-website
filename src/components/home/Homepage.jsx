import React from 'react'
import CTA from './CTA'

import US from '../../assets/highway.png'
import HeaderSocials from './HeaerSocials'

import './homepage.css'
/*++++++++++++++++++++++++++             */

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import {Pagination} from 'swiper/modules';



const Homepage = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
         
        <SwiperSlide>
        <header className='hero'>

          <div className="container homepage__container">
            <h2>Your Trusted QA Partner</h2>
            <CTA/>
            <div class="animation-container">
              <p class="animation">We Ensure Software Excellence Through Rigorous Quality Assurance</p>
            </div>

            
            <HeaderSocials/>
          </div>

          <div className='us'>
              {/*<img src={US} alt="our app"/>*/}
          </div>

        </header>

        </SwiperSlide>


{/*End of slide 1 */}
        <SwiperSlide>
        <header className='hero'>

        <div class="content">
          <h4>We Ensure Quality</h4>
          <h1>Lum<span>enteder</span></h1>
          <h3>Get in touch</h3>

          <div class="newslatter"> 
            <form>
            <input type="email" name="email" id="mail" placeholder="Enter Your Email"/>
            <input type="submit" name="submit" value="Lets Start"/>              
            </form>
          </div>
        </div> 

        </header>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ContenT">
            <div className="dash1">
              <h1>Drive Growth:</h1>
              <h1>Superior Digital</h1>
              <h1>Marketing & Web</h1>
              <h1>Development</h1>
              
            <a href="#target_blank"  target="_blank" className="lt">Let's Talk</a>
            </div>
            <div className="dash2">
              <img src={US} alt="our app"/>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>




    
  );
}

export default Homepage 