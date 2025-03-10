import React from "react";
import Image from "next/image";
import Link from "next/link";

import image1 from "../../public/img/logo.png";

const Section = () => {
  return (
    <div className="banner">
      <div
        className="row align-items-center gx-5 container justify-content-center mx-auto"
        style={{height:'100%'}}
      >
        <div className="col-lg-6">
          <div className="subtitle fadeInUp mb-3">Level Up Your Game</div>
          <h2 className="wow fadeInUp">Establish OGU</h2>
          <p className="wow fadeInUp">
            The Diety is an epic, action driven RPG when you play as the first
            god ever to wlak the earth. Betrayed and sealed away for eons, you
            awaken to find world rule by god who fear Your return. Explore
            divine realms, forge alliance with mythological beings, and unleash
            god-tier combat as you reclaim your power.
          </p>

          <div className="spacer-10"></div>
          <Link className="btn-main" href="#">
            Order Your Game Server Now
          </Link>
        </div>

        <div className="col-lg-6">
          <div className="d_wrap">
            <Image src={image1} className="img-fluid fadeIn" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
