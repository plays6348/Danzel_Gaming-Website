import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../component/layout/Navbar';
import Preloader from '../component/layout/preloader';
import SwiperComponent from '../component/section-pages/slider-home-1';
import Popular from '../component/section-pages/popular';
import Location from '../component/section-pages/Location-nomarq';
import Section2 from '../component/section-pages/section-2-1';
import Reviews from '../component/section-pages/CustomerReviews';
import Help from '../component/section-pages/help';
import Download from '../component/section-pages/Download-1';
import Payment from '../component/section-pages/Payment';
import Footer from '../component/section-pages/footer';
import ScrollToTopBtn from '../component/layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';
import Collection from '../component/section-pages/Collection';
import Homestatic from '../component/section-pages/homestatic';

const image1 ="../../img/background/3.webp";
const image2 ="../../img/background/4.webp";
const GlobalStyles = createGlobalStyle`
  
`;

export default function Home() {
  useEffect(() => {
      if (typeof window !== 'undefined') {
          const loader = document.getElementById('mainpreloader');
          if (loader)
          setTimeout(() => {
            loader.classList.add("fadeOut");
            loader.style.display = 'none';
          }, 600)
      }
    }, []);
  return (
    <>
    <Head>
      <title>Playhost - Game Hosting Website Template</title>
      <link rel="icon" href="../img/icon.png" type="image/gif" sizes="16x16"/>
    </Head>

    <GlobalStyles/>

    {/* LOADER */}
    <div id='mainpreloader'>
      <Preloader/>
    </div>

    {/* MENU */}
    <div className="home dark-scheme">
      <header id="header-wrap">
         <Navbar />
      </header>

      {/* slider */}
      <Parallax className="bgcolor" bgImage={image2} strength={300}>  
        <section id="content" className="pt60 no-bottom">
          <Homestatic />
        </section>
       </Parallax>

      {/* section */}
      <section className="no-bottom tex-center">
        <Popular/>
      </section>

      {/* section */}
      <section className="no-bottom">
        <Location/>
      </section>

       <Parallax className="" bgImage={image1} strength={300}>  
              <div className="de-gradient-edge-top"></div>
              <div className="de-gradient-edge-bottom"></div>
              <section className="no-bg">
                <Collection/>
              </section>
            </Parallax>

      {/* section 2 */}
      <section className="no-bottom">
        <Section2/>
      </section>

      {/* section 3 */}
      <section className="no-bottom">
        <Reviews/>
      </section>

      {/* section */}
      <section className="no-bottom">
        <Help/>
      </section>

      {/* section */}
      <section className="no-bottom">
        <Download/>
      </section>


      {/* footer */}
      <Footer/>


    </div>
    <ScrollToTopBtn />
    </>
  )
}
