import React from 'react';
import { Parallax } from "react-parallax";
import Image from 'next/image';
import Link from 'next/link';
import img from "../../public/img/own/Untitled-1.png"

const image1 ='../../img/background/nebula.webp';
import image2 from'../../public/img/own/avatar.png';

const Section = () => {
    return(
        <div className="container position-relative">
            <div className="row">
                <div className="col-lg-12">
                    <Image src={img} alt="" width={100} height={100} style={{width:"100%", height:"100%"}} />
                </div>
            </div>
        </div>
    );
}

export default Section;