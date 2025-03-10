import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import img1 from  "../../public/img/own/ca11m.webp"
import img2 from  "../../public/img/own/CA8.png"
import img3 from  "../../public/img/own/CA9.png"
import img4 from  "../../public/img/own/CAO1.png"
import img5 from  "../../public/img/own/O3.png"
import img6 from  "../../public/img/own/BK21.png"
import img7 from  "../../public/img/own/BK22.png"

const Section = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="subtitle mb-3" data-aos="fade-up">Popular</div>
                    <h2 className="mb20" data-wow-delay=".2s" data-aos="fade-up">The First God Awakness</h2>
                </div>

                <div className="col-lg-6" data-aos="fade-up">
                    <div className="row g-3">
                        <div className="col-lg-3 col-md-4 col-6 text-center">
                            <Link href="#">
                                <Image src={img1} className="img-fluid rounded-10 mb-3" alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 text-center">
                            <Link href="#">
                                <Image src={img2} className="img-fluid rounded-10 mb-3" alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 text-center">
                            <Link href="#">
                                <Image src={img3} className="img-fluid rounded-10 mb-3" alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 text-center">
                            <Link href="#">
                                <Image src={img4} className="img-fluid rounded-10 mb-3" alt=""/>
                            </Link>
                        </div>     
                                                 
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up">
                    <div className="row g-3">
                        <div className="col-lg-3 col-md-4 col-6 text-center">
                            <Link href="#">
                                <Image src={img3} className="img-fluid rounded-10 mb-3" alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 text-center">
                            <Link href="#">
                                <Image src={img5} className="img-fluid rounded-10 mb-3" alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 text-center">
                            <Link href="#">
                                <Image src={img6} className="img-fluid rounded-10 mb-3" alt=""/>
                                
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 text-center">
                            <Link href="#">
                            <Image src={img7} className="img-fluid rounded-10 mb-3" alt=""/>
                                
                            </Link>
                        </div>       
                                                 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;