import React from 'react';
import Link from 'next/link'; 
import Image from 'next/image';

import image1 from '../../public/img/logo.png';

const footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <footer>
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-4">
                        <Image src={image1} width={68} height={68} alt="" />
                        <div className="spacer-20"></div>
                        <p>Lorem ipsum culpa tempor tempor eu laboris adipisicing sunt excepteur enim laborum officia eiusmod.</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            {/* <div className="col-lg-6 col-sm-6">
                                <div className="widget">
                                    <h5>Game Server</h5>
                                    <ul>
                                        <li><Link href="#">Thunder and City</Link></li>
                                        <li><Link href="#">Mystic Racing Z</Link></li>
                                        <li><Link href="#">Silent Wrath</Link></li>
                                        <li><Link href="#">Funk Dungeon</Link></li>
                                        <li><Link href="#">Galactic Oddsey</Link></li>
                                        <li><Link href="#">Warfare Legend</Link></li>
                                    </ul>
                                </div>
                            </div> */}
                            <div className="col-lg-6 col-sm-6">
                                <div className="widget">
                                    <h5>Pages</h5>
                                    <ul>
                                        <li><Link href="#">Home</Link></li>
                                        <li><Link href="#">News</Link></li>
                                        <li><Link href="#">About</Link></li>
                                      
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="widget">
                            <h5>Newsletter</h5>
                            <form action="blank.php" className="row form-dark" id="form_subscribe" method="post" name="form_subscribe">
                            <div className="col text-center">
                                <input className="form-control" id="txt_subscribe" name="txt_subscribe" placeholder="enter your email" type="text" /> <Link href="#" id="btn-subscribe"><i className="arrow_right bg-color-secondary"></i></Link>
                                <div className="clearfix"></div>
                            </div>
                            </form>
                            <div className="spacer-10"></div>
                            <small>Your email is safe with us. We don&apos;t spam.</small>
                            <div className="spacer-30"></div>
                            <div className="widget">
                                <h5>Follow Us on</h5>
                                <div className="social-icons">
                                    <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
                                    <Link href="#"><i className="fa-brands fa-twitter"></i></Link>
                                    <Link href="#"><i className="fa-brands fa-discord"></i></Link>
                                    <Link href="#"><i className="fa-brands fa-tiktok"></i></Link>
                                    <Link href="#"><i className="fa-brands fa-youtube"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                           Copyright {currentYear} - Nemesis by Lorem ipsum
                        </div>
                        <div className="col-lg-6 col-sm-6 text-lg-end text-sm-start">
                            <ul className="menu-simple">
                                <li><Link href="#">Terms &amp; Conditions</Link></li>
                                <li><Link href="#">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;