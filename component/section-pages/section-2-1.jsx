import React from 'react';
import { Parallax } from "react-parallax";
import Image from 'next/image';
import Link from 'next/link';

const image1 ='../../img/background/nebula.webp';
import image2 from'../../public/img/own/avatar.png';

const Section = () => {
    return(
        <div className="container position-relative">
            <div className="row">
                <div className="col-lg-12">
                    <Parallax className="p-0" bgImage={image1} strength={300}>  
                    <div className="padding60 sm-padding40 sm-p-2 position-relative">
                        
                        <div className="row z-1">
                            <div className="col-lg-6">
                                <div className="subtitle mb-3">Start your game</div>
                                <h2 className="wow fadeInUp" data-aos="fade-up" data-aos-duration="600" data-aos-delay="0"><span className="text-gradient">Unlock</span> Your Gaming Full Potential</h2>
                                <p className="wow fadeInUp" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore id do eiusmod. Lorem ipsum non labore.</p>
                                <div className="spacer-10"></div>
                                <Link className="btn-main mb10" href="#">Order Your Game Server Now</Link>
                            </div>
                        </div>
                        
                    </div>
                    </Parallax>
                    <Image src={image2} className="sm-hide position-absolute avatar px-2"  alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Section;