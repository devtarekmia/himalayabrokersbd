import React from 'react';
import logo from '@images/logo.png';
import { Link } from '@inertiajs/react';
import { RiHeartLine } from '@/Components/RiHeartLine';
import { PepiconsPencilOpen } from '@/Components/Icons/PepiconsPencilOpen';

function FooterHomeOne({ className }) {
    return (
        <>
            <section className={`appie-footer-area ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-about-widget">
                                <div className="logo">
                                    <a href="#">
                                        <img src={logo} alt="" />
                                    </a>
                                </div>
                                <p>
                                    HBL - Himalaya Brokers Limited is a Leading Tea Broker and Auctioneer located in Panchagarh, Bangladesh, the third tea auction center in the country.
                                </p>
                                <Link href="/about-us">
                                    Read More <i className="fal fa-arrow-right" />
                                </Link>
                                <div className="social mt-30">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-navigation">
                                <h4 className="title">Company</h4>
                                <ul>
                                    <li>
                                        <Link href="/about-us">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/service">Service</Link>
                                    </li>
                                    <li>
                                        <Link href="/schedule">Sale Programme</Link>
                                    </li>
                                    <li>
                                        <Link href="/catalogue">Catalogue</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-navigation">
                                <h4 className="title">Usefull Links</h4>
                                <ul>
                                    <li>
                                        <a href="https://teaboard.gov.bd/" target='_blank' referrerPolicy='no-referrer'>Bangladesh Tea Board</a>
                                    </li>
                                    <li>
                                        <a href="https://tealicense.gov.bd/" target='_blank' referrerPolicy='no-referrer'>Online Tea License</a>
                                    </li>
                                    <li>
                                        <a href="https://panchagarhteaauction.com/" target='_blank' referrerPolicy='no-referrer'>Panchagarh e-Auction</a>
                                    </li>
                                    <li>
                                        <a href="https://inttea.com/" target='_blank' referrerPolicy='no-referrer'>International Tea Committee</a>
                                    </li>
                                    <li>
                                        <a href="https://btri.gov.bd/" target='_blank' referrerPolicy='no-referrer'>Bangladesh Tea Research Institute</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget-info">
                                <h4 className="title">Get In Touch</h4>
                                <ul>
                                    <li>
                                        <a href="mailto:himalayabrokersltd@gmail.com">
                                            <i className="fal fa-envelope" /> himalayabrokersltd@gmail.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:+8801710035629">
                                            <i className="fal fa-phone" /> +(880) 1710 035629
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://maps.app.goo.gl/2vxz2EW5t8NhXqgDA" target='_blank' referrerPolicy='no-referrer'>
                                            <i className="fal fa-map-marker-alt" /> Plot No. 7887, M.R. College Road, Panchagarh, Bangladesh.
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-copyright d-flex align-items-center justify-content-between pt-35">
                                <div className="apps-download-btn">
                                    Made with <RiHeartLine /> by Tarek Mia
                                    &nbsp;<a href="https://tarekmia.com" target='_blank'><PepiconsPencilOpen /></a>
                                </div>
                                <div className="copyright-text">
                                    <p>Copyright © 2023 Himalaya Brokers Ltd. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default FooterHomeOne;
