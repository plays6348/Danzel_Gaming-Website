import React from 'react';
import Image from 'next/image';
import Link from 'next/link';




const Section = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="subtitle mb-3" data-aos="fade-up">Popular</div>
                    <h2 className="mb20" data-wow-delay=".2s" data-aos="fade-up">Game Servers</h2>
                </div>

                <div className="col-lg-6" data-aos="fade-up">
                    <div className="row g-3">
                        <div className="col-lg-3 col-md-4 col-6 text-center">
                            <Link href="#">
                                <img src="../../img/own/CA1.webp" className="img-fluid rounded-10 mb-3" alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 text-center">
                            <Link href="#">
                                <img src=".../../img/own/CA8.png" className="img-fluid rounded-10 mb-3" alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 text-center">
                            <Link href="#">
                                <img src=".../../img/own/CA9.png" className="img-fluid rounded-10 mb-3" alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 text-center">
                            <Link href="#">
                                <img src=".../../img/own/CAO1.png" className="img-fluid rounded-10 mb-3" alt=""/>
                            </Link>
                        </div>     
                                                 
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up">
                    <div className="row g-3">
                        <div className="col-lg-3 col-md-4 col-6 text-center">
                            <Link href="#">
                                <img src="../../img/own/CA1.webp" className="img-fluid rounded-10 mb-3" alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 text-center">
                            <Link href="#">
                                <img src=".../../img/own/O3.png" className="img-fluid rounded-10 mb-3" alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 text-center">
                            <Link href="#">
                                <img src=".../../img/own/BK21.png" className="img-fluid rounded-10 mb-3" alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 text-center">
                            <Link href="#">
                                <img src=".../../img/own/BK22.png" className="img-fluid rounded-10 mb-3" alt=""/>
                            </Link>
                        </div>       
                                                 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;